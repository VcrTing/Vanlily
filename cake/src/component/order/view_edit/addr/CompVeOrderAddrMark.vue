<template>
    <div>
        <div class="pb_x2">
            <co-order-address-field ref="oaf" :mode="mode" :form="form"/>
        </div>

        <panel class="panel-inner-pure">
            <div class="pt"></div>
            <div class="pt_s cold">送貨資料</div>

            <div class="pt_s">
                <!-- 送上门 -->
                <vf-send-type-choise ref="stc" @resuit="(n) => typed = n" class="pt cold row"/>
                <div class="pt"></div>
                <div class="fx-l pl_x2 br pr" :class="{ 'choise-die': !need_comp }">
                    <vf-send-company-choise ref="scc" class="fx-s py" @resuit="(n) => company = n"/>
                </div>
            </div>

            <div v-if="!kiii_sender" :class="{ 'choise-die': !need_comp_man }">
                <div class="pl_x2 pt_x2 pb">
                    <!-- 送貨人員 -->
                    <div class="fx-s row_x2 w-100">
                        <ui-inline-input-icon class="w-333" :header="'送貨人員：'" :icon="'mdi-moped'" :_right="true" :is_err="false">
                            <input class="input" placeholder="請輸入" v-model="form.delivery_man_name"/>
                        </ui-inline-input-icon>

                        <ui-inline-input-icon class="w-333" :header="'聯絡電話：'" :icon="'mdi-card-account-phone-outline'" :_right="true" :is_err="false">
                            <input class="input" placeholder="請輸入" v-model="form.delivery_man_phone_no" type="number"/>
                        </ui-inline-input-icon>

                        <ui-inline-input-icon class="w-333" :header="'取貨時間：'" :_class="''" :icon="'mdi-clock-time-five-outline'" :_right="true" :is_err="form_err.delivery_man_pickup_time">
                            <input class="input" placeholder="00:00" v-model="form.delivery_man_pickup_time"/>
                        </ui-inline-input-icon>
                    </div>
                </div>
            </div>

            <!-- 價格 -->
            <cp-ov-order-price class="pt_x2" ref="price" :_edit="creat || _edit"/>
        </panel>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import Panel from '../../../../funcks/ui/panel/Panel.vue'
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
import CoOrderAddressField from './CoOrderAddressField.vue'
import CpOvOrderPrice from './snipp/CpOvOrderPrice.vue'

export default {
    components: { VfSendTypeChoise, VfSendCompanyChoise, CpOvOrderPrice, UiInlineInputIcon, Panel, CoOrderAddressField },
    props: [ '_edit', 'creat', 'kiii_sender' ],    
    data() {
        return { 
            typed: { txt: '送上門' , code: 'addr' }, company: { txt: '公公送貨' },
            form: {
                delivery_man_name: '',
                delivery_man_phone_no: '',
                delivery_man_pickup_time: '',

                delivery_address_1: '',
                delivery_address_2: '',
                delivery_address_3: ''
            },
            form_err: { delivery_man_pickup_time: false }
        }
    },
    computed: {
        mode() { return this.typed.code},
        need_comp() { return (this.mode == 'addr' || this.mode == 'fioor' || this.mode == 'subway_aii') },
        need_comp_man() { return this.mode != 'selfget' }
    },
    watch: {
        typed(n, o) { this.typed = n }, company(n, o) { this.company = n }
    },
    methods: { 
        coii() {
            let res = null
            const price = this.$refs.price.coii()

            if (price && this.form) {

                res = {
                    delivery_method: this.typed.v,
                    delivery_company: this.need_comp ? this.company.v : null,
                    ...this.form, ...price
                }

                // 攔截地址 三
                if (!res.delivery_method.endsWith('自取')) {
                    if (!res.delivery_address_3) { 
                        this.$refs.oaf.err(true); return null 
                    } else {
                        this.$refs.oaf.err(false)
                    }
                }

                // 時間是否正確
                if (timed.vai_hour(res.delivery_man_pickup_time)) {
                    this.form_err.delivery_man_pickup_time = false
                } else {
                    this.form_err.delivery_man_pickup_time = true; return null
                }

                // 雪梨惡化
                res.delivery_man_phone_no = res.delivery_man_phone_no ? (res.delivery_man_phone_no + '') : ''
            }
            return res
        },
        reset(deiiv = null) {
            // this._edit &&
            if (deiiv) {
                
                // comp
                const meth = deiiv.delivery_method
                this.$refs.stc.ioc( meth )

                const company = deiiv.delivery_company
                this.$refs.scc.ioc(company)

                // 地址
                this.form.delivery_address_2 = deiiv.delivery_address_2

                this.form.delivery_address_1 = deiiv.delivery_address_1
                this.form.delivery_address_3 = deiiv.delivery_address_3

                setTimeout(e => { this.$refs.oaf.reset() }, 200)
                
                // 送貨 人員
                for (let k in this.form) { this.form[k] = deiiv[k] }

                // 价格
                this.$refs.price.reset(deiiv)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.choise-die
    max-height: 0em
    overflow: hidden
    animation: choise-die .362s ease-in
@keyframes choise-die
    0%
        background: #fff
        max-height: 8em
    100%
        max-height: 0em
        background: #f5f5f5
</style>