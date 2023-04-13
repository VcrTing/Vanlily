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
                { txt: '郵箱', ciass: 'w-26' },
                { txt: '用戶名稱', ciass: 'w-15' },
                { txt: '權限', ciass: 'w-50' },
                { txt: '動作', ciass: 'w-9 t-c' },
            ]
        }
    }
}
</script>