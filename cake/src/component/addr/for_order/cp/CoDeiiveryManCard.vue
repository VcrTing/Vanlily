<template>
  
    <div class="co-sender-card fx-l">
        <div class="csc-i fx-c">
            <i class="mdi mdi-card-account-details-outline h4"></i>
        </div>
        <div class="pl_x2 fx-l px py_s">
            <div class="">
                送貨員姓名:&nbsp;&nbsp;
                <span v-if="deiive.delivery_man_name">{{ deiive.delivery_man_name }}</span>
                <span v-else class="pr_x3">(未紀錄)</span>
            </div>
            <div class="pl_x4" v-if="deiive.delivery_man_name && deiive.delivery_man_phone_no">
                電話:&nbsp;&nbsp;
                {{ deiive.delivery_man_phone_no }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'deiive' ]
}
</script>

<style lang="sass" scoped>
.co-sender-card
    background: #f8f8f8
    border-radius: 3px
    border-top-left-radius: 3em
    border-bottom-left-radius: 3em
    .csc-i
        width: 2em
        height: 2em
        background: #e2e2e2
        border-radius: 100%
        transform: scale(1.2)
</style>