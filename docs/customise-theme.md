# Customise Theme

Tiny UI uses BEM-styled SCSS which allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

## Less variables
We are using [SASS](https://sass-lang.com/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.
There are some major variables below, all less variables could be found in [Default Variables](https://github.com/wangdicoder/tiny-ui/blob/master/components/style/_variables.scss).

```css
// Color
$primary-color: #6E41BF                       !default;

// Font
$font-color: $body-color                      !default;
$font-path: 'fonts'                           !default;
$font-size-base: 1rem                         !default;
$font-size-lg: $font-size-base * 1.25         !default;
$font-size-sm: $font-size-base * .875         !default;
$font-weight: 400                             !default;

// Border
$border-radius: 2px                           !default;
$border-width: 1px                            !default;
$border-color: $gray-300                      !default;
...
```

Please report an issue if the existing list of variables is not enough for you.

**What's !default?**
> Every Sass variable in Tiny UI includes the **!default** flag allowing you to override the variable’s default value in your own Sass without modifying the source code. Copy and paste variables as needed, modify their values, and remove the **!default** flag.

## How to do it - Update SCSS variables in your project

### 1. Install Sass

```bash
$ npm install node-sass --save-dev
```

### 2. Override the variables

Create a new style file, e.g. `theme-variables.scss`.

**The variable order is very important. Import the default variable code must be placed in the last line.**

```css
/** Your variable overrides */
$primary-color: #007bff;
...

/** Icon font path, required */
$font-path: '~tiny-ui/themes/fonts';

/** Default variables */
@import "~tiny-ui/themes/index.scss";
```

### 3. Import theme file

In the entry file of your project, import this style file.

```js
import React from 'react';
import ReactDOM from 'react-dom';

/** insert here */
import './theme-variables.scss';
import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Note: This way will load the styles of all components, regardless of your demand, which cause style option of `babel-plugin-import` not working.
