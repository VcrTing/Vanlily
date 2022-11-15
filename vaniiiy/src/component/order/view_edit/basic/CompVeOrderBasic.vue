<template>
    <nav v-if="one">
        <div class="fx-s pt_s">
            <p class="w-333">
                落單同事：<span v-if="one">{{ one.changer }}</span>
            </p>
            <p class="w-333">
                訂單日期：
                <span v-if="one">{{ timed.view(one.date) }}</span>
            </p>
            <p class="w-333 fx-l">
                <span :class="{ 'min-5em': edit }">來源：</span>
                <span v-if="!edit">
                    {{ one.order_from }}
                </span>
                <ui-icon-input v-else :icon="'phoned'">
                    <vf-buy-plant-select class="input input-3"></vf-buy-plant-select>
                </ui-icon-input>
            </p>
        </div>
        <div class="fx-s fx-wp">
            <p class="w-333 w-100-p fx-l">
                客戶姓名：
                <span v-if="!edit">
                    {{ one.named ? one.named : '' }}
                </span>
                <ui-icon-input v-else :icon="'user'">
                    <input class="input input-3" placeholder="請輸入" v-model="form.user_named">
                </ui-icon-input>
            </p>
            <nav class="w-666 w-100-p fx-s">

                <p class="w-50 fx-l">
                    客戶電話：
                    <span v-if="!edit">{{ one.phoned }}</span>
                    <ui-icon-input v-else :icon="'phoned'">
                        <input class="input input-2 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned">
                    </ui-icon-input>
                    <span class="pri pl">
                        查詢<span class="w-0-s">用戶</span>以往訂單
                        <span class="w-0-s">記錄</span>
                    </span>
                </p>
                <p class="w-50 fx-l">
                    客戶電話：
                    <span v-if="!edit">{{ one.phoned_from }}</span>
                    <ui-icon-input v-else :icon="'phoned'">
                        <input class="input input-2 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned_from">
                    </ui-icon-input>
                    <span class="pri pl">
                        查詢<span class="w-0-s">用戶</span>以往訂單
                        <span class="w-0-s">記錄</span>
                    </span>
                </p>
            </nav>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object
    },
    computed: {
        one() {
            let res = {
                changer: '李瑞希', date: '2022-12-12', order_from: 'WhatsApp',
                named: '汤小姐', phoned: '8877 9955', phoned_from: '8887 2123' }
            res.changer = this.vai('in_charge', '')
            res.date = this.vai('ordered_date', '')
            res.order_from = this.vai('order_from', '')
            res.named = this.vai('customer_name', '')
            res.phoned = this.vai('customer_phone_no_1', '')
            res.phoned_from = this.vai('customer_phone_no_2', '')
            return res
        }
    },
    data() {
        return {
            form: { user_named: '', user_phoned: '', user_phoned_from: '' }
        }
    },
    mounted() { 
        this.edit ? this.reset() : null
    },
    methods: {
        vai(k, def) { return this.order && this.order[k] ? this.order[k] : def },
        reset() {
            if (this.one) {
                this.form.user_named = this.one.named
                this.form.user_phoned = this.one.phoned
                this.form.user_phoned_from = this.one.phoned_from
            }
        }
    }
}
</script>