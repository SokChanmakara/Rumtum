import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    registeredUsers: [],
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
    registerUser(user) {
      this.registeredUsers.push(user);
    },
    loginUser(email, password) {
      const user = this.registeredUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        this.setUser(user);
        return true;
      }
      return false;
    },
  },
});