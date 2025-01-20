<template>
  <div class="flower">
    <div class="petal petal-1"></div>
    <div class="petal petal-2"></div>
    <div class="petal petal-3"></div>
    <div class="petal petal-4"></div>
    <div class="petal petal-5"></div>
    <div class="petal petal-6"></div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  name: "PinkFlower",
};
</script>

<style scoped>
.flower {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.petal {
  position: absolute;
  width: 90%;
  height: 50%;
  background-color: #ef476f;
  border-radius: 50%;
}

.petal-1 {
  transform: rotate(0deg);
}

.petal-2 {
  transform: rotate(60deg);
}

.petal-3 {
  transform: rotate(120deg);
}

.petal-4 {
  transform: rotate(180deg);
}

.petal-5 {
  transform: rotate(240deg);
}

.center {
  width: 30%;
  height: 30%;
  background-color: #ffd166;
  border-radius: 50%;
  z-index: 1;
}
</style>
