<template>
  <div class="account">
    <main class="main">
      <div>
        <router-link to="/">
          <div id="home">Home</div>
        </router-link>
        <div>
          <h1 class="title">My Account</h1>
        </div>
      </div>
      
      <div class="info">
        <p class="welcome">Welcome <strong>{{ userStore.user ? userStore.user.name : 'Guest' }}!</strong></p>
        <div class="menu">
          <a href="#" @click.prevent="activeTab = 'orders'" :class="['menu-link', { active: activeTab === 'orders' }]">Order History</a>
          <span class="sep">|</span>
          <a href="#" @click.prevent="activeTab = 'addresses'" :class="['menu-link', { active: activeTab === 'addresses' }]">Addresses</a>
          <span class="sep">|</span>
          <a href="#" class="menu-link" @click="userStore.user ? userStore.clearUser() : $router.push('/login')">
        {{ userStore.user ? 'Log out' : 'Sign up or Login' }}
          </a>
        </div>
      </div>

      <hr class="divider">

      <section v-if="activeTab === 'addresses'" class="addresses">
        <h2 class="section-title">Addresses</h2>
        <p class="address">
          {{ userStore.user ? userStore.user.name : 'Guest' }}<br>
          Cambodia
        </p>
      </section>

      <section v-if="activeTab === 'orders'" class="orders">
        <h2 class="section-title">Order History</h2>
        <p class="no-orders">You haven't placed any orders yet !</p>
      </section>
    </main>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/user';
  
  const activeTab = ref('addresses');
  const userStore = useUserStore();
  </script>
  
  <style scoped>
  #home{
    font-size: 20px;
    font-weight: bold;
  }
  .account {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
  } 
  .top {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bag {
    position: relative;
  }
  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
  .nav {
    background-color: #f0f0f0;
    padding: 10px 20px;
  }
  .links {
    display: flex;
    align-items: center;
  }
  .link {
    color: #666;
    text-decoration: none;
    font-size: 14px;
  }
  .sep {
    margin: 0 10px;
    color: #666;
  }
  .main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  } 
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .welcome {
    font-size: 18px;
  }
  .menu {
    display: flex;
    align-items: center;
  }
  .menu-link {
    color: #666;
    text-decoration: none;
    font-size: 16px;
  }
  .menu-link.active {
    font-weight: bold;
  }
  .divider {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
  }
  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }  
  .address, .no-orders {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    .info {
      flex-direction: column;
      align-items: flex-start;
    }
    .menu {
      margin-top: 10px;
    }
    .welcome {
      margin-bottom: 10px;
    }
  } 
  @media (max-width: 480px) {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }
    .icons {
      margin-top: 10px;
    } 
    .menu {
      flex-direction: column;
      align-items: flex-start;
    }
    .menu .sep {
      display: none;
    }
    .menu-link {
      margin-bottom: 5px;
    }
  }
  </style>