<template>
  <nuxtent-body :body="post.body" />
</template>

<script>
export default {
    asyncData: async ({ app, route, payload }) => ({
        post: (await app.$content('/').get(route.path)) || payload
    })
}
</script>
