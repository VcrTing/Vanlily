<template>
    <!-- SETP 1 -->
<nav>
    {{iog(attrs)}}
    <div class="fx-s pb_x2 pt">
        <ui-input class="w-31" :is_err="form_err.style" :header="'款式：'" :is_txt_mode="true">
            <!--ui-icon-input :icon="'mdi-cake-variant-outline'" :_right="true">
                <input v-model="form.style" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input-->
            <var-cake-name v-if="prod" :prod="prod"/>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.color" :header="'主題顏色：'" :is_txt_mode="true">
            <!--ui-icon-input :icon="'mdi-palette'" :_right="true">
                <input v-model="form.color" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input-->
            - -
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.chis" :header="'呎時：'">
            <ui-icon-input :icon="'mdi-ruler'" :_right="true">
                <input v-model="form.chis" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
    </div>
    <div class="fx-s pb_x2 pt_s">
        <ui-input class="w-31" :is_err="form_err.weight" :header="'重量：'">
            <ui-icon-input :icon="'mdi-weight-gram'" :_right="true">
                <input v-model="form.weight" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.smile" :header="'味道：'">
            <ui-icon-input :icon="'mdi-candy'" :_right="true">
                <input v-model="form.smile" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <div class="w-31">&nbsp;</div>
    </div>
</nav>
</template>

<script>
import VarCakeName from '../../../../../front/variab/cake/VarCakeName.vue'
import UiIconInput from '../../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, UiIconInput, VarCakeName },
    props: {
        cake: Object
    },
    data() {
        return {
            form: { style: '', color: '', chis: '', weight: '', smile: '' },
            form_err: { style: false, color: false, chis: false, weight: false, smile: false },
        }
    },
    computed: {
        prod() { return this.cake ? this.cake.product : { } },
        attrs() {
            let res = this.cake ? this.cake.attribute : null
            return res ? this.strapi.view(res.data) : [ ]
        },
        aiiow() { return !(this.form_err.style || this.form_err.color || this.form_err.chis || this.form_err.weight || this.form_err.smile) }
    },
    methods: {
        reset() {
            if (this.one) {
                this.form.style = ''
            }
        },
        can() {
            if (!this.form.style) { this.form_err.style = true; return null }
            if (!this.form.color) { this.form_err.color = true; return null }
            if (!this.form.chis) { this.form_err.chis = true; return null }
            if (!this.form.weight) { this.form_err.weight = true; return null }
            if (!this.form.smile) { this.form_err.smile = true; return null }
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