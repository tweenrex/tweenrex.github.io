---
title: Compatibility - TweenRex
---
# Compatibility

The goal of TweenRex is to provide a lightweight, piecewise solution to animation.  To keep the library small, the expected browser compatiblity is the last two versions of modern browsers (because they have auto-updating mechanisms) and Internet Explorer 11. With that in mind, we are open to fixing issues with legacy browsers as long as it meets these threw criteria:

- It must not add a significant amount of code
- It must not make the system perceivably slower or less efficient
- It cannot be a problem solved by using polyfill/shim

## Compatibility with Other Libraries...

TweenRex aims to provide a complete animation solution, but each package is built to work interchangeably with other animation libraries.   Here are some libraries that match up with TweenRex very well.

| Name                                                       | Type   | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Flubber](https://github.com/veltman/flubber)              | SVG Morph  | Morph SVG with this heavy-weight library. This library does a great job of morphing between very different shapes at runtime. It cannot handle holes in SVG, but it has a large arsenal of helper functions. It is about 53 KB minified. This is a good choice when smoothness of animation trumps all other needs. |
| [Path.js](https://github.com/SamKnows/path.js)             | SVG Morph  | Simple SVG morphing library that can tween between two paths with matching SVG commands and the same number of segments. It is about 4KB minified. This library is a good choice when the SVG's are highly optimized for one another.                                                                               |
| [Polymorph](https://github.com/notoriousb1t/polymorph)     | SVG Morph   | Morph SVG Paths with this lightweight library. It can support variable length paths in addition to handling holes in SVGs. It is just under 6KB minified. It is a good all around choice for performant morphs of highly variable complex paths.                                                                    |
[Lengthy](https://github.com/shshaw/lengthy-svg) | SVG Draw | Lengthy is a JavaScript microlibrary (1.1kb min, 0.6kb gzipped) to get the length of SVG shapes. The length will automatically be added to the element as a CSS Var to make it easy to do CSS animations of SVG stroke-dashoffset for the wonderful line drawing SVG technique and other interesting animations. |
| [d3-interpolate](https://github.com/d3/d3-interpolate) | Interpolation | Provides a variety of interpolation methods for blending between two values. Values may be numbers, colors, strings, arrays, or even deeply-nested objects. This could easily be used with TweenRex and TyrannoScrollus |
| [nm8](https://github.com/davidkpiano/nm8) | Tweening | This super small tweening library fits in a tweet! This library is compatible with the render package. If you prefer low-level, this is as low as you can get. | 
