<!-- pages/index.vue or App.vue -->
<template>
    <div>
      <TreeView :data="filteredTreeData" />
    </div>
  </template>
  
  <script setup>
  import TreeView from '~/components/TreeView.vue'; // Import TreeView component
  
  
  // Define the full tree data
  const { data: treeData } = await useAsyncData('navigation', () => fetchContentNavigation())
  // const treeData = [
  //   {
  //     "title": "Quem somos",
  //     "_path": "/about"
  //   },
  //   {
  //     "title": "destaques",
  //     "_path": "/destaques",
  //     "children": [
  //       {
  //         "title": "Consultoria webmarketing",
  //         "_path": "/destaques/consultoria_webmarketing"
  //       },
  //       {
  //         "title": "Composição de flyers",
  //         "_path": "/destaques/designer"
  //       },
  //       {
  //         "title": "Paravyomayoga",
  //         "_path": "/destaques/paravyomayoga"
  //       },
  //       {
  //         "title": "Sirius Studio CMS",
  //         "_path": "/destaques/siriusstudio"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Portfólio",
  //     "_path": "/portfolio",
  //     "children": [
  //       {
  //         "title": "Nova Gokula",
  //         "_path": "/portfolio/novagokula"
  //       },
  //       {
  //         "title": "Oxide report",
  //         "_path": "/portfolio/oxidereport"
  //       },
  //       {
  //         "title": "Paravyoma yoga",
  //         "_path": "/portfolio/paravyomayoga"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Serviços",
  //     "_path": "/services",
  //     "children": [
  //       {
  //         "title": "Desenvolvimento",
  //         "_path": "/services/desenv"
  //       },
  //       {
  //         "title": "Ambiente Linux",
  //         "_path": "/services/linux",
  //         "children": [
  //           {
  //             "title": "CPD",
  //             "_path": "/services/linux/cpd",
  //             "children": [
  //               {
  //                 "title": "manutenção de cpd",
  //                 "_path": "/services/linux/cpd/pcs"
  //               }
  //             ]
  //           },
  //           {
  //             "title": "top Linux",
  //             "_path": "/services/linux/linux2"
  //           },
  //           {
  //             "title": "Segurança de PC e rede",
  //             "_path": "/services/linux/seguranca"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Sírius Studio CMS",
  //         "_path": "/services/siriusstudio"
  //       },
  //       {
  //         "title": "Webmarketing",
  //         "_path": "/services/webmarketing"
  //       }
  //     ]
  //   }
  // ];
  
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
  
  // Path to start from
  const route = useRoute()
  const startPath = ([...route.params.path] || []).join('/');
  const filteredTreeData = findNodeByPath(treeData.value, '/'+startPath)?.children || [];
  
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  