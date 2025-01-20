<template>
  <button @click="redirect" class="home-button">Home</button>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.home-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.home-button:hover {
  background-color: white;
  color: black;
  border: 1px black solid;
}
</style>
