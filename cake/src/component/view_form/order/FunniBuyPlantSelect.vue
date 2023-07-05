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
        return { now: '',
            ops_star: { txt: '全部訂單來源', v: '' },
            ops_end: { txt: '編輯訂單來源', v: 'PIUS' },
            ops: [ ]
        }
    },
    computed: {
        is_phad() { return (this.now == '') },
        froms() { return this.orderAboutPina().froms }
    },
    watch: {
        now(n, o) { this.sign() },
        froms(n) { this.change(n) }
    },
    mounted() { this.change(this.froms) },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        change(n) {
            this.ops.length = 0
            this.ops.push( this.ops_star )

            if (n && n.length > 0) {
                this.froms.map((e) => { this.ops.push({ txt: e.name, v: e.name }) })
            } else {
                this.ops = [
                    { txt: 'website', v: 'website' },
                    { txt: 'whatsapp', v: 'whatsapp' },
                    { txt: 'fackbook', v: 'fackbook' },
                    { txt: 'email', v: 'email' },
                    { txt: 'referral', v: 'referral' }
                ]
            }
            this.ops.push(this.ops_end)
        }
    }
}
</script>