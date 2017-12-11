# TweenRex Documentation Site

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Adding a page

To add a page, simply add a .vue file to the pages directory.  The contents should be wrapped in ```<template lang="md"></template>``` to allow mixing vue components and markdown.  


## Adding a Live Code Example

To embed a live code sample, add 

```html
<playground>
<textarea slot="js">
var t1 = TweenRex({})
</textarea>
</playground>
```

Playground will automatically wire up a live code editor.  The textarea slot="js" will automatically pick up code.  Make sure not to use empty lines (because of how markdown-it converts the contents).  If spacing is needed, simply add a commment on that line to break it up.


## Pull Requests

Please only make PRs on the source branch.  All PRs on the master branch will be rejected.  The master branch contains the rendered version of this repo.  The source contains the actual source files used by Nuxt to statically generate the site.
