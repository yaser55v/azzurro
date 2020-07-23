<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item :src="require('../assets/img/product/pro-7.jpg')"></v-carousel-item>
            <v-carousel-item :src="require('../assets/img/product/pro-3.jpg')"></v-carousel-item>
            <v-carousel-item :src="require('../assets/img/product/pro-1.jpg')"></v-carousel-item>
            <v-carousel-item :src="require('../assets/img/product/pro-5.jpg')"></v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pl-6" :items="breadcrumb"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">Hotel 1</p>
            <v-divider></v-divider>
            <p class="title">ABOUT</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                $70.00
                <del class="subtitle-1 font-weight-thin">$120</del>
              </p>
              <v-spacer></v-spacer>
              <v-rating
                background-color="orange lighten-3"
                color="orange"
                readonly
                v-model="rating"
                half-increments
                dense
              ></v-rating>
              <span class="body-2 font-weight-thin">25 Reviews</span>
            </v-card-actions>
            <p
              class="subtitle-1 font-weight-thin"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae maxime at soluta quidem eum totam tempore a ex eos omnis fugiat, error deleniti autem ipsum cupiditate distinctio aut assumenda.</p>
            <br />
            <v-col class="d-flex" cols="12" sm="12">
              <HotelDatePicker :startDate="day5nextMonth()" :minNights="3" ></HotelDatePicker>
            </v-col>
            <v-bottom-navigation outlined v-model="bottomNav">
              <v-icon
                color="primary"
                v-for="fuature in fuatures"
                :key="fuature.icon"
                class="pl-4"
              >{{fuature.icon}}</v-icon>
            </v-bottom-navigation>
            <br />
            <v-divider></v-divider>
            <v-col class="d-flex" cols="12" sm="12">
              <v-btn class="success white--text" outlined tile dense>
                <v-icon>mdi-cart</v-icon>TAKE IT NOW
              </v-btn>
              <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
            </v-col>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>Description</v-tab>
            <v-tab>Location</v-tab>
            <v-tab>Reviews</v-tab>
            <v-tab-item>
              <p
                class="pt-10 subtitle-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta similique, at eligendi? Adipisci qui excepturi quaeratLorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta similique, at eligendi? Adipisci qui excepturi quaerat quasi.</p>
            </v-tab-item>
            <v-tab-item>
              <p
                class="pt-10 subtitle-1 font-weight-thin"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta similique, at eligendi? Adipisci qui excepturi quaeratLorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta similique, at eligendi? Adipisci qui excepturi quaerat quasi.</p>
            </v-tab-item>
            <v-tab-item>
              <v-list three-line avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item v-for="pepol in pepols" :key="pepol.id" inactive>
                    <v-list-item-avatar>
                      <v-img :src="pepol.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="pepol.title"></v-list-item-title>
                      <v-rating
                        v-model="rating"
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                      ></v-rating>
                      <v-list-item-subtitle v-html="pepol.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
          <v-card-text class="pa-0 pt-4" tile outlined>
            <p class="subtitle-1 font-weight-bold pt-3 text-center">YOU MIGHT ALSO LIKE</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div
                class="col-md-2 col-sm-4 col-xs-12 text-center"
                v-for="hotel in hotels"
                :key="hotel.name"
              >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="hotel.src"></v-img>
                    <v-card-text class="text--primary text-center">
                      <v-rating
                        background-color="orange lighten-3"
                        color="orange"
                        readonly
                        :value="hotel.value"
                        half-increments
                        dense
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
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker";
export default {
  data() {
    return {
      breadcrumb: [
        { text: "Home", disabled: false, href: "/" },
        { text: "Summer & Sea", disabled: false, href: "breadcrumbs_summer" },
        { text: "Hotels", disabled: false, href: "breadcrumbs_hotels" },
        { text: "Hotel 1", disabled: true, href: "breadcrumbs_hotels_1" }
      ],
      rating: 4.5,
      bottomNav: "",
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      fuatures: [
        { icon: "mdi-wifi", label: "Free Wifi" },
        { icon: "mdi-pool", label: "Pool" },
        { icon: "mdi-tea", label: "Free hot drinks" },
        { icon: "mdi-air-conditioner", label: "Air conditioning" },
        { icon: "mdi-hanger", label: "Bicycle rental" },
        { icon: "mdi-satellite-variant", label: "Cable Satellite TV" },
        { icon: "mdi-spa", label: "Spa" },
        { icon: "mdi-taxi", label: "Taxi" },
        { icon: "mdi-yoga", label: "Yoga" },
        { icon: "mdi-baby-carriage", label: "Kids Stay Free" }
      ],
      item: ["1 Night", "2 Nights", "3 Nights", "4 Nights"],
      pepols: [
        {
          id: 1,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Some thing good",
          subtitle: `<span class="text--primary">Name</span> &mdash; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta
          Ea cumque eveniet iusto quos, vel quisquam esse excepturi eum quas doloribus tempora dicta`
        },
        {
          id: 2,
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: `Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>`,
          subtitle: `<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`
        },
        {
          id: 3,
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Lorem ipsum dolor",
          subtitle: `<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit`
        },
        {
          id: 4,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Lorem ipsum dolor",
          subtitle: `<h5>I like this </h5>`
        },
        {
          id: 5,
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Lorem ipsum dolor",
          subtitle: `<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit`
        }
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
          src: require("../assets/img/product/pro-9.jpg"),
          value: 4.5,
          pris: "80 $"
        },
        {
          name: "Hotel-5",
          discription: "95 $ , 3 Nights , HalfBord",
          src: require("../assets/img/product/pro-2.jpg"),
          value: 4.5,
          pris: "95 $"
        },
        {
          name: "Hotel-6",
          discription: "123 $ , 3 Nights , HalfBord",
          src: require("../assets/img/home/hotel-4.jpg"),
          value: 4.5,
          pris: "123 $"
        }
      ]
    };
  },
  components: {
    HotelDatePicker
  },
  methods: {
  day5nextMonth: function() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 5);
  }
}
};
</script>
<style>
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";
</style>