<template>
    <AdmNavbar />
    <div class="grid grid-cols-12">
        <div class="col-span-2 mt-5">
            <content-tree :key="refresh" @onFileSelect="updateSlug" @appendNewFile="appendBlankNewFile" />
        </div>
        <div class="col-span-10">
            <div class="_container m-5" style="margin-bottom: 70px;">
                <!-- Modal para selecionar imagem -->
                <div v-if="isModalOpen" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div class="bg-white p-4 rounded shadow-lg w-1/3">
                        <ImageSelector :onSelect="selectImage" />
                        <button @click="closeModal" class="bg-red-500 text-white py-1 px-4 mt-4 rounded">
                            Fechar
                        </button>
                    </div>
                </div>
                <!-- Slug e botão de carregar -->
                <div class="mb-2 w-[400px]">
                    <div class="grid grid-cols-6">
                        <div class="col-span-4 ">
                            <input v-model="slug"
                                class="border p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                type="text" placeholder="Digite o slug do artigo" />
                        </div>
                        <!-- Abas para alternar entre Formulário e Conteúdo Completo -->
                        <div class="mb-5">
                            <div class="flex space-x-1 _mt-4">
                                <button @click="loadContent"
                                    class="bg-green-500 text-white ml-3 py-2 px-4 rounded _mt-2">Carregar</button>
                                <button v-if="slug && !slug.includes('_dir')" @click="renameFile"
                                    class="bg-yellow-500 text-white py-2 px-4 rounded">Renomear</button>
                                <button v-if="slug && !slug.includes('_dir')" @click="deleteFile"
                                    class="bg-red-500 text-white py-2 px-4 rounded">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="slug">
                    <div>
                        <button
                            :class="{ 'bg-gray-200 text-slate-900': activeTab === 'form', 'bg-zinco-500 text-white': activeTab !== 'form' }"
                            @click="activeTab = 'form'" class="py-2 px-4 rounded">Edição</button>

                        <button
                            :class="{ 'bg-gray-200 text-slate-900': activeTab === 'content', 'bg-zinco-500 text-white': activeTab !== 'content' }"
                            @click="activeTab = 'content'" class="py-2 px-4 rounded">Fonte</button>

                    </div>

                    <!-- Conteúdo da Aba: Formulário -->
                    <div v-if="activeTab === 'form'" class="grid md:grid-cols-3 gap-4">
                        <div class="md:col-span-2 ">
                            <!-- <label class="block mb-2">Conteúdo:</label> -->
                            <textarea v-model="content"
                                class="p-2 w-full h-full bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                placeholder="Digite o conteúdo do artigo"></textarea>
                            <!-- <button @click="updateRawFile" class="bg-green-500 text-white py-2 px-4 rounded mt-4">Salvar</button> -->
                        </div>

                        <div class="md:col-span-1">
                            <!-- Campos do Frontmatter Dinâmicos -->
                            <div v-for="(field, key) in frontmatter" :key="key" class="mt-4">
                                <label class="block mb-2">{{ field.label }}:</label>

                                <!-- Campo de Texto Simples -->
                                <input v-if="field.type === 'text'" v-model="field.value"
                                    @blur="toggleEdit(key + ',' + field.value)"
                                    class=" p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                    type="text" :placeholder="`Digite ${field.label}`" />

                                <!-- Campo de Textarea -->
                                <textarea v-if="field.type === 'textarea'" v-model="field.value"
                                    @blur="toggleEdit($event)"
                                    class="border p-2 w-full h-32  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                    :placeholder="`Digite ${field.label}`"></textarea>

                                <!-- Checkbox -->
                                <input v-if="field.type === 'checkbox'" v-model="field.value" @blur="toggleEdit($event)"
                                    type="checkbox" />

                                <!-- Campo de Data -->
                                <input v-if="field.type === 'date'" v-model="field.value" @blur="toggleEdit($event)"
                                    class="border p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                    type="date" />

                                <!-- Campo de Array com botões "+" e "-" -->
                                <div v-if="field.type === 'array'" class="space-y-2">
                                    <div v-for="(image, index) in field.value" :key="index"
                                        class="flex items-center space-x-2">

                                        <input v-model="field.value[index]" @blur="toggleEdit($event)"
                                            class="border p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                            type="text" :placeholder="`Digite a URL da imagem ${index + 1}`" />
                                        <button v-if="field.value.length > 1" @click="removeImage(key, index)"
                                            class="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                        <button @click="moveUp(key, index)" :disabled="index === 0"
                                            class="bg-gray-500 text-white py-1 px-2 rounded">↑</button>
                                        <button @click="moveDown(key, index)"
                                            :disabled="index === frontmatter.images.length - 1"
                                            class="bg-gray-500 text-white py-1 px-2 rounded">↓</button>

                                    </div>
                                    <button @click="addItem(key)"
                                        class="bg-green-500 text-white px-2 py-1 rounded">+</button>
                                </div>

                                <!-- Campo de Array de Imagens com botões "+" e "-" -->
                                <div v-if="field.type === 'image-array'" class="space-y-2">
                                    <div v-for="(image, index) in field.value" :key="index"
                                        class="flex items-center space-x-2">
                                        <input v-model="field.value[index]" @blur="toggleEdit($event)"
                                            class="border p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                            type="text" :placeholder="`Digite a URL da imagem ${index + 1}`" />
                                        <button v-if="field.value.length > 1" @click="removeImage(key, index)"
                                            class="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                        <button @click="moveUp(key, index)" :disabled="index === 0"
                                            class="bg-gray-500 text-white py-1 px-2 rounded">↑</button>
                                        <button @click="moveDown(key, index)"
                                            :disabled="index === frontmatter.images.length - 1"
                                            class="bg-gray-500 text-white py-1 px-2 rounded">↓</button>
                                        <button @click="openModal(index)"
                                            class="bg-blue-500 text-white py-1 px-2 ml-2 rounded">
                                            >
                                        </button>
                                    </div>
                                    <button @click="addItem(key)"
                                        class="bg-green-500 text-white px-2 py-1 rounded">+</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- Conteúdo da Aba: Conteúdo Completo -->
                    <div v-else-if="activeTab === 'content'" class="mt-4">
                        <!-- <label class="block mb-2">Arquivo Markdown Completo:</label> -->
                        <textarea v-model="fullMarkdownContent"
                            class=" p-2 w-full h-64  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"></textarea>
                    </div>
                </div>


                <div class="fixed bottom-0 min-w-full bg-slate-600 text-slate-200 h-[50px]">
                    <button @click="saveFullMarkdownContent"
                        class="bg-blue-500 text-white py-1 px-4 rounded mt-2 ml-3">Salvar página</button>
                </div>

            </div>


        </div>

    </div>


