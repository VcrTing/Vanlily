<template>
    <div class="fx-s crumb">
        <nav class="fx-l">
            <div v-for="(v, i) in crumbs" :key="i" class="">
                <div class="d-ib us-n" :class="{ 'sus': i < long, 'tid': i >= long }">{{ txts[v] }}</div>
                <span v-if="i < long" class="px"><i class="mdi mdi-chevron-right"></i></span>
            </div>
        </nav>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crumbs: [

            ],
            txts: {
                'edit': '編輯',
                'review': '檢視',
                'accounting': '會計',
                'consume': '公司支出',
                'contrast': '產品對比',
                'deiivery_date': '送貨日期',

                'material': '材料及配件',
                'producenter': '產品信息',
                'inventory': '產品庫存',
                'staffmanage': '員工管理',
                'salarymanage': '工資發放',
                'acc_form_salary': '編輯工資管理',
                'order': '訂單',
                'customer': '客戶',
                'customer_iist': '客戶列表',
                'add_order': '新增訂單',

                'member': '用戶管理',
                'member_iist': '用戶管理',
                'member_edit': '編輯用戶',
                'member_creat': '新增用戶',

                'material_create': '新增材料及配件'
            }
        }
    },
    computed: {
        long() { return this.crumbs.length - 1 }
    },
    watch: {
        '$route': (n, o) => {
            
        }
    },
    mounted() {
        let res = this.$route.path.split('/')
        this.crumbs = res ? res.filter(e => e != '').filter(e => e != 'admin') : []
    }
}
</script>