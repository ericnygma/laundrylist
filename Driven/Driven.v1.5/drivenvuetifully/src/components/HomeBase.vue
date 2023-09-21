<template>
    <v-container>
        <v-responsive class="align-center text-center d-flex fill-height">
            <v-row class="d-flex align-center justify-center">
                <v-img contain height=150 max-width="250" src="@/assets/DrivenLogo.svg" />
            </v-row>
            <h1 class="text-heading font-weight-light text-left mt-14">Hello Eric,</h1>
            <!--  -->
            <v-col>

                <v-text-field
                v-model="destination"
                label="Where would you like to go?"
                type="text"
                variant="outlined"
                color="primary"
                max-width="200"
                density="comfortable"
                class="mt-6 text-body-2"
                clearable
                prepend-inner-icon="mdi-magnify"
                append-inner-icon="mdi-microphone"
                rounded>
                
                </v-text-field>
            </v-col>
            <!--  -->
            <!-- <div class="py-2" /> -->
            

            <v-row class="d-flex align-center justify-center">
                <v-col cols="auto">
                    <v-btn
                    @click.stop="() => $router.push('/toAirport')"
                    size="x-large"
                    rounded="lg"
                    min-width="250"
                    elevation="13"
                    color="primary"
                    >
                        To Airport
                        <v-icon 
                        icon="mdi-airplane-takeoff"
                        end/>
                    </v-btn>
                </v-col>

                <v-col cols="auto">
                    <v-btn
                    @click.stop="() => $router.push('/fromAirport')"
                    size="x-large"
                    rounded="lg"
                    min-width="250"
                    elevation="5"
                    color="primary"
                    variant="tonal">
                        From Airport
                        <v-icon 
                        icon="mdi-home-city"
                        end/>
                        
                    </v-btn>
                </v-col>

                <!-- <v-col cols="auto">
                    <v-btn
                    @click.stop="() => $router.push('/hourly')"
                    size="x-large"
                    rounded="lg"
                    min-width="250"
                    color="indigo-darken-4"
                    variant="outlined">
                        By the Hour
                        <v-icon 
                        icon="mdi-speedometer"
                        end/>
                        
                    </v-btn>
                </v-col> -->
            </v-row>
            <v-row>
                <div>
                    <v-img 
                    contain
                    height="150"
                    src="@/assets/Arrivals.gif"/>
                </div>
            </v-row>
        </v-responsive>
    </v-container>
    <AppNav />
</template>

<script setup>
  //
  import AppNav from '@/layouts/default/AppNav.vue';
  
</script>

