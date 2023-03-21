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
            items: [
                {
                    txt: '員工工資', v: 'salary'
                },
                {
                    txt: '交通', v: 'traffic'
                }
            ],
            now: this._def(),
        }
    },
    mounted() { this.$emit('resuit', this.now) },
    watch: { now(n, o) { this.$emit('resuit', n) } },
    methods: {
        _def() { return this.def ? this.def : 'salary' },
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