<template>
<Product_Page1/>
<Product_Page2/>
<Product_Page3/>
<footerPage/>
<!-- <Comment/> -->
</template>

<script>
import footerPageVue from '@/components/footerPage.vue'
// import Comment from '../components/ProductPage/Comment.vue'
import Product_Page1 from '../components/ProductPage/Product_Page1.vue'
import Product_Page2 from '../components/ProductPage/Product_Page2.vue'
import Product_Page3 from '../components/ProductPage/Product_Page3.vue'
import footerPage from '../components/footerPage.vue'

export default {
    components:{
        Comment,
        Product_Page1,
        Product_Page2,
        Product_Page3,
        footerPage
    }
}
</script>

<style>

</style>