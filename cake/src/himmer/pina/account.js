
import { defineStore } from "pinia"

// import persist from "./_persist"

export default defineStore('accountPina', { 
    state: () => { return {
        consume: {}
    }}, 
    getters:{
        
    }, 
    actions: {
        do_consume(v = { }) { this.consume = v }
    },
})