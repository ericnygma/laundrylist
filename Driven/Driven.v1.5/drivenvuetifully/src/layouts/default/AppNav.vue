<template>
   
    <v-bottom-navigation
      v-model="value"
      color="indigo-darken-4"
      grow
      mode="shift"
      app
    >
      <v-btn
      @click.stop="() => $router.push('/')">
        <v-icon color="indigo-darken-4">mdi-home</v-icon>
        

        <span>Home</span>
      </v-btn>

      <v-btn
      @click.stop="() => $router.push('/homebase')">
        <v-icon>mdi-car</v-icon>

        <span>Activities</span>
      </v-btn>

      <v-btn
      @click.stop="() => $router.push('/profile')">
        <v-icon color="indigo-darken-4">mdi-account</v-icon>

        <span>Profile</span>
      </v-btn>
    </v-bottom-navigation>
  
  </template>
  
  <script>


   export default {
    data: () => ({ value: 1 }),
  }
 </script>