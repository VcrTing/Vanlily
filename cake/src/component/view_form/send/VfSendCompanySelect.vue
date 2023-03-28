<template>
    <select v-model="now"
        v-if="!_txt_mode"
    >
        <option
            v-for="(v, i) in ways" :key="i"
            :value="v.v"
        >
            {{ v.txt }}
        </option>
    </select>
    <span v-else>
        {{ ioc_txt(def) }}
    </span>
    
</template>

<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() { 
        return {
            now: '先生送貨',
            ways: [
                { txt: '公公送貨', v: '公公送貨', id: 1, code: 'normai' },
                { txt: '先生送貨', v: '先生送貨', id: 2, code: 'normai'},
                { txt: 'Gogovan 送貨', v: 'gogovan', id: 3, code: 'normai' },
                { txt: 'Runrun 送貨', v: 'runrun送貨', id: 4, code: 'normai' },
                { txt: '步兵送貨', v: '步兵送貨', id: 5, code: 'normai' }
            ]
        }
    },
    mounted() {
        this.def ? this.ioc( this.def ) : undefined;
        this.sign()
    },
    watch: {
        now(n, o) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },

        ioc(vv) { this.now = vv },

        ioc_txt(vv) {
            let res = ''
            this.ways.map(e => {
                if (e.v == vv) { res = e.txt }
            })
            return res
        }
    }
}
</script>