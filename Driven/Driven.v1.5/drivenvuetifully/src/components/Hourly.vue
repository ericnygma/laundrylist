<template>
    <v-container>
        <v-responsive>
            <div class="pb-6">

                <h1>By the Hour</h1>
            </div>
            <v-form>

                <v-card flat>
                    <v-card-title>
                        <span>{{ currentTitle }}</span>
                    </v-card-title>
    
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-card-text>
                                <v-row>
                                   <v-col>
                                        <v-autocomplete
                                        v-model="startingPoint"
                                        :items="items"
                                        label="Home"
                                        color="indigo-darken-4"
                                        prepend-inner-icon="mdi-car"
                                        hint="Pick-up Address?"
                                        persistent-hint=""
                                        variant="outlined"
                                        ></v-autocomplete>
    
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                            variant="text"
                                            color="indigo-darken-4"
                                            prepend-icon="mdi-plus"
                                            >Add Stop</v-btn>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <!-- DELETE FROM HERE  -->
                                <v-row>
                                    <v-col>
                                        
                                    </v-col>
                                </v-row>
                                <!-- DET=LETE TO HERE -->
                                <!-- <v-row>
                                    <v-col>
                                        <v-autocomplete
                                        v-model="destination"
                                        :savedPlaces="savedPlaces"
                                        label="Destination"
                                        color="indigo-darken-4"
                                        prepend-inner-icon="mdi-map-marker"
                                        variant="outlined"
                                        ></v-autocomplete>
                                        
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                            variant="text"
                                            color="indigo-darken-4"
                                            prepend-icon="mdi-plus"
                                            >Add Stop</v-btn>
                                        </v-row>
                                    </v-col>
    
                                </v-row> -->
                            </v-card-text>
                        </v-window-item>
    
                        <v-window-item :value="2">
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-menu
                                        ref="dateMenu"
                                        v-model="dateMenu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                            v-model="date"
                                            label="Pickup Date"
                                            prepend-inner-icon="mdi-calendar"
                                            v-bind="attrs"
                                            v-on="on"
                                            variant="outlined"
                                            type="date"
                                            ></v-text-field>
    
                                        </template>
                                        <v-date-picker
                                        v-model="date"
                                        no-title
                                        @input="dateMenu = false"
                                        ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <!-- TIME -->
                                <v-row>
                                    <v-col>
                                        <v-menu
                                        ref="startMenu"
                                        v-model="startMenu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                v-model="start"
                                                label="Start time"
                                                prepend-inner-icon="mdi-clock-time-four-outline"
                                                v-bind="attrs"
                                                v-on="on"
                                                variant="outlined"
                                                type="time"
                                                ></v-text-field>
    
                                            </template>
                                            <v-time-picker
                                            v-model="start"
                                            @click:minute="$refs.startMenu.save(start)"></v-time-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
    
                                </v-card-text>
                        </v-window-item>
    
                        <v-window-item :value="3">
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-col class="mt-2" cols="12">
                                            <strong> {{ date }} </strong> 
                                            {{ new Date().getUTCFullYear() }}  at {{ start }} PM </v-col>
                                        <v-timeline side="end" align="start">
                                    
    
                                            <v-timeline-item
                                            dot-color="#2D12D4"
                                            size="small"
                                            icon="mdi-map-marker"
                                            >
                                                <div class="d-flex">
            <!-- <strong class="me-4">5pm</strong>  (WILL ADD BACK IF TIME IS REQUIRED)-->
                                                    <div>
                                                        <strong>{{ startingPoint }}</strong>
                                                        <div class="text-caption">
                                                        Home
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-timeline-item>
    
                                            
    
        
                            </v-timeline>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
    
                </v-window-item>
                <v-window-item :value="4">
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-sheet
                                elevation="12"
                                max-width="600"
                                rounded="lg"
                                width="100%"
                                class="pa-4 text-center mx-auto"
                                >
                                    <v-icon
                                    class="mb-5"
                                    color="indigo-darken-4"
                                    icon="mdi-check-circle"
                                    size="112"
                                    ></v-icon>

    <div>
      <h2 class="text-h4 font-weight-black text-indigo-darken-4">Congratulations!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You have successfully scheduled your ride.
      </div>

      <p class="text-body-2 mb-4">
        Please head back to the dashboard to review or edit your active rides. 
      </p>

      <v-btn variant="text" color="indigo-darken-4" @click.stop="() => $router.push('/homebase')">Go to Home</v-btn>
    </div>

  </v-sheet>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-window-item>
                    </v-window>
                    <div class="mt-12"></div>
    
                    <v-card-actions>
                        <v-btn
                        v-if="step > 1 && step < 4"
                        variant="text"
                        @click="step--"
                        >Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                        v-if="step < 4"
                        variant="flat"
                        color="indigo-darken-4"
                        @click="step++"
                        >Next
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-responsive>
    </v-container>
  </template>
  

<script>
    

    export default {
        data() {
            return {
                step: 1,
                startingPoint: '',
                items: ['1 University Dr, Fairfax, VA 22030', '1 Driver Ln, Driver, VA 22026', '50 Waterview Plaza, Sterling, VA 20166'],
                destination: '',
                date: new Date().toISOString().substr(0, 10),
                menu2: false,
                dateMenu: false,
                selectedDate: '',
                start: '',
                startMenu: false,
                end: '',
               }
        },
        methods: {
            updateDate (value) {
                this.selectedDate = value
            },
         },
        computed: {
            currentTitle () {
                switch (this.step){
                    case 1: return 'Pickup Location'
                    case 2: return 'Pickup Date and Time'
                    case 3: return 'Confirm'
                    default: return 'Ride Scheduled'
                }
            },
        },
    }
</script>