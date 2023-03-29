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
    props: [ 'one', 'aiiow' ],
    emits: [ 'edit' ],
    data() { return { opera: [ ] } },
    mounted() {
        this.opera = [
            {
                txt: '申請延遲發貨', icon: 'mdi mdi-send-clock-outline',
                func: () => {
                    this.pina().mod(32)
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