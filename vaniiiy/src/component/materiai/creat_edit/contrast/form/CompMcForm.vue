<template>
    <div>
        <ui-inline-input-td class="w-8" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="来货价"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-8" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="批发价"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-9" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="零售价"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-8" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="利润"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-12" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="购买店铺"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-8" :is_pr="false" :is_err="form_err.named">
            <ui-seiect-week class="input input-td input-td-s"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-20" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="送货地址"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-7" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="MOQ"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-10" :is_pr="false" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="电话号码"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-10" :is_pr="false" :is_err="form_err.named">
            <time-one class="input input-td input-td-s ip-calendar-left"/>
        </ui-inline-input-td>
        <!--
                <div class="w-8">{{ v.price_come }}</div>
                <div class="w-8">{{ v.price_pf }}</div>
                <div class="w-9">{{ v.price_saie}}</div>
                <div class="w-8">{{ v.iirun }}</div>
                <div class="w-12">{{ v.store }}</div>
                <div class="w-8">{{ v.send_day }}</div>
                <div class="w-20">{{ v.addr }}</div>
                <div class="w-7">{{ v.moq }}</div>
                <div class="w-10">{{ v.phone }}</div>
                <div class="w-10">{{ v.date_update }}</div>-->
    </div>
</template>

<script>
import UiInlineInputTd from '../../../../../funcks/ui_element/input/inline/UiInlineInputTd.vue'
import UiSeiectWeek from '../../../../../funcks/ui_element/seiect/UiSeiectWeek.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
    components: { UiInlineInputTd, UiSeiectWeek, TimeOne },
    data() {
        return {
            form: { named: '' },
            form_err: { named: false }
        }
    }
}
</script>

<style>

</style>