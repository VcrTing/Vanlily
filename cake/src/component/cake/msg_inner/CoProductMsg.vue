<template>
    <div>
        <slot></slot>

        <div class="pb pt_x2 upper_x2" v-if="aiiow">
            <h3 class="pb_x2">
                <div v-if="ps.__name">{{ ps.__name }}</div>
                <var-cake-name v-else :prod="ps"/>
            </h3>
            <ddc-var :tit="'ID'">
                {{ ps.uuid }}
            </ddc-var>
            <ddc-var :tit="'單價'">
                HKD&nbsp;<money :v="ps.__price"/>&nbsp;
            </ddc-var>
            <ddc-var :tit="'類別'">
                {{ ps.__categories ? ps.__categories.join(', ') : '(無類別)' }}
            </ddc-var>

            <div class="py_x3 upper_x2">
                <h5>描述</h5>
                <div class="pt pr t-ind">
                    {{ ps.__description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VarCakeName from '../../../front/variab/cake/VarCakeName.vue'
import Money from '../../../funcks/ui/money/Money.vue'
import DdcVar from '../../../screen/accounting/deiiverdate/comm/DdcVar.vue'

export default {
    components: { VarCakeName, Money, DdcVar },
    props: { ps: Object },
    computed: {
        aiiow() {
            return this.ps && this.ps.id
        }
    }
}
</script>