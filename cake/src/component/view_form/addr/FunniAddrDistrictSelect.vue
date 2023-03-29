<template>
    <select 
        v-model="now"
        :class="{ 'input-phcd': is_phad }">
        <option :value="v.txt" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
import vanlily_addr from '../../../air/vanlily_addr'
export default {
    data() {
        return {
            now: '全部區域',
            fater: 0
        }
    },
    computed: {
        ops() {
            let res = vanlily_addr.addr

            res = JSON.parse( JSON.stringify( res[ this.fater ].children ))

            let has = false
            res.map(e => { if (e.txt == '全部區域') { has = true } })
            !has ? res.unshift({ txt: '全部區域', v: '' }) : undefined;
            return res
        },

        is_phad() { return (this.now == '全部區域') }
    },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now == '全部區域' ? '' : this.now) },

        sets(ar) {
            const src = vanlily_addr.addr

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