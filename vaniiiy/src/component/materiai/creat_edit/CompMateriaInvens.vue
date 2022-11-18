<template>
    <div>
        <div v-if="is_view" class="px_x2 pb_x2 pt">
            <nav class="fx-s row_x2">
                <div class="w-333">
                    <fn-num-card :active="true" :header="'庫存'">{{ materiai.stock }}</fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'已使用'">{{ materiai.used }}</fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'壞貨'">{{ materiai.broken }}</fn-num-card>
                </div>
            </nav>
        </div>
        <div v-else class="fx-s px_x2">
            <ui-inline-input class="w-30" :is_err="form_err.stock" :header="'庫存:'" :_class="'min-3em'">
                <input v-model="form.stock" class="input" type="number" placeholder="請輸入"/>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.used" :header="'已使用:'">
                <input v-model="form.used" class="input" type="number" placeholder="請輸入"/>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.broken" :header="'壞貨:'" :_class="'min-3em'">
                <input v-model="form.broken" class="input" type="number" placeholder="請輸入"/>
            </ui-inline-input>
        </div>
    </div>
</template>

<script>
import FnNumCard from '../../../front/card/FnNumCard.vue'
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import VfProTypeSelect from '../../view_form/pros/VfProTypeSelect.vue'
export default {
    components: { UiInlineInput, VfProTypeSelect, UiInput, FnNumCard },
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

        aiiow() { return !(this.form_err.stock || this.form_err.used || this.form_err.broken ) }
    },
    data() {
        return {
            form: { stock: '', used: '', broken: '' },
            form_err: { stock: false, used: false, broken: false }
        }
    },
    mounted() { 
        if (this.is_edit) { this.reset() }
    },
    methods: {
        reset() {
            for (let k in this.form) {
                this.form[ k ] = this.materiai[ k ]
            }
        },

        can() {
            if (!this.form.stock) { this.form_err.stock = true; return null }
            if (!this.form.used) { this.form_err.used = true; return null }
            if (!this.form.broken) { this.form_err.broken = true; return null }
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

<style>

</style>