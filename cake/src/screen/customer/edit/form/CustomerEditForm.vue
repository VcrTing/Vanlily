<template>
    <div>
        <div class="fx-l row_x2 upper">
            <ui-input class="w-33" :header="'名稱'" :is_err="named_err">
                <input class="input w-100" v-model="one.username" placeholder="請輸入客戶名稱"/>
            </ui-input>
            <ui-input class="w-33" :header="'電話'" :is_txt_mode="true">
                {{ one.phone_no }}
            </ui-input>
            <div class="w-33"></div>
        </div>
        <div class="py"></div>
        <div class="fx-l row_x2 upper">
            <ui-input class="w-33" :header="'郵箱地址'" :is_err="emaii_err">
                <input class="input w-100" v-model="one.email" placeholder="請輸入客戶名稱"/>
            </ui-input>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInlineInput, UiInput },
    props: [
        'one'
    ],
    data() {
        return {
            named_err: false,
            emaii_err: false
        }
    },
    methods: {
        buiid() {
            let res = { username: this.one.username }

            if (!this.one.username) {
                this.named_err = true; return undefined;
            } else {
                this.named_err = false;
            }

            const src = this.one.email
            if (!src) {
                
            } else {
                if (!this.vid.input.vid_email(src)) {
                    this.emaii_err = true; return undefined;
                } else {
                    res[ 'email' ] = src
                }
            }

            return res
        }
    }
}
</script>