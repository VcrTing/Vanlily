<template>
    <select 
        v-model="now"
        :class="{ 'input-phcd': is_phad }"
        >
        <option :value="v.txt" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
import vanlily_addr from '../../../air/vanlily_addr'
export default {
    emits: [ 'resuit' ],
    data() {
        return {
            now: '全部地區',
            ops: [ ]
        }
    },
    computed: {
        is_phad() { return (this.now == '全部地區') }
    },
    mounted() { 
        let has = false
        this.ops = JSON.parse(JSON.stringify( vanlily_addr.addr ))
        this.ops.map(e => { if (e.txt == '全部地區') { has = true } })
        !has ? this.ops.unshift({ txt: '全部地區', v: '' }) : undefined;
    },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now == '全部地區' ? '' : this.now) },
    }
}
</script>
