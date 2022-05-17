<template>
  <q-page class="flex flex-center">
    <q-card
      flat
      bordered
      class="about-card"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://avatars.githubusercontent.com/u/34779728?v=4" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Julio Canizalez</q-item-label>
          <q-item-label caption> Frontend Developer </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          frontend developer with experience in reactjs, sass, javascript and frontend technologies with a great
          ambition to learn new things and eager to take on new challenges that make me grow in
          knowledge.</q-card-section
        >
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
