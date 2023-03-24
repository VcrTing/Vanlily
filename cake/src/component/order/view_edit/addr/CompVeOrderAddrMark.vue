<template>
    <div>
        <div class="pt_s">送貨類別</div>

        <div class="pt_s">
            <!-- 送上门 -->
            <vf-send-type-choise ref="stc" @resuit="(n) => typed = n" class="pt cold row"/>
            <div class="pt"></div>
            <div class="fx-l pl_x2 br pr" :class="{ 'choise-die': !need_comp }">
                <vf-send-company-choise ref="scc" class="fx-s py" @resuit="(n) => company = n"/>
            </div>
        </div>

        <div class="pl_x2 pt_x2 pb">
                <!-- 送货 -->
                <cp-ve-order-addr-area-pan @resuit="(n) => addr = n" class="upper" v-if="need_comp"/>
                <!-- 送達地鐵站 -->
                <cp-ve-order-addr-subway @resuit="(n) => addr = n" class="upper" v-else-if="typed.code == 'subway_aii'"/>
                <!-- 樓下交收 -->
                <!--cp-ve-order-addr-fioor v-else class="upper"/ -->
                <!-- 屯门站 -->
                <cp-ve-order-tunmen-subway @resuit="(n) => addr = n" class="upper" v-else-if="typed.code == 'subway_tunmen'"/>
                <!-- 606 自取 -->
                <cp-ve-order-self-get @resuit="(n) => addr = n" class="upper" v-else/>
        </div>

        <cp-ov-order-price class="pt_x2" ref="price" :_edit="creat"/>
    </div>
</template>

<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfSelfGetRadio from '../../../view_form/addr/VfSelfGetRadio.vue'
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
import CpVeOrderAddrAreaPan from './input/CpVeOrderAddrAreaPan.vue'
import CpVeOrderAddrFioor from './input/CpVeOrderAddrFioor.vue'
import CpVeOrderAddrSubway from './input/CpVeOrderAddrSubway.vue'
import CpVeOrderSelfGet from './input_2/CpVeOrderSelfGet.vue'
import CpVeOrderTunmenSubway from './input_2/CpVeOrderTunmenSubway.vue'
import CpOvOrderPrice from './snipp/CpOvOrderPrice.vue'
export default {
  components: { VfSendTypeChoise, VfSelfGetRadio, UiInput, VfSendCompanyChoise, CpOvOrderPrice,
        CpVeOrderAddrAreaPan,
        CpVeOrderAddrSubway, CpVeOrderAddrFioor,
        CpVeOrderTunmenSubway, CpVeOrderSelfGet       
    },
    props: {
        edit: Boolean, creat: Boolean
    },
    data() {
        return { 
            addr: { }, typed: { txt: '送上門' , code: 'addr' }, company: { txt: '公公送貨' } }
    },
    computed: {
        need_comp() {
            let src = this.typed.code
            return (src == 'addr' || src == 'fioor') }
    },
    watch: {
        typed(n, o) { this.typed = n },
        company(n, o) {
            this.company = n
            if (this.need_comp) { console.log('收集 COMAPNY =', n) }
        }
    },
    mounted() { this.ioc() },
    methods: { 
        coii() {
            let res = null
            const price = this.$refs.price.coii()

            if (price && this.addr) {

                res = {
                    delivery_method: this.typed.v,
                    delivery_company: this.need_comp ? this.company.v : null,
                    ...this.addr,
                    ...price
                }

                // 攔截地址 三
                if (!res.delivery_method.endsWith('自取')) {
                    if (!res.delivery_address_3) { return null }
                }
            }
            return res
        },
        ioc() {
            if (this.edit ) {
                const txt = this.deiive ? this.deiive.delivery_method : ''
                this.$refs.stc.ioc( txt )
                const company = this.deiive ? this.deiive.delivery_company : ''
                if (company) { this.$refs.scc.ioc(company) }
                console.log('定位 =', txt, company)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.choise-die
    max-height: 0em
    overflow: hidden
    animation: choise-die .242s ease-in
@keyframes choise-die
    0%
        background: #fff
        max-height: 8em
    100%
        max-height: 0em
        background: #f5f5f5
</style>