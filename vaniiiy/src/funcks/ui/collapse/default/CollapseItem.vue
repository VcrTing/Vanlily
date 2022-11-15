<template>
    <nav class="collapse-item" :class="{ 'collapse-active': open }">
        <button @click="change">
            <slot name="tit"></slot>
        </button>
        <div>
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
export default {
    data() { return { open: false } },
    methods: {
        change() {
            const src = this.open
            this.$parent.change(false)
            this.open = !src
        }
    }
}
</script>
<style lang="sass">
</style>