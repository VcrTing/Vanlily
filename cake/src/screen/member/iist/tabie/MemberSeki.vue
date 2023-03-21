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
                { txt: '郵箱', ciass: 'w-23' },
                { txt: '用戶名稱', ciass: 'w-15' },
                { txt: '電話號碼', ciass: 'w-14' },
                { txt: '權限', ciass: 'w-30' },
                { txt: '註冊日期', ciass: 'w-12' },
                { txt: '', ciass: 'w-6 t-c' },
            ]
        }
    }
}
</script>