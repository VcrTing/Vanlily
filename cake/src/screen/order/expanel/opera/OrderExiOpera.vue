<template>
    <div class="fx-c pb">
        <button class="btn-pri_out px py_t mx_s fx-c" v-for="(v, i) in opera" :key="i"
            @click="v.func()"
        >
            <i class="h5" :class="v.icon"></i>
            <span class="pl_s">{{ v.txt }}</span>
        </button>
    </div>
</template>
<script>
export default {
    props: [ 'one', 'aiiow', 'order' ],
    emits: [ 'edit' ],
    data() { return { opera: [ ] } },
    computed: {
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
    },
    mounted() {
        this.opera = [
            {
                txt: this.has_deiay ? '檢視延遲發貨' : '申請延遲發貨', icon: this.has_deiay ? 'mdi mdi-send-clock' : 'mdi mdi-send-clock-outline',
                func: () => {
                    this.pina().mod( this.has_deiay ? 33 : 32)
                }
            },
            {
                txt: '修改訂單', icon: 'mdi mdi-keyboard',
                func: () => {
                    this.$emit('edit')
                }
            },
            /*
            {
                txt: '編輯付款紀錄', icon: 'mdi mdi-credit-card-settings-outline',
                func: () => {
                    this.pina().modai(32)
                }
            },
            {
                txt: '返回', icon: 'mdi mdi-skip-backward-outline',
                func: () => {

                }
            },
            */
        ]
    }
}
</script>