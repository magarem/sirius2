<template>
    <div>
        <ul>
            <li>
                Raiz <button @click="appendNewFile(item.path)" class="bg-slate-600 text-white py-1 px-2 rounded mt-2 ml-3">Novo</button>
            </li>
        </ul>
        <ul>
            <li v-for="item in contentTree" :key="item.name">
                
                <span v-if="item.type === 'directory'">
                    📁 {{ item.name }} <button @click="appendNewFile(item.path)" class="bg-slate-600 text-white py-1 px-2 rounded mt-2 ml-3">Novo</button>
                    <ul v-if="item.children">
                        <li v-for="child in item.children" :key="child.name">
                            <span v-if="child.type === 'directory'">📁 {{ child.name }}</span>
                            <span v-else @click="selectFile(child.path)" style="cursor: pointer">
                                📄 {{ child.name }}
                            </span>
                        </li>
                    </ul>
                </span>
                <span v-else @click="selectFile(item.path)" style="cursor: pointer">
                    📄 {{ item.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>


//   const props = defineProps({
//     onFileSelect: {
//       type: Function,
//       required: true
//     }
//   });

const emit = defineEmits(["onFileSelect", 'appendNewFile'])
const contentTree = ref([]);

//   const fetchContentTree = async () => {
const { data } = await useFetch('/api/content-tree');
contentTree.value = data.value;
//   };

// Função chamada ao clicar em um arquivo
const selectFile = (filePath) => {
    const slug = filePath.replace(/^\/content\//, '').replace('.md', '');
    emit('onFileSelect', slug)
};

// Função chamada ao clicar em um arquivo
const appendNewFile = (filePath) => {
    // const slug = filePath.replace(/^\/content\//, '').replace('.md', '');
    emit('appendNewFile', filePath)
};

//   onMounted(() => {
//     fetchContentTree();
//   });
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 10px;
}

li {
    margin: 5px 0;
}
</style>