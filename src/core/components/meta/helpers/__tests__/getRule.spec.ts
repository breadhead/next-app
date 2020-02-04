import { getRule } from '../getRule';

const mockRules = [
  '/products/ovoshchi_frukti_zelen_gribi/arbuzi_i_dini',
  '/products/(.*)',
  '/meals/pravilnaya_yeda/(.*)',
  '/products/molochnie_produkti_siri/sousi1/(.*)',
  '/products/molochnie_produkti_siri/tvorog/tvorog$',
  '/products/molochnie_produkti_siri/tvorog/(.*)',
  '/products/molochnie_produkti_siri/tvorog/tvorog',
  '/shops$$$',
  '/shops.*',
  '/$',
];

describe('getRule works ', () => {
  it('works with full match', () => {
    const params = {
      rules: mockRules,
      url: '/products/ovoshchi_frukti_zelen_gribi/arbuzi_i_dini',
    };
    const res = mockRules[0];

    expect(getRule(params)).toBe(res);
  });

  it('works with first part match', () => {
    const params = {
      rules: mockRules,
      url:
        '/products/orekhi_sukhofrukti_spetsii/sukhofrukti/chernosliv_kislosladkii_bk',
    };
    const res = mockRules[1];
    expect(getRule(params)).toBe(res);
  });

  it('works with second part match', () => {
    const params = {
      rules: mockRules,
      url: '/meals/pravilnaya_yeda/khleb1/bananabred',
    };

    const res = mockRules[2];

    expect(getRule(params)).toBe(res);
  });

  it('works with second part match 2', () => {
    const params = {
      rules: mockRules,
      url: '/products/molochnie_produkti_siri/sousi1/pesto_klassicheskii',
    };
    const res = mockRules[3];

    expect(getRule(params)).toBe(res);
  });

  it('works with difficult full match', () => {
    const params = {
      rules: mockRules,
      url: '/products/molochnie_produkti_siri/tvorog/tvorog',
    };

    const res = mockRules[4];

    expect(getRule(params)).toBe(res);
  });

  it('work with difficult third match', () => {
    const params = {
      rules: mockRules,
      url:
        '/products/molochnie_produkti_siri/tvorog/massa_s_izyumom_i_s_vishnei',
    };
    const res = mockRules[5];

    expect(getRule(params)).toBe(res);
  });

  it('works with difficult fourth match', () => {
    const params = {
      rules: mockRules,
      url: '/products/molochnie_produkti_siri/tvorog/tvorog_9',
    };

    const res = mockRules[6];

    expect(getRule(params)).toBe(res);
  });

  it('works for short match', () => {
    const params = {
      rules: mockRules,
      url: '/shops',
    };
    const res = mockRules[7];

    expect(getRule(params)).toBe(res);
  });

  it('works for difficult match with .*', () => {
    const params = {
      rules: mockRules,
      url: '/shops/konfeti',
    };
    const res = mockRules[8];

    expect(getRule(params)).toBe(res);
  });
  it('works for short url', () => {
    const params = {
      rules: mockRules,
      url: '/',
    };
    const res = mockRules[9];

    expect(getRule(params)).toBe(res);
  });

  it('works for short url with ru locale', () => {
    const params = {
      rules: mockRules,
      url: '/ru',
    };
    const res = mockRules[9];

    expect(getRule(params)).toBe(res);
  });
});
