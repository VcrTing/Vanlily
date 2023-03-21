<template>
    <nav>
        <div v-for="(v, i) in ways" :key="i" class="px_s">
            <ui-radio @tap="now = i" :active="now == i">
                <div class="d-ib">{{ v.txt }}</div>
            </ui-radio>
        </div>
    </nav>
</template>

<script>
import UiRadio from '../../../funcks/ui_element/input/radio/UiRadio.vue'
export default {
  components: { UiRadio },
    props: {
        def: { type: Number },
        mode: { type: Number, default: 0 },
    },
    data() {
        return {
            now: 0,
            ways: [
                { txt: '公公送貨', v: '公公送貨', id: 1, code: 'normai' },
                { txt: '先生送貨', v: '先生送貨', id: 2, code: 'normai'},
                { txt: 'Gogovan', v: 'gogovan', id: 3, code: 'normai' },
                { txt: 'Runrun 送貨', v: 'runrun送貨', id: 4, code: 'normai' },
                { txt: '步兵送貨', v: '步兵送貨', id: 5, code: 'normai' }
            ]
        }
    },
    watch: {
        now(n, o) { this.$emit('resuit', this.ways[ this.now ]) }
    },
    mounted() { this.now = this.def ? this.def : 0 },
    methods: {
        ioc(vv) { this.ways.map( (e, i) => { if (e.v == vv) { this.now = i } }) }
    }
}
</script>