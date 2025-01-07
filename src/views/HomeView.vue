<template>
    <Banner/>
    <div class="homecard">
        <HomeCard  v-for="card in cards" :title="card.title" :image="card.image" :key="card.title"/>
    </div>
    <div class="productlist">
        <ProductList v-for="product in products" 
            :name="product.name" 
            :price="product.price" 
            :pri_color="product.pri_color" 
            :sec_color="product.sec_color"
            :ter_color="product.ter_color"
            :images="product.images"
            :Himage="product.Himage"
            :key="product.name"
            />
    </div>

    
    <div class="rate">
      <div class="rating_contain">
        <div class="scroll-wrap">
          <Comment
            v-for="item in comments"
            :key="item.name"
            :avatar="item.avatar"
            :title="item.title"
            :text="item.text"
            :name="item.name"
            :initial-rating="item.rating"
          />
        </div>
      </div>
    </div>

    <footerPage/>
    </template>
    <script setup>
    // import { RouterLink, RouterView } from 'vue-router'
    import { ref } from "vue";
    import HomeCard from "@/components/HomeCard.vue";
    import ProductList from "@/components/ProductList.vue";
    import Banner from "@/components/Banner.vue";
    import Comment from '@/components/Comment.vue'
    import footerPage from "@/components/footerPage.vue";
    // import Navbar from "./components/Navbar.vue";
    
    const cards = ref([
        {
            title: 'Walk In Style',
            image: "../src/assets/images/card1.png"
        },
        {
            title: 'Dress In Style',
            image: "../src/assets/images/card2.png"
        },
        {
            title: 'Stand In Style',
            image: "../src/assets/images/card3.png"
        },
        {
            title: 'Pair In Style',
            image: "../src/assets/images/card4.png"
        }
    ]);
    
    const products = ref([
        {
            name: 'Cropped Ribbed',
            price: '$120.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product1.png",
            Himage: "../src/assets/images/Productone.png"
        },
        {
            name: 'Women Shorts',
            price: '$100.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product2.png",
            Himage: "../src/assets/images/Producttwo.png"
        },
        {
            name: 'Sneakers Girl',
            price: '$220.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            ter_color: '#115C1E',
            images: "../src/assets/images/Product3.png",
            Himage: "../src/assets/images/Productthree.png"
        },
        {
            name: 'Metal Buckles Skinny Belt',
            price: '$24.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product4.png",
            Himage: "../src/assets/images/Productfour.png"
        },
        {
            name: 'Emotion Mini Dress',
            price: '$110.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product5.png",
            Himage: "../src/assets/images/Productfive.png"
        }, 
        {
            name: 'Cropped Ribbed',
            price: '$120.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product6.png",
            Himage: "../src/assets/images/Productsix.png"
        },
        {
            name: 'Women Shorts',
            price: '$100.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product7.png",
            Himage: "../src/assets/images/Productseven.png"
        },
        {
            name: 'Sneakers Girl',
            price: '$220.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            ter_color: '#115C1E',
            images: "../src/assets/images/Product8.png",
            Himage: "../src/assets/images/Producteight.png"
        },
        {
            name: 'Metal Buckles Skinny Belt',
            price: '$24.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product9.png",
            Himage: "../src/assets/images/Productnine.png"
        },
        {
            name: 'Emotion Mini Dress',
            price: '$110.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/images/Product10.png",
            Himage: "../src/assets/images/Productten.png"
        },
    ]);

    const comments = ref([
    {
      avatar: '../src/assets/images/C1.png',
      title: 'Feature Availability',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'SIMON WILLIAMS',
      rating: 4
    },
    {
      avatar: '../src/assets/images/C2.png',
      title: 'Theme Flexibility',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'ROSSY OGAWA',
      rating: 4
    },
    {
      avatar: '../src/assets/images/C3.png',
      title: 'Incredible UI/UX',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'AUTHOR\'S NAME',
      rating: 3
    },
    {
      avatar: '../src/assets/images/C4.png',
      title: 'Excellent Support',
      text: 'The customer support for this theme is outstanding. Quick responses and always helpful. It\'s refreshing to see such dedication to customer satisfaction.',
      name: 'EMMA JOHNSON',
      rating: 5
    },
    {
      avatar: '../src/assets/images/C5.png',
      title: 'Great Performance',
      text: 'I\'m impressed with how fast and smooth this theme runs. It\'s clear that a lot of optimization work has gone into it. My website has never been faster!',
      name: 'MICHAEL CHEN',
      rating: 4
    },
    {
      avatar: '../src/assets/images/C6.png',
      title: 'Easy Customization',
      text: 'As someone with limited coding experience, I found this theme incredibly easy to customize. The documentation is clear, and the options are intuitive.',
      name: 'SOPHIA RODRIGUEZ',
      rating: 2
    }
  ]);
    </script>
    
    
    <style scoped>
        .homecard{
            display:flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        .productlist{
            display:flex;
            flex-wrap: wrap;
            justify-content:space-evenly;
        }
        .rate {
            min-height: 60vh;
            background: #fce4ec;
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
  
        .rating_contain {
            max-width: 1800px;
            width: 100%;
            overflow: hidden;
        }
        
        .scroll-wrap {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        
        .scroll-wrap::-webkit-scrollbar {
            display: none;
        }
        
        .scroll-wrap > * {
            flex: 0 0 calc(33.333% - 1rem);
            scroll-snap-align: start;
            margin-right: 1rem;
        }
        
        @media (max-width: 1024px) {
            .scroll-wrap > * {
            flex: 0 0 calc(50% - 1rem);
            }
        }
        
        @media (max-width: 640px) {
            .scroll-wrap > * {
            flex: 0 0 calc(100% - 1rem);
            }
        }
    </style>
    