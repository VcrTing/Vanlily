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
import FkSearchOidOrder from '../../../../funcks/order/static/FkSearchOidOrder.vue'
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfBuyPlantSelect from '../../../../component/view_form/order/VfBuyPlantSelect.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import timed from '../../../../air/tooi/timed'
export default {
  components: { UiIconInput, VfBuyPlantSelect, FkSearchOidOrder, UiInlineInputIcon, TimeOne, UiInlineInput, UiInput },
    props: { 
        one: Object,
        is_edit: Boolean
    },
    
    data() {
        return {
            form: { remarks_1: '', remarks_2: '', },
            form_origin: { remarks_1: '', remarks_2: '', },
            form_err: { }
        }
    },
    mounted() { 
        if (this.is_edit) { this.reset( this.one ) }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            delete this.form.id
            return this.form
        },
    }
}
</script>