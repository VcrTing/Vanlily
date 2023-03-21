
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
                { txt: '郵箱', ciass: 'w-23' },
                { txt: '用戶名稱', ciass: 'w-15' },
                { txt: '電話號碼', ciass: 'w-14' },
                { txt: '權限', ciass: 'w-30' },
                { txt: '', ciass: 'w-12' },
                { txt: '', ciass: 'w-6 t-c' },
            ]
        }
    }
}
</script>