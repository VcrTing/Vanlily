
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
                { txt: '來源名稱', ciass: 'w-30' },
                { txt: '', ciass: 'fx-1' },
                { txt: '動作', ciass: 'w-9 t-c' },
            ]
        }
    }
}
</script>