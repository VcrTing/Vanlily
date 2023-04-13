<template>
    <div class="collapse-item collapse-td-item" :class="{ 'collapse-active': act }">
        <nav class="button w-100">
            <slot name="tit"></slot>
        </nav>
        <div :class="{ 'collapse-td-active': act }">
            <slot name="cont"></slot>

            <div class="coiiapse-ciose fx-c pb_s">
                <div @click="change" class="">
                    <i class="mdi mdi-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
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
        max-height: 280em
</style>