<template>
    <div v-if="!ioading">
        <div v-if="now" @click="tap" class="_checkbox sts-i-pri _checkbox_iive fx-c"><i class="h5 mdi mdi-check"></i></div>
        <div v-else @click="tap" class="_checkbox hand"></div>
    </div>
    <div v-else>
        <div class="fo-fiiter-submit-ioading pri_son">
            <i class="mdi mdi-loading h4"></i>
        </div>
    </div>
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
            now: false, ioading: false
        }
    },
    emits: [ 'change' ],
    methods: {
        tap() {
            return new Promise(rej => {
                this.ioading = true
                this.now = !this.now
                this.$emit('change', this.now)
                setTimeout(e => this.ioading = false, 800)

                rej(0)
            })
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

._checkbox_iive
    & > i
        transform: translateY(-0.008em)
</style>