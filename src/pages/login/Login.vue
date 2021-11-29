<template>
  <div class="container view">
    <form class="login" @submit="login">
      <img src="/logo.png" />
      <h1>Acceder</h1>
      <h2>Ir a Storytelling App</h2>
      <h2>¿Cómo te llamas?</h2>

      <o-input
        v-model="credentials.name"
        placeholder="Ingresar Nombre"
      ></o-input>
      <o-button type="submit" @click="login">Registrarse</o-button>      
    </form>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const credentials = reactive({ name: "" });

    const login = async (e) => {
      e.preventDefault();
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
</style>