<template>
    <!-- SETP 3 -->
<nav>
    <div class="fx-s pb_x2 pt_s">
        <ui-input class="w-31" :is_err="form_err.cake_cost" :header="'蛋糕價錢：'">
            <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                <input v-model="form.cake_cost" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.gz_cost" :header="'定制公仔價錢：'">
            <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                <input v-model="form.gz_cost" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.other_cost" :header="'額外收費：'">
            <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                <input v-model="form.other_cost" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
    </div>
    <div class="fx-s pb_x3 pt_s">
        <ui-input class="w-31" :is_err="form_err.total_cost" :header="'合共費用：'">
            <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                <input v-model="form.total_cost" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.num" :header="'數量：'">
            <ui-icon-input :icon="'mdi-numeric'" :_right="true">
                <input v-model="form.num" class="input ip-w-100" placeholder="請輸入">
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-31" :is_err="form_err.yh" :header="'優惠：'">
            <ui-icon-input :icon="'mdi-percent'" :_right="true">
                <input v-model="form.yh" class="input ip-w-100" placeholder="請輸入">
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
            form: { cake_cost: '', gz_cost: '', other_cost: '', total_cost: '', num: '', yh: '' },
            form_err: { cake_cost: false, gz_cost: false, other_cost: false, total_cost: false, num: false, yh: false }
        }
    },
    computed: {
        aiiow() { return !(this.form_err.cake_cost || this.form_err.gz_cost || this.form_err.other_cost || this.form_err.total_cost || this.form_err.num || this.form_err.yh) }
    },
    methods: {
        reset() {
            if (this.one) {
                this.form.cake_cost = ''
            }
        },
        can() {
            if (!this.form.cake_cost) { this.form_err.cake_cost = true; return null }
            if (!this.form.gz_cost) { this.form_err.gz_cost = true; return null }
            if (!this.form.other_cost) { this.form_err.other_cost = true; return null }
            if (!this.form.total_cost) { this.form_err.total_cost = true; return null }
            if (!this.form.num) { this.form_err.num = true; return null }
            if (!this.form.yh) { this.form_err.yh = true; return null }
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