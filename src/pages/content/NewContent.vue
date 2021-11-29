<template>
  <div>
    <div><h1>New Content</h1></div>
    <div>
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
    <div>
      <o-select v-model="newContent.app">
        <option value="instagram">Instagram</option>
      </o-select>
      <o-select placeholder="Tipo de publicacion" v-model="newContent.type">
        <option value="pic">Pie de foto</option>
        <option value="ad">Pie de foto en anuncios</option>
      </o-select>
      <o-input
        v-model="newContent.text"
        v-if="!!newContent.type"
        placeholder="Ingresar publicacion"
      ></o-input>
      <o-upload v-model="newContent.file">
        <o-button tag="a" variant="primary">
          <o-icon icon="upload"></o-icon>
          <span>Subir imagen</span>
        </o-button>
      </o-upload>
      <o-button type="submit" @click="save">Guardar</o-button>
    </div>
  </div>
</template>
<script>
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
      app: "instagram",
      type: null,
      text: "",
      file: null,
    });

    const save = () => {
      const imageUrl = URL.createObjectURL(newContent.file);
      console.log("imageUrl", imageUrl);
      const content = store.addContent(props.campaignId, {
        ...newContent,
        file: imageUrl,
      });
      router.push({
        name: "content-preview",
        params: { campaignId: props.campaignId, id: content.id },
      });
    };

    return {
      store,
      campaign,
      newContent,
      save,
    };
  },
};
</script>