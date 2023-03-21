<template>
    <select v-model="now" v-if="!txt_mode">
        <option v-for="(v, i) in items" :key="i" :value="v.v">{{ v.txt }}</option>
    </select>
    <div v-else>
        {{ txt(def) }}
    </div>
</template>

<script>
export default {
    emits: [ 'resuit' ],
    props: [ 'def', 'txt_mode' ],
    data() {
        return {
            now: this._def(),
            items: [
                {
                    txt: '港幣', v: 'UKD'
                },
                {
                    txt: '美金', v: 'USD'
                },
            ]
        }
    },
    mounted() { this.$emit('resuit', this.now) },
    watch: { now(n, o) { this.$emit('resuit', n) } },
    methods: {
        _def() { return this.def ? this.def : 'UKD' },
        txt(n) {
            let res = ''
            if (n) {
                this.items.map(e => {
                    if (e.v === n) {
                        res = e.txt
                    }
                })
            } return res
        },
        ioc(v) { this.now = v ? v : this._def() }
    }
}
</script>