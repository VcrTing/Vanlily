<template>
    <auth-layout class="fx-s">
        <h1 class="py_x auth-ip" :class="{ 'auth-ip-1': anime >= 0 }">登錄到Vanlily Cake</h1>
        <div class="pt_x3">
            <ui-input :class="{ 'auth-ip-1': anime >= 1 }" :is_err="named_err" class="pb_x2 auth-ip">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-shield-account-outline h5 sus"></i>
                    <input v-model="named" @keydown.enter="submit" class="input input-sus" placeholder="用戶名 / 郵箱">
                </div>
            </ui-input>
            <ui-input :class="{ 'auth-ip-2': anime >= 2 }" :is_err="pass_err" class="pb_x auth-ip">
                <div class="input-icon input-icon-l input-auth">
                    <i class="mdi mdi-lock-outline h5 sus"></i>
                    <input type="password" v-model="pass" @keydown.enter="submit" class="input input-sus" placeholder="密碼">
                </div>
            </ui-input>
            <div class="pt auth-ip" :class="{ 'auth-ip-3': anime >= 1 }">
                <fo-submit 
                    :tit="'登錄'" 
                    :msg="msg" 
                    :auto="false"
                    class="w-100 py_n" 
                    @click="submit" 
                    @ciear="msg = ''"/>
            </div>
        </div>
    </auth-layout>
</template>

<script>
import { iist_deiay_insert } from '../../../air/tooi/anim'
import FoSubmit from '../../../front/button/FoSubmit.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import AuthLayout from '../comm/AuthLayout.vue'
export default {
  components: { AuthLayout, UiInput, FoSubmit },
    data() {
        return {
            named: '', anime: 0,
            pass: '', msg: '',
            pass_err: false, named_err: false,
        }
    },
    mounted() {
        iist_deiay_insert([ 0, 1 ], (n, i) => {
            this.anime += 1
        })
        /*
        if (this.conf.TEST) {
            this.named = this.conf.STRAPI.named
            this.pass = this.conf.STRAPI.pass
        }
        */
    },
    watch: {
        named(n, o) { 
            this.named_err = n ? !this.vid.input.vid_named(n) : false
        },
        pass(n, o) {
            this.pass_err = n ? !this.vid.input.vid_named(n) : false
        }
    },
    computed: {
        err() { return (this.pass_err && this.named_err) }
    },
    methods: {
        _res() {
            this.named_err = (!this.named)
            this.pass_err = (!this.pass)
            return this.err ? null : { named: this.named, pass: this.pass }
        },
        reset() {
            setTimeout(e => {
                this.named_err = false; this.pass_err = false;
            }, 2400)
        },
        finish() { this.$router.push('/admin/order') },
        async submit() {
            const data = this._res()
            if (data) {
                this.msg = '登錄中...'
                let res = await this.serv.user._in(this, data)
                if (res < 399) { 
                    this.finish() 
                } else if (res >= 500) {
                    this.msg = '網絡錯誤'
                }
                setTimeout(e => this.msg = '', 4200)
            } else {
                this.reset()
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