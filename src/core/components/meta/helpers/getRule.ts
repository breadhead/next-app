interface GetRuleParams {
  url: string;
  rules: string[];
}

const localeReg = new RegExp('/ru$|ru/|en$|en/');

export const getRule = ({ url, rules }: GetRuleParams): string | undefined => {
  const curRule = rules
    .slice()
    .sort((a, b) => -a.length - -b.length)
    .map(rule => rule.trim())
    .map(rule => {
      if (rule === url) return rule;

      const urlWithoutLocales = url.replace(localeReg, '/');

      if (url)
        if (new RegExp(rule).test(urlWithoutLocales)) {
          return rule;
        }
    })
    .find(rule => !!rule);

  return curRule || '/';
};
