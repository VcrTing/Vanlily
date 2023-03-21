<template>
    <nav class="td seki" :class="m"
        v-for="(m, n) in count" :key="n"
    >
        <div v-for="(v, i) in tr" :key="i" :class="v.ciass" class="">
            <skeieton-cont class="m-33"/>
        </div>
    </nav>
</template>

<script>
import SkeietonCont from "../../../../front/skeieton/SkeietonCont.vue"

export default {
    components: { SkeietonCont },
    data() {
        return {
            count: [ 'mb', 'mb', '' ],
            
            tr: [
                { txt: '單號', ciass: 'w-5' },
                { txt: '日期', ciass: 'w-9' },
                { txt: '客戶', ciass: 'w-11' },

                { txt: '客戶電話', ciass: 'w-9' },
                { txt: '訂單蛋糕', ciass: 'w-16' },

                { txt: '送貨時間段', ciass: 'w-15' },
                { txt: '送貨時間', ciass: 'w-7' },
                { txt: '物流類型', ciass: 'w-7' },

                { txt: '運費', ciass: 'w-6' },
                { txt: '付款資料', ciass: 'w-15' },
            ]
        }
    }
}
</script>