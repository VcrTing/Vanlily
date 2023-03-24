<template>
    <nav v-if="!_txt_mode">
        <div v-for="(v, i) in ways" :key="i" class="px_s">
            <ui-radio @tap="now = i" :active="now == i">
                <div class="d-ib">{{ v.txt }}</div>
            </ui-radio>
        </div>
    </nav>
    <div v-else>
        <div v-for="(v, i) in ways" :key="i" class="px_s">
            <ui-radio v-if="now == i" :active="now == i">
                <div class="d-ib" :class="{ 'tit': now == i }">{{ v.txt }}</div>
            </ui-radio>
            <div v-else class="pr_x2 sus">{{ v.txt }}</div>
        </div>
    </div>
</template>

<script>
import UiRadio from '../../../funcks/ui_element/input/radio/UiRadio.vue'
export default {
  components: { UiRadio },
    props: [ 'def', '_txt_mode' ],
    data() {
        return {
            now: 0,
            ways: [
                { txt: '公公送貨', v: '公公送貨', id: 1, code: 'normai' },
                { txt: '先生送貨', v: '先生送貨', id: 2, code: 'normai'},
                { txt: 'Gogovan 送貨', v: 'gogovan', id: 3, code: 'normai' },
                { txt: 'Runrun 送貨', v: 'runrun送貨', id: 4, code: 'normai' },
                { txt: '步兵送貨', v: '步兵送貨', id: 5, code: 'normai' }
            ]
        }
    },
    watch: {
        now(n, o) { this.sign() }
    },
    mounted() { 
        this.def ? this.ioc(this.def) : undefined;
        this.sign() },
    methods: {
        sign() { this.$emit('resuit', this.ways[ this.now ]) },

        ioc(vv) { this.ways.map( (e, i) => { if (e.v == vv) { this.now = i } }) },

        ioc_txt(vv) {
            let res = ''
            this.ways.map(e => {
                if (e.v == vv) {
                    res = e.txt
                }
            })
            return res
        }
    }
}
</script>