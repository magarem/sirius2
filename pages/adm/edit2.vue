<template>
    <AdmNavbar />
    <div class="grid grid-cols-12">
        <div class="col-span-2 mt-5">
            <content-tree :key="refresh" @onFileSelect="updateSlug" @appendNewFile="appendNewFile"/>
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
                        <div>
                            <button @click="loadContent"
                                class="bg-blue-500 text-white ml-3 py-2 px-4 rounded _mt-2">>></button>
                        </div>
                        <!-- Abas para alternar entre Formulário e Conteúdo Completo -->
                        <div class="mb-5">
                            <div class="flex space-x-1 _mt-4">
                                <button
                                    :class="{ 'bg-blue-500 text-white': activeTab === 'form', 'bg-gray-200 text-slate-900': activeTab !== 'form' }"
                                    @click="activeTab = 'form'" class="py-2 px-4 rounded">Edição</button>
                                <button
                                    :class="{ 'bg-blue-500 text-white': activeTab === 'content', 'bg-gray-200 text-slate-900': activeTab !== 'content' }"
                                    @click="activeTab = 'content'" class="py-2 px-4 rounded">Fonte</button>
                            </div>
                        </div>
                    </div>
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
                            <input v-if="field.type === 'text'" v-model="field.value" @blur="toggleEdit($event)"
                                class=" p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                type="text" :placeholder="`Digite ${field.label}`" />

                            <!-- Campo de Textarea -->
                            <textarea v-if="field.type === 'textarea'" v-model="field.value" @blur="toggleEdit($event)"
                                class="border p-2 w-full h-32  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                :placeholder="`Digite ${field.label}`"></textarea>

                            <!-- Checkbox -->
                            <input v-if="field.type === 'checkbox'" v-model="field.value" @blur="toggleEdit($event)" type="checkbox" />

                            <!-- Campo de Data -->
                            <input v-if="field.type === 'date'" v-model="field.value"
                                @blur="toggleEdit($event)"
                                class="border p-2 w-full  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                                type="date" />

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
                                <button @click="addImage(key)"
                                    class="bg-green-500 text-white px-2 py-1 rounded">+</button>
                            </div>

                        </div>

                    </div>

                </div>

                <!-- Conteúdo da Aba: Conteúdo Completo -->
                <div v-else-if="activeTab === 'content'" class="mt-4">
                    <label class="block mb-2">Arquivo Markdown Completo:</label>
                    <textarea v-model="fullMarkdownContent"
                        class="border p-2 w-full h-64  bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"></textarea>
                </div>
            </div>


            <div class="fixed bottom-0 min-w-full bg-slate-600 text-slate-200 h-[50px]">
                <button @click="saveFullMarkdownContent"
                    class="bg-green-500 text-white py-1 px-4 rounded mt-2 ml-3">Salvar página</button>
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
import frontmatterFields from '@/content/types.json'

const activeTab = ref('form'); // Aba ativa
const slug = ref(''); // Slug do artigo
const frontmatter = ref({}); // Estrutura do frontmatter
const content = ref(''); // Conteúdo do artigo
const fullMarkdownContent = ref(''); // Conteúdo completo
const refresh = ref(0)
const toggleEdit = (x) => {
    updateDate()
}
// Função que será chamada ao clicar em um arquivo na árvore
const updateSlug = (slug_) => {

    slug.value = slug_;
    loadContent()
};

const appendNewFile = (path) => {
    slug.value = path.replace('/content/','') + '/' + +new Date
    const ya = "title: fidelis\nimages: ['img1']\nimageposition: side\n"
    fullMarkdownContent.value = `---\n${ya}---\n\n${content.value}`;
    saveFullMarkdownContent()
    refresh.value ++
    loadContent()
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

// Função para carregar conteúdo baseado no slug
const loadContent = async () => {
    if (!slug.value) {
        alert('Por favor, insira um slug válido.');
        return;
    }
    try {
        const response = await fetch(`/api/readMarkdown?slug=${slug.value}`);
        const data = await response.json();
        // var newData = {}
        // for (const key in frontmatterFields) {
        //     if (data.frontmatter[key] !== undefined) {
        //         frontmatterFields[key].value = data.frontmatter[key];
        //     }
        // }
        // frontmatter.value = data.frontmatter;
        const combined = {};
        for (const key in frontmatterFields) {
            if (data.frontmatter[key] !== undefined) {
                combined[key] = { ...frontmatterFields[key], value: data.frontmatter[key] };
            }
        }
        frontmatter.value = combined;
        content.value = data.content;
    } catch (error) {
        console.error(error);
        alert('Falha ao carregar o conteúdo.');
    }
};

// Função para converter frontmatter para YAML e salvar
const saveFullMarkdownContent = async () => {
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
const addImage = () => {
    frontmatter.value.images.value.push(''); // Adiciona um novo campo de URL vazio
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

    // Concatena o conteúdo do frontmatter convertido para YAML com o conteúdo markdown
    fullMarkdownContent.value = `---\n${yamlFrontmatter}---\n${content.value.trim()}`;
}
// Watcher para atualizar fullMarkdownContent
watch([frontmatter, content], () => {
    updateDate()
}, { immediate: true });
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>