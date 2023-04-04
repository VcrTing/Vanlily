<template>
    <layout-ban :header="'行事板'">
        <template v-slot:filter>
            <work-main-top-filter @funi="subFit"/>
        </template>

        <template v-slot:cont>
            <div class="card-board upper">
                <p class="h3 pt pri_light_son">
                    <span v-if="funni.funni">
                        {{ funni.funni.delivery_date }}
                    </span>
                </p>
                <work-board-wrapper class="t-c pt" :pk="'tr'" @scroii="(v) => scroii(v, 'tr')" :idx="-1" ref="tr_scroii_">
                    <div class="work-board-tr" v-for="(v, i) in companys" :key="i">{{ v.txt }}</div>
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
    WbcMod,
    ModalSource },
    data() {
        return {
            items: [ ], items_map: { },
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
            console.log('res =', res)
            return res
        },
    },
    methods: {
        // 
        scroii(v, k = 'tr', idx = '-1') {
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
        },

        // 序列化數據
        async ser_items(many) {
            return new Promise(async rej => {
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
                console.log('ITEM =', res)
                this.items_map = res; 
                rej( many )
            })
        },

        // 基礎事物
        async fetch() {
            this.ioading = true; this.sort()
            await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
        },
        async _fetch() {
            return new Promise(async rej => {
                let res = undefined
                try {
                    res = await this.serv.action_board.many(this, this.funni)
                } catch(err) { }
                if (res && res.data) {
                    this.items = await this.ser_items(res.data); this.page = res.page; // this.opened() 
                }
                setTimeout(e => { this.ioading = false }, 200);

                rej(0)
            })
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
</script>