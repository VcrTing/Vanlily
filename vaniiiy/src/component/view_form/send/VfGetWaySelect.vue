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
                { txt: 'GOGOVAN', v: 1 },
                { txt: '自取', v: 2 }
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