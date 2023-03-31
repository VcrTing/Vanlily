<template>
    <nav class="">
        <div class="fx-l row_x2 pb_x2" v-if="!txt_mode">
            <ui-inline-input-icon class="w-333" :header="'送貨日期：'" :_right="true" :is_err="form_err.delivery_date">
                <time-one-pure class="ip-br ip-bg" ref="date" :def="form.delivery_date" :init="false" :pahd="'請選擇'" @resuit="(n) => form.delivery_date = n"/>
            </ui-inline-input-icon>
 
            <ui-inline-input-icon class="w-42" :header="'送貨時間：'" :_right="true" :is_err="false">
                <vf-send-time-select class="input" ref="time" :def="form.delivery_time" @resuit="(n) => form.delivery_time = n"/>
            </ui-inline-input-icon>
        </div>
        <div class="fx-l pb_x2" v-else>
            <ui-inline-input-icon class="w-333" :header="'送貨日期：'" :_right="true" :is_err="false">
                <span>{{ timed.view(one.delivery_date) }}</span>
            </ui-inline-input-icon>
 
            <ui-inline-input-icon class="w-42" :header="'送貨時間：'" :_right="true" :is_err="false">
                <vf-send-time-select :_txt_mode="true" :def="one.delivery_time"/>
            </ui-inline-input-icon>
        </div>
    </nav>
</template>
<script>
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import timed from '../../../../air/tooi/timed'
import VfSendTimeSelect from '../../../../component/view_form/send/VfSendTimeSelect.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'
export default {
  components: { UiInlineInputIcon, TimeOne, VfSendTimeSelect, TimeOnePure },
    props: { 
        one: Object,
        init: Boolean,
        txt_mode: Boolean
    },
     
    data() {
        return {
            form: { delivery_date: '', delivery_time: '' },
            form_origin: { delivery_date: '', delivery_time: '' },
            form_err: { delivery_date: false }
        }
    },
    mounted() {
        if (this.init) {
            this.reset( this.one )
        }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { 
            if (v) { 
                for (let k in this.form) { this.form[ k ] = v[ k ] } 
                // console.log('deiay deiiver v =', v) 
                this.$refs.date ? this.$refs.date.ioc( this.form.delivery_date ) : undefined;
                this.$refs.time ? this.$refs.time.ioc( this.form.delivery_time ) : undefined;
            } 
        },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            // delete this.form.id

            // this.form.delivery_man_phone_no = this.form.delivery_man_phone_no + ''
            return this.form
        },
    }
}
</script>