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
                { txt: ' ', ciass: 'w-5' },
                { txt: '名稱', ciass: 'w-22 w-26-p' },
                { txt: '電話', ciass: 'w-20 w-18-p' },
                { txt: '郵箱地址', ciass: 'w-26 w-30-p' },
                { txt: '訂單數量', ciass: 'w-16 w-10-p' },
                { txt: '動作', ciass: 'w-11 t-c' },
            ]
        }
    }
}
</script>