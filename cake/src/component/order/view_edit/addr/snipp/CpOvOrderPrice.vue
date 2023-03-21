<template>

    <div class="fx-s fx-t cold">
        <div class="w-37">
            <p class="">運費</p>
            <p class="">&nbsp;</p>
        </div>
        <div class="w-28">
            <p>運費價格</p>
            <p class="pb" v-if="!is_edit">
                <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="h5">120</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
            </p>
            <ui-input v-else :is_err="form_err.cost" class="pr_x2">
                <ui-input-money>
                    <input type="number" placeholder="請輸入" v-model="form.cost">
                </ui-input-money>
            </ui-input>
        </div>
        <div class="w-28">
            <p class="pri_son">附加運費價格</p>
            <p class="pb pl_x2 pri_son" v-if="!is_edit">
                <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="h5">120</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
            </p>
            <ui-input v-else :is_err="form_err.cost_add">
                <ui-input-money>
                    <input type="number" placeholder="請輸入" v-model="form.cost_add">
                </ui-input-money>
            </ui-input>
        </div>
        <div class="w-12">

        </div>
    </div>
</template>

<script>
import UiInputMoney from '../../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, UiInputMoney },
    props: {
        is_edit: Boolean
    },
    data() {
        return {
            form: { cost: null, cost_add: null },
            form_err: { cost: false, cost_add: false }
        }
    }
}
</script>

<style>

</style>