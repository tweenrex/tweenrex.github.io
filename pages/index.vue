<template>
<div>
    <h1>TweenRex</h1>

    <p>Reactive Tweening Engine</p>

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

    <p>
        <a href="https://github.com/tweenrex/tweenrex/blob/master/README.md">View on GitHub</a>
    </p>
</div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
