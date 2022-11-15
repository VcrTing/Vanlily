<template>
    <form-def :header="'蛋糕資料'">
        <!-- SETP 1 -->
        <div class="fx-s pb_x2 pt">
            <ui-input class="w-31" :is_err="form1_err.style" :header="'款式：'">
                <ui-icon-input :icon="'mdi-cake-variant-outline'" :_right="true">
                    <input v-model="form1.style" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form1_err.color" :header="'主題顏色：'">
                <ui-icon-input :icon="'mdi-palette'" :_right="true">
                    <input v-model="form1.color" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form1_err.chis" :header="'呎時：'">
                <ui-icon-input :icon="'mdi-ruler'" :_right="true">
                    <input v-model="form1.chis" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
        </div>
        <div class="fx-s pb_x2 pt_s">
            <ui-input class="w-31" :is_err="form1_err.weight" :header="'重量：'">
                <ui-icon-input :icon="'mdi-weight-gram'" :_right="true">
                    <input v-model="form1.weight" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form1_err.smile" :header="'味道：'">
                <ui-icon-input :icon="'mdi-candy'" :_right="true">
                    <input v-model="form1.smile" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <div class="w-31">&nbsp;</div>
        </div>
        <!-- SETP 2 -->
        <ui-input class="w-100 pb_x2 pt_s" :is_err="form2_err.pai" :header="'生日牌內容：'">
            <ui-icon-input :icon="'mdi-billboard'" :_right="true">
                <textarea v-model="form2.pai" class="input ip-w-100" placeholder="請輸入"></textarea>
            </ui-icon-input>
        </ui-input>
        <ui-input class="w-100 pb_x2 pt_s" :is_err="form2_err.zili" :header="'生日字粒：'">
            <ui-icon-input :icon="'mdi-format-font'" :_right="true">
                <textarea v-model="form2.zili" class="input ip-w-100" placeholder="請輸入"></textarea>
            </ui-icon-input>
        </ui-input>
        <div class="fx-s pb_x2 pt_s">
            <ui-input class="w-31" :is_err="form2_err.gz" :header="'定制公仔：'">
                <ui-icon-input :icon="'mdi-teddy-bear'" :_right="true">
                    <input v-model="form2.gz" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-65" :is_err="form2_err.gz_mark" :header="'特別要求：'">
                <ui-icon-input :icon="'mdi-frequently-asked-questions'" :_right="true">
                    <input v-model="form2.gz_mark" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
        </div>
        <!-- SETP 3 -->
        <div class="fx-s pb_x2 pt_s">
            <ui-input class="w-31" :is_err="form3_err.cake_cost" :header="'蛋糕價錢：'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form3.cake_cost" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form3_err.gz_cost" :header="'定制公仔價錢：'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form3.gz_cost" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form3_err.other_cost" :header="'額外收費：'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form3.other_cost" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
        </div>
        <div class="fx-s pb_x3 pt_s">
            <ui-input class="w-31" :is_err="form3_err.total_cost" :header="'合共費用：'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input v-model="form3.total_cost" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form3_err.num" :header="'數量：'">
                <ui-icon-input :icon="'mdi-numeric'" :_right="true">
                    <input v-model="form3.num" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-31" :is_err="form3_err.yh" :header="'優惠：'">
                <ui-icon-input :icon="'mdi-percent'" :_right="true">
                    <input v-model="form3.yh" class="input ip-w-100" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
        </div>
    </form-def>
</template>

<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
    components: { FormDef, UiInput,
        UiIconInput},
    data() {
        return {
            form1: { style: '', color: '', chis: '', weight: '', smile: '' },
            form2: {  pai: '', zili: '', gz: '', gz_mark: '' },
            form3: { cake_cost: '', gz_cost: '', other_cost: '', total_cost: '', num: '', yh: '' },

            form1_err: { style: false, color: false, chis: false, weight: false, smile: false },
            form2_err: {  pai: false, zili: false, gz: false, gz_mark: false },
            form3_err: { cake_cost: false, gz_cost: false, other_cost: false, total_cost: false, num: false, yh: false }
        }
    }
}
</script>

<style lang="sass" scoped>
.w-65
    width: 65.4% !important
</style>