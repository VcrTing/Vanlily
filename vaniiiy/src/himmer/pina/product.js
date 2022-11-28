
import { defineStore } from "pinia"

export default defineStore('productPina', { 
    state: () => {
        return {
            products: [ ],

            cakes: [ ]
        }
    }, 
    getters:{
        has_products() { return this.products && this.products.length > 0 }
    }, 
    actions: {
        do_cakes(v) { this.cakes = v },
        do_products(v) { this.products = v },
    },
})