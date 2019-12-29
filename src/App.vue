<template>
  <div id="app">
    <div class="container">
      <center><img src="./assets/nemo.jpg" width=400/></center>
    <component v-bind:is="currentComponent" @swap-component="swapComponent">></component>
    </div>
  </div>
</template>

<script>
import Poissons from './components/Poissons/Poissons.vue'
import AddPoisson from './components/AddPoisson/AddPoisson.vue'
import Login from './components/Login/Login.vue'
export default {
  name: 'app',

  components:{
    Poissons,
    AddPoisson,
    Login
  },

  data() {
    return {
      currentComponent: 'Login',
    }
},
methods: {
  swapComponent(component){
    this.currentComponent =  component
  }

}
}
</script>