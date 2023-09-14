<template>
  <v-container>
   
   

   
        <h2 class="headline font-weight-bold mb-5">
          Ecosystem
        </h2>
        <h2>{{age}}</h2>
         <h2>{{user1}}</h2>
         <h3>{{user}}</h3>

     
      
   
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',

  data: () => ({
    
   age : 25
   
  }),
 computed:{
    ...mapState([
    'user'
    ]),
    user1 () {
      return this.$store.state.user
    }
  }
  
}
</script>
