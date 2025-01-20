<template>
  <div class="welcome-page">
    <div class="content">
      <h1>
        Welcome to
        <div class="name">Lettter</div>
      </h1>
      <p>
        This is Just a Fun Project I made becuase i was getting bore. You can
        make what i call you own card. Which is essitially a link. That you can
        send SomeOne. If that person put there name in the box then will see a
        secret message written by you.
      </p>
      <button class="create-button" @click="this.$router.push('/create')">
        Create
      </button>
      <div class="decoration-div">
        <DecoraTion class="Flower" />
        <DecoraTion class="Flower" />
        <DecoraTion class="Flower" />
      </div>
      <InstallButton />
    </div>
  </div>
</template>

<script>
import InstallButton from "./InstallButton.vue";
import DecoraTion from "./DecoraTion.vue";
export default {
  name: "WelcomePage",
  components: {
    InstallButton,
    DecoraTion,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.welcome-page {
  background-color: #26547c;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Arial, sans-serif;
}

.decoration-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.Flower:hover {
  transition: transform 3s ease;
  transform: rotate(360deg);
}
.name {
  display: inline;
  color: #ef476f;
}

.content {
  text-align: center;
}

h1 {
  color: #ffd166;
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  max-width: 600px;
  color: #ffd166;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.create-button {
  background-color: #ef476f;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.3s ease;
  border-radius: 25px;
}

.create-button:hover {
  background-color: aliceblue;
  color: black;
}
</style>
