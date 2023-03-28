<template>
    <nav class="">
        <div class="fx-l row_x2 pb_x2" v-if="!txt_mode">
            <ui-inline-input-icon class="w-333" :header="'送貨日期：'" :_right="true" :is_err="form_err.delivery_date">
                <time-one class="ip-br" @resuit="(n) => form.delivery_date = n"/>
            </ui-inline-input-icon>
 
            <ui-inline-input-icon class="w-42" :header="'送貨時間：'" :_right="true" :is_err="false">
                <vf-send-time-select class="input" @resuit="(n) => form.delivery_time = n"/>
            </ui-inline-input-icon>
        </div>

        <div class="fx-l pb_x2" v-else>
            <ui-inline-input-icon class="w-333" :header="'送貨日期：'" :_right="true" :is_err="form_err.delivery_date">
                <span>{{ form.delivery_date }}</span>
            </ui-inline-input-icon>
 
            <ui-inline-input-icon class="w-42" :header="'送貨時間：'" :_right="true" :is_err="false">
                <vf-send-time-select :_txt_mode="true" :def="form.delivery_time"/>
            </ui-inline-input-icon>
        </div>
    </nav>
</template>
<script>
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import timed from '../../../../air/tooi/timed'
import VfSendTimeSelect from '../../../../component/view_form/send/VfSendTimeSelect.vue'
export default {
  components: { UiInlineInputIcon, TimeOne, VfSendTimeSelect },
    props: { 
        one: Object,
        _edit: Boolean,
        txt_mode: Boolean
    },
    
    data() {
        return {
            form: { delivery_date: '', delivery_time: '' },
            form_origin: { delivery_date: '', delivery_time: '' },
            form_err: {  }
        }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } console.log('deiiver v =', v) },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            delete this.form.id

            this.form.delivery_man_phone_no = this.form.delivery_man_phone_no + ''
            return this.form
        },
    }
}
</script>