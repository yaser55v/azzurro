<template>
  <div>
    
    <v-carousel cycle hide-delimiters>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong transition="scale-transition">Not Just Beaches</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-lazy
        
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="scale-transition"
      >
      <div class="pl-4 pr-4 row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('../assets/img/home/adv-1.jpg')"
            class="white--text align-center"
            gradient="to bottom , rgba(0,0,0,.1), rgba(0,0,0,.3)"
            height="400px"
          >
            <h2 class="text-center">Cultural</h2>
            <div class="text-center">
              <v-btn href="/shop" class="white--text" outlined>SEE MORE</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('../assets/img/home/adv-2.jpg')"
            class="white--text align-center"
            gradient="to bottom , rgba(0,0,0,.1), rgba(0,0,0,.3)"
            height="400px"
          >
            <h2 class="text-center">Restaurants</h2>
            <div class="text-center">
              <v-btn href="/shop" class="white--text" outlined>SEE MORE</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    </v-lazy>
    <div class="pl-4 pr-4 row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/adv-3.jpg')"
            class="white--text align-center"
            gradient="to bottom , rgba(0,0,0,.6), rgba(0,0,0,.5)"
            height="300px"
          >
            <h2 class="text-center font-size">Shopping</h2>
            <div class="text-center mr-2">
              <v-btn class="white--text caption" href="/shop" text>
                SEE MORE
                <v-icon class="white--text caption">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/adv-4.jpg')"
            class="white--text align-center"
            gradient="to bottom , rgba(0,0,0,.6), rgba(0,0,0,.5)"
            height="300px"
          >
            <h2 class="text-center font-size">Natural</h2>
            <div class="text-center mr-2">
              <v-btn class="white--text caption" href="/shop" text>
                SEE MORE
                <v-icon class="white--text caption">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/adv-5.jpg')"
            class="white--text align-center"
            gradient="to bottom , rgba(0,0,0,.6), rgba(0,0,0,.5)"
            height="300px"
          >
            <h2 class="text-center font-size">History</h2>
            <div class="text-center mr-2">
              <v-btn class="white--text caption" href="/shop" text>
                SEE MORE
                <v-icon class="white--text caption">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-col :cols="12">
        <v-card-text tile outlined>
          <v-card-title class="subheading">Deals Of The Day</v-card-title>
          <v-divider></v-divider>
          <div class="row">
            <div
              class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
              v-for="hotel in hotels"
              :key="hotel.name"
            >
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img class="white--text align-end" height="200px" :src="hotel.src">
                    <v-chip class="ma-2" color="orange" text-color="white">
                      {{ hotel.pris }}
                      <v-icon right>mdi-star</v-icon>
                    </v-chip>
                  </v-img>
                  <v-card-text class="text--primary text-center">
                    <v-rating
                      background-color="orange lighten-3"
                      color="orange"
                      readonly
                      :value="hotel.value"
                      half-increments
                    ></v-rating>
                    <h4>{{ hotel.name }}</h4>
                    <h5>{{ hotel.discription }}</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn href="/product" class="ma-2" outlined color="info">Explore</v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
          </div>
        </v-card-text>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: require("../assets/img/home/home-1.jpg") },
        { src: require("../assets/img/home/home-2.jpg") },
        { src: require("../assets/img/home/home-3.jpg") },
        { src: require("../assets/img/home/home-4.jpg") }
      ],
      hotels: [
        {
          name: "Hotel-1",
          discription: "50 $ , 3 Nights , HalfBord",
          src: require("../assets/img/home/hotel-1.jpg"),
          value: 4,
          pris: "50 $"
        },
        {
          name: "Hotel-2",
          discription: "120 $ , 3 Nights , FullBord",
          src: require("../assets/img/home/hotel-2.jpg"),
          value: 3.5,
          pris: "120 $"
        },
        {
          name: "Hotel-3",
          discription: "150 $ , 3 Nights , HalfBord",
          src: require("../assets/img/home/hotel-3.jpg"),
          value: 5,
          pris: "150 $"
        },
        {
          name: "Hotel-4",
          discription: "80 $ , 3 Nights , HalfBord",
          src: require("../assets/img/home/hotel-4.jpg"),
          value: 4.5,
          pris: "80 $"
        }
      ]
    };
  }
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>