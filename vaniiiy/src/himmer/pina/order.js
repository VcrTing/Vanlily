
import { defineStore } from "pinia"

export default defineStore('orderPina', { 
    state: () => {
        return {
            orders: [ ],
            one: { },
            uuid: '',
            uuid_pod: ''
        }
    }, 
    getters:{

    }, 
    actions: {
        do_uuid_pod(v) { this.uuid_pod = v },
        do_uuid(v) { this.uuid = v },
        do_one(v) { this.one = v }
    },
})