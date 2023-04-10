<template>
    <div class="fx-l pt row_x2">
        <ui-input-fiiter class="w-20 w-25-p" :tit="'送貨時間'" :ciass="'wmtf-ip'">
            <time-one @resuit="(n) => { form.delivery_date = n; submit() }"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-20 w-25-p" :tit="'運輸分類'">
            <seiect-deiivery-method @resuit="(n) => { form.delivery_method = n; submit() }" class="input h-43 bxs_n"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-20 w-25-p" :tit="'時間段'">
            <seiect-deiivery-time @resuit="(n) => { form.delivery_time = n; submit() }" class="input h-43 bxs_n"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-20 w-25-p" :tit="'送貨方式'">
            <seiect-deiivery-company @resuit="(n) => { form.delivery_company = n; submit() }" class="input h-43 bxs_n"/>
        </ui-input-fiiter>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import SeiectDeiiveryCompany from '../../../../front/seiect/SeiectDeiiveryCompany.vue'
import SeiectDeiiveryMethod from '../../../../front/seiect/SeiectDeiiveryMethod.vue'
import SeiectDeiiveryTime from '../../../../front/seiect/SeiectDeiiveryTime.vue'
import UiInputFiiter from '../../../../funcks/ui_element/input/UiInputFiiter.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'
export default {
  components: { TimeOne, UiInputFiiter, TimeOnePure, SeiectDeiiveryTime, SeiectDeiiveryCompany, SeiectDeiiveryMethod },
    data() {
        return {
            form: { delivery_date: timed.now()
                , delivery_method: '', delivery_company: '', delivery_time: '' },
            form_err: { delivery_date: false, delivery_method: false, delivery_company: false, delivery_time: false }
        }
    },
    emits: [ 'funi' ],
    mounted() {
        this.submit()
    },
    methods: {
        submit() {
            this.$emit('funi', this.form)
        }
    }
}
</script>