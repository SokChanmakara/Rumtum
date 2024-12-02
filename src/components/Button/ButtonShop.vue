<template>
    <div class="bannershop">
        <button @click="toggleDisplay" class="bannerbtn">Shop Now</button>
        <LoginPopup v-if="display" @close="toggleDisplay"/>
    </div>
</template>

<script>
import LoginPopup from '../LoginPopup.vue';
export default {
    components:{
        LoginPopup
    },
    data(){
        return{
            display: false
        };
    },
    methods: {
        toggleDisplay(){
            this.display = !this.display
        }
    }
}
</script>

<style scoped>
    .bannerbtn{
        width:160px;
        height: 60px;
        font-size:22px;
        color:white;
        background: transparent;
        border: 2px solid white;
    }
    .bannerbtn:active{
        background-color: #F77E8A;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    }
</style>