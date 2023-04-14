<template>
    <div v-for="(v, i) in items" :key="i" class="fx-l checkbox-roie">
        <ui-checkbox
            ref="box"
            :minus="300"
            :active="now == v.v"
            @click="now = v.v"
        />
        <div class="pl hand"
            @click="now = v.v">{{ v.txt }}</div>
    </div>
</template>

<script>
import UiCheckbox from '../../../funcks/ui_element/input/checkbox/UiCheckbox.vue'
import UiCheckboxForOne from '../../../funcks/ui_element/input/checkbox/UiCheckboxForOne.vue'

export default {
    components: { UiCheckboxForOne, UiCheckbox },
    props: [ 'def' ],
    data() {
        return {
            now: '',
            items: [
                { txt: '超級管理員', def: false, v: 'admin' },
                { txt: '普通用戶', def: false, v: 'authenticated' }
            ]
        }
    },
    mounted() {
        this.now = this.def ? this.def : 'admin'
    },
    watch: {
        now(n) {
            this.$emit('resuit', n)
        }
    },
    emits: [ 'resuit' ],
    methods: {
        ioc(v) {
            this.now = v
        }
    }
}
</script>