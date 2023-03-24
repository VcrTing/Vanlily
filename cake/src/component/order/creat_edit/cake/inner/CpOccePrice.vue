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
        edit: Boolean,
        one: Object
    },
    data() {
        return {
            form: { cake_cost: '', gz_cost: '', other_cost: '', total_cost: '', num: '', yh: '' },
            form_origin: { cake_cost: '', gz_cost: '', other_cost: '', total_cost: '', num: '', yh: '' },
            form_err: { cake_cost: false, gz_cost: false, other_cost: false, total_cost: false, num: false, yh: false }
        }
    },
    mounted() { 
        if (this.edit) { this.reset( this.one ); console.log('重置 one =', this.one) }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            delete this.form.id
            return this.form
        },
    }
}
</script>