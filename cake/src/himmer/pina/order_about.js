
import { defineStore } from "pinia"

export default defineStore('orderAboutPina', { 
    state: () => {
        return {
            froms: [ ],
            from_of_edit: { },
            refresh: false
        }
    }, 
    getters:{

    }, 
    actions: {
        do_froms(v = []) { this.froms = v },
        do_refresh() { this.refresh = !this.refresh },
        do_from_of_edit(v = { }) { this.from_of_edit = v }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily_order_about',
                storage: sessionStorage, 
                paths: [ 'froms' ]
            }
        ]
    }
})