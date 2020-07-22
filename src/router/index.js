import Vue from "vue";
import VueRouter from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import Shop from "@/components/Shop.vue";
import Product from "@/components/Product.vue";
import Blog from "@/components/Blog.vue";
import Post from "@/components/Post.vue";
import Cart from "@/components/Cart.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Navbar,
      children: [
        {
          path: "/",
          component: Home,
          name: "Home",
        },
        {
          path: "/shop",
          component: Shop,
          name: "Shop",
        },
        {
          path: "/product",
          component: Product,
          name: "Product",
        },
        {
          path: "/blog",
          component: Blog,
          name: "Blog",
        },
        {
          path: "/post",
          component: Post,
          name: "Post",
        },
        {
          path: "/cart",
          component: Cart,
          name: "Cart",
        },
      ],
    },
  ],
  mode: "history",
});
