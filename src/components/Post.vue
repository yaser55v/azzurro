<template>
  <v-container>
    <p class="display-3 font-weight-light text-center pa-4">Lorem ipsum dolor sit amet</p>
    <p class="overline text-center">
      By
      <b>Jhon Doe</b> | Jan 24,2020
    </p>
    <div class="row">
      <div class="com-md-12 col-sm-12 col-xs-12">
        <v-img
          class="white--text align-end"
          height="400px"
          :src="require('../assets/img/home/adv-1.jpg')"
        ></v-img>
        <p class="display-1 font-weight-light">Lorem ipsum</p>
        <p
          class="pt-5 subtitle-1 font-weight-light"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, autem consequatur placeat reiciendis incidunt iste vel consectetur debitis sed, natus blanditiis ea adipisci amet explicabo quis aperiam veritatis unde dolor!</p>
        <ul class="subtitle-1 font-weight-light">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
        </ul>
        <p class="pt-5 subtitle-1 font-weight-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim modi nostrum accusantium veniam totam quia praesentium? Magnam autem ratione exercitationem voluptate harum, ut officia, eius, beatae nihil excepturi cupiditate.
        </p>
        <v-img
          class="white--text align-end"
          height="400px"
          :src="require('../assets/img/home/adv-2.jpg')"
        ></v-img>
        <p class="display-1 font-weight-light">Lorem ipsum</p>
          <p class="pt-5 subtitle-1 font-weight-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim modi nostrum accusantium veniam totam quia praesentium? Magnam autem ratione exercitationem voluptate harum, ut officia, eius, beatae nihil excepturi cupiditate.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim modi nostrum accusantium veniam totam quia praesentium? Magnam autem ratione exercitationem voluptate harum, ut officia, eius, beatae nihil excepturi cupiditate.
        </p>
        <p class="body-1 font-weight-light pt-10">
          <b>3 COMMENTS</b>
        </p>
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
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      rating:4.5,
      item: 5,
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
    }
  }
}
</script>