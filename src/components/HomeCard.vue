<template>
    <section>
        <div class="card-container">
            <div class="card" :style="{ backgroundImage: `url(${image})` }">
                <div class="card-text">
                    <div class="text">{{ title }}</div>
                    <ButtonShop/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonShop from './Button/ButtonShop.vue';
export default {
    name:'HomeCard',
        props:["title", "image"],
    components:{
        ButtonShop
    }
}
</script>

<style scoped>
    .card-container{
        display:flex;
        justify-content: space-evenly;
    }
    .card{
        width: 450px;
        height: 500px;
        /* background-image: url("../assets/images/card1.png"); */
        background-size:cover;
        background-repeat: no-repeat;
        margin-top: 20px;
    }
    .card-text{
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
    }
    .text{
        font-size:40px;
        font-family: "Poppins";
        color:white;
    }
    #recommend{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        font-family: "Poppins";
        margin-top: 50px;
    }


</style>