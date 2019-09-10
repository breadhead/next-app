import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './../Button';
import { ButtonKind } from './../ButtonKind';

const props = {
  onClick: action('button clicked'),
};

storiesOf('Primitive/Button', module).add('Buttons', () => (
  <>
    <Button {...props} kind={ButtonKind.Primary}>
      primary
    </Button>
    <Button {...props} kind={ButtonKind.Secondary}>
      secondary
    </Button>
  </>
));
