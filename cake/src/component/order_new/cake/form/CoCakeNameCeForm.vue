<template>
    <div>
        <div class="py">
            <ui-input class="w-100" :is_err="form_err.product_name" :header="'蛋糕名稱：'">
                <ui-icon-input :icon="'mdi-cake-variant'" :_right="true">
                    <input v-model="form.product_name" class="input" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
        </div>

        <div class="row_x2 fx-l fx-wp pb_x3 pt">
            <ui-input class="w-333" :is_err="form_err.cake_type" :header="'蛋糕款式：'">
                <ui-icon-input :icon="'mdi-caps-lock'" :_right="true">
                    <input v-model="form.cake_type" class="input" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>

            <ui-input class="w-333" :is_err="form_err.cake_flavor" :header="'蛋糕味道：'">
                <ui-icon-input :icon="'mdi-candy-outline'" :_right="true">
                    <input v-model="form.cake_flavor" class="input" placeholder="請輸入" >
                </ui-icon-input>
            </ui-input>

            <ui-input class="w-333" :is_err="form_err.cake_size" :header="'尺寸：'">
                <ui-icon-input :icon="'mdi-numeric'" :_right="true">
                    <input v-model="form.cake_size" class="input" placeholder="請輸入" >
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
    props: { form: Object, form_err: Object }
}
</script>