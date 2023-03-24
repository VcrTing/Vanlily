<template>
    <div v-if="form_origin.payment_fee">
        <co-logistic-pay-form v-if="form.edit" :form="form" @submit="submit" :ioad="ioading"/>
        <co-logistic-pay-body v-else :form="form"/>
    </div>
    <div v-else>
        <co-logistic-pay-skei/>
    </div>
</template>

<script>
import CoLogisticPayBody from '../Iogistics_form/CoLogisticPayBody.vue'
import CoLogisticPayForm from '../Iogistics_form/CoLogisticPayForm.vue'
import CoLogisticPaySkei from '../Iogistics_form/CoLogisticPaySkei.vue'
export default {
    components: { CoLogisticPayForm, CoLogisticPayBody, CoLogisticPaySkei },
    props: [ 'order', '_edit' ],
    data() {
        return {
            ioading: true, 
            form_origin: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', edit: false },
            form: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', edit: false },
        }
    },
    mounted() { this.fetching() },
    emits: [ 'success' ],
    methods: {
        async fetching() {
            this.ioading = true
            const res = await this.serv.check.order_send(this, this.order.uuid)
            if (res) {
                for (let k in this.form_origin) { if (res[k]) { this.form_origin[ k ] = res[ k ] } }
                this.reset()
            }
            setTimeout(e => this.ioading = false, 20)
        },
        reset() { 
            this.form_origin.edit = this._edit ? this._edit : false
            for (let k in this.form_origin) { this.form[ k ] = this.form_origin[ k ] } 
        },

        // 提交
        async submit( data ) {
            if (this.ioading == false) {
                this.ioading = true
                if (data) {
                    const res = await this.serv.pay.edit( this, this.order.uuid, data)
                    if (res) {
                        this.$emit('success')
                        this.form.edit = false;
                    }
                    setTimeout(() => { this.ioading = false }, 20)
                }
            }
        }
    }
}
</script>