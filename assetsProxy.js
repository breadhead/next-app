const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const root = path.resolve(__dirname, 'public', 'content');

module.exports = function(req, res) {
  const filepath = path.resolve(root, req.params[0]);

  if (fs.existsSync(filepath)) {
    return res.sendFile(filepath);
  }

  const [urlQuery, ...urlPath] = req.params[0].split('/');
  const apiUrl = `https://cdn.sanity.io/${urlPath.join('/')}?${urlQuery}`;

  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  const fileStream = fs.createWriteStream(filepath);

  return fetch(apiUrl)
    .then(
      image =>
        new Promise((resolve, reject) => {
          image.body.pipe(fileStream);
          image.body.on('end', () => res.sendFile(filepath));
          fileStream.on('error', reject);
        }),
    )
    .catch(e => res.status(500) && res.end(e));
};
