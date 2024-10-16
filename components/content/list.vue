<!-- pages/index.vue or App.vue -->
<template>
  <div>
    <TreeView :data="intersecao" />
    <!-- <pre>
      {{ intersecao }}
    </pre> -->
    
  </div>
</template>

<script setup>
import TreeView from '~/components/TreeView.vue'; // Import TreeView component
const route = useRoute()

// Define the full tree data
const { data: treeData } = await useAsyncData('navigation', () => fetchContentNavigation())
// const data_dir = await $fetch('/api/read?filename=content/' + [...route.params.path] + '/_dir.md')
const { data: data_dir, error } = await useFetch('/api/read2?path=' + [...route.params.path] + '/_dir.md')
// console.log('treeData>>>>', data_dir.value.treeData);
console.log('data_dir>>>>', data_dir.value.files_order);

// Function to find a node by path and get its subtree
const findNodeByPath = (data, path) => {
  for (const node of data) {
    if (node._path === path) return node;
    if (node.children) {
      const result = findNodeByPath(node.children, path);
      if (result) return result;
    }
  }
  return null;
};

// ['novagokula.md', 'espacohimalaya.md']
// {title: 'fidelis', _path: '/portfolio/1728839120512'}


// array1.map(x=>{
//   const result = filteredTreeData.filter((item) => item._path ==);

// })


// Path to start from
const startPath = ([...route.params.path] || []).join('/');
const filteredTreeData = findNodeByPath(treeData.value, '/'+startPath)?.children || [];
// const intersecao = filteredTreeData.filter(item => data_dir.value.files_order.map(x=>'/portfolio/'+x.split('.md')[0]).includes(item._path));
// const intersecao = data_dir.value.files_order.filter(item => filteredTreeData.includes(item._path));


// const intersecao = data_dir.value.files_order.filter(item1 =>
//   filteredTreeData.some(item2 => "/portfolio/" + item1.split('.md')[0] === item2._path)
// );

const intersecao = data_dir.value.files_order
  .map(item1 => filteredTreeData.find(item2 => "/portfolio/" + item1?.split('.md')[0] === item2._path))
  .filter(item => item !== undefined);

console.log('filteredTreeData', filteredTreeData);
console.log('intersecao', intersecao);

// console.log(55, data_dir.value.files_order.map(x=>'/portfolio/'+x.split('.md')[0]));
// console.log('filteredTreeData:', filteredTreeData);
</script>

<style>
/* Add your styles here */
</style>
