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
            now: '06:00-08:00',
            ops: [
                { txt: '06:00 - 08:00', v: '06:00-08:00' },
                { txt: '08:00 - 10:00', v: '08:00-10:00' },
                { txt: '10:00 - 12:00', v: '10:00-12:00' },
                { txt: '12:00 - 14:00', v: '12:00-14:00' },
                { txt: '14:00 - 16:00', v: '14:00-16:00' },
                { txt: '16:00 - 18:00', v: '16:00-17:00' },
                { txt: '18:00 - 20:00', v: '18:00-20:00' },
                { txt: '20:00 - 00:00', v: '20:00-00:00' },
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : '06:00-08:00' },
    watch: {
        now(n, o) {
            this.$emit('resuit', n)
        }
    }
}
</script>

<style>

</style>