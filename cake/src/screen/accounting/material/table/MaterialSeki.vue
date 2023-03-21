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