<template>
    <div class="home" id="home">
        <div class="header">
            <!--Content before waves-->
            <div class="inner-header">
                <div class="container">
                    <div class="card-body">
                        <div class="d-flex mb-5">
                            <h2>Create new movie</h2>
                        </div>
                        <form @submit.prevent="save()">
                            <div class="row">
                                <div class="col-sm-6 mb-3">
                                    <!-- <img src="../assets/image/form-upload.svg" height="400px"> -->
                                    <div class="dropbox">
                                        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                                            accept="image/*" class="input-file">
                                            <div class="text-icon" v-if="isInitial">
                                                <b-icon icon="download" scale="1.5" variant="white"></b-icon>
                                                <p class="mt-2">Drag your file(s) here to begin<br> or click to browse</p>
                                            </div>
                                            <p v-if="isSaving">
                                            Uploading {{ fileCount }} files...
                                            </p>
                                    </div>
                                    <!-- <input hidden type="file" class="form-control" placeholder="Title" v-validate="'required'" name="title">
                                    <span class="text-sm text-danger" v-show="errors.has('title')" >{{ errors.first("title") }}</span> -->
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <div class="mb-3">
                                        <input v-model="body.title" type="text" class="form-control" placeholder="Title" v-validate="'required'" name="title">
                                        <span class="text-sm text-danger" v-show="errors.has('title')" >{{ errors.first("title") }}</span>
                                    </div>
                                    <div class="mb-3">
                                        <input v-model="body.year" type="number" class="form-control" placeholder="Published Year" v-validate="'required'" name="Published Year">
                                        <span class="text-sm text-danger" v-show="errors.has('Published Year')" >{{ errors.first("Published Year") }}</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <button type="button" class="btn btn-outline-white">Cancel</button>
                                        </div>
                                        <div class="col-sm-6">
                                            <button type="submit" class="btn btn-success">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Wave/>
        </div>
    </div>
</template>

<script>
import Wave from "@/component/wave.vue";
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
  name: "Home",
  components: {
    Wave,
  },
  computed: {
    isInitial() {
    return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
    return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
    return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
    return this.currentStatus === STATUS_FAILED;
    }
},
  data() {
    return {
        body: {
            title: '',
            poster: '',
            year: '',
        },
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
    }
  },

  mounted() {
    this.reset();
},

  methods: {
    reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadError = null;
    },
    changeFile(e){
        const name = e.target.name,
        file = e.target.files[0]
        const hasName = ['file', 'logo','headerImg'].includes(name)
        if(hasName && file) this[name] = file
        else console.log('error')
    },
    save() {
        this.$validator.validateAll().then(async (res) => {
            if (!res) return false;
            try {
                this.$store.dispatch("poster/CREATE_DATA", this.body)
                    .then((resp) => {
                        console.log(resp)
                });
            } catch (error) {
                this.$swal("Error", "Error while add data", "error");
            }
        
        });
    },
  }
};
</script>

<style>
  .dropbox {
    outline: 2px dashed grey; 
    outline-offset: -10px;
    background: #224957;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; 
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; 
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: #224957;
  }
  
  .dropbox .text-icon {
    font-size: 12px;
    text-align: center;
    padding: 50px 0;
  }
  .dropbox .text-icon p {
    font-size: 12px;
    text-align: center;
  }
</style>