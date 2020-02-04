interface GetDataParams {
  meta: { [key: string]: string | number | null } | null;
  content: { [key: string]: string | number | null } | null;
}

export const getData = ({
  content,
  meta,
}: GetDataParams): { [key: string]: string | number | null } | null => {
  // change #values# to real values
  const reg = /#(.*?)#/g;

  if (!content && !meta) return null;

  if (!meta || Object.keys(meta).length === 0) {
    if (Object.keys(content as any).length <= 0) return null;

    return content;
  }

  if (!content || Object.keys(content).length === 0) {
    if (Object.keys(meta).length <= 0) return null;

    const tags = Object.entries(meta).map(([key, val]) => {
      return { [key]: `${val}`.replace(reg, '').trim() };
    });

    return Object.assign({}, ...tags);
  }

  const transformedData = Object.entries(meta)
    .map(([key, val]) => {
      const overlap = `${val}`.match(reg);

      if (!overlap) return { [key]: val };

      let curStr = `${val}`;

      const replacedValues = overlap
        .map(lap => {
          const formattedLap = lap.replace(/#/g, '').toLowerCase();

          return Object.entries(content)
            .map(([contentKey, contentValue]) => {
              if (`${val}`.includes(lap) && formattedLap === contentKey) {
                const stringValue = `${contentValue}`;

                const replacedStr = curStr.replace(lap, stringValue);
                curStr = replacedStr;
                return replacedStr;
              }
            })
            .filter(it => !!it)
            .filter(it => !(it as any).includes('#'))
            .map(it => (it as any).trim());
        })
        .filter(it => it.length > 0);

      const flatted = replacedValues.map(it => it[0])[0];

      return {
        [key]: flatted,
      };
    })
    .filter(it => !!it);

  return Object.assign({}, ...transformedData);
};
