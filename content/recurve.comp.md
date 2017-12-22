# Recurve

A set of easing functions and preset meant to make your animations (and dinosaurs) come to life!

## Getting Started

Install the ```@tweenrex/recurve``` package and import one of the easing functions.

```js
import { cubicBezier } from '@tweenrex/recurve'
```

## Usage

```javascript
const tween = TweenRex({
    duration: 1000,
    subscribe: tweenrex.transform({
        targets: '.wrex',
        easing: tweenrex.easing.cubicBezier(0.5, 0, 0.5, 1),
        x: [-200, 0]
    })
})

tween.play()
```

### back

Contains an in, out, and inOut function:

```js
easing.back.in
easing.back.out
easing.back.inOut
```

To specify a custom back amount, call back with it:

```js
easing.back(1.5).in
easing.back(1.5).out
easing.back(1.5).inOut
```

### bounce

Contains an in, out, and inOut function:

```js
easing.bounce.in
easing.bounce.out
easing.bounce.inOut
```

### circ

Contains an in, out, and inOut function:

```js
easing.circ.in
easing.circ.out
easing.circ.inOut
```

### cubic

An preset for ```power(3)```.  It returns the value passed to it to the power of 3.
It contains an in, out, and inOut function:

```js
easing.cubic.in
easing.cubic.out
easing.cubic.inOut
```

### cubicBezier

Creates an easing curve from 4 points:

```js
easing.cubicBezier(0.5, 0, 0.5, 1)
```

### divide

Divides the time into equal parts.  Set pingpong to true to alternate direction.  Set an easing to call an easing for each division:

```js
const divideEasing = easing.divide({
    times: 4,
    pingpong: true,
    easing: easing.back.in
})
```

### elastic

Contains an in, out, and inOut function:

```js
easing.elastic.in
easing.elastic.out
easing.elastic.inOut
```

To specify a custom values, pass them to elastic (amplitude: number, period: number, bounces: number)

```js
const amplitude = 1
const period = 0.3
const bounces = 4

easing.elastic(amplitude, period, bounces).inOut
```

### expo

Contains an in, out, and inOut function:

```js
easing.expo.in
easing.expo.out
easing.expo.inOut
```

To specify a custom expo amount, call expo with it:

```js
easing.expo(2).in
easing.expo(2).out
easing.expo(2).inOut
```

### linear

It returns the same value provided to it.  It is most useful as a placeholder.

### mirror

Turns an in function into an out function and vice versa.

```js
const easeBackOut = easing.mirror(easing.back.in)
```

### pingpong

Splits the number into repeated sections that alternate.

### power

Creates an easing function to the power of ```n```

```js
easing.power(6)
```

### quad

A preset for ```power(2)```.  It returns the value passed to it to the power of 2.
It contains an in, out, and inOut function:

```js
easing.quad.in
easing.quad.out
easing.quad.inOut
```

### quart

A preset for ```power(4)```.  It returns the value passed to it to the power of 4.
It contains an in, out, and inOut function:

```js
easing.quart.in
easing.quart.out
easing.quart.inOut
```

### quint

A preset for ```power(5)```.  It returns the value passed to it to the power of 5.
It contains an in, out, and inOut function:

```js
easing.quint.in
easing.quint.out
easing.quint.inOut
```

### recurve

Returns an in, out, and inOut function based on an ease in function:

```js
// returns a quart in, out, and inOut function
const ease = easing.recurve(o => Math.pow(o, 4))

ease.in
ease.out
ease.inOut
```

### repeat

Splits the number into repeated sections that repeat.

### sine

Contains an in, out, and inOut function:

```js
easing.sine.in
easing.sine.out
easing.sine.inOut
```

### steps

Creates a stepped easing function.  This is identical to the steps() timing function in CSS:

```js
easing.steps(4, 'start')
easing.steps(4, 'end')
```
