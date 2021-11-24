<template>
  <div class="home">
    Aqui vai mudar
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    {{nome}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      nome: "João"
    }
  },

  components: {
    HelloWorld
  }
}
</script>
