<template>
    <div>
      <h3 class="text-lg font-bold">Selecione uma Imagem</h3>
      <ul>
        <li v-for="(url, index) in imageUrls" :key="index">
          <button @click="selectImage(url)" class="text-blue-500 hover:underline">
            {{ url }}
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    onSelect: {
      type: Function,
      required: true,
    }
  });
  
  const imageUrls = ref([
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ]);
  
  const selectImage = (url) => {
    props.onSelect(url);
  };
  </script>
  