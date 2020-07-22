<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#FFF'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event )"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 10, $event )"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0">
              <v-checkbox
                v-for="ratting in rattings"
                :key="ratting"
                append-icon="mdi-star"
                :label="ratting"
                hide-details
                dense color="orange"
              ></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Features</v-card-title>
            <v-container class="pt-0">
              <v-checkbox
                v-for="fuature in fuatures"
                :key="fuature.label"
                :append-icon="fuature.icon"
                :label="fuature.label"
                hide-details
                dense color="success"
              ></v-checkbox>
            </v-container>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrumb"></v-breadcrumbs>
          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Showing 1-12 of 200 Resorts</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="pro in products" :key="pro.id">
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" href="/product" outlined>VIEW</v-btn>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <v-rating
                      background-color="orange lighten-3"
                      color="orange"
                      readonly
                      :value="pro.value"
                      half-increments
                      dense
                    ></v-rating>
                    <div>
                      <a href="/product" style="text-decoration: none">{{pro.name}}</a>
                    </div>
                    <div>${{pro.price}}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination :length="6" v-model="page"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 2,
          name: "Summer & Sea",
          children: [
            { id: 2, name: "Resorts" },
            { id: 3, name: "Hotels" }
          ]
        },
        {
          id: 1,
          name: "Summer & Sea",
          children: [
            { id: 4, name: "Resorts" },
            { id: 5, name: "Hotels" }
          ]
        }
      ],
      range: [0, 10000],
      min: 0,
      max: 10000,
      rattings: ["4 & above", "3 & above", "2 & above", "1 & above"],
      fuatures: [
        { icon: "mdi-wifi", label: "Free Wifi" },
        { icon: "mdi-pool", label: "Pool" },
        { icon: "mdi-hvac", label: "Air conditioning" },
        { icon: "mdi-bicycle", label: "Bicycle rental" },
        { icon: "mdi-satellite-variant", label: "Cable Satellite TV" },
        { icon: "mdi-spa", label: "Spa" },
        { icon: "mdi-taxi", label: "Taxi" },
        { icon: "mdi-yoga", label: "Yoga" },
        { icon: "mdi-baby-carriage", label: "Kids Stay Free" }
      ],
      page: 1,
      breadcrumb: [
        { text: "Home", disabled: false, href: "/" },
        { text: "Summer & Sea", disabled: false, href: "breadcrumbs_summer" },
        { text: "Hotels", disabled: true, href: "breadcrumbs_Hotels" }
      ],
      select: "Popularity",
      options: [
        "Default",
        "Popularity",
        "Relevance",
        "Price : Low to High",
        "Price : High to Low"
      ],
      products: [
        {
          id: 1,
          name: "Hotel One",
          type: "Hotel",
          price: "70.00",
          value: 4,
          src: require("../assets/img/product/pro-1.jpg")
        },
        {
          id: 2,
          name: "Hotel 2",
          type: "Hotel",
          price: "55.00",
          value: 3.5,
          src: require("../assets/img/product/pro-2.jpg")
        },
        {
          id: 3,
          name: "Hotel 3",
          type: "Hotel",
          price: "120.00",
          value: 4.5,
          src: require("../assets/img/product/pro-3.jpg")
        },
        {
          id: 4,
          name: "Hotel 4",
          type: "Hotel",
          price: "70.00",
          value: 4.5,
          src: require("../assets/img/product/pro-4.jpg")
        },
        {
          id: 5,
          name: "Hotel 5",
          type: "Hotel",
          price: "95.00",
          value: 3.5,
          src: require("../assets/img/product/pro-5.jpg")
        },
        {
          id: 6,
          name: "Hotel 6",
          type: "Hotel",
          price: "110.00",
          value: 5,
          src: require("../assets/img/product/pro-6.jpg")
        },
        {
          id: 7,
          name: "Hotel 7",
          type: "Hotel",
          price: "150.00",
          value: 3,
          src: require("../assets/img/product/pro-7.jpg")
        },
        {
          id: 8,
          name: "Hotel 8",
          type: "Hotel",
          price: "65.00",
          value: 4,
          src: require("../assets/img/product/pro-8.jpg")
        },
        {
          id: 9,
          name: "Hotel 9",
          type: "Hotel",
          price: "115.00",
          value: 3.5,
          src: require("../assets/img/product/pro-9.jpg")
        },
        {
          id: 10,
          name: "Hotel 10",
          type: "Hotel",
          price: "120.00",
          value: 4.5,
          src: require("../assets/img/product/pro-10.jpg")
        },
        {
          id: 11,
          name: "Hotel 11",
          type: "Hotel",
          price: "75.00",
          value: 3,
          src: require("../assets/img/product/pro-11.jpg")
        },
        {
          id: 112,
          name: "Hotel 12",
          type: "Hotel",
          price: "110.00",
          value: 4.5,
          src: require("../assets/img/product/pro-12.jpg")
        }
      ]
    };
  }
};
</script>
