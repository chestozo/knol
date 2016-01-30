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

### WAT!

### `number`
```js
console.log(1000000000000000128); // prints 1000000000000000100 via https://clck.ru/9hDF4
```

### `string`
```js
var str = '\x00\x00\x00abc'; // When printed you see 'abc' but str.length is 6! - aka null chars via https://clck.ru/9hDF4
```

#### `obj.constructor`
```js
var Animal = function() { console.log('Animal constructor called'); };
var Cat =    function() { console.log('Cat constructor called'); };

Cat.prototype = new Animal();

var cat = new Cat();
// Animal constructor called
// Cat constructor called

console.log(cat.constructor === Animal); // => true !!!
```

```js
var A = function(val) {
    this.a = val;
};

var B = function(val) {
    this.constructor(val);
    this.b = val * 2;
};

var C = function(val) {
    this.constructor(val);
    this.c = val * 3;
};

B.prototype = new A();
C.prototype = new B();

var b = new B(4);
var c = new C(5);

console.log(b); // {a: 4, b: 8}
console.log(c); // {a: 5, c: 15} - .b is undefined!
```
