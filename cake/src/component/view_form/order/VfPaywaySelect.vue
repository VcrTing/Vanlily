<template>
    <select v-if="!_txt_mode" v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <div v-else class="t-elip_x1">
        {{ ioc_txt(def) }}
    </div>
</template>

<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() {
        return {
            now: '',
            ops: [
                // { txt: '(未知付款方式)', v: '' },
                { txt: '其他方式', v: 'other' },
                { txt: 'PayPal', v: 'paypal' },
                { txt: 'VISA', v: 'visa' },
                { txt: '現金', v: 'cash' },
                { txt: '銀行卡', v: 'bankcard' },
                { txt: 'Yedpay', v: 'yedpay'},
                { txt: '支付寶支付(Alipay HK)', v: 'alipay' },
                { txt: '微信支付(WeChat HK)', v: 'wxpay' },
                { txt: '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款', v: '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款' },
                { txt: '消費劵 - 如使用支付寶Alipay HK 或 WeChat HK 微信，請使用Yedpay', v: '消費劵 - 如使用支付寶Alipay HK 或 WeChat HK 微信，請使用Yedpay' }
            ]
        }
    },
    mounted() {
        this.now = this.def ? this.def : 'other'
    },
    watch: { now(n) { this.sign() } },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(vv = 'other') { this.ops.map( (e, i) => { if (e.v == vv) { this.now = e.v } }) },
        ioc_txt(vv = 'other') { let res = ''; this.ops.map( (e, i) => { if (e.v == vv) { res = e.txt } }); return res }
    }
}
</script>