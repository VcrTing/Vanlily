<template>
    <select v-model="now">
        <option v-for="(v, i) in iist" :key="i" :value="i">{{ v }}</option>
    </select>
</template>

<script>

export default {
    props: {
        def: Number
    },
    emits: [ 'resuit' ],
    data() { return { now: 0 } },
    mounted() { this.now = this.def ? this.def : 1 },
    watch: { now(n , o) { this.$emit('resuit', this.iist[n]) } },
    computed: {
        iist() {
            return [
                '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',
            ]
        }
    }
}
</script>

<style>

</style>