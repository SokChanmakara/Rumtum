import { defineStore } from "pinia";

export const useProductStore = defineStore('products', {
    state: () => ({
        cart: [],
        mapCartProduct: {}
    }),
    actions: {
        addCart(item) {
            console.log(this.mapCartProduct[item.id])
            if(this.mapCartProduct[item.id]) {
                return
            }
            console.log("after check",this.mapCartProduct[item.id])

            this.mapCartProduct[item.id] = true
            this.cart.push(item)    
            console.log(this.cart)
        }
    }
})