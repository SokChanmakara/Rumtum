<template>
    <div class="overlay">
        <div class="containerBox">
            <div class="container">
                <div class="wrapper">
                    <div>
                        <button class="close-btn" @click="closePopup">
                            <i class="pi pi-times"></i>
                        </button>
                        <button id="login">Login</button>
                    </div>
                    <div id="register">
                        <p>New User?</p>
                        <a>Register Now</a>
                    </div>

                    <div class="currency-wrapper">
                        <h2>Currency</h2>
                        <div class="currency-list">
                            <button class="currency">KHR ៛</button>
                            <button class="currency">USD $</button>
                        </div>
                    </div>
                    
                    <div class="currency-wrapper">
                        <h2>Language</h2>
                        <div class="currency-list">
                            <button class="currency">Khmer</button>
                            <button class="currency">English</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closePopup() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .containerBox{
        display:flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .container{
        display:flex;
        position: relative;
        justify-content: center;
        margin-top:10px;
        padding-top:30px;
        width:425px;
        height: 330px;
        border: 1px solid rgb(179, 178, 178);
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: white;
    }
    .close-btn{
        position: absolute;
        background: transparent;
        top:10px;
        right: 10px;
        border: none;
        font-size: 20px;
        cursor: pointer;
        z-index: 1999; 
    }

    #login{
        font-family: "Poppins";
        font-size:26px;
        background: black;
        border:none;
        border-radius: 8px;
        color:white;
        width:360px;
        height:50px;
    }
    #register{
        display:flex;
        justify-content: center;
        padding-top: 10px;
        margin-bottom:20px;
        gap:5px;
        font-size:20px;
        font-family: "Poppins";
    }
    div > a{
        text-decoration: underline;
    }
    .currency-list{
        display:flex;
        gap:20px;
        margin-bottom: 20px;
    }
    .currency{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:16px;
        font-family: "Poppins";
        width:auto;
        height:30px;
        background:transparent;
        border-radius:6px;
        border:none;
        padding:8px;
        margin-top:3px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
</style>