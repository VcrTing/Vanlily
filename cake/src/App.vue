<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './Layout.vue'

export default {
    components: { Layout },
    data() {
        return { shimmer: true, }
    },
    mounted() { this.init() },
    methods: {
        async init() {

        }
    },
    beforeDestroy() { },
}
</script>

<style lang="sass">
@import "./front/base"
</style>