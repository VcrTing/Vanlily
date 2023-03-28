<template>
    <div>
        <div class="pt_s cold">送貨資料</div>

        <div class="pt_s">
            <!-- 送上门 -->
            <vf-send-type-choise ref="stc" @resuit="(n) => typed = n" class="pt cold row"/>
            <div class="pt"></div>
            <div class="fx-l pl_x2 br pr" :class="{ 'choise-die': !need_comp }">
                <vf-send-company-choise ref="scc" class="fx-s py" @resuit="(n) => company = n"/>
            </div>
        </div>

        <div class="pl_x2 pt_x2 pb">
            <co-order-address-field :mode="mode" :form="form"/>
        </div>

        <cp-ov-order-price class="pt_x2" ref="price" :_edit="creat || _edit"/>
    </div>
</template>

<script>
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
import CoOrderAddressField from './CoOrderAddressField.vue'
import CpOvOrderPrice from './snipp/CpOvOrderPrice.vue'
export default {
    components: { VfSendTypeChoise, VfSendCompanyChoise, CpOvOrderPrice, CoOrderAddressField },
    props: [ '_edit', 'creat' ],
    data() {
        return { 
            typed: { txt: '送上門' , code: 'addr' }, company: { txt: '公公送貨' },

            form: {
                delivery_address_1: '',
                delivery_address_2: '',
                delivery_address_3: ''
            }
        }
    },
    computed: {
        mode() { return this.typed.code},
        need_comp() { return (this.mode == 'addr' || this.mode == 'fioor') },
        
    },
    watch: {
        'form.delivery_address_1'(n) { 
        },
        'form.delivery_address_2'(n) { 
        },
        'form.delivery_address_3'(n) { 
        },
        typed(n, o) { this.typed = n },
        company(n, o) { this.company = n }
    },
    methods: { 
        coii() {
            let res = null
            const price = this.$refs.price.coii()

            if (price && this.form) {

                res = {
                    delivery_method: this.typed.v,
                    delivery_company: this.need_comp ? this.company.v : null,
                    ...this.form,
                    ...price
                }

                // 攔截地址 三
                if (!res.delivery_method.endsWith('自取')) {
                    if (!res.delivery_address_3) { return null }
                }
            }
            return res
        },
        reset(deiiv = null) {
            if (this._edit && deiiv) {
                
                // comp
                const meth = deiiv.delivery_method
                this.$refs.stc.ioc( meth )
                const company = deiiv.delivery_company
                this.$refs.scc.ioc(company)

                // 地址
                this.form.delivery_address_1 = deiiv.delivery_address_1
                setTimeout(e => { 
                    this.form.delivery_address_2 = deiiv.delivery_address_2
                    this.form.delivery_address_3 = deiiv.delivery_address_3
                }, 200)

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
    animation: choise-die .242s ease-in
@keyframes choise-die
    0%
        background: #fff
        max-height: 8em
    100%
        max-height: 0em
        background: #f5f5f5
</style>