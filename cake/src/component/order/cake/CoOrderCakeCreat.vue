<template>
    <form-def :header="'完善訂單蛋糕資料'" @submit="submit" :msg="msg">

        <div class="pb_x3 pt">
            <fk-cake-avatar-name :cake="cake" :size="2" :_uuid="true"/>
        </div>

        <div class="row_x2 fx-l fx-wp ">
            <div class="w-333" v-for="(v, k) in attrs" :key="k">
                <ui-input class="pb_x2" :header="k" :is_err="false">
                    <select class="input" v-model="attribute[k]">
                        <option v-for="(m, n) in v" :key="n" :value="m.uuid">{{ m.name }}</option>
                    </select>
                </ui-input>
            </div>
        </div>
        <co-cake-detaii-ce-form :form="form" :form_err="form_err"/>
    </form-def>
</template>

<script>
import strapi from '../../../air/tooi/strapi'
import FkCakeAvatarName from '../../../funcks/product/view/FkCakeAvatarName.vue'
import UiIconInput from '../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoCakeDetaiiCeForm from '../../order_new/cake/form/CoCakeDetaiiCeForm.vue'

export default {
    components: { FormDef, UiInput, FkCakeAvatarName, UiIconInput, CoCakeDetaiiCeForm },
    data() {    
        return {
            attribute: { }, msg: '',
            form: { quantity: 1, letter: '', sign: '', 
                unit_price: 0, original_price: 0, discounted_price: '', cake_special_needs: '', product_uuid: '' },
            form_origin: { quantity: 1, letter: '', sign: '', 
                unit_price: 0, original_price: 0, discounted_price: '', cake_special_needs: '', product_uuid: '' },
            form_err: { quantity: false, unit_price: false },
        }
    },
    emits: [ 'resuit' ],
    watch: {
        'form.unit_price'(n) { 
            if (n !== 0) {
                n = Number.parseInt(n)
                n = (n != null && n != '') ? Math.abs(n) : ''
                this.form.unit_price = n 
            }
        },

        'form.original_price'(n) { 
            if (n !== 0) {
                n = Number.parseInt(n)
                n = (n != null && n != '') ? Math.abs(n) : ''
                this.form.original_price = n 
            }
        },

        'form.discounted_price'(n) { 
            if (n !== 0) {
                n = Number.parseInt(n)
                n = (n != null && n != '') ? Math.abs(n) : ''
                this.form.discounted_price = n 
            }
        }
    },
    computed: {
        cake() { 
            const src = this._proP.cake_of_edit
            // 構建參數
            if (src) {
                const attrs = src.__attributes_relations
                for(let k in attrs) {
                    const many = attrs[k]
                    if (many && many.length > 0) {
                        const _one = many[0]
                        this.attribute[k] = _one && _one.uuid ? _one.uuid : ''
                    }
                }
            } return src 
        },
        attrs() { return this.cake.__attributes_relations },
        attrs_array() { return this.cake.attributes_relations ? this.cake.attributes_relations : [ ]  },

        _proP() { return this.productPina() },
        _coecs() { let src = this._proP.coecs; return src ? src : [ ] },
        coec() {
            const uuid = this.cake.uuid; let res = null
            this._coecs.map( e => {
                if (e.product_uuid === uuid) { res = e }
            }); return res
        },
    },
    methods: {

        // 提交
        submit() {
            return new Promise(async rej => {
                const data = this.coii()
                if (data && this.attribute) {
                    this.msg = '儲存中...'
                    this.pina().mod( 0 );

                    let _atrs = [ ]; 
                    for (let k in this.attribute) { _atrs.push( this.attribute[ k ] ) }

                    const res = { 'uuid': '', 'product_uuid': '', ...data, 'attribute': _atrs, 'attribute_of_edit': this.attribute }
                    res['uuid'] = this.cake.uuid
                    res['product_uuid'] = this.cake.uuid

                    this._proP.do_coecs( res ); 
                    // console.log('儲存蛋糕資料 =', res)
                    setTimeout(e => this.msg = '', 2000)
                } 
                else { this.msg = '輸入不完整。' }

                rej(0)
            })
        },

        init() {
            return new Promise(rej => {
                if (this.coec) {
                    // console.log("COEC 的樣子 =", this.coec)
                    
                    this.reset( this.coec )
                    this.reset_attr( this.coec.attribute_of_edit )
                } else {
                    this.form.unit_price = this.cake.__price
                    this.form.original_price = this.cake.__regular_price
                }
                rej(0)
            })
        },

        //
        reset_attr( attr_of_edit ) {  for (let k in attr_of_edit) { this.attribute[ k ] = attr_of_edit[ k ] } },

        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            if (!this.form.quantity) {
                this.form_err.quantity = true; return undefined;
            } else {
                this.form_err.quantity = false;
            }
            if (!this.form.unit_price && this.form.unit_price != 0) {
                this.form_err.unit_price = true; return undefined;
            } else {
                this.form_err.unit_price = false;
            }
            
            delete this.form.id; return this.form
        },

    },
    mounted() { this.init() },
}
</script>