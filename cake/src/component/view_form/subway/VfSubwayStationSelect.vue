<template>
    <select v-model="form[pk]">
        <option :value="v.txt" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
import vanlily_addr from '../../../air/vanlily_addr'
export default {
    props: [ 'form', 'pk', 'pk_father' ],
    data() {
        return { ops: [ ] }
    },
    computed: {
        v() { return this.form[this.pk] },
        v_father() { return this.form[this.pk_father] }
    },
    mounted() { this.v_father ? this.ioc_father( this.v_father ) : undefined; setTimeout(() => this.ioc(), 200) },
    watch: { 
        v_father(n) { this.ioc_father(n); this.ioc() },
    },

    methods: {
        ioc_father(n) {
            let idx = 0
            vanlily_addr.subway.map((e, i) => { if (e.txt == n) { idx = i } })
            this.ops = vanlily_addr.subway[idx].children
        },
        ioc() {
            let has = false
            this.ops.map(e => { if (e.txt === this.v) { has = true } })
            if (!has) { this.form[this.pk] = this.ops[0].txt }
        },
    }
}
</script>