# Setup

TweenRex offers two paths to getting setup. While the preferred path is using NPM/Yarn, there are situations where you do not need a build system. (or perhaps just do not want one)  In addition to NPM, there are also pre-built scripts by package, and an "all" script intended for code playgrounds like CodePen.  (You can also start using it right now by using this nifty [CodePen template](https://codepen.io/pen?template=BmbOOW))

## Setup through NPM

Install one or more of the following packages by running this command: `npm i @tweenrex/{package} -S`

| Package          | Status                                                                                                          | Description                                                                                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| core   | [![Build Status](https://travis-ci.org/tweenrex/render.svg?branch=master)](https://travis-ci.org/tweenrex/core) | This package contains [TweenRex](/tweenrex), [TyrannoScrollus](/tyrannoscrollus), and [TRexObservable](/observasaurus). It contains all you need for animation at minimum.     |
| recurve | [![Build Status](https://travis-ci.org/tweenrex/recurve.svg?branch=master)](https://travis-ci.org/tweenrex/recurve) | This package contains all the easings functions you could ever need! It contains steps(), cubicBezier(), all Penner easings, and even more advanced easings like pingpong and repeat! |
| render | [![Build Status](https://travis-ci.org/tweenrex/render.svg?branch=master)](https://travis-ci.org/tweenrex/render) | This package contains [interpolate](/interpolate) and other rendering functions like  [transform](/transform). This package is intended to help reduce boilerplate code and streamline development while creating typical animations. |

## Setup with Prebuilt scripts

Include one or more of these scripts

| File | Size | Description |
| ---- | ---- | ----------- |
| <a target="_blank" href="https://unpkg.com/tweenrex/dist/tweenrex.min.js">tweenrex</a> | [![Github file size](https://img.shields.io/github/size/tweenrex/tweenrex/dist/tweenrex.min.js.svg)]() | This script adds TweenRex, TyrannoScrollus, and TRexObservable to the global window variable. This the a pre-bundled version of @tweenrex/core. |
| <a target="_blank" href="https://unpkg.com/tweenrex/dist/tweenrex-recurve.min.js">tweenrex-recurve</a>| [![Github file size](https://img.shields.io/github/size/tweenrex/tweenrex/dist/tweenrex-recurve.min.js.svg)]() | This script adds easing to the `tweenrex` global window variable. This is a pre-bundled version of @tweenrex/recurve.                       |
| <a target="_blank" href="https://unpkg.com/tweenrex/dist/tweenrex-render.min.js">tweenrex-render</a> | [![Github file size](https://img.shields.io/github/size/tweenrex/tweenrex/dist/tweenrex-render.min.js.svg)]() | This script adds interpolate and transform to the `tweenrex` global window variable. This is a pre-bundled version of @tweenrex/render.                       |
| <a target="_blank" href="https://unpkg.com/tweenrex/dist/tweenrex-all.min.js">tweenrex-all</a> | [![Github file size](https://img.shields.io/github/size/tweenrex/tweenrex/dist/tweenrex-all.min.js.svg)]() | This script is a combination of all other scripts except debug. This is meant primarily for code playgrounds like [CodePen](https://codepen.io/).            |
