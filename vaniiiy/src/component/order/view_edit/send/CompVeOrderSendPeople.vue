<template>
    <nav>
        <div class="fx-s">
            <p class="w-31 fx-l">
                送貨人員：
                <span v-if="!edit">
                    {{ one.sender_name }}
                </span>
                <ui-icon-input v-else :icon="'user'">
                    <input class="input" placeholder="請輸入" v-model="form.user_named">
                </ui-icon-input>
            </p>
            <p class="w-31 fx-l">
                <span class="min-5em">電話：</span>
                <span v-if="!edit">{{ one.sender_phone }}</span>
                <ui-icon-input v-else :icon="'mdi-phoned'">
                    <input class="input input-4 pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned">
                </ui-icon-input>
            </p>
            <p class="w-31 fx-l">
                <span class="min-7em">取貨時間：</span>
                <span v-if="!edit">{{ one.pick_up_time }}</span>
                <ui-input v-else class="fx-1">
                    <time-one class="ip-br"></time-one>
                </ui-input>
            </p>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect, TimeOne,
    UiInput },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object
    },
    data() {
        return {
            form: { user_named: '', user_phoned: '', user_phoned_from: '' }
        }
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
        one() {
            let res = {
                sender_name: '', sender_phone: '', pick_up_time: ''
            }
            res.sender_name = this.vai('delivery_man_name')
            res.sender_phone = this.vai('delivery_man_phone_no')
            res.pick_up_time = this.vai('delivery_man_pickup_time')
            return res
        }
    },
    mounted() { 
        // this.edit ? this.reset() : null
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
        reset() {
            if ( this.one ) {
                this.form.user_named = this.one.sender.named
                this.form.user_phoned = this.one.user.phoned
                this.form.user_phoned_from = this.one.user.phoned_from
            }
        }
    }
}
</script>