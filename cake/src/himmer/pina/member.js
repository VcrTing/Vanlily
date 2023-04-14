
import { defineStore } from "pinia"

export default defineStore('memberPina', { 
    state: () => {
        return {
            customer: { },
            member: { }
        }
    }, 
    getters:{

    }, 
    actions: {
        do_member(v = { }) { 
            if (!v.phone_no) { v.phone_no = v.phone }
            this.member = v 
        },
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