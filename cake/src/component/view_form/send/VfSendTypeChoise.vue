<template>
    <nav v-if="!_txt_mode">
        <div v-for="(v, i) in ways" :key="i" class="px_s d-ib">
            <button class="px_x py_s"
                @click="(now = i)"
                :class="{ 'item-pri_out': now == i, 'xxxx': now != i }"
            >
                {{ v.txt }}
            </button>
        </div>
    </nav>
    <nav v-else>
        <div v-for="(v, i) in ways" :key="i" class="px_s d-ib">
            <button class="px_x py_s"
                :class="{ 'item-pri_out': now == i, 'sus': now != i }"
            >
                {{ v.txt }}
            </button>
        </div>
    </nav>
    
</template>

<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() { 
        return {
            now: 0,
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
        sign() { this.$emit('resuit', this.ways[ this.now ]) },

        code() { let res = this.ways[ this.now ]; return res ? res.code : 'addr' },
        ioc(vv) { this.ways.map( (e, i) => { if (e.v == vv) { this.now = i } }) }
    }
}
</script>