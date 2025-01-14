import { defineStore } from "pinia";

export const useProductStore = defineStore('products', {
    state: () => ({
        cart: [],
        mapCartProduct: {},
        products: 
        [
            {   
                id: "1",
                name: 'Cropped Ribbed',
                quantity: 5,
                price: 120.00,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product1.png",
                Himage: "/src/assets/images/Productone.png"
            },
            {   
                id: "2",
                name: 'Women Shorts',
                price: 100.00,
                quantity: 10,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product2.png",
                Himage: "/src/assets/images/Producttwo.png"
            },
            {   
                id: "3",
                name: 'Sneakers Girl',
                price: 220.00,
                quantity: 2,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                ter_color: '#115C1E',
                images: "/src/assets/images/Product3.png",
                Himage: "/src/assets/images/Productthree.png"
            },
            {   
                id: "4",
                name: 'Metal Buckles Skinny Belt',
                price: 24.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product4.png",
                Himage: "/src/assets/images/Productfour.png"
            },
            {   
                id: "5",
                name: 'Emotion Mini Dress',
                price: 110.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product5.png",
                Himage: "/src/assets/images/Productfive.png"
            }, 
            {   
                id: "6",
                name: 'Cropped Ribbed',
                price: 120.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product6.png",
                Himage: "/src/assets/images/Productsix.png"
            },
            {   
                id: "7",
                name: 'Women Shorts',
                price: 100.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product7.png",
                Himage: "/src/assets/images/Productseven.png"
            },
            {   
                id: "8",
                name: 'Sneakers Girl',
                price: 220.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                ter_color: '#115C1E',
                images: "/src/assets/images/Product8.png",
                Himage: "/src/assets/images/Producteight.png"
            },
            {   
                id: "9",
                name: 'Metal Buckles Skinny Belt',
                price: 24.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product9.png",
                Himage: "/src/assets/images/Productnine.png"
            },
            {   
                id: "10",
                name: 'Emotion Mini Dress',
                price: 110.00,
                quantity:1,
                pri_color: '#E30B0B',
                sec_color: '#000000',
                // ter_color: '#115C1E',
                images: "/src/assets/images/Product10.png",
                Himage: "/src/assets/images/Productten.png"
            },
        ]
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