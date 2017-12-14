# TRexObservable

A simple observable and the base class for [TweenRex](./TweenRex.md) and [TyrannoScrollus](./TyrannoScrollus.md).  This is the best choice for animation when the animation greatly varies based on user input such as following mousement. For time-based animation use TweenRex.  For scroll-synced animations, use TyrannoScrollus.

## Getting Started

Install the ```@tweenrex/core``` package and import the ```TRexObservable``` function.  

```js
import { TRexObservable } from '@tweenrex/core'
```

Alternatively, add the tweenrex.min.js script and access TRexObservable from window.

```js
const { TRexObservable } = window
```

## Usage

Writing your typical foo-bar example

```javascript:text-template
var target = document.querySelector('.wrex')
target.innerHTML = ''

var obs = TRexObservable({
    // publish all values, even if repeated
    distinct: false,
    subscribe: function(o) {
        target.innerHTML += o + ' ';
    }
})
// loop through foo bar stuff
for (var i = 1; i < 10; i++) {
    if (i % 2) {
        // foo for multiples of 2
        obs.next('foo')
    }
    if (i % 3) {
        // bar for multiples of 3
        obs.next('bar')
    }
}
```

Listening to events

```javascript:text-template
var target = document.querySelector('.wrex')
var observable = TRexObservable({
    subscribe: function(evt) {
        target.innerHTML = 'x: ' +evt.clientX + ' y:' + evt.clientY
    }
})

// jQuery events
// $('body').on('mousemove', observable.next)

// native DOM event listener
document.body.addEventListener('mousemove', observable.next)
```

### Options

Name | Description |
--- | --- |
distinct | When true, subsequent values will be ignored if they are the same as the previous value.  The default is true. |
onDispose| Triggered by calling dispose() |
onNext| Triggered by calling next() |
onSubscribe| Triggered by calling subscribe() |
onUnsubscribe| Triggered by unsubscribing |
subscribe | Subscribes to changes in the value. |

## Observable Functions

### ```dispose()```

Removes all subscriptions and resets the internal state.

### ```next(value)```

Passes the next value to be observed

### ```subscribe(observer | observer[])```

Subscribes the observer to changes in the value.  This can be any value including strings and full objects.

You can pass in an array of functions or a single function.  If there isn't a need to remove subscriptions, you can specify a subscribe property like the examples above.

### ```value()```

Returns the last value observed
