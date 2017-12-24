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
| core | Contains [TweenRex](/tweenrex) for duration based animations and timelines, [TyrannoScrollus](/tyrannoscrollus) for scroll-synced animations, and [TRexObservable](/observasaurus) for reactive animations. |
| debug | Contains debugging tools for visualizing easings and a player control for TweenRex. |
| recurve | Contains all the [easing](/recurve) functions you will ever need! |
| render | Contains [interpolate](/interpolate) for interpolating... basically... anything... and [transform](/transform) for interpolating 2D transform types separately (you can even assign different easing for rotation than scale!)  |
