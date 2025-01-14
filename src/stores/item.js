import { defineStore } from 'pinia'

export const useItemStore = defineStore('product', {
    state: () => ({
        searchQuery: '',
        products: [
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

    getters: {
        filteredProducts: (state) => {
            const query = state.searchQuery.toLowerCase().trim()
            return state.products.filter(product => {
                if (!query) return true
                const nameMatch = product.name.toLowerCase().includes(query)
                const tagMatch = product.tags?.some(tag => 
                    tag.toLowerCase().includes(query)
                )
                return nameMatch || tagMatch
            })
        },

        getProductById: (state) => {
            return (productId) => state.products.find(product => product.id === productId)
        }
    },

    actions: {
        setSearchQuery(query) {
            this.searchQuery = query
        },
    }
})
