# TweenRex

TweenRex is a set of modular reactive animation libraries that are built to fit together nicely. The objective of this project is to provide low-level parts that build up to easy to use higher level parts, so a developer or designer can build something that "just works" or have as much control as they desire.  Check out our [Examples / Demos](/examples) or keep on scrolling to get started!

## Features

* Tweening with playback controls: play, pause, reverse, playbackRate, seek, labels, etc.
* Animate anything with render functions
* Scroll sync any element to an animation, not just the documentElement
* Simple Reactive API with no strings attached
* Each package is super tiny with plans to stay that way
* Free for commercial and non-commerical use under the MIT license
* You get to type dinosaur names while doing super-serious work!

## Packages

| Name                                            | Description                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TweenRex](/tweenrex)               | Animate over time with complex choregraphy. Includes sub-tweens, full replay controls, seeking, and playback rate controls.                              |
| [TyrannoScrollus](/tyrannoscrollus) | Sync animations to horizontal or vertical scroll position of elements                                                                                    |
| [TRexObservable](/observasaurus)   | General Observable for reacting to values over time. BehaviorSubject in RxJs is a close approximation. This is the base class for other types of tweens. |

## Recommended Helper Libraries

TweenRex handles timing and dealing with values over time, but is built to work with other libraries. Here are some recommended helper libraries that match up with TweenRex very well.

| Name                                                       | Type   | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Flubber](https://github.com/veltman/flubber)              | SVG    | Morph SVG with this heavy-weight library. This library does a great job of morphing between very different shapes at runtime. It cannot handle holes in SVG, but it has a large arsenal of helper functions. It is about 53 KB minified. This is a good choice when smoothness of animation trumps all other needs. |
| [Path.js](https://github.com/SamKnows/path.js)             | SVG    | Simple SVG morphing library that can tween between two paths with matching SVG commands and the same number of segments. It is about 4KB minified. This library is a good choice when the SVG's are highly optimized for one another.                                                                               |
| [Polymorph](https://github.com/notoriousb1t/polymorph)     | SVG    | Morph SVG Paths with this lightweight library. It can support variable length paths in addition to handling holes in SVGs. It is just under 6KB minified. It is a good all around choice for performant morphs of highly variable complex paths.                                                                    |
| [nm8](https://github.com/davidkpiano/nm8) | Tweening | This super small tweening library fits in a tweet! This library is compatible with the render package. If you prefer low-level, this is as low as you can get. |
