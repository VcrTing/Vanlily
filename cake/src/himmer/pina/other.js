
import { defineStore } from "pinia"

export default defineStore('otherPina', { 
    state: () => {
        return {
            materiai_access: { },
            deiivery_prods: [ ]
        }
    }, 
    getters:{

    }, 
    actions: {
        do_deiivery_prods(v = []) { this.deiivery_prods = v }, 
        do_materiai_access(v) { this.materiai_access = v }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily_other',
                storage: sessionStorage, 
                paths: [ 'materiai_access' ]
            }
        ]
    }
})