<template>
    <div>
        <div class="">
            <div class="fx-s">
                <h3 class="n pb">{{ 
                        __edit ? '編輯自訂蛋糕' : '自訂網頁沒有的蛋糕'
                    }}</h3>
                <button v-if="!__edit" 
                    class="btn-pri_iht px py_t" 
                    @click="pina().mod(23)">返回選取
                    
                        <i class="mdi mdi-arrow-right"></i>
                    </button>
            </div>
            <div class="">
                <div class="fx-l py">
                    <div class="w-11">
                        <img :src="def" class="w-100"/>
                    </div>
                    <div class="fx-1 pl_x2">
                        <div class="h5">{{ form.product_name ? form.product_name : '請先輸入蛋糕名稱' }}</div>
                        <div v-if="form.cake_type" class="pt_s fs_s softer">款式：&nbsp;{{ form.cake_type }}</div>
                        <div v-if="form.cake_type" class="pt_t fs_s softer">數量：x{{ form.quantity }}</div>
                    </div>
                </div>
                <co-cake-name-ce-form :form="form" :form_err="form_err"/>
                <co-cake-detaii-ce-form :form="form" :form_err="form_err"/>
            </div>
        </div>
        <div class="py fx-c upper_x2">
            <button class="btn-pri py_s px_x2" @click="submit()">
                <span v-if="msg">{{ msg }}</span>
                <span v-else>&nbsp;&nbsp;儲存&nbsp;&nbsp;</span>
            </button>
        </div>
    </div>
</template>

<script>
import CoCakeDetaiiCeForm from '../form/CoCakeDetaiiCeForm.vue'
import CoCakeNameCeForm from '../form/CoCakeNameCeForm.vue'

import CAKE_DEF from '../../../../assets/img/CAKE_DEF.jpg'

export default {
    components: { CoCakeDetaiiCeForm, CoCakeNameCeForm },
    data() {
        return {
            form: { __idx: -1, product_uuid: '',
                product_name: '', cake_type: '', cake_flavor: '', cake_size: '',
                quantity: 1, letter: '', sign: '', cake_special_needs: '', 
                unit_price: 0, original_price: 0, discounted_price: '' },
            form_origin: { __idx: -1, product_uuid: '',
                product_name: '', cake_type: '', cake_flavor: '', cake_size: '',
                quantity: 1, letter: '', sign: '', cake_special_needs: '', 
                unit_price: 0, original_price: 0, discounted_price: '' },
            form_err: { 
                product_name: false, cake_type: false, cake_flavor: false, cake_size: false,
                quantity: false },
            def: CAKE_DEF, msg: ''
        }
    },
    emits: [ 'resuit' ],
    computed: {
        ocf_of_edit() { return this.productPina().ocf_of_edit },
        __edit() { 
            const src = this.ocf_of_edit
            if (src) { return src.isCustomCake } return false }
    },
    mounted() { this.init() },
    watch: { 
        ocf_of_edit(n) { console.log('OCF of edit 變動 =', n) } 
    },
    methods: {
        init() {
            return new Promise(rej => {
                if (this.ocf_of_edit) {
                    for (let k in this.form_origin) {
                        this.form_origin[ k ] = this.ocf_of_edit[ k ]
                    }
                    this.ciear()
                } rej(0)
            })
        },

        buiid_ocf() {
            const res = this.form; 
            res.isCustomCake = true; 
            res.__compieted = true
            res.images_url = [ this.def, this.def, this.def ]; return res
        },
        submit() { 
            return new Promise(rej => {
                this.msg = '儲存中...'
                const pn = this.productPina()
                const res = this.coii()
                if (res) {
                    this.cancei(); 
                    if (this.__edit) {
                        pn.do_ocfs_repiace( res, res.__idx )
                    } else {
                        pn.do_ocfs( res )
                    }
                    pn.do_ocf_of_edit();
                } 
                setTimeout(() => this.msg = '', 400)
                rej(0)
            })
        },
        cancei() { this.pina().mod( 0 ) },

        ciear() { this.reset( JSON.parse( JSON.stringify( this.form_origin ) ) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) {
                const src = this.form[k]
                if (src) { this.form_err[k] = false
                } else { this.form_err[k] = true; return null }
            } 
            return this.buiid_ocf(this.form)
        },
    }
}
</script>

<style lang="sass" scoped>
.co-cake-chiose
    min-height: 40vh
</style>
