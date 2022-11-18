
import { defineStore } from "pinia"

export default defineStore('otherPina', { 
    state: () => {
        return {
            materiai_access: { }
        }
    }, 
    getters:{

    }, 
    actions: {
        do_materiai_access(v) { this.materiai_access = v }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily',
                storage: sessionStorage, 
                paths: [ 'materiai_access' ]
            }
        ]
    }
})