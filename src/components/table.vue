<template>
  <div>
    <button class="btn btn-sm btn-primary">Export Excel</button>
    <VueTableDynamic :params="params" ref="table"> </VueTableDynamic>
  </div>
</template>

<script>
import VueTableDynamic from "vue-table-dynamic";

export default {
  components: {
    VueTableDynamic
  },
    data() {
    return {
      params: {
        data: [
          ["NO", "NAME", "ID", "PRESENT", "PLAN", "TARGET", "DATE"],
        ],
        header: "row",
        border: true,
        stripe: true,
        enableSearch: true,
        sort: [0, 1, 2, 3, 4, 5],
        pagination: true,
        pageSize: 5,
        pageSizes: [5, 10, 20, 50],
      },
    };
  },
};
</script>

<style>
</style>