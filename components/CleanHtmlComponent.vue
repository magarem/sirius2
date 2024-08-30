<template>
    <!-- Renderiza o HTML limpo usando v-html -->
    <div v-html="cleanedHTML"></div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  // Definimos a prop para receber a string HTML original
  const props = defineProps({
    htmlString: {
      type: String,
      required: true
    }
  });
  
  const cleanedHTML = ref('');
  
  // Função para remover elementos vazios recursivamente
  function removeEmptyNodes(element) {
    if (!element.textContent.trim()) {
      element.remove();
      return;
    }
  
    element.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        removeEmptyNodes(child);
      }
    });
  }
  
  // Observa mudanças na prop htmlString e processa o HTML
  watch(
    () => props.htmlString,
    (newHtmlString) => {
      if (process.client) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newHtmlString;
        removeEmptyNodes(tempDiv);
        cleanedHTML.value = tempDiv.innerHTML.trim();
      } else {
        cleanedHTML.value = ''; // Fallback para SSR
      }
    },
    { immediate: true }
  );
  </script>
  