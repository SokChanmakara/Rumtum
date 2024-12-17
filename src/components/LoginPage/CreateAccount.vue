<template>
  <Navbar/>
  <div class="create-account">
    <h2>CREATE AN ACCOUNT</h2>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input
            type="text"
            v-model="form.firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="form.lastName"
            placeholder="Last Name"
            required
          />
        </div>
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
          <input type="checkbox" id="subscribe" v-model="form.subscribe" />
          <label for="subscribe">
            Subscribe and stay updated with new products and offers!
          </label>
        </div>
        <button type="submit" class="submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: { Navbar },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        subscribe: false,
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

.create-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
  background-color: #ffffff;
  padding-top: 150px;
  overflow: hidden; 
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  
}

.form-group {
  margin-bottom: 20px;
}

input[type="text"],
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

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type="checkbox"] {
  margin: 0;
  width: 16px;
  height: 16px;
}

label {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #333;
}



.submit-btn:hover {
  background-color: #333;
}
</style>