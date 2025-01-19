<template>
  <div class="welcome-page">
    <div class="content">
      <h1>Welcome to Lettter</h1>
      <p>
        This is Just a Fun Project I made becuase i was getting bore. You can
        make what i call you own card. Which is essitially a link. That you can
        send SomeOne. If that person put there name in the box then will see a
        secret message written by you.
      </p>
      <button class="create-button" @click="this.$router.push('/create')">
        Create
      </button>
      <InstallButton />
    </div>
  </div>
</template>

<script>
import InstallButton from "./InstallButton.vue";
export default {
  name: "WelcomePage",
  components: {
    InstallButton,
  },
};
</script>

<style scoped>
.welcome-page {
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Arial, sans-serif;
}

.content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.create-button {
  background-color: black;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.3s ease;
  border-radius: 5px;
  border: black 1px solid;
}

.create-button:hover {
  background-color: white;
  color: black;
  border: black 1px solid;
}
</style>
