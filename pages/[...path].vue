<template>
  <div class="container  mt-3 slg:w-[81%] text-slate-500 dark:text-default-950">
    <Breadcrumbs v-if="path!='home'"/>
  </div>
  <section class="py-2 lg:py-2 text-slate-500 dark:text-default-950">

    <div class="container_ " v-if="result[0]?.imageposition == 'hide'">
      <div class="gap-6 _items-center">
        <!-- <h2 class="text-3xl font-medium text-default-950 mt-0 text-left wml-[93px]">{{ result?.title }}</h2> -->
        <!-- <p class="text-base mt-1"> -->
        <ContentRenderer class="container" :value="result[0]" />
        <!-- {{result?.description}} -->
        <!-- </p> -->
      </div>
    </div>



    <div class="container" v-if="result[0]?.imageposition == 'top'">
      <div v-if="result[0]?.images.length == 1" class="_items-center ">
        <div class="mb-5">{{  }}
          <img :src="result[0]?.images[0]" class="object-cover w-full h-[400px] max-h-[400px] rounded-xl mx-auto" alt="" />
        </div>
      </div>
      <div v-else class="grid lg:grid-cols-2 gap-6 _items-center ">
        <div v-for="img in result[0]?.images" :key="img" class="mb-5">
          <img :src="img" class="object-cover h-[400px] max-h-[400px] rounded-xl mx-auto" alt="" />
        </div>
      </div>
      <div class="gap-6 _items-center ">
        <div class="">
          <h2 class="text-4xl font-medium text-default-950 mt-0">{{ result[0]?.title }}</h2>
          <p class="text-base mt-4">
            <ContentRenderer :value="result[0]" />
            <!-- <ContentRendererMarkdown :value="result[0]" v-if="result[0]" /> -->

            <!-- {{result?.description}} -->
          </p>
        </div>
      </div>
    </div>



    <div v-if="result[0]?.imageposition == 'side'" class="container">
      <div class="grid lg:grid-cols-2 gap-6 _items-center ">
        <!-- {{ data }} -->
        <div>
          <div v-for="img in result[0]?.images" :key="img" class="mb-5">
            <img :src="img" class="object-cover w-full rounded-xl mx-auto" alt="" />
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-medium mt-0">{{ result[0]?.title }}</h2>
          <p class="text-base mt-4">
            <!-- <ContentRendererMarkdown :value="result" v-if="result" /> -->
            <!-- {{renderToText(result.body.children?.[0])}} -->
            <ContentRenderer :value="result[0]" />
          </p>
        </div>
      </div>
    </div>


  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import { parseMarkdown } from '~/utils/parseMarkdown'

const route = useRoute()
const config = useRuntimeConfig();
const buildMode = config.public.buildMode;

var result = ref([])
const x = ref()
var data = ref([])
console.log('route:', [...route.params.path].join('/'));

// Acessa o runtimeConfig para pegar o modo de build
// Execute a lógica dentro de onMounted
const dataCookie = useCookie('dataCookie')
console.log('dataCookie:', dataCookie.value);


const renderToText = (node: MarkdownNode): string => {
  if (node.type === "text") {
    return node.value!;
  }

  if (!node.children?.length) {
    return `<${node.tag}>`;
  }

  return `<${node.tag}>${
    node.children?.map(renderToText).join("") || ""
  }</${node.tag}>`;
};

var pathTocall = ""
if (buildMode == 'build') {
  const loadMarkdown = async () => {
    console.log("build mode");
    const isDir = await $fetch(`/api/isDir?filename=content/${[...route.params.path].join('/')}`)
    if (isDir){
      pathTocall = [...route.params.path].join('/') + '/_dir.md'
    }else{
      pathTocall = [...route.params.path].join('/') + '.md'
    }
    const data2 = await $fetch(`/api/read?filename=content/${pathTocall}`)
    result.value.push(await parseMarkdown(data2))
  }
  loadMarkdown()
}

  console.log("generate mode");
  const { data: result2 } = await useAsyncData('data', () => queryContent(([...route.params.path] || []).join('/')).find())
  console.log('data...>', result2.value);
if (buildMode == 'generate'){
  result.value = JSON.parse(JSON.stringify(result2.value));
}

// });

</script>
<style>


ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin: 5px 0;
}

p {
  margin-bottom: 10px;
  font-size: 17px;
}

h1 {
  font-size: 25px;
}
</style>