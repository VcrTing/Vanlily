<template>
    <div class="item td">
        <div class="w-8">
            <span class="tag tag-pri_light" v-if="one.is_new">New</span>
        </div>
        <div class="w-13">
            {{ one.receipt_id }}
        </div>
        <div class="w-11">
            {{ timed.view(one.date) }}
        </div>
        <div class="w-22 pr">
            {{ one.content }}
        </div>
        <div class="w-8">
            <seiect-consume-type :def="one.type" v-if="one.type" :txt_mode="true"/>
        </div>
        <div class="w-6">
            {{ one.currency }}
        </div>
        <div class="w-11 pr_s">
            <money :v="one.price"></money>
        </div>
        <div class="w-15 t-elip_x2">
            <var-file-txt class="pri_son" :def="one.appendix"/>
        </div>
        <div class="w-6 fx-r pri">
            <button @click="edit">編輯</button>
        </div>
    </div>
</template>

<script>
import SeiectConsumeType from '../../../../front/seiect/SeiectConsumeType.vue'
import VarFileTxt from '../../../../front/variab/account/VarFileTxt.vue'
import Money from '../../../../funcks/ui/money/Money.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: { UiTableOpera, Money, SeiectConsumeType, VarFileTxt },
    props: [ 'one' ],
    methods: {
        expanel() { this.$parent.change() },
        edit() {
            this.accountPina().do_consume(this.one)
            this.pina().mod(111)
        }
    }
}
</script>