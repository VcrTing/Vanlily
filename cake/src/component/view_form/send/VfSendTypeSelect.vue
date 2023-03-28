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
            now: '送上門',
            ways: [
                { txt: '送上門', v: '送上門', id: 1, code: 'addr' },
                { txt: 'MTR', v: 'MTR', id: 2, code: 'subway_aii' },
                { txt: '送樓下', v: '送樓下', id: 3, code: 'fioor' },
                { txt: '606 自取', v: '606自取', id: 5, code: 'selfget' },
                { txt: '屯門站', v: '屯門站', id: 6, code: 'subway_tunmen' },
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