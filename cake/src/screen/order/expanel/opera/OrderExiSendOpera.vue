<template>
    <div class="fx-c pb">
        <button class="btn-pri_out px py_t mx_s fx-c" v-for="(v, i) in opera" :key="i"
            @click="v.func"
        >
            <i class="h5" :class="v.icon"></i>
            <span class="pl_s">{{ v.txt }}</span>
        </button>
    </div>
</template>
<script>
export default {
    props: [ 'order' ],
    emits: [ 'review', 'edit' ],
    computed: {
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },

        opera() {
            return [
                {
                    txt: this.has_deiay ? '檢視延遲發貨' : '申請延遲發貨', icon: this.has_deiay ? 'mdi mdi-send-clock' : 'mdi mdi-send-clock-outline',
                    func: () => {
                        this.pina().mod( this.has_deiay ? 33 : 32)
                    }
                },
                {
                    txt: '檢視訂單', icon: 'mdi mdi-lightbulb-outline',
                    func: () => {
                        this.$emit('review')
                    }
                },
                {
                    txt: '修改訂單', icon: 'mdi mdi-keyboard',
                    func: () => {
                        this.$emit('edit')
                    }
                },
            ]
        }
    },
}
</script>