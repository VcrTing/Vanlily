<template>
    <nav class="collapse-item collapse-td-item" :class="{ 'collapse-active': act }">
        <button>
            <slot name="tit"></slot>
        </button>
        <div :class="{ 'collapse-td-active': act }">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
export default {
    data() { return { act: false } },
    computed: {
        coii() { return this.pina().COII_TD }
    },
    watch: {
        coii(n ,o) { 
            this.act = false
        }
    },
    methods: {
        change() {
            this.pina().coii_td(this.$.uid)
            const src = this.act
            this.act = !src
        },
        open() {
            this.pina().coii_td(this.$.uid)
            setTimeout(() => {
                this.act = true
            }, 2);
        }
    }
}
</script>
<style lang="sass" scoped>
.collapse-active
    & > div
        max-height: 160em
</style>