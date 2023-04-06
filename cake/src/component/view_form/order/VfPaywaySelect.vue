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
                { txt: '未知', v: '' },
                { txt: 'PayPal', v: 'paypal' },
                { txt: '現金', v: 'cash' },
                { txt: 'Bank card', v: 'bankcard' },
                { txt: 'Ali Pay', v: 'alipay' },
                { txt: 'Wechat Pay', v: 'wxpay' },
                { txt: '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款', v: '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款' },
                { txt: '消費劵 - 如使用支付寶Alipay HK 或 WeChat HK 微信，請使用Yedpay', v: '消費劵 - 如使用支付寶Alipay HK 或 WeChat HK 微信，請使用Yedpay' }
            ]
        }
    },
    mounted() {
        this.now = this.def ? this.def : 'paypal'
    },
    watch: {
        now(n) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        // code() { let res = this.ways[ this.now ]; return res ? res.code : 'addr' },
        ioc(vv = 'paypal') { this.ops.map( (e, i) => { if (e.v == vv) { this.now = e.v } }) },
        ioc_txt(vv = 'paypal') { 
            let res = ''; 
            this.ops.map( (e, i) => { if (e.v == vv) { res = e.txt } }); 
            return res }
    }
}
</script>