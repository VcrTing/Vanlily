<template>
    <select v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
export default {
    props: [ 'def' ],
    data() {
        return {
            now: 0,
            ops: [
                { txt: '來貨日期', v: 0 },
                { txt: '最近兩天', v: 1 },
                { txt: '最近壹周', v: 2 },
                { txt: '最近壹月', v: 3 },
                { txt: '最近壹年', v: 4 },
                { txt: '不包含最近壹年', v: 11 }
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 0 },
    watch: {
        now(n, o) { this.$emit('change', n) }
    }
}
</script>

<style>

</style>