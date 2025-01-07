<template>
    <section>
        <div class="card-container">
            <div class="card">
                <img :src="image" alt="homecard image">
                <div class="card-text">
                    <div class="text">{{ title }}</div>
                    <ButtonShop/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonShop from '../Button/ButtonShop.vue';
export default {
    name:'HomeCard',
        props:["title", "image"],
    components:{
        ButtonShop
    },
    mounted() {
        console.log(' Title:', this.title)
    }
}
</script>

<style scoped>
    .card-container{
        display:flex;
        justify-content: space-evenly;
        /* width: 500px; */
    }
    .card img{
        transition: transform .5s ease;
    }
    .card:hover img{
        transform:scale(1.5);
    }
    .card{
        /* width: 400px; */
        height: 500px;
        /* background-image: url("../assets/images/card1.png"); */
        margin-top: 20px;
        overflow:hidden;
        position:relative;
    }   
    .card-text{
        position:absolute;
        top:150px;
        right:50px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 100%;
        padding:10px;
    }
    .card-text:hover{
        right:10px;
    }
    .text{
        font-size:40px;
        margin-left: 15%;
        font-family: "Poppins";
        color:white;
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
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