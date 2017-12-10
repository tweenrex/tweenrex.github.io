<template lang="md">
# TweenRex

Insert a live playground in the middle of some markdown.

<playground>
var t1 = TweenRex({
    duration: 1000,
    subscribe: tweenrex.transform({
        targets: '.target',
        x: [-200, 0]
    })
})
t1.play()
</playground> 
</template>
