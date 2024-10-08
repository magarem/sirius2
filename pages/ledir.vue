<template>
    <div>
      <h1>Lista de Arquivos Markdown</h1>
  
      <!-- Verificando se os dados estão carregando -->
      <div v-if="pending">Carregando...</div>
  
      <!-- Exibe erro, se houver -->
      <div v-if="error">Erro ao carregar dados: {{ error.message }}</div>
  
      <!-- Renderizando os dados após o carregamento -->
      <ul v-if="data && data.length">
        <li v-for="file in data" :key="file._path">
          <h2>{{ file.title }}</h2>
          <p><strong>Caminho:</strong> {{ file._path }}</p>
          <p><strong>Descrição:</strong> {{ file.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // Usando useFetch para consumir a API
  const { data, pending, error } = await useFetch('/api/readContentDir')
  </script>
  