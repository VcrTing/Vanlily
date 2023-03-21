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
                { txt: '開放', v: 1 },
                { txt: '關閉', v: 2 },
                { txt: '已調配', v: 2 }
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