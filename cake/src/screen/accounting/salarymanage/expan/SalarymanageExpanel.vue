<template>
    <div class="px_x2 py_x2 pt_x3 bg-FFF">
        <comp-salary-item-table :mode='0'></comp-salary-item-table>
    </div>
</template>

<script>
import CompSalaryItemTable from '../../../../component/staff/creat_edit/salary/CompSalaryItemTable.vue'
export default {
  components: { CompSalaryItemTable },

}
</script>