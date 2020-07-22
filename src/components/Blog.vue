<template>
  <v-container>
    <p class="display-3 font-weight-light text-center pa-4">Our Story</p>
    <div class="row">
      <div v-for="story in storys" :key="story.src" class="col-md-4 col-sm-4 col-xs-12">
        <v-card class="mx-auto" max-width="400" outlined tile href="/post">
          <v-img
            class="white--text align-end"
            height="400px"
            :src="story.src"
          >
            <v-card-title> {{story.title}} </v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{story.subtitle}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{story.text}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      storys: [
        {
          src: require('../assets/img/home/home-1.jpg'),
          title: "Lorem ipsum dolor sit amet",
          subtitle: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi nesciunt id ducimus explicabo animi, itaque, maxime ab obcaecati voluptatibus beatae, quae nihil! Explicabo eaque exercitationem recusandae laborum, tempore modi"
        },
        {
          src: require('../assets/img/home/home-2.jpg'),
          title: "Lorem ipsum dolor sit amet",
          subtitle: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi nesciunt id ducimus explicabo animi, itaque, maxime ab obcaecati voluptatibus beatae, quae nihil! Explicabo eaque exercitationem recusandae laborum, tempore modi"
        },
        {
          src: require('../assets/img/home/home-3.jpg'),
          title: "Lorem ipsum dolor sit amet",
          subtitle: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quasi nesciunt id ducimus explicabo animi, itaque, maxime ab obcaecati voluptatibus beatae, quae nihil! Explicabo eaque exercitationem recusandae laborum, tempore modi"
        }
      ]
    };
  }
};
</script>