<template>
    <div class="td item">
        <div class="w-3">&nbsp;</div>
        <div class="w-8">{{ one.id }}</div>
        <div class="w-9">{{ one.type }}</div>
        <div class="w-27 pr">{{ one.name }}</div>
        <div class="w-12">{{ one.brand }}</div>
        <div class="w-7">{{ one.specification }}</div>
        <div class="w-25">{{ one.remarks }}</div>
        <div class="w-9 t-c">
            <ui-table-opera 
                @edit="go_view(1)" 
                @view="go_view(0)"
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
    },
    methods: {
        go_view(md) {
            this.otherPina().do_materiai_access( this.one )
            md == 0 ? 
            this.go('/admin/accounting/material/review') :
            this.go('/admin/accounting/material/edit')
        }
    }
}
</script>

<style>

</style>