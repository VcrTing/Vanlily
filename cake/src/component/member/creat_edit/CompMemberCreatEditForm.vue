<template>
    <div>
        <div class="fx-s row_x2 fx-t">
            <ui-input :header="'用戶名稱'" class="w-333" :is_err="form_err.display_name">
                <input v-model="form.display_name" class="input w-100" placeholder="請輸入用戶姓名"/>
            </ui-input>
            <ui-input :header="'電話號碼'" class="w-333" :is_err="form_err.phone_no">
                <input v-model="form.phone_no" class="input w-100" placeholder="請輸入聯絡電話"/>
            </ui-input>
            <ui-input :header="'郵箱'" class="fx-1" :is_err="form_err.email">
                <input v-model="form.email" class="input w-100" placeholder="請輸入登錄用的郵箱地址"/>
            </ui-input>
        </div>
        <div class="py"></div>
        <div class="fx-l row_x2">
            <ui-input v-if="!_edit" :header="'密碼'" class="w-333" :is_err="form_err.password">
                <input :type="_edit ? 'password' : 'text'" v-model="form.password" class="input w-100" placeholder="請輸入登錄用的密碼"/>
            </ui-input>
            <div class="w-666">
                <label>權限</label>
                <div class="fx-l row_x2 pt_x2 mh-43 pl_x2">
                    <comp-member-roie-ce @resuit="(n) => form.role = n" ref="roie"/>
                </div>
            </div>
        </div>
        <!--
        <div v-if="_edit" class="pt_x2">
            <div class="fx-l row_x2">
                <ui-input :header="'確認密碼'" class="w-333" :is_err="form_err.password">
                    <input type="password" v-model="form.password" class="input w-100" placeholder="請輸入登錄用的密碼"/>
                </ui-input>
            </div>
        </div>
        -->

        <div class="pt_x3" v-if="!_edit">
            <p>注意:</p>
            <div class="pl_x2">
                <p>請填寫好全部的數據；</p>
                <p>請確保密碼長度大於6位數，小於99位數。</p>
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
        one: Object,
        
        _edit: Boolean
    },
    data() {
        return {
            form: { email: '', display_name: '', username: '', phone_no: '', password: '', role: '' },
            form_err: { email: false, display_name: false, username: false, phone_no: false, password: false, role: false },
            form_origin: { email: '', display_name: '', username: '', phone_no: '', password: '', role: '' },
        }
    },
    mounted() {
        if (this._edit) {
            this.reset( this.one )
        }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) {
            if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } }
            const src = this.form.role
            if (src instanceof Object) {
                this.$refs.roie.ioc( src.type )
            } else {
                this.$refs.roie.ioc( src )
            }
        },
        buiid() {
            return new Promise(rej => {
                // 郵箱
                if (!this.vid.input.vid_email( this.form['email'] )) {
                    this.form_err['email'] = true; return undefined;
                } else {
                    this.form_err['email'] = false
                }

                this.form.username = this.form.email

                for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else {
                    this.form_err [ k ] = false
                } }

                // 密碼
                const passL = this.form.password.length
                if (passL < 6 || passL > 100) {
                    this.form_err['password'] = true; return undefined;
                } else {
                    this.form_err['password'] = false;
                }

                // 編輯模式
                if (this._edit) {
                    delete this.form.password
                }
                rej( this.form )
            })
        },
    }  
}
</script>