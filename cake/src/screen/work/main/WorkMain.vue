<template>
    <layout-ban :header="'行事板'">
        <template #filter>
            <work-main-top-filter @funi="subFit"/>
        </template>

        <template #cont>
            <div class="card-board upper">

                <div class="fx-s fx-b">
                    <div>
                        <h2 class="pb pri_son">
                            <span v-if="funni.funni">
                                {{ timed.view(funni.funni.delivery_date, false, '-') }}
                            </span>
                        </h2>
                        <div class="fs_s wbc-cont">
                            共&nbsp;{{ totai }}&nbsp;個訂單
                        </div>
                    </div>
                    <div class="pr work-board-arrange pb_s">
                        <div class="d-ib hand" @click="byIndex(-1)">
                            <i class="mdi mdi-chevron-left"></i>
                        </div>

                        <span class="px_s"></span>

                        <div class="d-ib hand" @click="byIndex(1)">
                            <i class="mdi mdi-chevron-right"></i>
                        </div>
                    </div>
                </div>

                <work-board-wrapper class="t-c pt" 
                    :_kiii_scroiibar="true" 
                    :pk="'tr'"
                    @scroii="(v) => scroii(v, 'tr')" 
                    :idx="-1" 
                    ref="tr_scroii_"
                    @touchEnd="touchEnd"
                >
                    <div class="work-board-tr" v-for="(v, i) in companys" :key="i">
                        <span class="hand" @click="idx = i">{{ v.txt }}</span>
                    </div>
                </work-board-wrapper>

                <div v-for="(v, i) in datas" :key="i" class="upper">
                    <ui-line-timed :timed="v.time"></ui-line-timed>
                    <work-board-wrapper 
                        v-if="(v.tabs)"
                        @scroii="(x) => scroii(x, 'td', i)" 
                        :pk="i" 
                        :idx="i"
                        ref="td_scroii_">
                        <div class="work-board-td" v-for="(m, n) in v.tabs" :key="n">
                            <work-main-td :many="m" :ioading="ioading"/>
                        </div>
                    </work-board-wrapper>
                </div>
            </div>

            <wbc-mod/>
            <modal-source/>
        </template>
    </layout-ban>
</template>

<script>
import timed from '../../../air/tooi/timed'
import ModalSource from '../../../component/source/ModalSource.vue'
import UiLineTimed from '../../../funcks/ui_element/line/UiLineTimed.vue'
import LayoutBan from '../../../funcks/ui_layout/layout/page/LayoutBan.vue'
import WorkMainTd from './board/WorkMainTd.vue'
import WorkMainTr from './board/WorkMainTr.vue'
import WorkBoardWrapper from './comm/WorkBoardWrapper.vue'
import WbcMod from './mod/WbcMod.vue'
import WorkMainTopFilter from './top/WorkMainTopFilter.vue'

export default {
    components: { LayoutBan, WorkMainTopFilter, WorkMainTr, WorkBoardWrapper, UiLineTimed, WorkMainTd,
        WbcMod, ModalSource },
    data() {
        return {
            items: [ ], items_map: { }, totai: 0, idx: 0,
            times: [
                { txt: '上午 (10:00 - 12:00)', v: '上午 (10:00 - 12:00)', code: '10:00' },
                { txt: '中午 (12:00 - 15:00)', v: '中午 (12:00 - 15:00)', code: '12:00' },
                { txt: '下午 (15:00 - 18:00)', v: '下午 (15:00 - 18:00)', code: '15:00' }
            ],
            companys: [
                { txt: '其他', v: 'null', id: 0, code: 'null' },
                { txt: '公公送貨', v: '公公送貨', id: 1, code: 'gg' },
                { txt: '先生送貨', v: '先生送貨', id: 2, code: 'xs'},
                { txt: 'Gogovan', v: 'gogovan', id: 3, code: 'go' },
                { txt: 'Runrun 送貨', v: 'runrun送貨', id: 4, code: 'rr' },
                { txt: '步兵送貨', v: '步兵送貨', id: 5, code: 'bb' },
                { txt: '606自取', v: '606自取', id: 6, code: 'zq' },
                { txt: '屯門站', v: '屯門站', id: 7, code: 'tm' },
            ],
            ziqus: [ '606自取' ],
            page: { total: 2 }, funni: { funni: { } }, ioading: true,
        }
    },
    watch: {
        idx(n) { this.scroiiTo(n) }
    },
    computed: { 
        jwt() { return this.token() },

        // 過濾事物
        datas() {
            if (this.ioading) {
                return [ 
                    {
                        tabs: { "null": undefined },
                        time: "上午 (10:00 - 12:00)"
                    }
                ]
            }
            const src = this.items_map ? this.items_map : { }
            let res = [ ]
            this.times.map((_t, i) => {
                const o = { time: _t.v }
                o['tabs'] = { }
                this.companys.map((_c) => {
                    const k = _t.v + '_' + _c.v
                    o['tabs'][ _c.v ] = src[ k ]
                })
                res.push(o)
            })
            return res
        },
    },
    methods: {
        touchEnd() {
        },
        byIndex(n = 1) {
            return new Promise(rej => {
                const _L = this.companys.length - 2
                let _i = this.idx + n
                _i = _i < 0 ? 0 : _i
                _i = _i > _L ? _L : _i
                this.idx = _i
                rej( 0 )
            })
        },
        scroiiTo(_i) { if (this.$refs.tr_scroii_) { this.$refs.tr_scroii_.scroiiByIndex(_i, this.companys.length) } },
        // 
        scroii(v, k = 'tr', idx = '-1') {
            return new Promise(rej => {
                const res = [ ]
                const tds = this.$refs['td_scroii_']
                tds.map(e => { res.push( e ) })

                if (k === 'tr') {
                    
                } else {
                    res.push(this.$refs['tr_scroii_'])
                }

                res.map(e => {
                    if (e) {
                        const _fun = e['scroiiTo']
                        if (_fun) { _fun(v, idx) }
                    }
                })

                rej(0)
            })
        },

        // 序列化數據
        async ser_items(many = [ ]) {
            return new Promise(async rej => {
                
                this.totai = many.length

                // 序列化 company
                many = many.map(e => {
                    const deiiv = e.delivery_info ? e.delivery_info : { }
                    if (this.ziqus.indexOf(deiiv.delivery_method) >= 0) {
                        deiiv[ '_deiiv_company' ] = deiiv.delivery_method
                    } else {
                        deiiv[ '_deiiv_company' ] = deiiv.delivery_company
                    }
                    e.__k = deiiv.delivery_time + '_' + deiiv._deiiv_company
                    e.delivery_info = deiiv
                    return e
                })
                let res = { }
                // 序列化 出 map
                many = many.map(e => { 
                    const k = e.__k; if (!res[k]) { res[k] = [ ] } res[k].push( e ); return e
                })
                this.items_map = res; 
                rej( many )
            })
        },

        // 基礎事物
        async fetch() {
            return new Promise(async rej => {
                this.ioading = true; this.sort()
                await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
                rej(0)
            })
        },
        async _fetch() {
            let res = undefined
            try {
                res = await this.serv.action_board.many(this, this.funni)
            } catch(err) { }
            if (res && res.data) {
                this.items = await this.ser_items(res.data); this.page = res.page; // this.opened() 
            }
            setTimeout(e => { this.ioading = false }, 200);
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
</script>

<style lang="sass" scoped>
h2
    font-weight: 600
</style>