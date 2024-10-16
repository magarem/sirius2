<template>
    <div>
      <h1>Árvore de Diretórios</h1>
      <ul>
        <TreeNode v-for="node in fileTree" :key="node.name" :node="node" />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import TreeNode from '@/components/TreeNode.vue'; // Componente para renderizar cada nó da árvore
  
  const fileTree = ref([]); // Armazena a árvore de diretórios
  
  // Função para buscar a árvore de diretórios
//   const fetchFileTree = async () => {
    const { data, error } = await useFetch('/api/list-all-files'); // Chama a API
  
    if (error.value) {
      console.error('Erro ao buscar árvore de arquivos:', error.value);
    } else {
      fileTree.value = data.value.fileTree; // Atualiza a árvore de diretórios
    }
//   };
  
  // Chama a função quando o componente é montado
//   onMounted(fetchFileTree);
  </script>
  