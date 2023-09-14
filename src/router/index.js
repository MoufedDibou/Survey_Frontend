import { createRouter ,createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Dashboard from "../views/Dashboard.vue"
import DefaultLayout from "../components/DefaultLayout.vue"
import Surveys from "../views/Surveys.vue"
import Store from "../store";
import createSurvey from "../views/createSurvey.vue"

var routes=[

  {
    path: '/Login',
    name :'Login',
    meta:{isGuest : true},
    component: Login    
  },
    {
        path: '/',
        name :'Dashboard',
        redirect: '/Dashboard',
        meta:{requiresAuth: true},
        component: DefaultLayout,
        children:[
            {
                path: '/Dashboard',
                name :'Dashboard',
                component: Dashboard  
            },
            {
                path: '/Surveys',
                name :'Surveys',
                component: Surveys  
            },
            {
              path: '/createSurvey',
              name :'createSurvey',
              component: createSurvey  
          }
        ]
        },
   
        {
            path: '/Register',
            name :'Register',
            meta:{isGuest : true},
            component: Register    },
           
];

const router = createRouter({
history: createWebHistory(),
routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !Store.state.data.token){

    next({name :'Login'})
  }
  else if( Store.state.data.token && (to.meta.isGuest)){
    next({name : 'Dashboard'});
  }
  else{
    next()
  }
})
export default router