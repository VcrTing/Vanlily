<template>
    <select v-if="!_txt_mode" v-model="now">
        <option :value="v.id" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <span v-else>
        {{ txt }}
    </span>
</template>
 
<script>
export default {
    props: [ 'def', '_txt_mode' ],
    emits: [ 'resuit' ],
    data() {
        return {
            now: '',
            ops_end: { txt: '其他', v: '', id: -1 },
            ops: [
                
            ]
        }
    },
    mounted() { 
        this.change(this.froms)
        this.now = this.def ? this.def : -1; 
        this.sign();
    },
    computed: {
        froms() { return this.orderAboutPina().froms },
        txt() {
            let res = ''
            this.ops.map(e => { if (e.id === this.now) { res = e.txt } })
            return res
        }
    },
    watch: {
        now(n, o) { this.sign() },
        froms(n) { this.change(n) }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(v) { this.now = v ? v : -1; },
        ioc_txt() {
            let res = ''
            this.ops.map(e => { if (e.v === this.now) { res = e.txt } })
            return res
        },
        change(n) {
            this.ops.length = 0
            // this.ops.push( this.ops_star )

            if (n && n.length > 0) {
                this.froms.map((e) => { this.ops.push({ txt: e.name, v: e.name, id: e.id }) })
            } else {
                this.ops = [
                ]
            }
            this.ops.push(this.ops_end)
        }
    }
}
</script>