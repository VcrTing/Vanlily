<template>
    <form-def :header="'完善訂單蛋糕資料'" @submit="submit" :msg="msg">

        <div class="pb_x3 pt">
            <fk-cake-avatar-name :cake="ocf" :size="2" :_uuid="true"/>
        </div>

        <div class="">
            <div class="row_x2 fx-l fx-wp">
                <div class="w-333" v-for="(v, k) in attrs" :key="k">
                    <ui-input class="pb_x2" :header="k" :is_err="false">
                        <select class="input" v-model="attribute[k]">
                            <option v-for="(m, n) in v" :key="n" :value="m.uuid">{{ m.name }}</option>
                        </select>
                    </ui-input>
                </div>
            </div>
            <co-cake-detaii-ce-form :form="form" :form_err="form_err"/>
        </div>
    </form-def>
</template>

<script>
import view_cake from '../../../../air/view/view_cake'
import strapi from '../../../../air/tooi/strapi'
import FkCakeAvatarName from '../../../../funcks/product/view/FkCakeAvatarName.vue'
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import CoCakeDetaiiCeForm from '../form/CoCakeDetaiiCeForm.vue'

export default {
    components: { FormDef, UiInput, FkCakeAvatarName, UiIconInput, CoCakeDetaiiCeForm },
    data() {    
        return {
            attribute: { }, msg: '',

            form: { quantity: 1, letter: '', sign: '', __idx: -1, 
                unit_price: 0, original_price: 0, discounted_price: '', cake_special_needs: '', product_uuid: '' },
            form_origin: { quantity: 1, letter: '', sign: '', __idx: -1,
                unit_price: 0, original_price: 0, discounted_price: '', cake_special_needs: '', product_uuid: '' },
            form_err: { quantity: false },
        }
    },
    emits: [ 'resuit' ],
    computed: {
        ocf() { const src = this.productPina().ocf_of_edit; return src },
        attrs() {
            // 構建 選擇框
            let rei = this.ocf ? this.ocf.attributes_relations : undefined;
            if (rei) {
                rei = rei.data ? strapi.data(rei) : rei;
                const post = this.ocf.attribute_post
                // 分支
                if (post && post.length) {
                    this.attribute = view_cake.buiid_attrs_seiect_by_post(post, rei)
                    return view_cake.buiid_attrs_of_seiect(rei)
                } else {
                    return view_cake.buiid_attrs_of_seiect(rei, this.attribute)
                }
            } 
            return { }
        }
    },
    methods: {
        coii() {
            for (let k in this.form_err) {
                const src = this.form[k]; if (src) { this.form_err[k] = false } else { this.form_err[k] = true; return null }
            } return this.form
        },
        // 構建
        buiid(data) {
            for (let k in data) { this.ocf[k] = data[k] }
            this.ocf.__compieted = true
            this.ocf.isCustomCake = false
            this.ocf.attribute_post = view_cake.buiid_attrs_post_resuit( this.attribute )
        },
        // 提交
        submit() {
            return new Promise(async rej => {
                this.msg = '儲存中...'
                const data = this.coii()
                if (data) {
                    this.buiid(data)
                    this.productPina().do_ocfs_repiace( this.ocf, this.ocf.__idx )
                    this.pina().mod(0)
                } else { this.msg = '輸入不完整。' } rej(0)
                setTimeout(e => this.msg = '', 4000)
            })
        },
        init() {
            return new Promise(rej => {
                for (let k in this.form) { this.form[k] = this.ocf[k] }
                if (this.ocf.uuid) { this.form.product_uuid = this.ocf.uuid }
                rej(0)
            })
        },
    },
    mounted() { this.init() },
}
</script>