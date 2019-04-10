import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { ButtonKind } from '../ButtonKind'
import { ButtonSize } from '../ButtonSize'

const props = {
  onClick: action('button clicked'),
}

storiesOf('Button', module)
  .add('Primary', () => (
    <>
      <Button size={ButtonSize.ExtraLarge} {...props}>
        Огромная кнопка
      </Button>
      <Button size={ButtonSize.Large} {...props}>
        Большая кнопка
      </Button>
      <Button {...props}>Средняя кнопка</Button>
      <Button size={ButtonSize.Small} {...props}>
        Маленькая кнопка
      </Button>
    </>
  ))
  .add('Secondary', () => (
    <>
      <Button
        size={ButtonSize.ExtraLarge}
        kind={ButtonKind.Secondary}
        {...props}
      >
        Огромная кнопка
      </Button>
      <Button size={ButtonSize.Large} kind={ButtonKind.Secondary} {...props}>
        Большая кнопка
      </Button>
      <Button kind={ButtonKind.Secondary} {...props}>
        Средняя кнопка
      </Button>
      <Button size={ButtonSize.Small} kind={ButtonKind.Secondary} {...props}>
        Маленькая кнопка
      </Button>
    </>
  ))
  .add('Extra', () => (
    <>
      <Button size={ButtonSize.ExtraLarge} kind={ButtonKind.Extra} {...props}>
        Огромная кнопка
      </Button>
      <Button size={ButtonSize.Large} kind={ButtonKind.Extra} {...props}>
        Большая кнопка
      </Button>
      <Button kind={ButtonKind.Extra} {...props}>
        Средняя кнопка
      </Button>
      <Button size={ButtonSize.Small} kind={ButtonKind.Extra} {...props}>
        Маленькая кнопка
      </Button>
    </>
  ))

storiesOf('Button/States', module).add('Disabled', () => (
  <>
    <Button disabled>Выключенная кнопка</Button>
    <Button disabled kind={ButtonKind.Secondary}>
      Выключенная кнопка
    </Button>
    <Button disabled kind={ButtonKind.Extra}>
      Выключенная кнопка
    </Button>
  </>
))
