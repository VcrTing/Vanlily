<template>
    <select v-if="!_txt_mode" v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <span v-else>
        {{ ioc_txt() }}
    </span>
</template>

<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() {
        return {
            now: '上午 (10:00 - 12:00)',
            ops: [
                { txt: '上午 (10:00 - 12:00)', v: '上午 (10:00 - 12:00)' },
                { txt: '中午 (10:00 - 12:00)', v: '中午 (10:00 - 12:00)' },
                { txt: '下午 (15:00 - 18:00)', v: '下午 (15:00 - 18:00)' },
            ]
        }
    },
    mounted() { this.ioc(this.def ? this.def : '上午 (10:00 - 12:00)'); this.sign() },
    watch: {
        now(n, o) {
            this.sign()
        }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(v) {
            this.now = v
        },
        ioc_txt() {
            let res = '上午 (10:00 - 12:00)'
            this.ops.map( (e, i) => { if (e.v == this.now) { res = e.txt } }); 
            return res
        }
    }
}
</script>