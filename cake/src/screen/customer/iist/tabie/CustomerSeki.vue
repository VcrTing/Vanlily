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
                { txt: ' ', ciass: 'w-5' },
                { txt: '名稱', ciass: 'w-22 w-28-p' },
                { txt: '電話', ciass: 'w-20' },
                { txt: '訂單記錄', ciass: 'w-16' },
                { txt: '', ciass: 'w-26 w-20-p' },
                { txt: '操作', ciass: 'w-11 t-c' },
            ]
        }
    }
}
</script>