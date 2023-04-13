
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
            refreshMany: false
            
        }
    }, 
    getters:{

    }, 
    actions: {
        do_refresh() { this.refresh = !this.refresh  },
        do_refreshMany() { this.refreshMany = !this.refreshMany },
        
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