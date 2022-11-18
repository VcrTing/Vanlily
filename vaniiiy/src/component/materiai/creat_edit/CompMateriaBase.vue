<template>
    <div>
        <div class="fx-s px_x2 fx-t">
            <ui-inline-input class="w-30" :header="'編號:'" :_class="'min-3em'" :_txt_mode="true">
                <div v-if="materiai">{{ materiai.id ? materiai.id : '(提交後自動生成)' }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-24" :is_err="form_err.type" :header="'類別:'" :_class="'min-3em'" :_txt_mode="is_view">
                <input v-if="!is_view" v-model="form.type" class="input" placeholder="請輸入"/>
                <div v-else class="px">{{ materiai.type }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-36" :is_err="form_err.name" :header="'全名:'" :_class="'min-3em'" :_txt_mode="is_view">
                <input v-if="!is_view" v-model="form.name" class="input" placeholder="請輸入"/>
                <div v-else class="px">{{ materiai.name }}</div>
            </ui-inline-input>
        </div>
        <div class="fx-s px_x2">
            <ui-inline-input class="w-30" :is_err="form_err.brand" :header="'品牌:'" :_class="'min-3em'">
                <input v-if="!is_view" v-model="form.brand" class="input" placeholder="請輸入內容"/>
                <div v-else class="px">{{ materiai.brand }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-24" :is_err="form_err.specification" :header="'規格:'" :_class="'min-3em'">
                <input v-if="!is_view" v-model="form.specification" class="input" placeholder="請輸入"/>
                <div v-else class="px">{{ materiai.specification }}</div>
            </ui-inline-input>
            <div class="w-36"></div>
        </div>
        <div v-if="is_view" class="pb_x"><hr/></div>
        <ui-input class="px_x2" :header="'備註:'" :is_err="form_err.remarks">
            <textarea v-if="!is_view" v-model="form.remarks" class="input" placeholder="請輸入內容" aria-setsize="0"></textarea>
            <div v-else class="pb">{{ materiai.remarks }}</div>
        </ui-input>
    </div>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import VfProTypeSelect from '../../view_form/pros/VfProTypeSelect.vue'
export default {
    components: { UiInlineInput, VfProTypeSelect, UiInput },
    props: {
        mode: {
            type: String, default: 'VIEW' // EDIT // CREAT
        },
        materiai: {
            type: Object, default: () => { return { } }
        }
    },
    computed: {
        is_view() { return this.mode == 'VIEW' }, 
        is_edit() { return this.mode == 'EDIT' }, is_creat() { return this.mode == 'CREAT' },

        aiiow() { return !(this.form_err.name || this.form_err.type || this.form_err.brand
            || this.form_err.specification || this.form_err.remarks ) }
    },
    data() {
        return {
            form: { id: '', name: '', type: '', brand: '', specification: '', remarks: '' },
            form_err: { name: false, type: false, brand: false, specification: false, remarks: false }
        }
    },
    mounted() { 
        if (this.is_edit) {
            this.reset()
        }
    },
    methods: {
        reset() {
            for (let k in this.form) {
                this.form[ k ] = this.materiai[ k ]
            }
        },

        can() {
            if (!this.form.name) { this.form_err.name = true; return null }
            if (!this.form.type) { this.form_err.type = true; return null }
            if (!this.form.brand) { this.form_err.brand = true; return null }
            if (!this.form.specification) { this.form_err.specification = true; return null }
            delete this.form.id
            return true
        },
        coii() {
            if (this.can()) {
                return this.aiiow ? this.form : null
            }
        }
    }
}
</script>

<style lang="sass">
hr
    border-width: 2px
</style>