</template>

<script setup>
definePageMeta({
    layout: ''
})
import { ref, watch } from 'vue';
import * as yaml from 'js-yaml';  // Importando js-yaml para conversão
import ImageSelector from '../components/ImageSelector.vue'; // Importe o componente
import AdmNavbar from '@/layouts/partials/AdmNavbar.vue'
//   import ContentTree from '@/components/ContentTree.vue'
import ContentTree from '@/components/ContentTree.vue';
// import frontmatterFields from '@/content/types.json'
import * as YAML from 'yaml'
const activeTab = ref('form'); // Aba ativa
const slug = ref(''); // Slug do artigo
const frontmatter = ref({}); // Estrutura do frontmatter
const content = ref(''); // Conteúdo do artigo
const fullMarkdownContent = ref(''); // Conteúdo completo
const refresh = ref(0)
const frontmatterFields_keys = ref({})
var pageAlredyExists = false
// Função para gerar o slug
const gerarSlug = (titulo) => {
    return titulo
        .toLowerCase()
        .normalize('NFD') // Normaliza para remover acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove marcas diacríticas
        .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
        .trim() // Remove espaços extras do início e do fim
        .replace(/\s+/g, '-') // Substitui espaços por hifens
        .replace(/-+/g, '-'); // Substitui múltiplos hifens por um único hifen
};

function getFileName() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês é zero-indexado
    const year = now.getFullYear();

    const fileName = `${hours}-${minutes}-${seconds}-${day}-${month}-${year}`;
    return fileName;
}

function getDirectory(filePath) {
    // Encontra a última barra "/" e retorna a parte anterior a ela
    return filePath.substring(0, filePath.lastIndexOf('/'));
}

const toggleEdit = (x) => {
    if (x.split(',')[0] == 'title') {
        if (!pageAlredyExists){
            slug.value = slug.value?.split('/')[0] + '/' + gerarSlug(x.split(',')[1]); // Atualiza o slug
        }
    }
    console.log(x);
    updateDate()
}
// Função que será chamada ao clicar em um arquivo na árvore
const updateSlug = (slug_) => {

    slug.value = slug_;
    loadContent()
};

const deleteFile = async (path) => {
    const confirm = window.confirm("confirma exclusão")
    if (confirm) {
        const response = await fetch('/api/deleteFile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filePath: slug.value }),
        });
        // slug.value = getDirectory(slug.value) + '/' + '_dir'
        slug.value = ''
        // loadContent()
        refresh.value++
    }

};

