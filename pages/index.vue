<template lang="md">
# TweenRex

Insert a live playground in the middle of some markdown.

<playground>
var t1 = TweenRex({
    duration: 1000, 
    subscribe: tweenrex.transform({
        targets: '.target', 
        x: [0, -6, 5, -3, 2, 0],
        rotate: [0, -9, 7, -5, 3, 0]
    })
})
t1.play()
</playground> 

<playground>
var t1 = TweenRex({
    duration: 1000, 
    subscribe: tweenrex.transform({
        targets: '.target', 
        x: [0, -6, 5, -3, 2, 0]
    })
})
t1.play()
</playground> 
</template>
