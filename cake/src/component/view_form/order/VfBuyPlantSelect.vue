<template>
    <select v-if="!_txt_mode" v-model="now"
        :class="{ 'input-phcd': is_phad }"
    >
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <span v-else>
        {{ ioc_txt() }}
    </span>
</template>
 
<script>
export default {
    props: [ 'def', '_txt_mode', '_funni_mode' ],
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
                { txt: '其他', v: '' }
            ]
        }
    },
    computed: {
        is_phad() {
            return this._funni_mode ? (this.now == '') : false
        }
    },
    mounted() { 
        
        if (this._funni_mode) {
            this.ops.push({ txt: '全部訂單來源', v: '' }); 
        }

        this.now = this.def ? this.def : ( this._funni_mode ? '' : 'web' ); 
        this.sign() 
    },
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