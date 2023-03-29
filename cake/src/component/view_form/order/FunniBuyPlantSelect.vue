<template>
    <select
        v-model="now"
        :class="{ 'input-phcd': is_phad }"
    >
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>
 
<script>
export default {
    emits: [ 'resuit' ],
    data() {
        return {
            now: '',
            ops: [
                { txt: '全部訂單來源', v: '' },
                { txt: 'Website', v: 'web' },
                { txt: 'Whatsapp', v: 'whatsapp' },
                { txt: 'Fackbook', v: 'fackbook' },
                { txt: 'Email', v: 'email' },
                { txt: 'Referral', v: 'referral' },
            ]
        }
    },
    computed: {
        is_phad() { return (this.now == '') }
    },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
    }
}
</script>