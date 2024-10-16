<!-- components/TreeView.vue -->
<template>
  <ul>
    <TreeNode v-for="node in data" :key="node._path" :node="node" />
  </ul>
</template>

<script setup>
import TreeNode from './TreeNode.vue'; // Import TreeNode component
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 1em;
}

li {
  margin: 0.5em 0;
}

a {
  text-decoration: none;
}
</style>