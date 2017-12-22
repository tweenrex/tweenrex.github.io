# transform()

A helper function that makes it easy to use rotate, translate, and scale independent of one another.  It is built to work seamlessly with [TyrannoScrollus](/tyrannoscrollus)  and [TweenRex](/tweenrex).

## Getting Started

Install the ```@tweenrex/render``` package and import the ```transform``` function.

```js
import { transform } from '@tweenrex/render'
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

## Options

Name | Type | Description |
--- | --- | --- |
targets | string, {}, [] | Target(s) of the animation.  This can be an object of any type or an array of various objects. If a string is supplied, it will be used as a DOM selector and the resolved Elements will become the targets of the tween. |
easing | (offset): number | An easing function to be applied to all transform types. |
| x | (see below) | Translates on the x axis (moves left and right) |
| y | (see below) | Translates on the y axis (moves up and down) |
| rotate | (see below) | Rotates on the z axis (turns around) |
| scale | (see below) | Sets scaleX and scaleY at the same time |
| scaleX | (see below) | Shrinks/enlargens the x axis (left to right) |
| scaleY | (see below) | Shrinks/enlargens the y axis (up to down) |

The transform properties can be specified as a number (a pixel/scale/degree destination value), an array of values (keyframes), or can use a property object (see Transform Property Options below) to configure the values and a transform specific easing!

### Transform Property Options

Name | Type | Description |
--- | --- | --- |
value| number, number[] | Value(s) to use for the transform.  Must be |
easing | (offset): number | An optional easing function to be applied to this transform aspect |
