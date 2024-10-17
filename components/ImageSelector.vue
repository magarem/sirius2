<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4">Uploads</h1>

    <!-- Verifica se está carregando -->
    <div v-if="loading">Carregando...</div>

    <!-- Exibe a lista de miniaturas -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="file in files" :key="file" class="bg-white shadow rounded overflow-hidden">
        <div v-if="isImage(file)">
          <img
            
            :src="`/upload/${file}`"
            alt="Upload"
            class="object-cover w-full h-48"
          />
          <button @click="selectImage(`/upload/${file}`)" class="text-blue-500 hover:underline">
              {{ file }}
            </button>
        </div>
        
        <p v-else class="p-2 text-center text-sm">Arquivo: {{ file }}</p>
      </div>
    </div>

    <!-- Verifica se há erro -->
    <div v-if="error" class="text-red-500">Erro ao carregar arquivos: {{ error }}</div>
  </div>
</template>

  
  <script setup>
  import { ref, defineProps } from 'vue';
  const files = ref([]);
const loading = ref(true);
const error = ref(null);

// Função para verificar se o arquivo é uma imagem
const isImage = (file) => {
  return /\.(jpg|jpeg|png|gif|webp)$/.test(file);
};

// Função para buscar os arquivos da API
const fetchFiles = async () => {
  try {
    const response = await $fetch('/api/uploads');
    if (response.success) {
      files.value = response.files;
    } else {
      throw new Error(response.message || 'Erro desconhecido');
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Carrega os arquivos quando o componente for montado
onMounted(() => {
  fetchFiles();
});
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
  