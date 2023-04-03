<template>
    <div class="fx-l row_x2 upper">
        <ui-input class="w-33" :header="'名稱'" :is_err="named_err">
            <input class="input w-100" v-model="one.username" placeholder="請輸入客戶名稱"/>
        </ui-input>
        <ui-input class="w-33" :header="'電話'" :is_txt_mode="true">
            {{ one.phone_no }}
        </ui-input>
        <div class="w-33"></div>
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
            named_err: false
        }
    },
    methods: {
        buiid() {
            if (!this.one.username) {
                this.named_err = true; return undefined;
            } else {
                this.named_err = false;
            }
            return {
                username: this.one.username
            }
        }
    }
}
</script>