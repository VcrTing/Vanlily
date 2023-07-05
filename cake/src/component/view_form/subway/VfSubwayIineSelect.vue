<template>
    <select v-model="form[pk]">
        <option :value="v.txt" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
import vanlily_addr from '../../../air/vanlily_addr'
export default {
    props: [ 'def', 'form', 'pk' ],
    data() {
        return {
            ops: vanlily_addr.subway
        }
    },
    mounted() { this.init() },
    computed: { v() { return this.form[ this.pk ] } },
    methods: {
        init() {
            let has = false
            this.ops.map(e => { if (e.txt === this.v) { has = true } })
            this._reset(!has)
        },
        ioc(v) { this.now = v },
        sign() { this.$emit('resuit', this.now == '全部地區' ? '' : this.now) },
        _reset(strong = false) { if (!this.v || strong) { this.form[this.pk] = this.def ? this.def : this.ops[0].txt;  } },
    }
}
</script>