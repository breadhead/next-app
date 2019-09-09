import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import { Clock } from './index';

describe('clock ui', () => {
  test('Button renders correctly', () => {
    const output = shallow(<Clock lastUpdate={12} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
