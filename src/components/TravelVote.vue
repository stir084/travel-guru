<template>
  <v-container fluid class="down-top-padding">
     <v-row>
      
    
        <v-col cols="12" lg="12">
        
          <v-card class="mb-7">
            <v-card-text class="pa-5">
                  <v-text-field
                      v-model="task"
                      label="Where would you like to travel?"
                      filled
                      disabled
                      class="custom-label"
                      @keydown.enter="create"
                      
                    >
                      <!-- <v-fade-transition v-slot:append>
                          <v-icon v-if="task" @click="create">add_circle</v-icon>
                        </v-fade-transition> -->
                    </v-text-field>
                  <v-card v-if="tasks.length > 0">
                      <v-slide-y-transition class="py-0" group>
                        <template v-for="(task, i) in tasks">
                          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                          <v-list-item :key="`${i}-${task.text}`">
                            <v-list-item-action>
                              <v-checkbox v-model="task.done" :color="task.done && 'grey' || 'primary'">
                                <template v-slot:label>
                                  <div
                                    :class="task.done && 'grey--text' || 'blue-grey--text text--darken-2'"
                                    class="ml-4 text-truncate"
                                    v-text="task.text"
                                  ></div>
                                </template>
                              </v-checkbox>
                            </v-list-item-action>

                            <v-spacer></v-spacer>

                            <v-scroll-x-transition>
                              <v-icon v-if="task.done" color="success">mdi-check</v-icon>
                            </v-scroll-x-transition>
                          </v-list-item>
                        </template>
                      </v-slide-y-transition>
                    </v-card>
                  <v-btn
                        color="deep-purple accent-2"
                        x-large
                        class="text-capitalize white--text mt-7"
                        rounded
                        @click="submit"
                      >Submit</v-btn>
                    <v-btn
                      color="secondary accent-2"
                      x-large
                      class="text-capitalize white--text mt-7 ml-3"
                      rounded
                      @click="goResult"
                    >Result</v-btn>
                    <v-alert
                        v-if="showAlert"
                        type="warning"
                        class="mt-7"
                        rounded
                      >Please select at least one.</v-alert>
                </v-card-text>
       
          </v-card>
        


        </v-col>
     
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TravelVote',

    data: () => ({
      apiText: 'https://votingapp-9cffe-default-rtdb.firebaseio.com/',
      task: null,
      showAlert: false,
      totalChkCount: 0,
      tasks: [
      {
        done: false,
        text: "Japan"
      },
      {
        done: false,
        text: "America"
      },
      {
        done: false,
        text: "Thailand"
      },
      {
        done: false,
        text: "Vietnam"
      },
      {
        done: false,
        text: "Taiwan"
      },
      {
        done: false,
        text: "Korea"
      },
      {
        done: false,
        text: "Philippines"
      }
    ],
   
    }),
    methods: {
      submit() {

        let validate = true;
        for (let i of this.tasks){
          if(i.done == true) {
            validate = false;
          }
        }
        if (validate == true) {
          this.showAlert = true;
          return;
        } 

        for(let task of this.tasks){
          if(task.done == true){
            this.totalChkCount++;
          }
        }

        for(let task of this.tasks){
          if(task.done == true){
            this.getAxios(task.text);
          
          }
        }
      },
      getAxios(taskText) {
        this.$axios.get(this.apiText + taskText + '.json')
        .then(response => {
          if(response.data != null){
            this.putAxios(taskText, response.data + 1);
          }
          
          return response.data;
        })
        .catch(error => {
          console.error(error);
        });
      },
      putAxios(taskText, addedCount) {
        this.$axios.put(this.apiText + taskText + '.json', addedCount)
        .then(response => {
          console.log(response.data);
          this.totalChkCount--;
          if(this.totalChkCount == 0){
            this.$router.push('/result');
          }
        })
        .catch(error => {
          console.error(error);
        });
      },
      goResult(){
        this.$router.push('/result');
      }
  }
  }
</script>
<style>
.custom-label .v-label {
  color: #333333;
  width: "";
}
.v-text-field > .v-input__control > .v-input__slot:before {
    display:none;
}
</style>