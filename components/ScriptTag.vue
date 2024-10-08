// ScriptTag.vue
<script setup lang="ts">
  defineProps({
    type: {
      type: String,
      default: 'text/javascript',
      required: false,
    },
    async: {
      type: String,
      default: undefined,
      required: false,
    },
    defer: {
      type: String,
      default: undefined,
      required: false,
    },
  });
</script>

<template>
  <Component 
    :is="'script'" 
    :type="type" 
    :async="async ? async : undefined"
    :defer="defer ? defer : undefined"
  >
    <slot />
  </Component>
</template>