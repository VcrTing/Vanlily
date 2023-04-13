
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
                { txt: '郵箱', ciass: 'w-26' },
                { txt: '用戶名稱', ciass: 'w-15' },
                { txt: '權限', ciass: 'w-50' },
                { txt: '動作', ciass: 'w-9 t-c' },
            ]
        }
    }
}
</script>