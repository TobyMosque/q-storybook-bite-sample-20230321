<template>
  <q-page class="row items-center justify-evenly">
    <div class="row q-col-gutter-sm" style="width: 480px">
      <div class="col">
        <my-input readonly label="Date A" :model-value="datea" />
      </div>
      <div class="col">
        <my-input readonly label="Date B" :model-value="dateb" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useDemoAStore } from '@stores/demoa';
import { useDemoBStore } from '@stores/demob';
import MyInput from '@components/MyInput.vue';

const demoAStore = useDemoAStore();
const demoBStore = useDemoBStore();

const { datea } = storeToRefs(demoAStore);
const { dateb } = storeToRefs(demoBStore);
onMounted(async () => {
  await demoAStore.fetch();
  await demoBStore.fetch();
})
</script>
