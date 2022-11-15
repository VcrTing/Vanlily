<template>
    <div class="px_x2 py_x2 bg-FFF">
        <div class="fx-s fx-t">
            <div class="w-13 pr_x2">
                <img class="img w-100" :src="one.avatar">
            </div>
            <div class="w-87">
                <comp-pro-ivens-item-table :mode="'VIEW'" :many="one.invens"></comp-pro-ivens-item-table>
            </div>
        </div>
    </div>
</template>

<script>
import CompProIvensItemTable from '../../../../../component/product/view_create_edit/inventory/CompProIvensItemTable.vue'
export default {
  components: { CompProIvensItemTable },
    props: [ 'one' ],
    mounted() { }
}
</script>

<style>

</style>