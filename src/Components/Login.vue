<template>
    <div class="login">
        <h1>My Account</h1>
      <div class="container">
        <div class="login-box">
          <h2>LOGIN</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="form.password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group checkbox">
              <input type="checkbox" id="remember-me" v-model="form.rememberMe" />
              <label for="remember-me">Remember Me</label>
                <div class="pw">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <button type="submit" class="submit-btn">SIGN IN</button>
            
          </form>
        </div>
        
        <div class="new-customer-box">
          <h2>NEW CUSTOMER?</h2>
            <div class="paragraph">
                <p>Registering for this site allows you to access your
                    order status and history. We'll get a new account set
                    up for you in no time. For this we will only ask you 
                    for information necessary to make the purchase process 
                    faster and easier.</p>
            </div>
          <button class="create-account-btn">CREATE AN ACCOUNT</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: "",
          password: "",
          rememberMe: false,
        },
      };
    },
    methods: {
      submitForm() {
        console.log(this.form);
      },
    },
  };
  </script>
  
  <style scoped>
 
 .login {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 48px);
  background-color: #ffffff;
  padding-top: 40px;
}
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center; 
}
h2 {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}
  .container {
    display: flex;
    justify-content: space-between;
    /* background: white;
    padding: 40px;
    /* border-radius: 4px; */
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    /* width: 100%;
    max-width: 1400px; */ 
    
  }

  .pw {
    
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: right;

  }
  
  .login-box, .new-customer-box {
    width: 45%;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background: white;
    /* max-width: 600px; */
  }
  .form-group {
  margin-bottom: 20px;
}
input[type="email"],
input[type="password"] {
  width: 95%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;

}
.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  text-transform: uppercase;
}
  
  .new-customer-box {
    text-align: center;
    
    
    
  }
  .paragraph {
    text-align: center;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    color: rgb(113, 114, 114);
  }
  
  .create-account-btn {
    width: 40%;
    margin-top: 60px;
    padding: 12px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    text-transform: uppercase;
  }
  </style>