
# konami.js

  A very small and simple konami code implementation

## Installation

  Just copy it into your html/javascript. It doesn't need to be more
  complicated than that. [Look how small this is](./konami.js).

## Usage

```js
konami(function() {
  alert("hello, konami code")
})

// optionally change the code
var xyzzy = [].map.call("xyzzy", function(c){ return c.charCodeAt(0) - 32; })

konami(function() {
  alert("hello, xyzzy")
}, xyzzy)
```
