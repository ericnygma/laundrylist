<template>
  <div>
    <v-app-bar flat class="pr-16">
      <v-btn 
      @click.stop="() => $router.push('/homebase')" 
      icon="mdi-close" 
      variant="text" 
      class="ms-2" 
      color="indigo-dark-4"
      ></v-btn>
      
      <v-responsive
      class="d-flex align-center justify-center fill-height">
      <v-row class="d-flex align-center justify-center">

        <v-img 
        height="30"
        width="275"
        src="@/assets/DrivenLogo.svg" />
      </v-row>
      </v-responsive>

    </v-app-bar>

  </div>
    <div class="mt-4"></div>
  </template>
  
  <script setup>
    //
  </script>