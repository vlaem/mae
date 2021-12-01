<template>
  <div class="container view">
    <form class="login" @submit="login">
      <img src="/logo.png" />
      <div class="title">
        <h1>Acceder</h1>
        <h2>Ir a Storytelling App</h2>
        <h2>¿Cómo te llamas?</h2>
      </div>
      <o-input
        v-model="credentials.name"
        placeholder="Ingresar Nombre"
      ></o-input>
      <div class="actions">
        <o-button type="submit" @click="login">Ingresar</o-button>
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from "src/store/session";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const credentials = reactive({ name: "" });

    const login = async (e) => {
      e.preventDefault();
      store.setUser(credentials.name);
      router.push({ name: "home" });
    };
    return {
      credentials,
      login,
    };
  },
};
</script>

<style scoped>
.view {
  display: flex;
  height: 100vh;
  max-width: 570px;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  width: 100%;
  margin: auto;
  gap: 1.3rem;
}

.title {
  text-align: center;
}

h1,
h2 {
  margin: 0;
}
</style>