<template>
    <div class="upper">
        <div class="fx-s px-row fx-t">
            <ui-inline-input class="w-30" :header="'編號:'" :_txt_mode="true">
                <div v-if="materiai">{{ materiai.id ? materiai.id : '(提交後自動生成)' }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-24" :is_err="form_err.type" :header="'類別:'" :_txt_mode="is_view">
                <input v-if="!is_view" v-model="form.type" class="input" placeholder="請輸入"/>
                <div v-else>{{ materiai.type }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-36" :is_err="form_err.name" :header="'全名:'" :_txt_mode="is_view">
                <input v-if="!is_view" v-model="form.name" class="input" placeholder="請輸入"/>
                <div v-else>{{ materiai.name }}</div>
            </ui-inline-input>
        </div>
        <div class="fx-s px-row pb_x2">
            <ui-inline-input class="w-30" :is_err="form_err.brand" :header="'品牌:'">
                <input v-if="!is_view" v-model="form.brand" class="input" placeholder="請輸入內容"/>
                <div v-else>{{ materiai.brand }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-24" :is_err="form_err.specification" :header="'規格:'">
                <input v-if="!is_view" v-model="form.specification" class="input" placeholder="請輸入"/>
                <div v-else>{{ materiai.specification }}</div>
            </ui-inline-input>
            <div class="w-36"></div>
        </div>
        <div v-if="is_view" class="pb_x"><hr/></div>
        <ui-input class="px-row" :header="'備註:'" :is_err="false">
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
            type: String, default: 'VIEW'
        },
        materiai: {
            type: Object, default: () => { return { } }
        }
    },
    computed: {
        is_view() { return this.mode == 'VIEW' }, 
        is_edit() { return this.mode == 'EDIT' }, is_creat() { return this.mode == 'CREAT' },
    },
    data() {
        return {
            form: { id: '', name: '', type: '', brand: '', specification: '', remarks: '' },
            form_origin: { id: '', name: '', type: '', brand: '', specification: '', remarks: '' },
            form_err: { name: false, type: false, brand: false, specification: false}
        }
    },
    mounted() { 
        if (this.is_edit) { this.reset( this.materiai ) }
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