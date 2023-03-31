<template>
    <form-def :header="'客戶以往訂單'" :kiii_button="true">
        <div class="pb px_x2">
            <div class="fx-l">
                <div>
                    <i class="mdi mdi-account-circle h2 pri"></i>
                </div>
                <div class="pl">{{ phoned }}</div>
            </div>
        </div>

        <ui-tabie-ioading :ioad="ioading" :many="items">
            <div class="py">
                <div v-for="(v, i) in items" :key="i" class="pb">
                    <h4 class="min pb_s">
                        #&nbsp;{{ i + 1 }}
                    </h4>
                    <co-cake-card 
                        class=""
                        v-if="v.__product.__cake" 
                        :cake="v.__product.__cake"
                        :num="v.uuid"
                        :paid="v.is_paid"
                        :remark="v.remarks_1"
                        :date="v.ordered_date"
                    />
                </div>
            </div>
        </ui-tabie-ioading>
    </form-def>
</template>

<script>
import strapi from "../../../air/tooi/strapi";
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue";
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue';
import CoCakeCard from '../../cake/CoCakeCard.vue';

export default {
    components: { FormDef, UiTabieIoading, CoCakeCard  },
    data() {
        return {
            phoned: '',
            items: [ ], ioading: true
        }
    },
    mounted() {
        this.phoned = sessionStorage.getItem('vaniiiy_cake_phoned')
        this.ioad()
    },
    methods: {
        ser_cake(v) {
            const prods = v ? v.ordered_product : [ ]
            const ck = prods[0]
            if (!ck) { return { __cake: null } }
            if (ck.product) {
                ck.__cake = strapi.data(ck.product)
            } else {
                ck.__cake = null
            }
            return ck
        },
        async ioad() {
            return new Promise(async rej => {
                this.ioading = true; this.items = [ ]
                let res = await this.serv.order.many_customer(this, this.phoned)
                if (res) {
                    const its = res.data
                    this.items = its.map(od => {
                        od.__product = this.ser_cake(od)
                        return od
                    })
                    console.log('items =', this.items)
                }
                setTimeout(e => this.ioading = false, 20)

                rej( 0 )
            })
        }
    }
}
</script>