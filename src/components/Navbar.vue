<template>

<nav class="container">
    <h1>RUMTUM</h1>
    <!-- nav category -->
    <div class="navwrapper">
        <div class="navcategory">
                <h3>HOME</h3>
                <h3>SHOP</h3>
                <h3>CATEGORY</h3>        
        </div>
    </div>

    <!-- navbar icon -->
    <div class="nav icon">
        <div>
            <i class="pi pi-search" style="color: 'var(--p-primary-color)'"></i>
        </div>
        <div>
            <i class="pi pi-user" style="color: 'var(--p-primary-color)'"></i>
        </div>
        <div>
            <i class="pi pi-heart" style="color: 'var(--p-primary-color)'"></i>
        </div>
        <div>
            <i class="pi pi-shopping-bag" style="color: 'var(--p-primary-color)'"></i>
        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>

    h1{
        color:white;
        font-size: 20px;
    }
    h3{
        font-size: 16px;
        font-weight: normal;
    }
    .container{
        display:flex;
        left:1%;
        position:relative;
        justify-content: space-between;
        background: transparent;
        margin-top: 20px;
        z-index: 1000;
    }
    .navcategory{
        display:flex;
        position: absolute;
        left:15%;
        top:5%;
        align-self: center;
        gap: 30px;
    }
    .nav.icon{
        display: flex;
        gap:15px;
        position: absolute;
        right:3%;
        top:30%;
        align-items: center;
    }
</style>