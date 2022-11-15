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
                { txt: '今天', v: 1 },
                { txt: '6:00 - 11:00', v: 2 },
                { txt: '11:00 - 15:00', v: 3 },
                { txt: '15:00 - 18:00', v: 4 },
                { txt: '18:00 - 20:00', v: 5 },
                { txt: '20:00 - 24:00', v: 6 },
                { txt: '0:00 - 6:00', v: 7 },
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