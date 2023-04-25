<template>
    <button class="btn-pri_light btn-icon h4_son d-ib" @click="copy">
        <i class="mdi mdi-content-copy" v-if="!iaoding"></i>
        <i class="mdi mdi-check" v-else></i>
    </button>
</template>

<script>
import clipboard from 'clipboard'
export default {
    props: [ 'txt', 'emit' ],
    emits: [ 'tap' ],
    data () {
        return {
            iaoding: false
        }
    },
    methods: {
        copy() {
            return new Promise(rej => {
                if (this.emit) {
                    this.$emit('tap')
                } 
                else {
                    this.ioading = true
                    clipboard.copy(this.txt)
                    setTimeout(e => this.ioading = false, 200)
                }
                rej(0)
            })
        },
    }
}
</script>