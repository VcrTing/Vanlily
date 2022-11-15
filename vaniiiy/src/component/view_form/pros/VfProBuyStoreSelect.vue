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
                { txt: '購買店鋪', v: 0 },
                { txt: '天虹', v: 1 },
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