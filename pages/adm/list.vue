<template>
    <div class="body bg-dark" >
        <div class="container-fluid pb-1 bg-dark" style="padding-top: 0px; height: 100vh;">
            <nav class="navbar navbar-expand-sm bg-light fixed-top bg-dark">
                <div class="container-fluid">
                    <div class="text-light ">
                        <div class="mb-1">
                            <spam class="logo">Gerenciador de imagens</spam> 
                            <div class="btn-group btn-sm mt-0" style="margin-right: 10px;"> 
                                <button @click="refresh" class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                </svg>
                                </button>
                                <button class="btn btn-outline-secondary btn-sm" @click="imageCardPanelFlag=!imageCardPanelFlag">Info</button>
                                <button class="btn btn-outline-secondary btn-sm"  @click="novapastaBoxOpen">Nova pasta</button>
                                <label class="btn btn-outline-secondary btn-sm" for="inputGroupFile">Enviar imagem</label>
                            </div>
                            <a href='?dir='>upload</a>
                            <span v-for="item in montaBradCrumbs(dir)">
                                <a :href="'?dir='+item[1]">{{ item[0] }}</a> /
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <div style="padding-top: 60px;">
                <!-- <div v-if="imgZoom" class="bg-dark pb-1 text-center">
                    <a :href="imgZoom[0]" target="_blank">
                        <img :src='imgZoom[0]' class="rounded-3" style="max-height: 75vh; max-width: 95vw;"/>
                    </a>
                    <div class="my-3">
                        <p>{{ imgZoom[0] }} - [{{ imgZoom[1].width }}/{{ imgZoom[1].height }}]</p>
                        <button @click="copy(imgZoom[0])" class="btn btn-outline-success btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                            </svg>
                        </button>
                    </div>
                </div> -->
                <div class="p-3 m-3" v-if="novaPastaFlag" style="width: 300px; height: 170px; background-color: rgb(188, 196, 196);">
                    <div><h4>Nova pasta</h4>
                        <div class="mb-3">
                            <input ref="novapasta_ref" style="width: 250px;" type="text" class="form-control" name="dirname" v-model="dirname" id="dirname">
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary" style="margin-right: 5px;" @click="novaPastaFlag=false">Cancelar</button>
                        <button type="button" class="btn btn-primary" @click="mkdir">Ok</button>
                    </div>
                </div>
                <div class="p-3 m-3" v-if="rename.flag" style=" border-radius: 10px; width: 750px; height: 140px; background-color: rgb(188, 196, 196); padding: 15px;">
                    <div><h4>Renomear</h4>
                        <form>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col">
                                        <input type="hidden" v-model="rename.dir"  id="dir">
                                        De: <input style="width: 250px;" type="text" class="form-control mb-2" name="rename_oldname" v-model="rename.oldName"  id="dirname">
                                    </div>
                                    <div class="col">
                                        Para: <input  ref="ttt" style="width: 250px;" type="text" class="form-control" name="rename_newname" v-model="rename.newName" id="dirname">
                                    </div>
                                    <div class="col mt-4">
                                        <button type="button" class="btn btn-secondary" style="margin-right: 5px;" @click="rename.flag=false">Cancelar</button>
                                        <button type="button" class="btn btn-primary" @click="rename.do">Ok</button>
                                    </div>
                                </div>
                                <!-- <label for="dirname" class="col-form-label">Nome:</label> -->
                            </div>
                        </form>
                    </div>
                </div>
                <form style="display: none;" @submit.prevent="handleImageUpload">
                    <input type="file" class="form-control invisible"  id="inputGroupFile" @change="handleFile($event)">
                    <input type="submit" ref="submitBtn" class="btn btn-primary invisible" />   
                </form>
                <div class="row gap-0 bg-dark">
                    <div class="col-sm-3 mb-4 col-lg-3" v-for="(item, index) in stateStore">
                        <div class="card text-center" style="width: 15rem; background-color: rgb(53, 52, 52);">
                            <div v-if="item[1]" style="height: 15vw;">
                                <br/>
                                <a :href="'?dir=' + dir + '/' + item[0]" style="text-decoration: none; ">
                                    <img src="/img/folder.png" style="width: 100px;">
                                    <div>{{ item[0] }}</div>
                                </a>    
                            </div>
                            <!-- <img v-else @click="gotop(); imgZoom=['/upload' + dir + '/' + item[0], item[2]]" :src="'/upload/' + dir + '/' + item[0]"  class="card-img-top" style="border-radius: 5px;"/> -->
                            <img v-else :src="'/upload/' + dir + '/' + item[0]"  class="card-img-top" style="border-radius: 5px;"/>
                            <div v-if="imageCardPanelFlag" class="card-body">
                                <!-- <div v-if="!item[1]"> -->
                                <input type="hidden" class="card-text bg-dark text-light border-0"  style=" width: 130px; font-size: 14px; margin-right: 5px;"  :value=" '/upload' + dir + '/' + item[0] " />
                                <div>
                                    <div class="btn-group btn-sm"> 
                                        <button v-if="!item[1]" @click="copy('/upload' + dir + '/' + item[0])" class="btn btn-outline-success btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                                            </svg>
                                            ativar
                                        </button>
                                        <button  class="btn btn-outline-secondary btn-sm" @click="rename.openBox(dir, item[0])">
                                            Renomear
                                        </button>
                                        <button  class="btn btn-outline-secondary btn-sm" @click="deleteFile('/upload' + dir + '/' + item[0])">
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                                <!-- <div v-if="item[1]"><a :href="'?dir='+item[0]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                </svg>
                                </a></div> -->
                                <!-- <a :href="'/upload/' + item" class="btn btn-primary">Ampliar</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script setup>
