<template>
    <ui-input :header="name" :is_err="false">
        {{ options[def] }}
        <select v-model="now" class="input w-100">
            <option :value="i" v-for="(v, i) in options" :key="i">
                {{ v }}
            </option>
        </select>
    </ui-input>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: {
        attr: Object,
        attr_def: Object
    },
    data() {
        return {
            now: 0,
        }
    },
    methods: {
        ioc(txt) {
            this.options.map((e, i) => {
                console.log(e, txt)
            })
        },
    },
    computed: {
        _same(n, o) { 
            // n = n ? n.trim() : ''; o = o ? o.trim() : null
            return (n === o)
        },
        def() {
            let idx = 0
            const that = this
            if (this.attr_def) {
                let name = this.attr_def.name; name = name ? (name + '') : ''
                this.options.map((e, i) => {
                    // if (that._same(e, name)) { idx = i }
                    console.log('Option[' + i + '] =', e, '\nNAME =', name, '\n')
                })
            } return idx
        },
        name() {
            let res = ''
            if (this.attr) {
                res = this.attr.name
            } return res ? (res + '：') : ''
        },
        options() {
            return this.attr && this.attr.options ? this.attr.options : [ ]
        }
    },
}
</script>

<style>

</style>