<template>
    <select v-if="!_txt_mode" v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <span v-else>
        {{ ioc_txt() }}
    </span>
</template>
 
<script>
export default {
    props: [ 'def', '_txt_mode' ],
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
    mounted() { this.now = this.def ? this.def : 'web'; this.sign() },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(v) {
            this.now = v ? v : 'web';
        },
        ioc_txt() {
            let res = 'Website'
            this.ops.map(e => {
                if (e.v === this.now) {
                    res = e.txt
                }
            })
            return res
        }
    }
}
</script>