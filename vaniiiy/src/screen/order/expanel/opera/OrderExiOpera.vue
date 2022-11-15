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
    props: [ 'one' ],
    data() { return { opera: [ ] } },
    mounted() {
        this.opera = [
            {
                txt: '修改', icon: 'mdi mdi-keyboard',
                func: () => {
                    this.$parent.create_or_edit()
                }
            },
            {
                txt: '返回', icon: 'mdi mdi-skip-backward-outline',
                func: () => {

                }
            },
            {
                txt: '申請延遲發貨', icon: 'mdi mdi-send-clock-outline',
                func: () => {
                    this.pina().modai(30)
                }
            },
            {
                txt: '新增付款記錄', icon: 'mdi mdi-credit-card-settings-outline',
                func: () => {
                    this.pina().modai(31)
                }
            },
        ]
    }
}
</script>