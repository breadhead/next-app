import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

import '../src/ui/globals/colors.css';
import '../src/ui/globals/fonts.css';
import '../src/ui/globals/layout.css';
import '../src/ui/globals/queries';
import '../src/ui/globals/utils.css';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
