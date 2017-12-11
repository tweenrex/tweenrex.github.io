<template lang="md">
# TweenRex

Reactive Tweening Engine

<playground>
<textarea slot="js">
    var t1 = TweenRex({
    duration: 1000, 
    subscribe: tweenrex.transform({
        targets: '.wrex', 
        x: [0, -6, 5, -3, 2, 0],
        rotate: [0, -9, 7, -5, 3, 0]
    })
})
t1.play()
</textarea>
</playground>

[View on GitHub](https://github.com/tweenrex/tweenrex/blob/master/README.md)
</template>
