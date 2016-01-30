### Hacks

```js
~~20.2324;                                  // Analog for Math.floor(); => 20
x | x;                                      // Another way to get Math.floor(x);
x & x;                                      // Another way to get Math.floor(x);
([ 1, [ 2, [ 3 ], 4 ] ]).join().split(','); // This is how you can make a plain array out of an array with nested arrays
odd >> 1 << 1;                              // This is how you can get a closest number divisible by 2; => even
x === +x;                                   // Check whether x is a number.
void anything;                              // => undefined
Array(5).join('x')                          // Cool way to create a string "xxxxx". via https://clck.ru/9hDF4
("00000000" + num).substr(-length);         // If you need to prefix number with zeros. via https://clck.ru/9hDF4
```

## WAT!

### `obj.constructor`
```js
var Animal = function() { console.log('Animal constructor called'); };
var Cat =    function() { console.log('Cat constructor called'); };

Cat.prototype = new Animal();

var cat = new Cat();
// Animal constructor called
// Cat constructor called

console.log(cat.constructor === Animal); // => true !!!
```
