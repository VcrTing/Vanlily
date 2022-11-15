<template>
    <div class="td item">
        <div class="w-3">&nbsp;</div>
        <div class="w-8">{{ one.number }}</div>
        <div class="w-9">{{ one.typed }}</div>
        <div class="w-27">{{ one.named }}</div>
        <div class="w-12">{{ one.brand }}</div>
        <div class="w-7">{{ one.stas }}</div>
        <div class="w-25">{{ one.remark }}</div>
        <div class="w-9 t-c">
            <ui-table-opera 
                @edit="go('/admin/accounting/material/edit')" 
                @view="go('/admin/accounting/material/review')"
                />
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    props: [ 'one' ],
    components: {
        UiTableOpera
    }
}
</script>

<style>

</style>