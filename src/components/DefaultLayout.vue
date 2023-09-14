<template>

    <v-card>

        <v-app-bar color='blue'>
        
          <v-app-bar-nav-icon @click="drawer = ! drawer">
        
          </v-app-bar-nav-icon>
        
           <v-breadcrumbs>
            <v-breadcrumbs-item class="pa-md-4 pa-lg-8 mx-lg-auto text-h6"> <a href="#">Main</a></v-breadcrumbs-item>
            <v-divider vertical ></v-divider>
             <v-breadcrumbs-item class="pa-md-4 pa-lg-8 mx-lg-auto text-h6"> <a href="#">Jobs</a></v-breadcrumbs-item>
             <v-divider vertical inset ></v-divider>
              <v-breadcrumbs-item class="pa-md-4 pa-lg-8 mx-lg-auto text-h6"> <a href="#">Videos</a></v-breadcrumbs-item>
             <v-divider vertical inset></v-divider>
               <v-breadcrumbs-item class="pa-md-4  pa-lg-8 mx-lg-auto text-h6">  <a href="#">Contact</a> </v-breadcrumbs-item>
        
          </v-breadcrumbs>
        
          <v-app-bar-title> Survey</v-app-bar-title>  
         <v-spacer>

         </v-spacer>

           <v-menu  >
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            

            <v-list style="background-color: #2196f3;">
              <v-list-item  class="text-white" title="Logout" value="Logout" @click="logout()">
              
              </v-list-item>
            </v-list>
          </v-menu>
        
        </v-app-bar>
        
         <v-navigation-drawer
               
                v-model="drawer"
               style="background-color: #2196f3;"
              >
        
              <v-list class="b">
                  <v-list-item
                  class="text-white"
                
                    :title= data.user.email 
                    :subtitle= data.user.name 
                  ></v-list-item>
                  <!-- :prepend-avatar= data.user.userImage  -->
        
                <v-divider></v-divider>
        
                <!-- <v-list density="compact" nav>
                  <v-list-item 
                  class="text-blue"
                   prepend-icon="mdi-folder"
                  @click="open()"
                    title="Dashboard" 
                    value="Dashboard">
                  </v-list-item> -->

                  <v-list-item
                    class="text-white"
                     v-for="(item,i) in ItemsNav"
                      :key="i"
                      @click="open(item.link)"
                        :prepend-icon="item.icon"
                         :title="item.title"
                          :value="item.value">
                        </v-list-item>
                  <!-- <v-list-item class="text-blue" prepend-icon="mdi-account-multiple" title="Surveys" value="Surveys" to="/Surveys"> -->

                 
                </v-list>
        
         </v-navigation-drawer>
        
         <v-main>

      <router-view>

      </router-view>
        
         </v-main>
            </v-card>
</template>

<script>
import { mapState} from 'vuex';
// import {useRouter,useRoute} from 'vue-router'
// const router= useRouter();
// const route=useRoute();
import router from '@/router'
// import store from '@/Store'
//import { useStore } from 'vuex';
//import { Store } from 'vuex';
// import {useRouter} from 'vue-router'




export default {
  name: "DefaultLayout",

  

  data: () => ({
    tab: null,
     items2: [
        { title: 'Click Me' },
        { title: 'Click Me' },
       
      ],
    items: ["Home", "Jobs", "videos", "images", "news"],
    drawer:false,
    ItemsNav :[
      {title:'Dashboard',value:'Dashboard',icon:'mdi-folder',link:'Dashboard'},
      {title:'Surveys',value:'Surveys',icon:'mdi-folder',link:'Surveys' }
    ]
   
  }),
  methods:{
    open(name){
      router.push({ name: name });
    },
  //   ...mapMutations(['Logout'])
  //  ,
    logout: function(){ 
   // Store.commit('Logout');
 //  this.logout;
   // ...mapMutations(['Logout']);
   this.$store.dispatch('Logout').then(() =>
   {
    router.push({name:'Login'});
   });
     
    }
   
  },
  computed:{
    ...mapState(['data'])
  }
};
</script>


<style>
a {
    color:rgb(234,236,236)
  };
 
 
</style>