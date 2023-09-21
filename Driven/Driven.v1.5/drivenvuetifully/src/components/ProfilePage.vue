<template>
    <v-container transition="scale-transition">

        <v-responsive>
            <v-card class="mx-auto">
                <BackAppBar />
                <v-card>
                    <h3 class="text-center mb-8 pb-6">Profile Page</h3>
                    <v-row justify="center" class="text-center">
                        <v-col>
                            <v-avatar
                            color="priamry"
                            size="150"
                            ><v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
                                
                            </v-img>
                            </v-avatar>
                            <v-list-item
                                class="primary pb-6"
                                title="Eric Nygma"
                                subtitle="UX/UI Designer"
                                subsubtitle="203-555-5555"
                                ></v-list-item>
                                <v-divider class="border-opacity-50 pb-4" color="primary"></v-divider>

                                <v-row>
                                    <v-col>Rides</v-col>
                                    <v-divider class="border-opacity-50" color="primary" vertical></v-divider>
                                    <v-col>Rewards</v-col>
                                    <v-divider class="border-opacity-50" color="primary" vertical></v-divider>
                                    <v-col>Years</v-col>
                                </v-row>
                        </v-col>
                        
                    </v-row>
                </v-card>

                <v-card class="mt-4" elevation="8">
                    <v-card-title>Account Settings</v-card-title>
                </v-card>

                <v-card class="mt-4" elevation="8">
                    <v-card-title>Saved Places</v-card-title>
                </v-card>

                <v-card class="mt-4" elevation="8">
                    <v-card-title>Ride History</v-card-title>
                </v-card>


            </v-card>

            
            
        </v-responsive>
    </v-container>
</template>

<script>
import BackAppBar from '@/layouts/default/BackAppBar.vue';


export default {
    data: () => ({
    //
    }),
    components: { BackAppBar }
}
</script>