const renameFile = async (path) => {
    const newFilePath = prompt("Digite o novo nome")
    const response = await fetch('/api/renameFile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldFileName: slug.value + '.md', newFileName: newFilePath + '.md' }),
    });
    console.log(22, response)
    slug.value = getDirectory(slug.value) + '/' + newFilePath
    refresh.value++
    loadContent()
};

const appendBlankNewFile = async (path) => {
    slug.value = path.replace('/content/','') + '/'

    // slug.value = path?.replace('/content/', '') + '/' + data.fileName
    // slug.value = path?.replace('/content/', '') + '/' + +new Date
    // const ya = "title: fidelis\nimages: ['img1']\nimageposition: side\n"
//     const ya = `
// title:
// images: []
// imageposition: side
    console.log(slug.value);
    const ya = {...await loadDataSchema()}
    console.log('ya', ya);
    const YAMLfile = YAML.stringify(frontmatterFields_keys.value);
    console.log('YAMLfile', YAMLfile);
    fullMarkdownContent.value = `---\n${YAMLfile}\n---\n`;
   
    // const response = await fetch('/api/yaml-to-json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ yamlString: ya })
    // });

    // const doc = yaml.load(ya)
    // const data = await response.json();
    // jsonResult.value = data.data;
    // console.log('data.data', data.data);


    console.log({
        content: '',
        frontmatter: ya
    });
    // fullMarkdownContent.value = `---\n${frontmatterFields_keys.value}---\n`;
    loadContent({
        content: '',
        frontmatter: ya
    })
    // saveFullMarkdownContent()
    // refresh.value++
    // loadContent()
    // await fetch(`/api/addFile?dirName=${path?.replace('/content/', '')}&newFileName=${data.fileName}`);
};

const appendNewFile = async (path) => {
    const response = await fetch('/api/generateFileName?dir=' + path?.replace('/content/', ''));
    const data = await response.json();
    console.log(data.fileName); // Exemplo: 12_10_2024_1.txt
    slug.value = path?.replace('/content/', '') + '/' + data.fileName
    // slug.value = path?.replace('/content/', '') + '/' + +new Date
    const ya = "title: fidelis\nimages: ['img1']\nimageposition: side\n"
    fullMarkdownContent.value = `---\n${ya}---\n`;
    saveFullMarkdownContent()
    refresh.value++
    loadContent()
    await fetch(`/api/addFile?dirName=${path?.replace('/content/', '')}&newFileName=${data.fileName}`);
};

// Função para mover a imagem para cima
const moveUp = (key, index) => {
    if (index > 0) {
        const temp = frontmatter.value[key].value[index];
        frontmatter.value[key].value[index] = frontmatter.value[key].value[index - 1];
        frontmatter.value[key].value[index - 1] = temp;
        updateDate()
    }
};

// Função para mover a imagem para baixo
const moveDown = (key, index) => {
    if (index < frontmatter.value[key].value.length - 1) {
        const temp = frontmatter.value[key].value[index];
        frontmatter.value[key].value[index] = frontmatter.value[key].value[index + 1];
        frontmatter.value[key].value[index + 1] = temp;
        updateDate()
    }
};
// Função para remover uma imagem específica
const removeImage = (key, index) => {
    if (frontmatter.value[key].value.length > 1) {
        frontmatter.value[key].value.splice(index, 1); // Remove o item do array]
        updateDate()
    }
};


const loadDataSchema = async () => {
    const response = await fetch(`/api/readMarkdown?slug=${slug.value.split('/')[0]+'/_dir'}`);
    console.log(`/api/readMarkdown?slug=${slug.value.split('/')[0]+'/_dir'}`);
    var frontmatterFields = await response.json()
    frontmatterFields = frontmatterFields.frontmatter.data_schema

    console.log('frontmatterFields:', frontmatterFields);
    console.log('frontmatterFields:', Object.keys(frontmatterFields));

    Object.keys(frontmatterFields).map(x=>{
        frontmatterFields_keys.value[x] = ''
    })

    console.log('frontmatterFields_keys', frontmatterFields_keys.value);

    return frontmatterFields
}

