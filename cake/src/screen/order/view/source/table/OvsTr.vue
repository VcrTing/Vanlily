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
            // 10
            tr: [
                { txt: ' ', ciass: 'w-6 w-7-s' },
                { txt: '單號', ciass: 'w-5 w-6-s' },
                { txt: '日期', ciass: 'w-8 w-9-s' },

                { txt: '客戶/電話', ciass: 'w-11 w-11-s' },
                { txt: '定製蛋糕資料', ciass: 'w-20 w-20-s' },
                { txt: '送貨時間段', ciass: 'w-12 w-10-s' },

                { txt: '物流類型', ciass: 'w-6 w-8-s' },
                { txt: '送達時間', ciass: 'w-6 w-0-s' },
                { txt: '付款', ciass: 'w-5' },

                { txt: '訂單狀態', ciass: 'w-7 w-8-s' },
                { txt: '檢查清單', ciass: 'w-6 w-7-s t-c' },
                { txt: '動作', ciass: 'w-8 t-c' },
            ]
        }
    }
}
</script>