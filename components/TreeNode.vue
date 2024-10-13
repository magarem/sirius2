<!-- components/TreeNode.vue -->
<template>
  <li>
    <!-- <a :href="node._path" class="pr-0"><span  class="nline-block align-bottom capitalize">{{ node.title }}</span></a> -->
   
    <nuxt-link :to="node._path" :external="buildMode=='generate'||true" class="pr-0">
      <span  class="nline-block align-bottom capitalize">{{ node.title }}</span>
    </nuxt-link>
   
    <ul v-if="node.children && node.children.length">
      <TreeNode v-for="child in node.children" :key="child._path" :node="child" />
    </ul>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
import {
  File
} from 'lucide-vue-next'

const config = useRuntimeConfig();
const buildMode = config.public.buildMode

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
ul {
    list-style-type: none;
    margin-left: 10px;
}


ul li {
    margin-bottom: 12px;
    /* margin-left: -10px;
    display: flex;
    align-items: center; */
}

ul li::before {
    color: transparent;
    font-size: 1px;
    content: " ";
    margin-left: -1.3em;
    margin-right: 8px;
    /* padding-bottom: 10px; */
    padding: 10px;
    background-color: rgb(164, 154, 136);
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZpbGUiPjxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN1oiLz48cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIvPjwvc3ZnPg==");
    -webkit-mask-size: cover;
}

</style>
