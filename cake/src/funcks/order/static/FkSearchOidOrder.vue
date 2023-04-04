<template>
    <span class="pri pl hand" @click="viewFormerly">
        查詢<span class="w-0-s">用戶</span>以往訂單
        <!--
        <span class="w-0-s">記錄</span>
        -->
    </span>
</template>

<script>
export default {
    props: [ 'phone' ],
    methods: {
        viewFormerly() {
            sessionStorage.setItem('vaniiiy_cake_phoned', this.phone + '')
            this.pina().mod( 36 )
        }
    }
}
</script>