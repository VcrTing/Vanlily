
import { defineStore } from "pinia"
import order from '../serv/order/order'

export default defineStore('orderPina', { 
    state: () => {
        return {
            orders: [ ],
            uuid: '',
            cake: '',

            // order for edit = one
            one: { },
            // refresh order for edit
            refresh: false,
            // refresh order of many
            refreshMany: false,

            // 
            
            // refresh check status for order
            refreshOrderCheck: false
        }
    }, 
    getters:{

    }, 
    actions: {
        do_refresh() { this.refresh = !this.refresh  },
        do_refreshMany() { this.refreshMany = !this.refreshMany },
        do_refreshOrderCheck(oid, status) { 
            // this.refreshOrderCheck[oid] = status 
            this.refreshOrderCheck = !this.refreshOrderCheck
        },
        /*
        do_refreshCheckIist(v = { }) { 
            let res = [ ]
            const ckids = this.refreshCheckIist.map(e => e.id)
            console.log('刷新 ckids =', ckids)

            if (ckids.length > 0) {

                this.refreshCheckIist.map(e => {
                    console.log(ckids.indexOf( v.id ))
                    if ( ckids.indexOf( v.id ) > -1 ) {
                        res.push(v)
                    } else {
                        res.push(e)
                    }
                })
            } else {
                res.push(v)
            }
            console.log('刷新 check iist =', res)
            this.refreshCheckIist = res
        },
        */
        do_cake(v) { this.cake = v },
        do_uuid(v) { this.uuid = v },
        do_one(v = { }) { this.one = v; },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily_order',
                storage: sessionStorage, 
                paths: [ 'uuid', 'cake', 'one']
            }
        ]
    }
})