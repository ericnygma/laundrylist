<template>
  <v-container>
      <v-responsive class="align-center text-center d-flex fill-height">
          <v-row class="d-flex align-center justify-center">
              <v-img contain height=150 max-width="250" src="@/assets/DrivenLogo.svg" />
          </v-row>
          
          <div class="text-body-2 font-weight-light mb-n1">by Professionals</div>
          <div class="py-14" />

          <v-row>
              <v-col>
                <div
                href="trip">
                  <v-card max-height="150" color="red">
                    <v-card-title>To Airport</v-card-title>
                  </v-card>
                </div>  
                <v-btn
                  href="trip"
                  size="x-large"
                  rounded="lg"
                  elevation="13">
                      To Airport
                      <v-icon 
                      icon="mdi-airport"
                      end/>
                  </v-btn>
              </v-col>

              <v-col>
                  <v-btn
                  size="x-large"
                  rounded="lg"
                  elevation="5">
                      From Airport
                      <v-icon 
                      icon="mdi-home-city"
                      end/>
                      
                  </v-btn>
              </v-col>

              <v-col>
                  <v-btn
                  size="x-large"
                  rounded="lg">
                      By the Hour
                      <v-icon 
                      icon="mdi-speedometer"
                      end/>
                      
                  </v-btn>
              </v-col>
          </v-row>
      </v-responsive>
  </v-container>
  <AppNav />
</template>

<script setup>
//
import AppNav from '@/layouts/default/AppNav.vue';
</script>