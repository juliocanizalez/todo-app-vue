<template></template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    attack: {
      type: String,
    },
  },
});
</script>
