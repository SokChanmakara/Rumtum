<template>
    <MenBannerr/>

    <div class="homecard">
        <MenHomeCart  v-for="card in cards" :title="card.title" :image="card.image" :key="card.title"/>
    </div>

    <div class="productlist">
        <MenProductListt v-for="product in products" 
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
          <MenComment
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
import { ref } from "vue";
import MenBannerr from '@/components/MenHomePage/MenBanner.vue'
import MenHomeCart from "@/components/MenHomePage/MenHomeCart.vue";
import MenProductListt from "@/components/MenHomePage/MenProductlist.vue";
import MenComment from "@/components/MenHomePage/MenComment.vue";
import footerPage from '@/components/footerPage.vue'



const cards = ref([
        {
            title: 'Walk In Style',
            image: "../src/assets/MenPics/Suit1.png"
        },
        {
            title: 'Dress In Style',
            image: "../src/assets/MenPics/Suit1.png"
        },
        {
            title: 'Stand In Style',
            image: "../src/assets/MenPics/Suit1.png"
        },
        {
            title: 'Pair In Style',
            image: "../src/assets/MenPics/Suit1.png"
        },

    ]);

    const products = ref([
        {
            name: 'Cropped Ribbed',
            price: '$120.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/Suit1.png",
            Himage: "../src/assets/MenPics/Suit2.webp"
        },
        {
            name: 'Women Shorts',
            price: '$100.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/D1.webp",
            Himage: "../src/assets/MenPics/D2.webp"
        },
        {
            name: 'Sneakers Girl',
            price: '$220.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            ter_color: '#115C1E',
            images: "../src/assets/MenPics/Red1.webp",
            Himage: "../src/assets/MenPics/Red2.webp"
        },
        {
            name: 'Metal Buckles Skinny Belt',
            price: '$24.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/Green1.webp",
            Himage: "../src/assets/MenPics/Green2.webp"
        },
        {
            name: 'Emotion Mini Dress',
            price: '$110.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/Brown1.webp",
            Himage: "../src/assets/MenPics/Brown2.webp"
        }, 
        {
            name: 'Cropped Ribbed',
            price: '$120.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/J1.webp",
            Himage: "../src/assets/MenPics/J2.webp"
        },
        {
            name: 'Women Shorts',
            price: '$100.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/Gray1.webp",
            Himage: "../src/assets/MenPics/Gray2.webp"
        },
        {
            name: 'Sneakers Girl',
            price: '$220.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            ter_color: '#115C1E',
            images: "../src/assets/MenPics/Milk1.webp",
            Himage: "../src/assets/MenPics/Milk2.webp"
        },
        {
            name: 'Metal Buckles Skinny Belt',
            price: '$24.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/Black1.webp",
            Himage: "../src/assets/MenPics/Black2.webp"
        },
        {
            name: 'Emotion Mini Dress',
            price: '$110.00',
            pri_color: '#E30B0B',
            sec_color: '#000000',
            // ter_color: '#115C1E',
            images: "../src/assets/MenPics/White1.webp",
            Himage: "../src/assets/MenPics/White2.webp"
        },
    ]);

    const comments = ref([
    {
      avatar: '../src/assets/MenPics/White1.webp',
      title: 'Feature Availability',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'SIMON WILLIAMS',
      rating: 4
    },
    {
      avatar: '../src/assets/MenPics/Black1.webp',
      title: 'Theme Flexibility',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'ROSSY OGAWA',
      rating: 4
    },
    {
      avatar: '../src/assets/MenPics/Gray1.webp',
      title: 'Incredible UI/UX',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'AUTHOR\'S NAME',
      rating: 3
    },
    {
      avatar: '../src/assets/MenPics/Red1.webp',
      title: 'Excellent Support',
      text: 'The customer support for this theme is outstanding. Quick responses and always helpful. It\'s refreshing to see such dedication to customer satisfaction.',
      name: 'EMMA JOHNSON',
      rating: 5
    },
    {
      avatar: '../src/assets/MenPics/Green1.webp',
      title: 'Great Performance',
      text: 'I\'m impressed with how fast and smooth this theme runs. It\'s clear that a lot of optimization work has gone into it. My website has never been faster!',
      name: 'MICHAEL CHEN',
      rating: 4
    },
    {
      avatar: '../src/assets/MenPics/D1.webp',
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
            background: #797777;
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