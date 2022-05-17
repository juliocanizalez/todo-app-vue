<template>
  <h5 v-if="getTodoList.length > 0">TODO List</h5>
  <ListElement
    v-for="item in getTodoList"
    :key="item.id"
    :title="item.task"
    :id="item.id"
    isTodo
  />
  <h5 v-if="getDoneList.length > 0">Done</h5>
  <ListElement
    v-for="item in getDoneList"
    :key="item.id"
    :title="item.task"
    :id="item.id"
  />
</template>

<script>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

import { useTaskStore } from '../pinia/useTask';
import ListElement from './ListElement.vue';

export default defineComponent({
  name: 'TaskList',
  components: {
    ListElement,
  },
  setup() {
    const store = useTaskStore();
    const { getTodoList, getDoneList } = storeToRefs(store);

    return {
      getTodoList,
      getDoneList,
    };
  },
});
</script>
