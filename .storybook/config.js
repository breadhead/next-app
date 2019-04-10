import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)

import '../src/ui/config.css'

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
