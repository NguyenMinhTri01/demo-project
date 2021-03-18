<template>
  <div>
    <datatable
      title="XEM SẢN LƯỢNG HIỆN TẠI (DISPLAY QUANTITY OUPUT PERCENT)"
      :columns="tableColumns1"
      :rows="historyData"
      :perPage="perPage"
    />
  </div>
</template>

<script>
import DataTable from "vue-materialize-datatable";
export default {
  components: {
    datatable: DataTable,
  },
  data() {
    return {
      perPage: [5, 10, 20, 30, 50],
      list: [],
      tableColumns1: [
        {
          label: "ID",
          field: "id",
          numeric: true,
          html: true,
        },
        {
          label: "NAME",
          field: "name",
          numeric: false,
          html: false,
        },
        {
          label: "LINE",
          field: "line",
          numeric: false,
          html: false,
        },
        {
          label: "PLAN",
          field: "plan",
          numeric: true,
          html: false,
        },
        {
          label: "PRESENT",
          field: "present",
          numeric: true,
          html: false,
        },
        {
          label: "TARGET",
          field: "target",
          numeric: true,
          html: false,
        },
        {
          label: "HOURS",
          field: "hours",
          numeric: false,
          html: false,
        },
      ],
    };
  },
  computed: {
    historyData() {
      return this.$store.state.history.data;
    },
  },
};
</script>

<style>
ul li {
  list-style: none;
}
</style>