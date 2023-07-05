<template>
  <div>
        <div class="row_x2 fx-l fx-wp pb_x2">
            <ui-input class="w-333" :is_err="form_err.quantity" :header="'數量：'">
                <ui-icon-input :icon="'mdi-numeric'" :_right="true">
                    <input v-model="form.quantity" class="input bg" placeholder="請輸入" type="number">
                </ui-icon-input>
            </ui-input>

            <ui-input class="w-333" :is_err="false" :header="'生日牌：'">
                <ui-icon-input :icon="'mdi-butterfly-outline'" :_right="true">
                    <input v-model="form.sign" class="input" placeholder="請輸入" >
                </ui-icon-input>
            </ui-input>

            <ui-input class="w-333" :is_err="false" :header="'字粒：'">
                <ui-icon-input :icon="'mdi-alphabetical-variant'" :_right="true">
                    <input v-model="form.letter" class="input" placeholder="請輸入" >
                </ui-icon-input>
            </ui-input>
        </div>

        <div class="fx-l fx-wp pb_x2">
            <ui-input class="w-100" :is_err="false" :header="'特別要求：'">
                <ui-icon-input :icon="'mdi-format-font'" :_right="true">
                    <textarea class="input" v-model="form.cake_special_needs" placeholder="請輸入"></textarea>
                </ui-icon-input>
            </ui-input>
        </div>
        
        <div class="row_x2 fx-l fx-wp pb_x2">
            <ui-input class="w-333" :is_err="false" :header="'原價'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form.original_price" class="input " placeholder="請輸入" type="number">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-40" :is_err="false" :header="'單價'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form.unit_price" class="input " placeholder="請輸入" type="number">
                </ui-icon-input>
            </ui-input>
            <ui-input class="fx-1" :is_err="false" :header="'折扣價'">
                <ui-icon-input :icon="'mdi-percent'" :_right="true">
                    <input v-model="form.discounted_price" class="input " placeholder="打折後的蛋糕價格" type="number">
                </ui-icon-input>
            </ui-input>
        </div>
  </div>
</template>

<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
    components: { UiInput, UiIconInput },
    props: {
        form: Object,
        form_err: Object,
    }
}
</script>