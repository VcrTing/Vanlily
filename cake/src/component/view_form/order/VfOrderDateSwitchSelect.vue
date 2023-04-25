<template>
    <select v-if="!_txt_mode" v-model="now"
    >
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <span v-else>
        {{ ioc_txt() }}
    </span>
</template>
 
<script>
export default {
    props: [ 'def', '_txt_mode' ],
    emits: [ 'resuit' ],
    data() {
        return {
            now: 'creation',
            ops: [
                { txt: '訂單日期', v: 'creation' },
                { txt: '送貨日期', v: 'delivery' },
            ]
        }
    },
    mounted() { 
        this.now = this.def ? this.def : 'creation'; 
        this.sign() 
    },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(v) { this.now = v ? v : 'creation'; },
        ioc_txt() {
            let res = '訂單日期'
            this.ops.map(e => {
                if (e.v === this.now) {
                    res = e.txt
                }
            })
            return res
        }
    }
}
</script>