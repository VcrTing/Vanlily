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
                { txt: '', ciass: 'w-3' },
                { txt: '編號', ciass: 'w-8' },
                { txt: '類別', ciass: 'w-9' },
                { txt: '全名', ciass: 'w-27' },
                { txt: '品牌', ciass: 'w-12' },
                { txt: '規格', ciass: 'w-7' },
                { txt: '備註', ciass: 'w-25' },
                { txt: '動作', ciass: 'w-9 t-c' },
            ]
        }
    }
}
</script>