<template>
  <button v-if="isInstallable" @click="installPWA" class="install-button">
    Install App
  </button>
</template>

<script>
export default {
  data() {
    return {
      isInstallable: false,
      deferredPrompt: null,
    };
  },
  methods: {
    installPWA() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          this.deferredPrompt = null;
        });
      }
    },
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.isInstallable = true;
    });
    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      this.isInstallable = false;
    });
  },
  beforeUnmount() {
    window.removeEventListener("appinstalled", this.onAppInstalled);
  },
};
</script>

<style>
.install-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 10px;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  animation: bounce 0.6s ease;
}
@keyframes bounce {
  0% {
    transform: translateY(-40px) scale(1);
  }
  25% {
    transform: translateY(-29.98px) scale(1);
  }
  50% {
    transform: translateY(0px) scale(0.9);
  }
  75% {
    transform: translateY(-16px) scale(1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
.install-button:hover {
  background-color: white;
  color: black;
  border: 1px black solid;
}
</style>
