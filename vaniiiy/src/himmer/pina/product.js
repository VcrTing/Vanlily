
import { defineStore } from "pinia"

export default defineStore('productPina', { 
    state: () => {
        return {
            products: [ ],
        }
    }, 
    getters:{
        has_products() { return this.products && this.products.length > 0 }
    }, 
    actions: {
        do_products(v) { this.products = v },
    },
})