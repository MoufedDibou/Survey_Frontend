<template>

    <v-card>

        <v-app-bar color='blue'>
        
         
        
        
            <v-app-bar-title class="d-flex align-center justify-center" > Survey Site</v-app-bar-title>  
         
        
        </v-app-bar>
        
        
        
         <v-main>
        <v-container>
         <div class="d-flex align-center justify-center" style="height: 100vh">
                <v-sheet width="400" class="mx-auto">
                    <h1 class="d-flex align-center justify-center text-blue ">Register </h1>
                  <v-img
                    :width="500"
                    
                      class="mb-8" 
                    cover
                    src="data:image/png;base64,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"
                    ></v-img>
                
                    
                    <v-form fast-fail @submit="register">

                      <v-text-field v-model="user.name" label="Full Name"></v-text-field>
                        <v-text-field v-model="user.email" label="Email"></v-text-field>
        
                        <v-text-field v-model="user.password" label="Password"></v-text-field>
                        <v-text-field v-model="user.password_confirmation" label="Password Confirmation"></v-text-field>
                        <!-- <a href="#" class="text-body-2 font-weight-regular text-red">Forgot Password?</a> -->
        
                        <v-btn type="submit" color="blue" block class="mt-2">Register</v-btn>
        
                    </v-form>
                    <!-- <div class="mt-2">
                        <p class="text-body-2">Don't have an account? <a class="text-red" href="#">Sign Up</a></p>
                    </div> -->
                </v-sheet>
            </div>
        </v-container>
        
         </v-main>
            </v-card>
</template>

<script>
import { Store } from 'vuex';
import router from '@/router'

export default {
  name: "Register",

  data: () => ({
    tab: null,
   user:{
    name: '',
     email: '',
     password: '',
     password_confirmation: '',
      }
    
   
  }),
  methods:{
    register(ev){
      
     ev.preventDefault();
     this.$store.dispatch('register',this.user)
     .then((res)=>{
      router.push({name:'Dashboard'})
     })
    
    }
  }
};
</script>


<style>
a {
    color:rgb(234,236,236)
  };
</style>