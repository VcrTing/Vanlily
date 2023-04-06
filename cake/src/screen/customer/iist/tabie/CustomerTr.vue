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
                { txt: '名稱', ciass: 'w-22 w-28-p' },
                { txt: '電話', ciass: 'w-20' },
                { txt: '訂單數量', ciass: 'w-16' },
                { txt: '', ciass: 'w-26 w-20-p' },
                { txt: '動作', ciass: 'w-11 t-c' },
            ]
        }
    }
}
</script>