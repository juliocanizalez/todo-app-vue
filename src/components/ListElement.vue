<template>
  <q-list class="element-list">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section
      side
      class="element-list__buttons"
      v-if="isTodo"
    >
      <q-btn
        flat
        rounded
        color="primary"
        icon="delete"
        @click="removeTask(id)"
      >
        <q-tooltip> Delete Task </q-tooltip>
      </q-btn>
      <q-btn
        flat
        rounded
        color="primary"
        icon="done"
        @click="markDone(id)"
      >
        <q-tooltip> Mark as done </q-tooltip>
      </q-btn>
    </q-item-section>
    <q-item-section
      side
      class="element-list__buttons"
      v-else
    >
      <q-btn
        flat
        rounded
        color="primary"
        icon="delete"
        @click="removeTask(id)"
      >
        <q-tooltip> Delete Task </q-tooltip>
      </q-btn>
    </q-item-section>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue';

import { useTaskStore } from '../pinia/useTask';

export default defineComponent({
  name: 'ListElement',
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    isTodo: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const store = useTaskStore();
    const { removeTask, markDone } = store;

    return {
      removeTask,
      markDone,
    };
  },
});
</script>
