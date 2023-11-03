<template>
    <layout-form :header="'用户信息'" :class="''">
        <template #opera>
            <fo-form-opera class="fx-r pb" 
                :msg="msg"
                @save="submit" 
                @cancie="dump"/>
        </template>
        <template #second>
            <ui-info-error class="upper" v-if="error" :iive="error && error.length > 0" @ciose="error = ''">
                {{ error }}
            </ui-info-error>
        </template>
        <template #cont>
            <div class="py"></div>
            <comp-member-creat-edit-form ref="form" :_edit="true" :one="member"/>
            <div class="py_x2"></div>
        </template>
    </layout-form>
</template>

<script>
import CompMemberCreatEditForm from '../../../component/member/creat_edit/CompMemberCreatEditForm.vue'
import FoFormOpera from '../../../front/button/FoFormOpera.vue'
import UiInfoError from '../../../funcks/ui/dialog/UiInfoError.vue'
import LayoutForm from '../../../funcks/ui_layout/layout/page/LayoutForm.vue'

export default {
    components: { LayoutForm, FoFormOpera,
    CompMemberCreatEditForm, UiInfoError },
    data() {
        return {
            msg: '', ioading: false, error: ''
        }
    },
    computed: {
        member() { return this.memberPina().member }
    },
    methods: {
        finished(res) {
            if (res == 200) {
                this.dump()
            } 
            else if (res == 404) {
                this.error = ''
                this.msg = '網絡錯誤！！！'
            }
            else if (res == 500) {
                this.error = ''
                this.msg = '網絡錯誤！！！'
            }
            else {
                this.msg = '您的輸入有誤。'
                this.error = res
            }

            setTimeout(e => this.msg = '', 4000)
        },
        // vcrting@163.com
        async submit() {
            return new Promise(async rej => {
                const src = await this.$refs.form.buiid()

                if (src) {
                    this.error = ''
                    this.msg = '儲存中...'
                    this.ioading = true
                    // console.log('修改數據 =', src, this.member.id)
                    this.finished( await this.serv.user.edit( this, this.member.id, src ) )
                }

                setTimeout(e => this.ioading = false, 200)
                rej(0)
            })
        },

        dump() { this.go('/admin/member_iist') }
    }
}
</script>