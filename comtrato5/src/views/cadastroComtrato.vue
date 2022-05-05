<template>
  <menuNavBarVue />
    <div class="container col-md-5">
      <componenteCadastroVue />
    </div>
  <endFooterVue />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import {ref} from 'vue';
// import firebase from 'firebase/compat/app';
import componenteCadastroVue from '@/components/componenteCadastro.vue';
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'

export default {
  components: {
    componenteCadastroVue,
    menuNavBarVue,
    endFooterVue,
    },

    data(){
      // const email = ref("");
      // const password = ref("");
      // const Login = () => {
      //     firebase
      //         .auth()
      //         .signInWithEmailAndPassword(email.value, password.value)
      //         .then(data => alert("Logado com sucesso"))
      //         .catch(err => alert(err.message));
      // }

      return{
        // Login,
        // email,
        // password,
        inicio: "",
      }
    },
    
}
</script>

<style>

</style>