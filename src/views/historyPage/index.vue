<template>
  <div class="container">
    <!-- <p>{{dataTest}}</p> -->
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
          <Table></Table>
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
import Table from "./../../components/table";
import AreaChart from "./../../components/areaChart";
// import { db } from "./../../firebase";
export default {
  components: {
    DatePicker,
    Table,
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
      // dataTest: null,
    };
  },
  methods: {
    customFormatter(date) {
      moment.locale("vi");
      return moment(date).format("L");
    },
  },
  created() {
    // let History = this;
    // let dataProducts = db.ref("history");
    // dataProducts.on("value", (snapshot) => {
    //   History.dataTest = snapshot.val();
    // });
  },
};
</script>

<style scoped>
.mx-datepicker {
  width: 100% !important;
}
</style>