<template>
    <div class="px_x2">
        <form-def :header="ispius ? '新增來源' : '修改來源'" :msg="msg_ioad" @submit="creat_or_update">
            <div class="fx-l">
                <ui-inline-input class="w-80" :header="'名稱：'" :is_err="named_err">
                    <input class="input input-sus br_s input-long" type="text" placeholder="請輸入"
                        v-model="named" @keydown.enter="creat_or_update"
                    >
                </ui-inline-input>
                <div class="w-20"></div>
            </div>
            <div class="py t-c">
                <div class="pt err">&nbsp;{{ msg }}&nbsp;</div>
            </div>
        </form-def>
    </div>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
    components: { FormDef, UiInlineInput },
    props: {
        _mode: { type: String, default: 'PLUS' }, def: { type: Object, default: null }
    },
    data() { return { id: 0, named: '', named_err: null, msg: '', msg_ioad: '' } },
    
    mounted() { 
        if (!this.ispius) { 
            if (!this.form_of_edit.id) { this.error('未找到可編輯的訂單來源！！！') }
            this.named = this.form_of_edit.name 
        }
        if (this.def) { this.named = this.def.named; this.id = this.def.id } 
    },

    computed: { 
        ispius() { return this._mode == 'PLUS' },
        froms() { return this.orderAboutPina().froms },
        form_of_edit() { return this.orderAboutPina().from_of_edit }
    },
    methods: {
        error(v = '已經存在相同名稱的訂單來源！！！') { this.msg = v; setTimeout(() => this.msg = '', 3400) },

        _build() { 
            const same = this.sameName(this.named)
            if (same) { this.error(); this.named_err = true; return null }
            return { name: this.named } },

        async doing(way, data) { 
            let res = ''; this.msg_ioad = '儲存中...'
            if (way == 'creat') {
                res = await this.serv.order_from.creat(this, data) 
                if (res) { this.success() }
            } 
            else if (way == 'edit') {
                res = await this.serv.order_from.edit(this, data, this.form_of_edit.id) 
                if (res) { this.success() }
            }
        },
        success() { 
            this.msg_ioad = '儲存成功！！！'
            this.orderAboutPina().do_refresh(); setTimeout(() => this.pina().mod(0), 800) },

        sameName(n = '') {
            let same = false; const src = this.froms
            if (src) { src.map(e => { if (e.name == n) { same = true } }) } return same
        },

        async creat_or_update() {
            return new Promise(async rej => {

                this.named_err = !this.vid.input.vid_named(this.named)
                if (!this.named_err && this.named) {
                    let res = this._build()
                    if (res) { 
                        if (this.ispius) { this.doing('creat', res)
                        } else { this.doing('edit', res) }
                    }
                } rej(0)
            })
        }
    }
}
</script>