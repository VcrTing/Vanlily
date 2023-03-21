<template>
    <select v-model="now">
        <option :value="v.txt" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
import vanlily_addr from '../../../air/vanlily_addr'
export default {
    props: [ 'def' ],
    data() {
        return {
            now: '',
            ops: vanlily_addr.subway
        }
    },
    mounted() { 
        this.now = this.def ? this.def : this.ops[0].txt
        
    },
    watch: {
        now(n, o) { this.$emit('resuit', n) }
    }
}
</script>

<style>

</style>