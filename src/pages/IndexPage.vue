<template>
  <q-page class="flex column items-center">
    <TextInput
      v-bind="textInputProps"
      class="q-mt-lg"
    />
    <TaskList />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

import TextInput from 'components/TextInput.vue';
import TaskList from 'components/TaskList.vue';
import { useTaskStore } from 'src/pinia/useTask';

export default defineComponent({
  name: 'IndexPage',
  components: {
    TextInput,
    TaskList,
  },
  setup() {
    const store = useTaskStore();
    const { addTask } = store;

    const textInputProps = {
      label: 'Add Task',
      placeholder: 'What needs to be done?',
      iconName: 'add',
      addTask,
    };

    return {
      textInputProps,
    };
  },
});
</script>
