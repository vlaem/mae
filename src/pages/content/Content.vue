<template>
  <div class="container">
    <h2>Contenido de comunidad</h2>
    <div class="content">
      <h3>{{ content.title }}</h3>
      <img class="content-image" :src="content.file" />
      <p>{{ content.text }}</p>
    </div>
    <div class="content-messages">
      <p>Mensajes</p>
      <div v-for="message of content.messages" :key="message.id">
        <div>{{ message.text }}</div>
        <div>- {{ message.name }}</div>
      </div>
    </div>
    <div class="content-add-message">
      <o-input v-model="newMessage" placeholder="Escribe un mensaje" />
      <o-button @click="addMessage" :disabled="!newMessage">Enviar</o-button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "src/store/community";
import { useStore as useSessionStore } from "src/store/session";

export default {
  props: ["id"],
  setup(props) {
    const store = useStore();
    const sessionStore = useSessionStore();
    const content = store.getContentById(props.id);
    const newMessage = ref("");
    const addMessage = () => {
      store.addMessage(props.id, {
        message: newMessage.value,
        username: sessionStore.user,
      });
      newMessage.value = "";
    };

    return {
      newMessage,
      content,
      addMessage,
    };
  },
};
</script>
<style scoped>
.content {
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 10px;
}

.content-image {
  width: 80%;
}
</style>