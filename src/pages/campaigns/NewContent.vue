<template>
  <div class="container">
    <div><h1>New Content</h1></div>
    <div class="campaign">
      <span>Campaña: </span>
      <o-input
        placeholder="Nombre Campaña"
        v-model="campaign.name"
        disabled
      ></o-input>
      <o-datepicker
        placeholder="Fecha Lanzamiento"
        v-model="campaign.launchDate"
        locale="es-PE"
        disabled
      />
    </div>
    <div class="content">
      <span>Contenido:</span>
      <o-input
        v-model="newContent.name"
        placeholder="Nombre de publicaciòn"
      ></o-input>
      <div class="content-type">
        <o-select v-model="newContent.app">
          <option value="instagram">Instagram</option>
        </o-select>
        <o-select placeholder="Tipo de publicacion" v-model="newContent.type">
          <option value="pic">Pie de foto</option>
          <option value="ad">Pie de foto en anuncios</option>
        </o-select>
      </div>
      <o-input
        v-if="canAddText"
        v-model="newContent.text"
        placeholder="Ingresar publicacion"
        type="textarea"
      ></o-input>
      <o-upload v-model="newContent.file" v-if="canUploadImage">
        <o-button tag="a" variant="primary">
          <o-icon icon="upload"></o-icon>
          <span>Subir imagen</span>
        </o-button>
      </o-upload>
      <span>{{ fileName }}</span>
    </div>
    <div class="actions">
      <o-button type="submit" @click="save" :disabled="!canSave"
        >Guardar</o-button
      >
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "src/store/campaigns";

export default {
  props: ["campaignId"],
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const campaign = store.getCampaignById(props.campaignId);
    const newContent = reactive({
      title: "",
      app: "instagram",
      type: null,
      text: "",
      file: null,
    });

    const fileName = computed(() => {
      if (newContent.file) {
        return newContent.file.name;
      }
      return "";
    });

    const canAddText = computed(() => {
      return newContent.type === "pic" || newContent.type === "ad";
    });

    const canUploadImage = computed(() => {
      return newContent.type === "pic" || newContent.type === "ad";
    });

    const canSave = computed(() => {
      return !!newContent.name && !!newContent.type;
    });

    const save = () => {
      const imageUrl = URL.createObjectURL(newContent.file);

      const content = store.addContent(props.campaignId, {
        ...newContent,
        file: imageUrl,
      });
      router.push({
        name: "campaign-content-preview",
        params: { campaignId: props.campaignId, id: content.id },
      });
    };

    return {
      store,
      campaign,
      newContent,
      save,
      canAddText,
      canUploadImage,
      canSave,
      fileName,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.campaign {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
</style>