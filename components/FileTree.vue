<template>
    <draggable v-model="localNodes" tag="ul" @end="onOrderChange"  item-key="name">
      <template #item="{ element }">
        <li>
          <!-- Diretório -->
          <span v-if="element.type === 'directory'">
            📁 {{ element.name }}
            <!-- Renderiza recursivamente os filhos -->
            <file-tree v-if="element.children && element.children.length" :nodes="element.children" @order-change="onOrderChange" />
          </span>
          <!-- Arquivo -->
          <span v-else>
            📄 {{ element.name }}
          </span>
        </li>
      </template>
    </draggable>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, watch } from 'vue';
  import draggable from 'vuedraggable';
  
  // Recebe a prop 'nodes'
  const props = defineProps({
    nodes: Array
  });
  
  // Define o evento para informar quando a ordem mudar
  const emit = defineEmits(['order-change']);
  
  // Faz uma cópia local de 'nodes' para usar com v-model
  const localNodes = ref([...props.nodes]);
  
  // Watch para atualizar a cópia local se a prop mudar
  watch(() => props.nodes, (newNodes) => {
    localNodes.value = [...newNodes];
  });
  
  // Função chamada quando a ordem é alterada
  const onOrderChange = () => {
    console.log('localNodes.value:', localNodes.value);
    emit('order-change', localNodes.value);
  };

//   const onOrderChange = () => {
//     const newOrder = JSON.parse(JSON.stringify(localNodes.value));
//     console.log('Nova ordem local antes de emitir:', newOrder);
//     emit('order-change', newOrder); // Emite a nova ordem
//     };
  </script>
  