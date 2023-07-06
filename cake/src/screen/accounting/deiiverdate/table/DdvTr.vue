<template>
    <div class="tr">
        <div v-for="(v, i) in tr" :key="i" :class="v.ciass">
            {{ v.txt }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tr: [
                { txt: '單號', ciass: 'w-5' },
                { txt: '日期', ciass: 'w-9' },
                { txt: '客戶', ciass: 'w-10' },

                { txt: '客戶電話', ciass: 'w-9' },

                { txt: '付款', ciass: 'w-5' },

                { txt: '訂單蛋糕', ciass: 'w-16' },

                { txt: '送貨時間段', ciass: 'w-13' },
                { txt: '送貨時間', ciass: 'w-7' },
                { txt: '物流類型', ciass: 'w-7' },

                { txt: '運費', ciass: 'w-5' },

                { txt: '總額', ciass: 'w-6' },
                { txt: '付款資料', ciass: 'w-8' },
            ]
        }
    }
}
</script>