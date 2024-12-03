<template>
    <div class="container">
        <img :src="images" alt="">
        <div class="color-picker">
            <div class="color one" :style="{ backgroundColor: pri_color }"></div>
            <div class="color two" :style="{backgroundColor: sec_color}"></div>
            <div class="color two" :style="{backgroundColor: ter_color}"></div>
        </div>
        <div class="name">
            <p>{{name}}</p>
            <p id="price">{{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    props:
    [
        "name",
        "price",
        "pri_color",
        "sec_color",
        "ter_color",
        "images"
    ]
    
}
</script>

<style scoped>
    .container{
        /* margin-left: 23px; */
        margin-top: 23px;
    }
    img{
        width:340px;
        height: 460px;
    }

    .color-picker{
        display: flex;
        gap:10px;
    }
    .color{
        width:50px;
        height:26px;
    }

    .name{
        margin-top:10px;
    }
    p{
        font-family: "Poppins";
        font-size: 20px;
    }
    #price{
        color:#E30B0B;
    }
</style>