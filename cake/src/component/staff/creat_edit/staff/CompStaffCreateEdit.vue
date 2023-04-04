<template>
    <form-def @submit="create_or_update" :header="'員工資料'">
        <div class="fx-s pb_x3">
            <ui-input class="w-333 pr_x2" :is_err="form_err.named" :header="'姓名：'">
                <ui-icon-input :_right="true">
                    <input v-model="form.named" class="w-100 input" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-333 pr_x2" :is_err="form_err.number" :header="'員工編號：'">
                <ui-icon-input :icon="'mdi-card-account-details-outline'" :_right="true">
                    <input v-model="form.number" class="w-100 input" placeholder="請輸入">
                </ui-icon-input>
            </ui-input> <div class="w-33"></div>
        </div>
        <div class="fx-s pb_x3">
            <ui-input class="w-333 pr_x2" :is_err="form_err.depart" :header="'部門：'">
                <ui-icon-input :icon="'mdi-card-account-details-outline'" :_right="true">
                    <input v-model="form.depart" class="w-100 input" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-333 pr_x2" :is_err="form_err.position" :header="'職位：'">
                <ui-icon-input :icon="'mdi-card-account-details-outline'" :_right="true">
                    <input class="w-100 input" v-model="form.position" placeholder="請輸入">
                </ui-icon-input>
            </ui-input> <div class="w-333"></div>
        </div>
        <div class="fx-s pb_x3">
            <ui-input class="w-333 pr_x2" :is_err="form_err.phoned" :header="'手機：'">
                <ui-icon-input :icon="'mdi-cellphone'" :_right="true">
                    <input class="w-100 input" v-model="form.phoned" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-666" :is_err="form_err.email" :header="'郵箱：'">
                <ui-icon-input :icon="'mdi-at'" :_right="true">
                    <input class="w-100 input" v-model="form.email" placeholder="請輸入">
                </ui-icon-input>
            </ui-input> 
        </div>
        <div class="fx-s pb_x3">
            <ui-input class="w-333 pr_x2" :is_err="form_err.bank" :header="'銀行卡號：'">
                <ui-icon-input :icon="'mdi-credit-card-outline'" :_right="true">
                    <input class="w-100 input" v-model="form.bank" placeholder="請輸入">
                </ui-icon-input>
            </ui-input>
            <ui-input class="w-333 pr_x2" :is_err="form_err.money" :header="'基本工資(HKD)：'">
                <ui-icon-input :icon="'mdi-currency-usd'" :_right="true">
                    <input class="w-100 input" v-model="form.money" placeholder="請輸入">
                </ui-icon-input>
            </ui-input> <div class="w-333"></div>
        </div>
    </form-def>
</template>

<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
  components: { FormDef, UiInput, UiIconInput,  },
    data() {
        return {
            form: { named: '', number: '', depart: '', position: '', phoned: '', email: '', bank: '', money: '' },
            form_err: { named: false, number: false, depart: false, position: false, phoned: false, email: false, bank: false, money: false },
        }
    },
    methods: {
        create_or_update() {
            
        }
    }
}
</script>