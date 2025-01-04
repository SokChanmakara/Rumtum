<template>
  <!-- <div class="thumbnails">
    <Review
        v-for="(image, index) in productImages" 
        :key="index"
        :src="image"
    />
  </div> -->
    <Review/>
    <CommentSection/>
    <Recommended/>
    <div class="app">
      <div class="container">
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
    
    <footerComponent/>
     <RouterView/>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Review from './components/Product_Page1.vue';
  import CommentSection from './components/Product_Page2.vue';
  import Recommended from './components/Product_Page3.vue';
  import Comment from './components/Comment.vue'
  import footerComponent from './components/footerComponent.vue';

  const comments = ref([
    {
      avatar: './src/assets/C1.png',
      title: 'Feature Availability',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'SIMON WILLIAMS',
      rating: 5
    },
    {
      avatar: './src/assets/C2.png',
      title: 'Theme Flexibility',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'ROSSY OGAWA',
      rating: 5
    },
    {
      avatar: './src/assets/C3.png',
      title: 'Incredible UI/UX',
      text: 'This is a wonderful theme. Very easy to use. Very easy to customize. The new version has lots of great additions and is still easy to work with. Also, customer service excellent!',
      name: 'AUTHOR\'S NAME',
      rating: 5
    },
    {
      avatar: './src/assets/C4.png',
      title: 'Excellent Support',
      text: 'The customer support for this theme is outstanding. Quick responses and always helpful. It\'s refreshing to see such dedication to customer satisfaction.',
      name: 'EMMA JOHNSON',
      rating: 5
    },
    {
      avatar: './src/assets/C5.png',
      title: 'Great Performance',
      text: 'I\'m impressed with how fast and smooth this theme runs. It\'s clear that a lot of optimization work has gone into it. My website has never been faster!',
      name: 'MICHAEL CHEN',
      rating: 5
    },
    {
      avatar: './src/assets/C6.png',
      title: 'Easy Customization',
      text: 'As someone with limited coding experience, I found this theme incredibly easy to customize. The documentation is clear, and the options are intuitive.',
      name: 'SOPHIA RODRIGUEZ',
      rating: 5
    }
  ])

  // import { ref } from 'vue'


// Product data
// const productImages = ref([
// {
//   image: '../assets/C1.png'
//   // '../assets/aba.png',
  // '../assets/C1.png',
  // '/assets/martha-side.jpg',
  // '/assets/martha-detail.jpg',
  // '/assets/martha-full.jpg',
  // '/assets/martha-style.jpg'
// ]
// }

// const colorVariants = [
//   // '/assets/color-green.jpg',
//   // '/assets/color-black.jpg',
//   // '/assets/color-beige.jpg'
// ]

// const sizes = ['S', 'M', 'L']

// const paymentIcons = [
//   // '@/assets/visa.png',
//   // '/assets/mastercard.png',
//   // '/assets/aba.png',
//   // '/assets/union.png',
//   // '/assets/wing.png',
//   // '/assets/ftb.png'
// ]

// const paymentMethods = [
//   // 'Visa',
//   // 'Mastercard',
//   // 'ABA Bank',
//   // 'Union Pay',
//   // 'Wing Bank',
//   // 'FTB Bank'
// ]
// ])

  </script>
  
  <style>
  .app {
    min-height: 60vh;
    background: #fce4ec;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
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

