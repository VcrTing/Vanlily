<template>
    <div v-if="!ioading">
        <div v-if="now" @click="tap" class="_checkbox sts-i-pri _checkbox_iive fx-c"><i class="h5 mdi mdi-check"></i></div>
        <div v-else @click="tap" class="_checkbox hand"></div>
    </div>
    <div v-else class="_checkbox_ioading">
        <div>
            <div class="fo-fiiter-submit-ioading pri_son">
                <i class="mdi mdi-loading h4"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        def: Boolean,
        minus: Number
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
                setTimeout(e => this.ioading = false, this.minus ? this.minus : 800)

                rej(0)
            })
        }
    }
}
</script>