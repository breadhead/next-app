const fs = require('fs');
const util = require('util');
const path = require('path');
const rimraf = require('rimraf');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const readDirPromise = util.promisify(fs.readdir);

/* paths */
const componentsPath = path.join(__dirname, './src/core/primitives/Icon');
const svgSpriteOutPath = path.join(__dirname, './svg-sprite-out/symbol');
const iconsPathIn = path.join(__dirname, './public/static/icons/');

const jsxRegexp = /(\w+)[\:|\-](\w+=)/gi;

/* sprite */
const sprite = readFilePromise(
  path.join(svgSpriteOutPath, '/svg/sprite.symbol.svg'),
)
  .then(file => {
    const jsxString = file
      .toString()
      .replace('<svg', '<svg style={{ display: "none"}} ')
      .replace(/\<symbol\s+fill="none"/g, '<symbol ')
      .replace(/(fill|stroke)=".+?"/g, '')
      .replace(/public--static--/g, '')
      .replace(jsxRegexp, (_, p1, p2) => p1 + capitalize(p2));
    return jsxString;
  })
  .then(jsxString => {
    return writeFilePromise(
      path.join(componentsPath, 'Sprite.tsx'),
      spriteTsxTemplate(jsxString),
    );
  })
  .catch(console.log);

/* icon type */
const iconPrefix = 'icons--';
const iconType = readDirPromise(iconsPathIn)
  .then(files => {
    const prefixedFiles = files.map(file => iconPrefix + file.split('.')[0]);
    return iconTypeTemplate(prefixedFiles);
  })
  .then(iconType =>
    writeFilePromise(path.join(componentsPath, 'IconType.ts'), iconType),
  )
  .catch(console.log);

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/* css file */
const styles = readFilePromise(path.join(svgSpriteOutPath, 'sprite.css'))
  .then(file => file.toString().replace(/public--static--/g, ''))
  .then(file =>
    writeFilePromise(path.join(componentsPath, 'sprite.module.css'), file),
  );

Promise.all([sprite, iconType, styles])
  .then(() => rimraf(path.join(__dirname, './svg-sprite-out'), console.log))
  .catch(console.log);

/* templating */
const spriteTsxTemplate = sprite => `
import React from 'react'

export const Sprite = () => ${sprite}`;

const iconTypeTemplate = iconTypes => `

export type IconType = ${iconTypes.map(iconType => `"${iconType}"`).join(' | ')}
`;
