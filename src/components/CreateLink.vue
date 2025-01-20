<template>
  <div class="container">
    <h1 class="title">Create Your Own Card</h1>
    <div class="form">
      <input
        v-model="name"
        type="text"
        placeholder="Name"
        class="input-field"
        autofocus
        autocomplete="new-text"
        spellcheck="false"
      />
      <!--  <select v-model="selectedOption" class="select-field">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select> -->
      <input
        v-model="message"
        type="text"
        placeholder="Message"
        class="input-field"
        autocomplete="new-text"
        spellcheck="false"
      />
      <h5>Choose a background:</h5>
      <div class="image-container">
        <img
          src="https://img.freepik.com/free-vector/simple-valentines-day-background-with-text-space_1017-35916.jpg"
          alt="loading"
          @click="changeImage(1, $event)"
        />
        <img
          src="https://wallpapers.com/images/hd/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.jpg"
          alt="loading"
          @click="changeImage(2, $event)"
        />
      </div>
      <button type="submit" @click="generateLink" class="generate-button">
        ADD
      </button>
      <button @click="RESET()" class="generate-button">RESET</button>
    </div>

    <div v-if="generatedLink" class="link-section">
      <a :href="generatedLink" class="generated-link">{{ generatedLink }}</a>
      <br />
      <button @click="copyLink" class="copy-button">Copy Link</button>
    </div>
  </div>
  <HomeButton />
</template>

<script>
import HomeButton from "./HomeButton.vue";
export default {
  components: {
    HomeButton,
  },
  data() {
    return {
      name: "",
      message: "",
      data: {},
      generatedLink: "",
      image: 0,
    };
  },
  methods: {
    generateLink() {
      if (this.name == "" || this.message == "") {
        return "";
      }
      this.data[`${this.name}`] = [this.message, this.image];
      let full = `${window.location.origin}${this.$route.fullPath}`;
      full = full.replace("create", "view");
      const utf8Array = new TextEncoder().encode(JSON.stringify(this.data));
      let encodedText = btoa(String.fromCharCode(...utf8Array));
      this.generatedLink = `${full}?d=${encodedText}`;
    },
    copyLink() {
      navigator.clipboard.writeText(this.generatedLink);
      alert("Link copied to clipboard!");
    },
    RESET() {
      this.data = {};
      this.generatedLink = "";
    },
    changeImage(n, event) {
      let img = document.querySelectorAll("img");
      img.forEach((image) => {
        image.style.border = "1px solid black";
      });
      if (this.image == n) {
        n = 0;
        this.image = 0;
        event.target.style.border = "1px solid black";
        return;
      }
      this.image = n;
      event.target.style.border = "4px solid #3bb143";
      console.log(this.image);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
img {
  width: 45%;
  margin: 2px;
  border: 1px solid black;
  transition: border 0.05s;
  border-radius: 15px;
}
img:hover {
  opacity: 50%;
}
body {
  font-family: Arial, sans-serif;
  background-color: #26547c;
  color: black;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 400px;
}

.input-field,
.select-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 25px;
}

.input-field:hover,
.select-field:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.generate-button,
.copy-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: black solid 1px;
  cursor: pointer;
  border-radius: 25px;
}

.generate-button:hover,
.copy-button:hover {
  background-color: white;
  color: black;
}

.link-section {
  margin-top: 20px;
}

.generated-link {
  font-size: 18px;
  margin-bottom: 10px;
}
.image-container {
  display: flex;
  justify-content: center;
}
</style>
