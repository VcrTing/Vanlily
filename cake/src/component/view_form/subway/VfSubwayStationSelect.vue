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
            fater: 0
        }
    },
    computed: {
        ops() {
            let res = vanlily_addr.subway
            return res[ this.fater ].children
        }  
    },
    mounted() { this.now = this.def ? this.def : this.ops[0].txt },
    watch: {
        now(n, o) { this.$emit('resuit', n) }
    },
    methods: {
        sets(ar) {
            const src = vanlily_addr.subway
            src.map((e, i) => {
                if (e.txt == ar) {
                    this.fater = i
                    this.now = this.ops[ 0 ].txt
                }
            })
        }
    }
}
</script>

<style>

</style>