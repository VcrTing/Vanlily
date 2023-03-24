<template>
    <auth-layout class="fx-s">
        <h1 class="t-c py_x">登錄到Vanlily Cake</h1>
        <div class="pt_x2">
            <ui-input :is_err="named_err" class="pb">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-shield-account-outline h5 sus"></i>
                    <input v-model="named" class="input br_s ip-w-100" placeholder="用戶名">
                </div>
            </ui-input>
            <ui-input :is_err="pass_err" class="pb">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-lock-outline h5 sus"></i>
                    <input type="password" v-model="pass" @keydown.enter="submit" class="input br_s ip-w-100" placeholder="密碼">
                </div>
            </ui-input>
            <div class="pt">
                <button @click="submit" class="btn-pri w-100 py br_s upper">
                    登錄
                </button>
            </div>
        </div>
    </auth-layout>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import AuthLayout from '../comm/AuthLayout.vue'
export default {
  components: { AuthLayout, UiInput },
    data() {
        return {
            named: '',
            pass: '',
            pass_err: false, named_err: false,
        }
    },
    mounted() {
        this.named = this.conf.STRAPI.named
        this.pass = this.conf.STRAPI.pass
    },
    watch: {
        named(n, o) { 
            this.named_err = n ? !this.vid.input.vid_named(n) : false
        },
        pass(n, o) {
            this.pass_err = n ? !this.vid.input.vid_named(n) : false
        }
    },
    methods: {
        _res() {
            return {
                named: this.named, pass: this.pass
            }
        },
        finish() { this.$router.push('/admin/order/view/query') },
        async submit() {
            const data = this._res()
            let res = await this.serv.user._in(this, data)
            // res < 399 ? this.finish() : undefined
            if (res < 399) {
                this.finish()
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.btn-pri
    letter-spacing: 0.42em
h1
    // font-size: 3vw !important
</style>