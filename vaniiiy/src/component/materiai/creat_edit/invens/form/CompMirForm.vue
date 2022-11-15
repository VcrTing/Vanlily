<template>
    <div class="px_x2 py_s">
        <ui-inline-input-td class="w-30" :is_err="form_err.named">
            <input class="input input-td" v-model="form.named" placeholder="请输入"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-22" :is_err="form_err.come">
            <time-one :def="form.come" @result="(v) => form.come = v" class="ip-br input-td"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-22" :is_err="form_err.out">
            <time-one :def="form.out" @result="(v) => form.out = v" class="ip-br input-td"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-21" :is_err="form_err.num">
            <input class="input input-td" v-model="form.num" placeholder="请输入"/>
        </ui-inline-input-td>
        <div class="w-5">
            <ui-table-opera :_mode="3"/>
        </div>
    </div>
</template>

<script>
import UiInlineInputTd from '../../../../../funcks/ui_element/input/inline/UiInlineInputTd.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
    components: { 
        UiInlineInputTd,
        UiTableOpera,
        TimeOne      },
    data() {
        return {
            form: { named: '', come: '2022-12-21', out: '2022-12-12', num: '' },
            form_err: { named: false, come: false, out: false, num: false },
        }
    }
}
</script>

<style>

</style>