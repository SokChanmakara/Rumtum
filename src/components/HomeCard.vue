<template>
    <section>
        <div class="card-container">
            <div class="card">
                <div class="card-text">
                    <div class="text">Walk In Style</div>
                    <ButtonShop/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonShop from './Button/ButtonShop.vue';
export default {
    components:{
        ButtonShop
    }
}
</script>

<style scoped>
    .card-container{
        display:flex;
        justify-content: space-between;
    }
    .card{
        width: 500px;
        height: 500px;
        background-image: url("../assets/images/card1.png");
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


</style>