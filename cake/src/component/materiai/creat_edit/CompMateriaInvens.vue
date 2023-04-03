<template>
    <div class="px-row upper">
        <div v-if="is_view" class="pb_x2 pt">
            <nav class="fx-s row_x2">
                <div class="w-333">
                    <fn-num-card :active="true" :header="'庫存'">
                        <span v-if="materiai.stock">{{ materiai.stock }}</span>
                        <span v-else>0</span>
                    </fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'已使用'">
                        <span v-if="materiai.used">{{ materiai.used }}</span>
                        <span v-else>0</span>
                    </fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'壞貨'">
                        <span v-if="materiai.broken">{{ materiai.broken }}</span>
                        <span v-else>0</span>
                    </fn-num-card>
                </div>
            </nav>
        </div>
        <div v-else class="fx-s pb_x2 pt">
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
    },
    data() {
        return {
            form: { stock: '', used: '', broken: '' },
            form_origin: { stock: '', used: '', broken: '' },
            form_err: { stock: false, used: false, broken: false }
        }
    },
    mounted() { 
        if (this.is_edit) { this.reset( this.materiai ) }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) { 
                if (this.form[k] != 0) {
                    if (!this.form[k]) { this.form_err[k] = true; return undefined; } 
                }
            }
            return this.form
        },
    }
}
</script>