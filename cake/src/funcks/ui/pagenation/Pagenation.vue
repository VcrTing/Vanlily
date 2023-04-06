<template>
    <div class="pt">
        <nav class="pagenation t-c fx-c upper_x2 ani_dy_x2">
            <div class="d-ib">
                <ul class="ul-def ul-pagenation">
                    <li @click="reset()"><span>
                        <i class="mdi mdi-page-first h5"></i>
                    </span></li>
                    <li v-for="(v, i) in pages" :key="i"
                        :class="{ 'active': v == now }"
                        @click="now = v"
                    >
                        <span>{{ v }}</span>
                    </li>
                    <li @click="num( total - 1 )"><span>
                        <i class="mdi mdi-page-last h5"></i>
                    </span></li>
                </ul>
            </div>
            <div class="fx-l px" v-if="_big">
                <select v-model="limit">
                    <option  
                        v-for="(v, i) in everys" :key="i"
                        :value="v.limit">
                        {{ v.txt }}
                    </option>
                </select>
                <nav class="px">
                    <span>跳至</span>
                    <input v-model="q" @blur="search" @keydown.enter="search" placeholder="某" type="text">
                    <span>/{{ total }} 頁</span>
                </nav>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    props: {
        count: {
            type: Number,
            default: 200
        },
        _key: {
            type: String,
            default: 'pagenation'
        },
        _limit: {
            type: Number,
            default: 10
        },
        _long: {
            type: Number,
            default: 7
        },
        _big: {
            type: Boolean,
            default: true
        }
    },
    mounted() { this.sign(); this.q = this.now },
    created() { if ( this._limit ) { this.limit = this._limit } },
    data() {
        return {
            q: '',
            now: 1,
            start: 1,
            limit: 10,
        }
    },
    watch: {
        limit(n, o) { this.now = 1 },
        now(n, o) {
            return new Promise(rej => {
                // n = Number(n)
                // if (!isNaN(n)) {
                    // 大於 center
                    n = n > this.total ? this.total : n
                    if (n > 0) {
                        // 開始變動，改動 start
                        this.start = this.num_start( n )
                        this.sign()
                    } else {
                        if (n == '') { } else { if (isNaN(Number.parseInt(n))) { this.now = 1 } }
                    }
                // }
                this.q = this.now + ''
                rej(0)
            })
        },
    },
    computed: {
        everys() { return [ 
            { txt: '10條/頁', limit: 10 },
            { txt: '16條/頁', limit: 16 },
            { txt: '32條/頁', limit: 32 },
            { txt: '50條/頁', limit: 50 },
            { txt: '75條/頁', limit: 75 },
            { txt: '100條/頁', limit: 100 },
            // { txt: '200條/頁', limit: 200 }
        ] },
        // 展示
        pages() { return this.genaPage(this.start, this.long) },
        // count 計算後的最高 頁面
        total() { return Math.ceil( (this.count ? this.count : 1) / this.limit) },
        // 長度
        long() { let i = this._long; return this.total > i ? i : this.total },
        // 固定的 中位頁碼
        cen() { return Math.floor(this.long / 2) },
        // 變動的 中位頁碼
        center() { return this.start + this.cen }
    },
    methods: {
        num(n, pius = true) {
            if (pius) n += this.now;
            n = n < 1 ? this.total : n
            n = n > this.total ? 1 : n
            this.now = n
        },
        genaPage(s, e) {
            let res = [ ]
            for (let i = s; i <= (s + e - 1); i ++ ) { if (i <= this.total) { res.push(i) } }; return res
        },
        // 計算 START
        num_start(n) {
            let _st = (n - this.cen)
            // 根據 頁碼到 中心，計算 Start
            if (n > this.center) { _st = _st > (this.total - this.long) ? (this.total - this.long + 1) : _st }
            // 監聽到尾部
            if ((n + this.cen) > this.total) { _st = this.total - this.long + 1 }
            return _st < 1 ? 1 : _st
        },
        // 重制 NOW 
        reset() { this.now = 1 },
        // 發送 頁碼變動信號
        sign() {
            let n = this.now
            n = n < 1 ? 1 : n
            this.$emit('page', n, n * this.limit, this.limit)
        },

        // 保存壹般設置
        save() {
            
        },

        search() {
            return new Promise(rej => {
                try {
                    const src = Number.parseInt(this.q)
                    if (!isNaN(src)) {
                        this.num( src, false )
                    }
                } catch(err) {
                    
                }
                rej( 0 )
            })
        }
    },
}
</script>