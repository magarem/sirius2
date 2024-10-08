<!-- components/Breadcrumbs.vue -->
<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <!-- <nuxt-link to="/" >Home<span class="separator">></span></nuxt-link> -->
          <!-- <a href="/">Home</a><span class="separator">></span> -->
       
       
       
          <nuxt-link v-if="buildMode=='generate'" :external="buildMode=='generate'" to="/" >
            Home<span class="separator">></span>
          </nuxt-link>
          
          <!-- <nuxt-link v-else :to="item._path" class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize">
            {{ item.title }}
          </nuxt-link> -->
       
        </li>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <!-- <a v-if="index < breadcrumbs.length - 1" :href="breadcrumb.link">{{ breadcrumb.title }}</a> -->
         
          <nuxt-link v-if="index < breadcrumbs.length - 1" :to="breadcrumb.link" :external="buildMode=='generate'" class="mr-0">{{ breadcrumb.title }}</nuxt-link>
         
         
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

  const config = useRuntimeConfig();
  const buildMode = config.public.buildMode;

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
  