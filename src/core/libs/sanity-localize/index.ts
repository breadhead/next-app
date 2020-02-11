import { get } from 'lodash-es';

export function sanityLocalize(value, languages) {
  if (Array.isArray(value)) {
    return value.map(v => sanityLocalize(v, languages));
  } else if (typeof value == 'object') {
    if (
      /^locale[A-Z]/.test(value._type) ||
      languages.some(language => get(value, language))
    ) {
      const language = languages.find(lang => value[lang]);
      return value[language];
    }

    return Object.keys(value).reduce((result, key) => {
      result[key] = sanityLocalize(value[key], languages);
      return result;
    }, {});
  }
  return value;
}
