<template>
    <span v-if="now" @click="tap" class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span>
    <span v-else @click="tap" class="_checkbox hand"></span>
</template>

<script>
export default {
    props: {
        txt: String,
        def: Boolean
    },
    mounted() {
        this.now = this.def ? this.def : false
    },
    data() {
        return {
            now: false
        }
    },
    emits: [ 'change' ],
    methods: {
        tap() {
            this.now = !this.now
            this.$emit('change', this.now)
        }
    }
}
</script>

<style lang="sass" scoped>
span
    transition: all .242s ease-in-out
._checkbox
    margin: 0px !important
    font-size: 1em 
    line-height: 1em
    min-width: 1.5em
    min-height: 1.5em
    transform: scale(1.05)
</style>