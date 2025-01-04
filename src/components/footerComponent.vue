<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-icons">
          <a href="#" class="footer-icon footer-fb"><i class="pi pi-facebook"></i></a>
          <a href="#" class="footer-icon footer-ig"><i class="pi pi-instagram"></i></a>
          <a href="#" class="footer-icon footer-tw"><i class="pi pi-twitter"></i></a>
        </div>
        <div class="footer-div"></div>
        <div class="footer-pay">
          <img src="../assets/visa.png" alt="Visa" />
          <img src="../assets/aba.png" alt="ABA" />
          <img src="../assets/acleda.png" alt="Acleda" />
          <img src="../assets/mastercard.png" alt="Mastercard" />
        </div>
      </div>

      <div class="footer-content">
        <div class="footer-col">
          <h3>Customer support</h3>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Returns Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Delivery Options</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>About SOUL SOCIETY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Register Guide</a></li>
            <li><a href="#">Buyer Guide</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contact Us</h3>
          <p>soulsociety.com</p>
          <div class="footer-icons">
            <a href="#" class="footer-icon"><i class="pi pi-facebook"></i></a>
            <a href="#" class="footer-icon"><i class="pi pi-instagram"></i></a>
            <a href="#" class="footer-icon"><i class="pi pi-comment"></i></a>
            <a href="#" class="footer-icon"><i class="pi pi-send"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import 'primeicons/primeicons.css';

.footer {
  background: #f3f4f6;
  padding: 2rem 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.footer-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 10%; */
}

.footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #d1d5db;
}

.footer-icons, .footer-pay {
  display: flex;
  gap: 1rem;
}

.footer-div {
  width: 1px;
  height: 1.5rem;
  background: #d1d5db;
  margin: 0 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  padding: 0 4rem;
}

.footer h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

.footer a {
  color: #333;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-icon {
  color: #4b5563;
  font-size: 1.5rem;
}

.footer-icon:hover {
  opacity: 0.8;
}

.footer-fb { color: #1877f2; }
.footer-ig { color: #e4405f; }
.footer-tw { color: #1da1f2; }

.footer-pay img {
  height: 2rem;
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 5%;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 1rem;
  }
}
</style>