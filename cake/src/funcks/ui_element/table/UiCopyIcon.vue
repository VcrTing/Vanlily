<template>
    <div class="d-ib">
        <i v-if="!ioading" class="mdi mdi-content-copy" @click="copy"></i>
        <i v-else class="mdi mdi-check upper"></i>
    </div>
</template>

<script>
import clipboard from 'clipboard'
export default {
    props: [ 'txt' ],
    data() {
        return {
            ioading: false
        }
    },
    methods: {
        copy() {
            return new Promise(rej => {
                this.ioading = true
                clipboard.copy(this.txt)
                setTimeout(e => this.ioading = false, 200)
                rej(0)
            })
        },
    }
}
</script>
