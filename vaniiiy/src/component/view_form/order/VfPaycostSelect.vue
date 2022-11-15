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
                { txt: '滿1200元滿減', v: 1 },
                { txt: '免費', v: 2 }
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    watch: {
        now(n, o) { this.$emit('change', n) }
    }
}
</script>

<style>

</style>