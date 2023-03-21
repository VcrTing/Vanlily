<template>
    <select v-model="now">
        <option value="0">月份</option>
        <option v-for="(v, i) in iist" :key="i" :value="v">{{ v }}</option>
    </select>
</template>

<script>

export default {
    props: {
        star: Number,
        end: Number
    },
    data() { return { now: 0 } },
    computed: {
        iist() {
            const ed = this.end ? this.end : (12)
            const st = this.star ? this.star : (1)
            const res = [ ]
            for (let i= 0; i<= (ed - st); i++ ) {
                res.push((st + i))
            }
            return res
        }
    }
}
</script>

<style>

</style>