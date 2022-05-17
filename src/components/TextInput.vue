<template>
  <q-input
    bottom-slots
    v-model="taskName"
    :label="label"
    :placeholder="placeholder"
    counter
    class="width-60-percent"
    @keydown.enter="addTask(taskName)"
    @keyup.enter="taskName = ''"
  >
    <template v-slot:append>
      <q-icon
        name="close"
        @click="taskName = ''"
        class="cursor-pointer"
      >
        <q-tooltip> Clear input </q-tooltip>
      </q-icon>
    </template>
    <template v-slot:hint />
    <template v-slot:after>
      <q-btn
        round
        dense
        flat
        :icon="iconName"
        @click="
          () => {
            addTask(taskName);
            taskName = '';
          }
        "
      >
        <q-tooltip> Add task </q-tooltip>
      </q-btn>
    </template>
  </q-input>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
      required: true,
    },
    iconName: {
      type: String,
      default: '',
      required: true,
    },
    addTask: {
      type: Function,
    },
  },
  setup() {
    const taskName = ref('');

    return {
      taskName,
    };
  },
});
</script>
