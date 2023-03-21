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
                { txt: ' ', ciass: 'w-8' },
                { txt: '收據編號', ciass: 'w-13' },
                { txt: '日期', ciass: 'w-11' },
                { txt: '產品內容', ciass: 'w-22' },
                { txt: '類別', ciass: 'w-8' },
                { txt: '貨幣', ciass: 'w-6' },
                { txt: '價錢', ciass: 'w-11' },
                { txt: '附件', ciass: 'w-12 pl_x2' },
                { txt: ' ', ciass: 'w-9 t-r' },
            ]
        }
    }
}
</script>