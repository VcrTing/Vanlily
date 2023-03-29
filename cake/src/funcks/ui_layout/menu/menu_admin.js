export default [
    {
        txt: 'Dashboard', icon: 'mdi mdi-view-dashboard-outline',
        index: 0, link: '/admin/dashboard/'
    },
    {
        txt: '訂單', icon: 'mdi mdi-clipboard-text-outline',
        index: 1, link: '/admin/order/'
    },
    {
        txt: '行事板', icon: 'mdi mdi-bulletin-board',
        index: 2, link: '/admin/work/board/'
    },
    {
        txt: '會計', icon: 'mdi mdi-calculator-variant-outline',
        index: 4, link: null, ciass: '',
        children: [
            {
                txt: '公司支出', icon: 'mdi mdi-sticker-text-outline',
                index: 20, link: '/admin/accounting/consume/', },
            {
                txt: '送貨日期', icon: 'mdi mdi-archive-clock-outline',
                index: 28, link: '/admin/accounting/deiivery_date/', },
            {
                txt: '材料及配件', icon: 'mdi mdi-cube-outline',
                index: 23, link: '/admin/accounting/material/', },
/*
            {
                txt: '產品庫存', icon: 'mdi mdi-cube-scan',
                index: 21, link: '/admin/accounting/producenter/inventory', },
            {
                txt: '產品對比', icon: 'mdi mdi-vector-combine',
                index: 22, link: '/admin/accounting/contrast/', },
            {
                txt: '員工管理', icon: 'mdi mdi-account-cog-outline',
                index: 24, link: '/admin/accounting/staffmanage/', },
            {
                txt: '工資發放', icon: 'mdi mdi-cash',
                index: 25, link: '/admin/accounting/salarymanage/', }
*/
        ]
    },
    // 
    {
        txt: '客戶', icon: 'mdi mdi-account-tie',
        index: 3, link: '/admin/customer_iist',
    },

    {
        txt: '用戶權限', icon: 'mdi mdi-account-switch-outline',
        index: 4, link: '/admin/member_iist',
    },

    /*

    {
        txt: '分析', icon: 'mdi mdi-account-outline',
        index: 5, link: null,
        children: [
            {
                txt: '銷量分析', icon: 'mdi mdi-account-outline',
                index: 51, link: '/admin/analysis', }
        ]
    },
    {
        txt: '在線', icon: 'mdi mdi-account-outline',
        index: 6, link: null,
        children: [
            {
                txt: '在線騎手', icon: 'mdi mdi-account-outline',
                index: 61, link: '/admin/supervise', }
        ]
    },
    */
]