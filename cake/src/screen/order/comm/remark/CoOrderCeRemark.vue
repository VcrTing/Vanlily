<template>
    <nav class="pt">
        <ui-input class="w-100 py" :header="'備註一：'" :is_err="false">
            <textarea class="input" placeholder="可以不填寫" v-model="form.remarks_1"></textarea>
        </ui-input>

        <ui-input class="w-100 py" :header="'備註二：'" :is_err="false">
            <textarea class="input" placeholder="可以不填寫" v-model="form.remarks_2"></textarea>
        </ui-input>
    </nav>
</template>
<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: { one: Object, _edit: Boolean },
    data() {
        return {
            form: { remarks_1: '', remarks_2: '', },
            form_origin: { remarks_1: '', remarks_2: '', },
            form_err: { }
        }
    },
    mounted() { if (this._edit) { this.reset( this.one ) } },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            // for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            delete this.form.id
            return this.form
        },
    }
}
</script>