<template>
    <!-- SETP 2 -->
<nav>
    <ui-input class="w-100 pb_x2 pt_s" :is_err="form_err.pai" :header="'生日牌內容：'">
        <ui-icon-input :icon="'mdi-billboard'" :_right="true">
            <textarea v-model="form.pai" class="input ip-w-100" placeholder="請輸入"></textarea>
        </ui-icon-input>
    </ui-input>
    <ui-input class="w-100 pb_x2 pt_s" :is_err="form_err.zili" :header="'生日字粒：'">
        <ui-icon-input :icon="'mdi-format-font'" :_right="true">
            <textarea v-model="form.zili" class="input ip-w-100" placeholder="請輸入"></textarea>
        </ui-icon-input>
    </ui-input>
    <div class="fx-s pb_x2 pt_s">
        <ui-input class="w-31" :is_err="form_err.gz" :header="'定制公仔：'">
            <ui-icon-input :icon="'mdi-teddy-bear'" :_right="true">
                <input v-model="form.gz" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-65" :is_err="form_err.gz_mark" :header="'特別要求：'">
            <ui-icon-input :icon="'mdi-frequently-asked-questions'" :_right="true">
                <input v-model="form.gz_mark" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
    </div>
</nav>
</template>

<script>
import UiIconInput from '../../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
    components: {
        UiIconInput, UiInput
    },
    props: {
        cake: Object
    },
    data() {
        return {
            form: {  pai: '', zili: '', gz: '', gz_mark: '' },
            form_err: {  pai: false, zili: false, gz: false, gz_mark: false },
        }
    },
    computed: {
        aiiow() { return !(this.form_err.pai || this.form_err.zili || this.form_err.gz || this.form_err.gz_mark) }
    },
    methods: {
        reset() {
            if (this.one) {
                this.form.pai = ''
            }
        },
        can() {
            if (!this.form.pai) { this.form_err.pai = true; return null }
            if (!this.form.zili) { this.form_err.zili = true; return null }
            if (!this.form.gz) { this.form_err.gz = true; return null }
            if (!this.form.gz_mark) { this.form_err.gz_mark = true; return null }
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