<style>
[v-cloak] {
  display: none;
}
</style>
<template v-cloak transition="fade-transition">
    <v-container>
        <v-responsive>
            <div class="pb-6">
                <h1>From Airport</h1>
            </div>
            
            <v-form>

                <v-card flat>
                    <v-card-title>
                        <span>{{ currentTitle }}</span>
                    </v-card-title>
    
                    <v-window v-model="step">
                <!-- DATE AND TIME SLIDE -->
                <v-window-item :value="1">
                    
    
                    
                    <v-card-text>
                        <!-- DATE -->
                        <v-row>
                            <v-col>
                                <v-menu
                                ref="dateMenu"
                                v-model="dateMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="date"
                                        label="Arrival Date"
                                        hint="MM/DD/YYYY"
                                        prepend-inner-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="date = parseDate(date)"
                                        v-on="on"
                                        variant="outlined"
                                        color="indigo-darken-4"
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
                                ref="timeMenu"
                                v-model="timeMenu"
                                :close-on-content-click="false"
                                :return-value.sync="time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="time"
                                        label="Arrival Time"
                                        prepend-inner-icon="mdi-clock-time-four-outline"
                                        v-bind="attrs"
                                        v-on="on"
                                        variant="outlined"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                    v-if="timeMenu"
                                    v-model="time"
                                    full-width
                                    scrollable
                                    @click:minute="$refs.timeMenu.save(time)"
                                    ></v-time-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                        
                    </v-card-text>
                </v-window-item>
    
                <!-- FLIGHT DETAILS -->
                <v-window-item :value="2">
                    <v-card-text>
                        <!-- SELECT AIRPORT -->
                        <v-row>
                            <v-col>
                                <v-select
                                v-model="airport"
                                :items="airportNames"
                                label="Select Airport"
                                prepend-inner-icon="mdi-airport"
                                variant="outlined"
                                color="indigo-darken-4"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <!-- SELECT AIRLINE -->
                        <v-row>
                            <v-col>
                                <v-select
                                v-model="airline"
                                :items="airlineNames"
                                label="Select Airline"
                                prepend-inner-icon="mdi-airplane"
                                variant="outlined"
                                color="indigo-darken-4"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <!-- FLIGHT NUMBER -->
                        <v-row>
                            <v-col color="indigo-darken-4">
                                <v-text-field
                                v-model="flight"
                                label="Flight #"
                                prepend-inner-icon="mdi-airplane-search"
                                variant="outlined"
                                color="indigo-darken-4"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
    
                </v-window-item>
    
                <!-- PICKUP DETAILS -->
                <v-window-item :value="3">
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-autocomplete
                                v-model="pickupAddress"
                                label="Destination Address"
                                color="indigo-darken-4"
                                prepend-inner-icon="mdi-home"
                                variant="outlined"
                                ></v-autocomplete>

                                <!-- ADDITIONAL STOPS -->
                                <v-autocomplete
                                v-if="plus > 1"
                                :value="1"
                                v-model="plusAddress"
                                label="Destination Address"
                                color="indigo-darken-4"
                                prepend-inner-icon="mdi-map-marker-plus"
                                variant="outlined"
                                append-icon="mdi-minus"
                                @click:append="onClick"
                                ></v-autocomplete>
                                
                                <v-autocomplete
                                v-if="plus > 2"
                                :value="2"
                                v-model="plusAddress"
                                label="Destination Address"
                                color="indigo-darken-4"
                                prepend-inner-icon="mdi-map-marker-plus"
                                variant="outlined"
                                append-icon="mdi-minus"
                                @click:append="onClick"
                                ></v-autocomplete> 

                                <v-autocomplete
                                v-if="plus > 3"
                                :value="3"
                                v-model="plusAddress"
                                label="Destination Address"
                                color="indigo-darken-4"
                                prepend-inner-icon="mdi-map-marker-plus"
                                variant="outlined"
                                append-icon="mdi-minus"
                                @click:append="onClick"
                                ></v-autocomplete> 
                                <!-- 3 ADDITIONAL STOPS END -->
                                <v-row>
                                    <v-spacer></v-spacer>
                                    
                                    <v-btn
                                    v-if="plus > 0 && plus < 4"
                                    variant="text"
                                    color="indigo-darken-4"
                                    prepend-icon="mdi-plus"
                                    @click="plus++"
                                    >Add Stop</v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                        <!-- ADDTIONAL ADDRESS IF NEEDED -->
                       <!-- ANY DETAILS -->
                        <v-row class="pt-6">
                            <v-col>
                                <v-textarea
                                v-model="instructions"
                                label="Special Instructions"
                                auto-grow
                                variant="outlined"
                                rows="1"
                                row-height="15"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
    
                </v-window-item>
    
                <!-- CONFIRMATION SCREEN -->
                <v-window-item :value="4">
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-col class="mt-2" cols="12">
                                    <strong> Tue </strong> September 2
            {{ new Date().getUTCFullYear() }} at 8:30 PM </v-col>
                                <v-timeline side="end" align="start">
                                    
    
        <v-timeline-item
          dot-color="#2D12D4"
          size="small"
          icon="mdi-airplane"
        >
          <div class="d-flex">
            <!-- <strong class="me-4">5pm</strong>  (WILL ADD BACK IF TIME IS REQUIRED)-->
            <div>
              <strong>John F. Kennedy International Airport</strong>
              <div class="text-caption">
                American Airlines Flight 1234
              </div>
            </div>
          </div>
        </v-timeline-item>
    
        <v-timeline-item
          dot-color="#2D12D4"
          size="small"
          icon="mdi-plus"
        >
          <div class="d-flex">
            <!-- <strong class="me-4">Pick up time</strong> (WILL ADD BACK IF TIME IS REQUIRED)-->
            <div>
              <strong>Additional Stop</strong>
              <div class="text-caption mb-2">
                If needed
              </div>
            </div>
          </div>
        </v-timeline-item>
    
        <v-timeline-item
          dot-color="#2D12D4"
          size="small"
          icon="mdi-map-marker"
        >
          <div class="d-flex">
            <!-- <strong class="me-4">Flight Departure Time</strong> (WILL ADD BACK IF TIME IS REQUIRED)-->
            <div>
              <strong>Destination Address</strong>
              <div class="text-caption">
                Final Destination
              </div>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
    
                </v-window-item>
    
                <!-- CONFIRMATION -->
                <v-window-item :value="5">
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
    
                <!-- RIDE SCHEDULED SUCCESSFULLY-->
                <!-- <v-window-item :value="6">
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-text-field
                                v-model="date"
                                type="date"
                                label="Select Date"
                                prepend-inner-icon="mdi-calendar"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-window-item> -->
            </v-window>
    
            <!-- <v-divider></v-divider> -->
            <div class="mt-12"></div>
    
            <v-card-actions>
                <v-btn
                v-if="step > 1 && step < 5"
                variant="text"
                @click="step--"
                >Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                v-if="step < 5"
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
    data:() => ({
        step: 1,
        date: null,
        dateMenu: false,
        time: null,
        timeMenu: false,
        airport: null,
        airportNames: [
        'JFK - John F. Kennedy International Airport',
        'LGA - LaGuardia Airport',
        'BDL - Bradley International Airport',
        'EWL - Newark Liberty International Airport',
        'LAX - Los Angeles International Airport',
        'SFO - San Francisco International Airport',
    ],
        airline: null,
        airlineNames: [
        'American Airlines',
        'Delta',
        'United',
        'Southwest',
        'JetBlue',
        'Spirit',
    ],
        flight: null,
        plus: 1,
        plusAddress: null,
        addstop: null,
        instructions: null,
        addAddress: false,
        passenger: null,
        driver: null,
        
    }),
    methods: {
        onClick () {
            this.plus--
        },
    }, 
    
    computed: {
        currentTitle () {
            switch (this.step) {
                case 1: return 'Enter arrival date and time'
                case 2: return 'Enter flight details'
                case 3: return 'Where to?'
                case 4: return 'Confirmation'
                default: return ''

            }
        },
    },
}
</script>