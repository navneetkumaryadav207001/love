<template>
  <div class="container">
    <h1>Type Your Name</h1>
    <input
      type="text"
      v-model="name"
      autocomplete="new-text"
      spellcheck="false"
      autofocus
    />
    <Transition>
      <h2 v-if="check()">{{ this.message }}</h2>
    </Transition>
    <HomeButton />
  </div>
</template>

<script>
import HomeButton from "./HomeButton.vue";
export default {
  components: {
    HomeButton,
  },
  name: "App",
  data() {
    return {
      name: "",
      data: JSON.parse(
        new TextDecoder().decode(
          new Uint8Array(
            [...atob(this.$route.query.d)].map((char) => char.charCodeAt(0))
          )
        )
      ),
      message: "",
      bg: 0,
    };
  },

  methods: {
    check: function () {
      for (let key in this.data) {
        const uniqueChars = Array.from(new Set(key.toLowerCase()));
        const lookaheads = uniqueChars.map((char) => `(?=.*${char})`).join("");
        const pattern = `^${lookaheads}[${uniqueChars.join("")}]+$`;
        const regex = new RegExp(pattern);
        if (regex.test(this.name.toLowerCase())) {
          this.message = this.data[key][0];
          this.bg = this.data[key][1];
          this.background();
          return true;
        }
      }
      this.bg = 0;
      this.background();
      this.message = "";
      return false;
    },
    background: function () {
      let body = document.querySelector("body");
      console.log(this.bg);
      if (!this.bg) {
        body.style.backgroundImage = "none";
      }
      if (this.bg == 1) {
        body.style.backgroundImage =
          "url(https://img.freepik.com/free-vector/simple-valentines-day-background-with-text-space_1017-35916.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
      }
      if (this.bg == 2) {
        body.style.backgroundImage =
          "url(https://wallpapers.com/images/hd/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40vh;
}
h1 {
  color: rgb(117, 115, 115);
}
input {
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 2px;
  outline: none;
  text-align: center;
  font-size: large;
  background-color: transparent;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.img {
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: block;
  z-index: -1;
}
</style>
