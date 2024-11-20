<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCustomerStore } from "./stores/customer";
import { onMounted } from "vue";

const customerStore = useCustomerStore();

onMounted(() => {
  customerStore.fetchCustomerToken();
});
</script>

<template>
  <img
    src="../src/assets/logo.png"
    alt=""
    width="200px"
    style="display: block; margin: 0 auto"
  />
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/strategy">Strategy</RouterLink>
      <RouterLink to="/payout">Payout</RouterLink>
      <RouterLink to="/debriefs">Debrief</RouterLink>
    </nav>
  </header>
  <main class="main">
    <RouterView />
  </main>

  <footer>
    <div class="footer-content">
      <p class="site-summary">
        Exotic Casion — Your ultimate destination for unforgettable fun!
      </p>
    </div>
    <div class="footer-line"></div>
  </footer>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #283845;
  margin: 0 auto;
  padding: 20px;
  max-width: 1280px;
}

.styled-button {
  background-color: #d36135; /* Teal */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 25px; /* Rounded corners */
  padding: 15px 30px; /* Vertical and horizontal padding */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Bold text */
  cursor: pointer; /* Pointer on hover */
  transition:
    background-color 0.3s ease,
    transform 0.3s ease; /* Transition for hover effects */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  display: block;
}

.styled-button:hover {
  background-color: #a6cfd5; /* Soft Yellow on hover */
  color: #fff; /* Change text color on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.styled-button:focus {
  outline: none; /* Remove outline on focus */
}

.styled-button:active {
  transform: translateY(1px); /* Slight push effect when clicked */
}
nav {
  background-color: #a6cfd5;
  border-bottom: 2px solid #588157;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
  transition:
    color 0.3s,
    background-color 0.3s;
  border-radius: 5px;
}

nav a:hover {
  background-color: #d36135;
  color: #fff;
}

nav a.active {
  background-color: #d36135;
  color: #fff;
  border-radius: 5px;
}

nav a:not(.active):hover {
  background-color: #d36135;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 15px 10px;
  }

  nav a {
    padding: 10px;
    width: 100%;
    text-align: center;
  }
}
.main {
  margin-bottom: 100px;
}
footer {
  background-color: #a6cfd5;
  padding: 20px 0;
  text-align: center;
  font-family: "Arial", sans-serif;
  position: fixed;
  bottom: 0;
  max-width: 1280px;
  width: 100%;
  z-index: 10;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.site-summary {
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

.footer-line {
  height: 4px;
  background-color: #588157;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
