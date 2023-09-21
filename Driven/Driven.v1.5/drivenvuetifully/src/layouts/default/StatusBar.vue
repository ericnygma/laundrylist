<template>
    <!-- <v-layout style="height: 50px"> -->
      <v-system-bar color="indigo-darken-4">
        <span class="ms-2">{{ rightnow }}</span>
       
        <v-spacer></v-spacer>
       
        <v-icon icon="mdi-wifi-strength-3" class="ms-2"></v-icon>

        <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>

        <v-icon icon="mdi-battery" class="ms-2"></v-icon>

        <span class="ms-2">{{ today }}</span>
      </v-system-bar>
    <!-- </v-layout> -->

  </template>
  
  <script>
    //
    // const now = new Date();
    // const time = now.toLocaleTimeString();
    export default {
        data() {
            return {
                rightnow: new Date().toLocaleTimeString(),
                today: new Date().toLocaleDateString()
               }
        },
      }
  </script>