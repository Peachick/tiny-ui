import Basic from './demo/basic.md'
import Blur from './demo/blur.md'
import Container from './demo/container.md'
import Indicator from './demo/indicator.md'
import Size from './demo/size.md'
import State from './demo/state.md'
import Tips from './demo/tips.md'

# Loader

A spinner for displaying loading state of a page or a section.

## Scenario

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## Usage

```jsx
import { Loader } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Container/>
    <Tips/>
    <Indicator/>
  </column>
  <column>
    <Size/>
    <State/>
    <Blur/>
  </column>
</layout>

## API

| Property          | Description                                           | Type                                  | Default   |
| ----------------- | ----------------------------------------------------- | ------------------------------------- | --------- |
| indicator         | customise the spinning indicator                      | ReactNode                             | -         |
| size              | loader size                                           | enum: `sm` &#124; `md` &#124; `lg`    | `md`      |
| loading           | loading status                                        | boolean                               | true      |
| tip               | customize description content when Spin has children  | string                                | -         |
| vertical          | vertical the content                                  | boolean                               | false     |
| blurred           | determine whether blur the loading background         | boolean                               | false     |

