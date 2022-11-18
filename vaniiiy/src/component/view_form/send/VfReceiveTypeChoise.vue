<template>
    <nav>
        <div v-for="(v, i) in ways" :key="i" class="px_s">
            <ui-radio @tap="change(v)" :active="now == v.id">
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
            now: 2,
            ways: [
                { txt: '送上門', id: 1 },
                { txt: 'MTR', id: 2 },
                { txt: '送樓下', id: 3 }
            ]
        }
    },
    watch: {
        now(n, o) { this.$emit('resuit', n) }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    methods: {
        change(v) {
            this.now = v.id
            if (this.mode != 0) { }
        }
    }
}
</script>