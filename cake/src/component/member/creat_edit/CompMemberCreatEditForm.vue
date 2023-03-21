<template>
    <div>
        <div class="fx-s row_x2">
            <ui-input :header="'郵箱'" class="w-333" :is_err="form_err.email">
                <input v-model="form.email" class="input w-100" placeholder="請輸入郵箱"/>
            </ui-input>
            <ui-input :header="'用戶名稱'" class="w-333" :is_err="form_err.display_name">
                <input v-model="form.display_name" class="input w-100" placeholder="請輸入名稱"/>
            </ui-input>
            <ui-input :header="'電話號碼'" class="w-333" :is_err="form_err.phone">
                <input v-model="form.phone" class="input w-100" placeholder="請輸入電話號碼"/>
            </ui-input>
        </div>
        <div class="pt_x4">
            <label>權限：</label>
            <div class="fx-s row_x2 pt">
                <div class="w-333">
                    <select v-model="form.role" class="input w-100">
                        <option value="admin">Administrator</option>
                        <option value="authenticated">Authenticated</option>
                    </select>
                </div>
                <!--
                <comp-member-roie-ce/>
                -->
            </div>
        </div>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import CompMemberRoieCe from '../roie/CompMemberRoieCe.vue'
export default {
    components: {
        UiInput,
        CompMemberRoieCe
    },
    props: {
        is_edit: Boolean
    },
    data() {
        return {
            form: { email: '', display_name: '', phone: '', role: '' },
            form_err: { email: false, display_name: false, phone: false, role: false },
            form_origin: { email: '', display_name: '', phone: '', role: '' },
        }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) {
            if (v) {
                for (let k in this.form) { this.form[ k ] = v[ k ] }
            }
        },
        buiid() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            return this.form
        },
    }  
}
</script>