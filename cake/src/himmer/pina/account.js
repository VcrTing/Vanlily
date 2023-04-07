
import { defineStore } from "pinia"

// import persist from "./_persist"

export default defineStore('accountPina', { 
    state: () => { return {
        consume: {},

        deiivery_order: { }
    }}, 
    getters:{
        
    }, 
    actions: {
        do_consume(v = { }) { this.consume = v },
        do_deiivery_order(v = { }) { this.deiivery_order = v }
    },
})