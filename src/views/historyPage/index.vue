<template>
  <div class="container">
    <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
      <div class="row">
        <div class="col-3 text-left">TỪ</div>
        <div class="col-3 text-left">ĐẾN</div>
      </div>
      <div class="row">
        <div class="col-3 text-left">
          <DatePicker
            :input-class="'form-control'"
            v-model="fromDate"
            :lang="lang"
            :format="'YYYY/MM/DD HH:mm'"
            type="datetime"
          />
        </div>
        <div class="col-3 text-left">
          <DatePicker
            :input-class="'form-control'"
            v-model="toDate"
            :lang="lang"
            :format="'YYYY/MM/DD HH:mm'"
            type="datetime"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-4 text-left">Xưởng/Nhà Máy</div>
        <div class="col-4 text-left">Chuyền</div>
      </div>
      <div class="row">
        <div class="col-4">
          <select class="form-control">
            <option value="">XUONG 1</option>
          </select>
        </div>
        <div class="col-4">
          <select class="form-control">
            <option value="">Chuyền 1</option>
          </select>
        </div>
        <div class="col-1">
          <button class="btn btn-primary">XEM</button>
        </div>
      </div>
    </div>
    <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
      <div class="row">
        <div class="col-12">
          <p>XEM SẢN LƯỢNG HIỆN TẠI (DISPLAY QUANTITY OUPUT PERCENT)</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-right">
          <button class="btn btn-sm btn-primary">Export Excel</button>
          <vue-table-dynamic :params="params" ref="table"> </vue-table-dynamic>
        </div>
      </div>
    </div>
    <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
      <AreaChart></AreaChart>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/vi";
import moment from "moment";
import VueTableDynamic from "vue-table-dynamic";
import AreaChart from "./../../components/areaChart";
export default {
  components: {
    DatePicker,
    VueTableDynamic,
    AreaChart,
  },
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
      fromDate: 0,
      toDate: 0,
      params: {
        data: [
          ["NO", "MODEL", "ID", "ACTUAL", "SIZE", "TARGET"],
          [1, "AA", "012", "55", "45", "20"],
          [2, "AA", "012", "55", "45", "20"],
          [3, "AA", "012", "55", "45", "20"],
          [4, "AA", "012", "55", "45", "20"],
          [5, "AA", "012", "55", "45", "20"],
          [6, "AA", "012", "55", "45", "20"],
          [7, "AA", "012", "55", "45", "20"],
          [8, "AA", "012", "55", "45", "20"],
          [9, "AA", "012", "55", "45", "20"],
          [10, "AA", "012", "55", "45", "20"],
          [11, "AA", "012", "55", "45", "20"],
          [12, "AA", "012", "55", "45", "20"],
          [13, "AA", "012", "55", "45", "20"],
          [14, "AA", "012", "55", "45", "20"],
          [15, "AA", "012", "55", "45", "20"],
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
  methods: {
    customFormatter(date) {
      moment.locale("vi");
      return moment(date).format("L");
    },
  },
};
</script>

<style scoped>
.mx-datepicker {
  width: 100% !important;
}
</style>