<template>
    <select v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
export default {
    props: [ 'def' ],
    emits: [ 'resuit' ],
    data() {
        return {
            now: 'web',
            ops: [
                { txt: 'Website', v: 'web' },
                { txt: 'Whatsapp', v: 'whatsapp' },
                { txt: 'Fackbook', v: 'fackbook' },
                { txt: 'Email', v: 'email' },
                { txt: 'Referral', v: 'referral' },
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 'web' },
    watch: {
        now(n, o) { this.$emit('resuit', n) }
    },
    methods: {

    }
}
</script>

<style>

</style>