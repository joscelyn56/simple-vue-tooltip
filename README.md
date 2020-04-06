# Simple Vue Tooltip

Instantly add tooltips to your existing vue html elements

## Setup
Install using npm
```
npm i simple-vue-tooltip
```

import into Vue application
```
import Vue from 'vue'
import Tooltip from 'simple-vue-tooltip';
```

Add module to Vue
```
Vue.use(Tooltip);
```

## Usage
Insert into html element using vue directive e.g button
```html
<button
  v-tooltip="{
    tip:'This is a clickable button',
    position: 'bottom'
  }"
  ...
>
  Click Me
</button>
```

The v-tooltip directive accepts an object containing 2 properties:
* tip: a custom message to display
* position: this specifies the position to display tip relative to the containing element

**Below are the list of positions currently available**
* bottom: this aligns the tooltip to bottom center of element
* bottom-left: this aligns the tooltip to bottom left of element
* bottom-right: this aligns the tooltip to bottom right of element

