import WishList from "@/views/WishList.vue";
import { defineStore } from "pinia";
export const useWishlistStore = defineStore( 'wishlist',{
    state:()=>({
        wishlist:[],
    }),
    getters: {
        wishlistCount:(state) => state.wishlist.length
    },
    actions:{
        addToWishlist(product){
            if(!this.wishlist.some((item) => item.id === product.id)){
                this.wishlist.push(product)
            }
        },
        removeFromWishlist(productId) {
            this.wishlist = this.wishlist.filter(item => item.id === productId ? false : true);
        }
    }
})

