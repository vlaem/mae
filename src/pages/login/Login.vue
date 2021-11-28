<template>
  <div class="container view">
    <form class="login" @submit="login">
      <h1>Acceder</h1>
      <h2>Ir a Storytelling App</h2>
      <o-input
        v-model="credentials.username"
        placeholder="Correo electrònico"
      ></o-input>
      <o-input
        v-model="credentials.password"
        placeholder="Contraseña"
      ></o-input>
      <router-link to="/register">
        ¿Olvidaste tu Apple ID o la contraseña ?</router-link
      >
      <o-button type="submit" @click="login">Enviar</o-button>
    </form>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const credentials = reactive({ username: "", password: "" });

    const login = async (e) => {
      e.preventDefault();
      router.push({ name: "proyects" });
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
</style>