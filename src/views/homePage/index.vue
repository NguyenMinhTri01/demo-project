<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12 text-center">
        <img src="/image/kiemnghia.jpg" alt="" width="200">
      </div>
    </div>
    <template v-if="productData">
      <div v-for="product in productData" :key="product.id">
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
     
    };
  },
  created() {
    let home = this;
    let dataProducts = db.ref("data_sample");
    dataProducts.on("value", (snapshot) => {
      if(snapshot.val()) {
        home.$store.dispatch('fetchProducts', snapshot.val());
      }
    });
  },
  computed : {
    productData () {
      return this.$store.state.product.data
    }
  },
};
</script>

<style scoped>
</style>