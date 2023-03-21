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
            now: '上午 (10:00 - 12:00)',
            ops: [
                { txt: '上午 (10:00 - 12:00)', v: '上午 (10:00 - 12:00)' },
                { txt: '中午 (10:00 - 12:00)', v: '中午 (10:00 - 12:00)' },
                { txt: '下午 (15:00 - 18:00)', v: '下午 (15:00 - 18:00)' },
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : '上午 (10:00 - 12:00)' },
    watch: {
        now(n, o) {
            this.$emit('resuit', n)
        }
    }
}
</script>

<style>

</style>