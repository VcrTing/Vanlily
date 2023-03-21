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
                { txt: ' ', ciass: 'w-8' },
                { txt: '收據編號', ciass: 'w-13' },
                { txt: '日期', ciass: 'w-11' },
                { txt: '產品內容', ciass: 'w-22' },
                { txt: '類別', ciass: 'w-8' },
                { txt: '貨幣', ciass: 'w-6' },
                { txt: '價錢', ciass: 'w-11' },
                { txt: '附件', ciass: 'w-12 pl_x2' },
                { txt: ' ', ciass: 'w-9' },
            ]
        }
    }
}
</script>