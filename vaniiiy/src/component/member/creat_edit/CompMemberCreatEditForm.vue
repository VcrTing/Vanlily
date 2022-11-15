<template>
    <div>
        <div class="fx-s row_x2">
            <ui-input :header="'邮箱'" class="w-333" :is_err="form_err.email">
                <input v-if="is_edit" v-model="form.email" class="input w-100" placeholder="請輸入邮箱"/>
            </ui-input>
            <ui-input :header="'用户名称'" class="w-333" :is_err="form_err.name">
                <input v-if="is_edit" v-model="form.name" class="input w-100" placeholder="請輸入名稱"/>
            </ui-input>
            <ui-input :header="'电话号码'" class="w-333" :is_err="form_err.phone">
                <input v-if="is_edit" v-model="form.phone" class="input w-100" placeholder="請輸入电话号码"/>
            </ui-input>
        </div>
        <div class="pt_x4">
            <label>权限：</label>
            <div class="py"></div>
            <div class="fx-s w-60 w-80-p">
                <comp-member-roie-ce/>
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
            form: { email: '', name: '', phone: '' },
            form_err: { email: false, name: false, phone: false }
        }
    }    
}
</script>

<style>

</style>