// Função para carregar conteúdo baseado no slug
const loadContent = async (data = '') => {
   
    if (!slug.value) {
        alert('Por favor, insira um slug válido.');
        return;
    }
    try {
        if (data) {
            // var frontmatterFields = data.frontmatter
            const frontmatterFields = {...await loadDataSchema()}
            // Object.keys(frontmatterFields).map(x=>{
            //     frontmatterFields_keys.value[x] = ''
            // })
            
            pageAlredyExists = false
            const combined = {};
            for (const key in frontmatterFields) {
                if (data?.frontmatter[key] !== undefined) {
                    combined[key] = { ...frontmatterFields[key], value: data.frontmatter[key].value };
                }
            }
            frontmatter.value = combined;
            content.value = data.content;
        } else {
            console.log('loadDataSchema()', await loadDataSchema());
            const frontmatterFields = {...await loadDataSchema()}
            console.log('frontmatterFields:::>', frontmatterFields);
            pageAlredyExists = true
            const response = await fetch(`/api/readMarkdown?slug=${slug.value}`);
            const data = await response.json();
            console.log('data>>:', data);
            const combined = {};
            for (const key in frontmatterFields) {
                if (data?.frontmatter[key] !== undefined) {
                    combined[key] = { ...frontmatterFields[key], value: data.frontmatter[key] };
                }
            }
            frontmatter.value = combined;
            content.value = data.content;
        }
        
    } catch (error) {
        console.error(error);
        alert('Falha ao carregar o conteúdo.');
    }
};

// Função para converter frontmatter para YAML e salvar
const saveFullMarkdownContent = async () => {
    if (slug.value.charAt(slug.value.length - 1) == '/'){
        alert("digite o título da página")
    }
    else{
        try {
            //   const yamlFrontmatter = yaml.dump(Object.fromEntries(Object.entries(frontmatter.value).map(([key, field]) => [key, field.value]))); // Converte JSON para YAML
            //   const fullContent = `---\n${yamlFrontmatter}---\n\n${content.value}`;
            //   fullMarkdownContent.value = fullContent;

            const response = await fetch('/api/saveFullMarkdown', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug: slug.value, fullMarkdownContent: fullMarkdownContent.value.trim() }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Erro ao salvar.');
            // alert(data.message);
        } catch (error) {
            console.error('Erro ao salvar conteúdo completo:', error);
            alert('Erro ao salvar conteúdo completo.');
        }
        refresh.value++ 
    }
   
};

const updateRawFile = () => {
    const yamlFrontmatter = yaml.dump(
        Object.fromEntries(
            Object.entries(frontmatter.value).map(([key, field]) => {
                if (field && typeof field === 'object' && 'value' in field) {
                    return [key, { label: field.label, type: field.type, value: field.value }];
                }
                return [key, field]; // Se o campo não tiver 'value', trata como campo simples
            })
        )
    );
    // Concatena o conteúdo do frontmatter convertido para YAML com o conteúdo markdown
    fullMarkdownContent.value = `---\n${yamlFrontmatter}---\n\n${content.value}`;
    saveFullMarkdownContent()
}

const isModalOpen = ref(false); // Controle para abrir/fechar modal
const selectedImageIndex = ref(null); // Índice do item da array sendo editado

// Lista de URLs de imagens (pode ser obtida de uma API ou gerenciador de arquivos)
const imageUrls = ref([
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
]);

// Função para abrir o modal e guardar qual índice de imagem foi clicado
const openModal = (index) => {
    selectedImageIndex.value = index;
    isModalOpen.value = true;
};

// Função para fechar o modal
const closeModal = () => {
    isModalOpen.value = false;
};

// Função para adicionar nova imagem ao array
const addItem = (key) => {
    frontmatter.value[key].value.push(''); // Adiciona um novo campo de URL vazio
};

// Função para selecionar uma imagem e atualizá-la no array
const selectImage = (url) => {
    if (selectedImageIndex.value !== null) {
        // Atualiza o valor da imagem no array no índice correto
        frontmatter.value.images.value[selectedImageIndex.value] = url;
        closeModal(); // Fecha a modal após a seleção
    }
};

const updateDate = () => {
    // Mapeia os campos no formato correto com todos os parâmetros
    const yamlFrontmatter = yaml.dump(
        Object.fromEntries(
            Object.entries(frontmatter.value).map(([key, field]) => {
                if (field && typeof field === 'object' && 'value' in field) {
                    // return [key, { label: field.label, type: field.type, value: field.value }];
                    return [key, field.value];
                }
                return [key, field]; // Se o campo não tiver 'value', trata como campo simples
            })
        )
    );
    console.log(yamlFrontmatter);
    // Concatena o conteúdo do frontmatter convertido para YAML com o conteúdo markdown
    fullMarkdownContent.value = `---\n${yamlFrontmatter}---\n${content.value.trim()}`;
}
// Watcher para atualizar fullMarkdownContent
watch([frontmatter, content], () => {
    updateDate()
}, { immediate: true });

// Watch para observar mudanças no título e gerar o slug
var a = 0
watch(frontmatter, (novoValor) => {
    a++
    console.log("---", a);
    // slug.value = slug.value?.split('/')[0] + '/' + gerarSlug(novoValor); // Atualiza o slug
});

</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>