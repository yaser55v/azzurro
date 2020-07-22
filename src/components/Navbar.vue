<template>
  <nav>
    <!-- Start navbar -->
    <v-app-bar flat app class="primary">
      <v-app-bar-nav-icon  class="white--text hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="azzurro">Azzurro</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div class="hidden-sm-and-down" max-width="100" dense>
            <v-btn text color="white" to="/">
              <span>Home</span>
            </v-btn>
            <v-btn text color="white" v-bind="attrs" v-on="on">
              <v-icon left>mdi-chevron-down</v-icon>
              <span>Cattagory</span>
            </v-btn>
            <v-btn text color="white" to="/product">
              <span>Product</span>
            </v-btn>
            <v-btn text color="white" to="/blog">
              <span>Blog</span>
            </v-btn>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Dropdown menu -->
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="primary hidden-md-and-up">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <p class="white--text azzurro">Azzurro</p>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <hr />
      <v-list>
        <v-list-item link v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Alert COVID-19 -->
      <v-alert
        type="error"
        dismissible
        tile
        text
        outlined
        color="deep-orange"
      >COVID-19 : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi magnam unde atque quia fugit assumenda aspernatur quam corrupti laborum pariatur?</v-alert>
      <!-- Alert COVID-19 -->
      <!-- <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/" class="v-btn">
          <span>Home</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <span>Shop</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item v-for="(item, index) in items" :key="index" href="/shop">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
        <a href="/product" class="v-btn">
          <span>Product</span>
        </a>
        <a href="/blog" class="v-btn">
          <span>Blog</span>
        </a>
      </v-bottom-navigation>-->
    </v-main>
    <router-view />
    <!-- Footer -->
    <v-footer dark padless>
      <v-card flat tile class="primary lighten-1 white--text text-center" width="100%">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="primary lighten white--text">
          {{ new Date().getFullYear() }} —
          <strong>Azzurro</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,

      items: [
        { title: "Resorts", icon: "mdi-vibrate", route: "/shop" },
        { title: "Hotels" },
        { title: "Restaurants" },
        { title: "Tickets" },
        { title: "Shopping" }
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      activeBtn: 1,
      links: [
        { text: "Home", route: "/" },
        { text: "Cattagory", route: "/shop" },
        { text: "Product", route: "/product" },
        { text: "Blog", route: "/blog" }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap");
.azzurro {
  font-family: "Petit Formal Script", cursive;
  font-weight: bold;
}
</style>