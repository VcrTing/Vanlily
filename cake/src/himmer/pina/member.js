
import { defineStore } from "pinia"

export default defineStore('memberPina', { 
    state: () => {
        return {
            customer: { }
        }
    }, 
    getters:{

    }, 
    actions: {
        do_customer(v = { }) { this.customer = v }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily_member',
                storage: sessionStorage, 
                paths: [ 'customer' ]
            }
        ]
    }
})