definePageMeta({
    layout: ''
})
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.scss'
import * as fs from 'fs';
import sizeOf from "image-size"
const rename_ = {
    flag: false,
    dir: '',
    oldName: '',
    newName: '',
    do: async function(){
        const { data: ret } = await useFetch('/api/rename?oldname=public/' + this.dir + '/' + this.oldName + '&newname=public/' + this.dir + '/' + this.newName)
        this.flag = false
        this.ret = ret
        location.reload()
    },
    openBox: async function(dir, item){
        console.log(1);
        this.flag = true
        this.dir = '/upload' + dir
        this.oldName = item
        nextTick(() => {
            ttt.value.focus()
        });
        
    },
    ret: null
}

const rename = ref(rename_)

const route = useRoute()
const router = useRouter()
let imgZoom = ref(null)
let imageCardPanelFlag = ref(true)
let dirname = ref("")
let fileList = ref(['ss']) 
let url = ref(null)
const files = ref();
const ttt = ref();
const novapasta_ref = ref();
const submitBtn = ref()
const stateStore = useState()
let totalFileList = []
let dir = route.query.dir
let novaPastaFlag = ref(false)
const modalRef = ref(null);
const imageName = useCookie('imageName')

function refresh(){
    reloadNuxtApp({
        path: "/list",
        ttl: 1000, // default 10000
    });

}
function gotop(){
    window.scrollTo(0,0);
}

function montaBradCrumbs(atual){
    let x
    let arr_final = []
    let x1 = atual.split('/').reverse()
    for (let t=0; t<x1.length; t++){
        x = atual.lastIndexOf('/')
        atual = atual.substring(0, x);
        arr_final.push([x1[t], atual+'/'+x1[t]])
    }
    return arr_final.reverse()
}

const novapastaBoxOpen = () => {
    novaPastaFlag.value = true
    nextTick(() => {
        novapasta_ref.value.focus()
    });
}

if (process.server){
    fileList = fs.readdirSync('./public/upload/' + dir)
    fileList.map((x, index) => {
        let isDir = fs.lstatSync('./public/upload/' + dir + '/' + x).isDirectory()
        totalFileList.push([x, isDir, isDir||sizeOf('./public/upload/' + dir + '/' + x)])   
    })
    stateStore.value = totalFileList.reverse()
}

async function mkdir(){
    const { data: count } = await useFetch('/api/mkdir?dirname=' + dir + '/' + dirname.value)
    novaPastaFlag.value = false
    location.reload()
}

async function deleteFile(file){
    if (confirm("Confirma exclusão do arquivo " + file + '?') == true) {
        const { data: count2 } = await useFetch('/api/delete?dirname=' + file)
        novaPastaFlag.value = false
        location.reload()
    }
}

async function handleImageUpload() {
    try {
        const fd = new FormData();
        Array.from(files.value).map((file, index) => {
        fd.append("photo", file);
        });

        const { data, pending, error, refresh } = await useAsyncData(
        'data',
            () => $fetch('/api/upload?dir=' + dir, {
                method: 'POST',
                body: fd,
            }
        ))

        console.log('data from backend is ', data.value);
        stateStore.value.unshift([data.value, false])
        router.go(); 
    } catch (error) {
        console.log(error);
    }
}

function handleFile(e) {
    files.value = e.target.files;
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
    submitBtn.value.click();
}

const copy = (textToCopy) => {
    imageName.value = {id: imageName.value.id, data: textToCopy}
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        Swal.fire({
            text: "Imagem selecionada",
            icon: "success"
            });
        console.log('Text is on the clipboard.');
        
    })
    .catch(e => {
    console.error(e);
    });    
}

</script>

<style scoped>
    .logo {
        background-color: rgb(29, 28, 28);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16px;
        color: burlywood;
        padding: 10px;
        border-radius: 10px;
        margin-right: 10px;
    }
    a {
        color:#eeeeee;
    }

    p {
        color: #ffffff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 13px;
    }
    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }

    .body {
        scrollbar-3dlight-color: #000000;
        scrollbar-arrow-color: #ffffff;
        scrollbar-darkshadow-color: #000000;
        scrollbar-face-color: #000000;
        scrollbar-highlight-color: #ffffff;
        scrollbar-shadow-color: #ffffff;
        scrollbar-track-color: #000000;
    }

    .card-body {
        padding: 15px 0 10px 0;
    }

    input[type="file"] {
        margin-left: -2px !important;

        &::-webkit-file-upload-button {
            display: none;
        }
        &::file-selector-button {
            display: none;
        }
    }

    #app {
        padding: 20px;
    }

    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #preview img {
        max-width: 100%;
        max-height: 200px;
    }
</style>