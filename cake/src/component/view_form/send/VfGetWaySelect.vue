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
            now: 'gogovan',
            ops: [
                { txt: 'GOGOVAN', v: 'gogovan' },
                { txt: '自取', v: 'fee' }
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 'gogovan' },
    watch: {
        now(n, o) {
            this.$emit('resuit', n)
        }
    }
}
</script>

<style>

</style>