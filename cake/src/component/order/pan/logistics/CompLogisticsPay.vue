<template>
    <div v-if="!ioading">
        <co-logistic-pay-form v-if="form.edit" :form="form" @submit="submit" :ioad="ioading" :timed_ciass="timed_ciass"/>
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
    props: [ 'order', '_edit', 'timed_ciass' ],
    data() {
        return {
            ioading: true, 
            form_origin: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', payment_is_open: false, edit: false },
            form: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', payment_is_open: false, edit: false },
        }
    },
    mounted() { this.fetching() },
    emits: [ 'success' ],
    methods: {
        async fetching() {
            return new Promise(async rej => {
                this.ioading = true
                const res = await this.serv.check.order_send(this, this.order.uuid)
                if (res) {
                    for (let k in this.form_origin) { if (res[k]) { this.form_origin[ k ] = res[ k ] } }
                    this.reset();
                }
                this.ioading = false; rej(0)
            })
        },
        reset() { 
            this.form_origin.edit = this._edit ? this._edit : false
            for (let k in this.form_origin) { this.form[ k ] = this.form_origin[ k ] } 
        },

        // 提交
        async submit( data ) {
            return new Promise(async rej => {
                if (this.ioading == false) {
                    this.ioading = true
                    if (data) {
                        try {
                            const res = await this.serv.pay.edit( this, this.order.uuid, data)
                            if (res) {
                                this.$emit('success')
                                this.form.edit = false;
                            }
                            setTimeout(() => { this.ioading = false }, 20)
                        } catch(err) {
                                this.form.edit = true;
                        }
                    }
                }
                rej( 0 )
            })
        }
    }
}
</script>