<template>
  <div class="container">
    <template v-if="products.length > 0">
      <div v-for="(product, index) in products" :key="index">
        <template v-if="product">
          <LineItem :product="product"></LineItem>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import LineItem from "./../../components/line-item";
import { db } from "./../../firebase";

export default {
  components: {
    LineItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    let home = this;
    let dataProducts = db.ref("data_sample");
    dataProducts.on("value", (snapshot) => {
      home.products = snapshot.val();
    });
  },
};
</script>

<style scoped>
</style>