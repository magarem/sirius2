<!-- components/Breadcrumbs.vue -->
<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/">Home</a><span class="separator">></span>
        </li>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <a v-if="index < breadcrumbs.length - 1" :href="breadcrumb.link">{{ breadcrumb.title }}</a>
          <span v-else class="">{{ breadcrumb.title }}</span>
          <!-- Adiciona o separador ">" após cada link, exceto o último -->
          <span v-if="index < breadcrumbs.length - 1" class="separator">></span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { useBreadcrumbs } from '~/composables/useBreadcrumbs';
  
  const breadcrumbs = await useBreadcrumbs();
  </script>
  
  <style scoped>
  .breadcrumb {
    list-style: none; /* Remove as bolinhas ou números padrão da lista */
    padding: 0;
    margin: 0;
    display: flex; /* Exibe os itens da lista na mesma linha */
    align-items: center; /* Alinha verticalmente os itens ao centro */
  }
  
  .breadcrumb li {
    display: flex; /* Garante que os elementos filhos estejam na mesma linha */
    align-items: center;
  }
  
  .breadcrumb li a {
    text-decoration: none; /* Remove o sublinhado dos links */
    color: #007bff; /* Cor azul para os links */
    /* padding: 0 0.5rem; Espaçamento ao redor dos links */
  }
  
  .breadcrumb li a:hover {
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }
  
  .separator {
    padding: 0 0.5rem; /* Espaçamento ao redor do separador ">" */
    color: #6c757d; /* Cor cinza para o separador */
  }
  </style>
  