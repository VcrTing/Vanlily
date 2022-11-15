<template>
    <div class="fx-l">
        <div class="w-15 fx-l">
            <ui-checkbox :def="pans['order']" :txt="txt('order')"/>
        </div>
        <div class="w-18 fx-l">
            <ui-checkbox :def="pans['work']" :txt="txt('work')"/>
        </div>
        <div class="w-14 fx-l">
            <ui-checkbox :def="pans['customer']" :txt="txt('customer')"/>
        </div>
        <div class="w-14 fx-l">
            <ui-checkbox :def="pans['analysis']" :txt="txt('analysis')"/>
        </div>
        <div class="w-14 fx-l">
            <ui-checkbox :def="pans['account']" :txt="txt('account')"/>
        </div>
        <div class="w-20 fx-l">
            <ui-checkbox :def="pans['member']" :txt="txt('member')"/>
        </div>
    </div>
</template>

<script>
import UiCheckbox from '../../../funcks/ui_element/input/checkbox/UiCheckbox.vue';
export default {
    props: {
        pans: Object
    },
    components: { 
        UiCheckbox },
    data() {
        return {
            forms: [
                { txt: '订单', code: 'order' },
                { txt: '行事板', code: 'work' },
                { txt: '客户', code: 'customer' },
                { txt: '分析', code: 'analysis' },
                { txt: '会计', code: 'account' },
                { txt: '用户管理', code: 'member' },
            ]
        }
    },
    methods: {
        txt(c) {
            let res = ''
            this.forms.map( e => { if (e.code == c) { res = e.txt } }); return res
        }
    }
}
</script>

<style lang="css">

</style>