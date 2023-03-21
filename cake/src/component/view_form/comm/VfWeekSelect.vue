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
            now: 1,
            ops: [
                { txt: '星期一', v: 1 },
                { txt: '星期二', v: 2 },
                { txt: '星期三', v: 3 },
                { txt: '星期四', v: 4 },
                { txt: '星期五', v: 5 },
                { txt: '星期六', v: 6 },
                { txt: '星期日', v: 7 },
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    watch: {
        now(n, o) {
            console.log('選入')
        }
    }
}
</script>

<style>

</style>