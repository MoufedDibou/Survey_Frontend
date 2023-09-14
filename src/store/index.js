import {createStore} from 'vuex';
import axiosClient from '../axios';
   const tmpSurveys=[
          {
            id: 1,
            title:"Laravel query builder",
            slug:"Laravel-query-builder",
            status:"draft",
            image:"",
            description:" Laravel makes the building of queries very easy using this tool",
            created_at:"2023-3-10 16:00:00",
            updated_at:"2023-3-10 16:00:00",
            expire_date:"2023-3-10 16:00:00",
            questions:[
              {
                id:1,
                type:"select",
                question:"What is your Country?",
                description:null,
                data:{
                  options:[
                    {uuid:"67adfe45-96ba-18ad-66af-37acdef458fa",text:"Syria"},
                      {uuid:"67adfe45-96ba-478a-66af-37acdef458fa",text:"Ksa"},
                        {uuid:"67adfe45-96ba-482b-66af-37acdef458fa",text:"Lebanon"},
                  ]
                }
              },

               {
                id:2,
                type:"checkbox",
                question:"which database you prefer with laravel?",
                description:null,
                data:{
                  options:[
                    {uuid:"67adfe45-96ba-18ad-66af-37acdef458fa",text:"mysql"},
                      {uuid:"67adfe45-96ba-478a-66af-37acdef458fa",text:"postgress"},
                        {uuid:"67adfe45-96ba-482b-66af-37acdef458fa",text:"mongoDb"},
                  ]
                }
              },

               {
                id:3,
                type:"checkbox",
                question:"which frontend framework you prefer?",
                description:null,
                data:{
                  options:[
                    {uuid:"67adfe45-96ba-18ad-66af-37acdef458fa",text:"vue"},
                      {uuid:"67adfe45-96ba-478a-66af-37acdef458fa",text:"react"},
                        {uuid:"67adfe45-96ba-482b-66af-37acdef458fa",text:"angular"},
                  ]
                }
              },

               {
                id:4,
                type:"radio",
                question:"which laravel version you are using?",
                description:null,
                data:{
                  options:[
                    {uuid:"67adfe45-96ba-18ad-66af-37acdef458fa",text:"laravel 7"},
                      {uuid:"67adfe45-96ba-478a-66af-37acdef458fa",text:"laravel 8"},
                        {uuid:"67adfe45-96ba-482b-66af-37acdef458fa",text:"laravel 9"},
                  ]
                }
              },
               {
                id:5,
                type:"checkbox",
                question:"which UI Library?",
                description:null,
                data:{
                  options:[
                    {uuid:"67adfe45-96ba-18ad-66af-37acdef458fa",text:"vuetify"},
                      {uuid:"67adfe45-96ba-478a-66af-37acdef458fa",text:"tailwindcss"},
                  ]
                }
              },

               {
                id:6,
                type:"text",
                question:"what are features you wish to see in websit?",
                description:null,
                data:{

                }
              },
               {
                id:7,
                type:"textarea",
                question:"tell us about your experience in similar websites",
                description:null,
                data:{
                }
              }

            ]       
          },
          {
            id: 2,
            title:"Vue js",
            slug:"Vuex and v-router",
            status:"draft",
            image:"",
            description:" Vue js is very important library for frontend ",
            created_at:"2023-3-10 16:00:00",
            updated_at:"2023-3-10 16:00:00",
            expire_date:"2023-3-10 16:00:00",
           questions:[]
                   },
                   {
                    id: 3,
                    title:"Mysql",
                    slug:"dealing with databases",
                    status:"draft",
                    image:"",
                    description:" insert ,select,update , delete from databases ",
                    created_at:"2023-3-10 16:00:00",
                    updated_at:"2023-3-10 16:00:00",
                    expire_date:"2023-3-10 16:00:00",
                   questions:[]
                           }

       ];
       
const Store= createStore({
    state:{
     
       Surveys:[...tmpSurveys],
      data:{
        
        user:{},
        token: sessionStorage.getItem('TOKEN')
      }
           
     
    },
    actions:{

    async  register({commit},user){
        return fetch('http://127.0.0.1:8000/api/register' ,
        {
          headers:{
           "CONTENT-TYPE":"application/json",
           Accept:"application/json"
          },
          method:"POST",
          body:JSON.stringify(user)

        }
        ).then((res)=> res.json())
        .then((res)=>{
          commit("setUser",res);
          return res;
        }
        );
      },



      async login({commit} ,user){
          return axiosClient.post('/login',user)
          .then(({data}) => {
            commit("setUser",data);
            return data;
          })

      },

      async logout({commit}){
        return axiosClient.post('/logout')
        .then((response) =>{
           commit("logout");
           return response;
        })
      }
    },
    mutations:{

      Logout(state){
        state.data.user={};
        state.data.token=null;
      },
      setUser(state,userData){
        state.data.token=userData.token;
        state.data.user=userData.user;
        sessionStorage.setItem('TOKEN',userData.token);
      }
    },
    modules:{}
})

export default Store;