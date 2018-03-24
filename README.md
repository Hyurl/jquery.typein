# jquery.typein

**A JQuery plugin that displays typing effect of an HTMLElement.**

## Install

```sh
npm install jquery.typein --save
```

## Import

### HTML

```html
<script src="jquery.js"></script>
<script src="jquery.typein.js"></script>
```

### CommonJS/Webpack

```javascript
const $ = require("jquery");
require("jquery.typein");
```

## Example

```javascript
$("#pre1").typeIn();

$("#pre2").typeIn("fast", ($this) => {
    $this.css("color", "red");
});

$("#pre3").typeIn(100, "|", ($this) => { // cousor: |
    // ...
});
```

## API

- `$.fn.typeIn(speed?: string | number, callback?: ($this: JQuery<HTMLElement>) => void): JQuery<HTMLElement>`
- `$.fn.typeIn(speed?: string | number, cursor?: string, callback?: ($this: JQuery<HTMLElement>) => void): JQuery<HTMLElement>`