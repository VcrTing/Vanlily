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
    data() { return { now: 1 } },
    mounted() { this.now = this.def ? this.def : 0 },
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