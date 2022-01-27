<template>
  <div>
    <h1>Quantidade de pessoas: {{ pessoas }}</h1>
    <v-btn fab color="pink" dark @click="pessoas = pessoas + 1">
      <v-icon> mdi-plus </v-icon>
    </v-btn>

    <v-btn fab color="purple" dark>
      <v-icon> mdi-minus </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    pessoas: 0,
  }),
};
</script>

<style>
</style>