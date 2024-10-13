<template>
 <div class="container">
    <label for="message" class="rounded-lg block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Arquivo</label>
    <input v-model="fileToEdit" @keyup.enter="read" type="text" class="textarea form-control text-light form-control-sm bg-input1">
    <label for="message" class="rounded-lg block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Edição</label>
    <textarea id="txt" rows="20" class="rounded-lg textarea" v-model="txt" ></textarea>
    

 </div>  
 
</template>
<script setup>
// definePageMeta({
//   layout: 'admDefault'
// })
const route = useRoute()
const fileToEdit = ref('content/' + route.query.page + '.md')
const txt = ref("Selecione o arquivo")
// const { data: fileData } = await useFetch('/api/read?filename=content/solucoes/2.webmarketing.md')
// txt.value = fileData.value


async function read() {
  try {
      const { data: ret } = await useFetch('/api/read?filename=' + fileToEdit.value)
      txt.value = ret.value
  } catch (error) {
      console.log("Load file error");
  }
}

async function save() {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({filename: fileToEdit.value.trim(), txt: txt.value.trim()})
    }
    const response = await fetch('/api/save', config)
    if (response.ok) {
    //   aleradySaved.value = true
      alert("Arquivo salvo com sucesso!")
    } else {
      console.log("save file error");
    }
  } 
  catch (error) {
    console.log("save api error");
    console.log(error);
  }
}
read()
</script>

<style scoped>
.textarea {
    font-size: 18px;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0px;
    color:aliceblue;
    background-color:rgb(63, 63, 63);
    outline: none;
    resize: none;
  }
  .form-control1{
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
}

.bg-input1 {
  background-color: rgb(67, 60, 60);
}

</style>