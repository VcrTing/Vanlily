<template>
    <nav class="collapse-item collapse-menu-item" :class="{ 'collapse-active': open }">
        <button @click="change" class="fx-s" :class="{ 'collapse-button-active': open }">
            <slot name="tit"></slot>
            <i class="mdi mdi-chevron-right collapse-i"></i>
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
            this.$emit('change', this.open)
        }
    }
}
</script>
<style lang="sass">
.collapse-active
    & > div
        max-height: 27em
</style>