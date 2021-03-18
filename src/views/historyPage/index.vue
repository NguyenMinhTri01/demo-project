<template>
  <div class="container">
    <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
      <div class="row">
        <div class="col-sm-3 text-left mt-2">
          <div class="row">
            <div class="col-sm-12">
              <span>TỪ</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <DatePicker
                :input-class="'form-control'"
                v-model="fromDate"
                :lang="lang"
                :format="'YYYY/MM/DD HH:mm'"
                type="datetime"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3 text-left mt-2">
          <div class="row">
            <div class="col-sm-12">
              <span>ĐẾN</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <DatePicker
                :input-class="'form-control'"
                v-model="toDate"
                :lang="lang"
                :format="'YYYY/MM/DD HH:mm'"
                type="datetime"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-left mt-2">
          <div class="row">
            <div class="col-sm-12">
              <span>Xưởng/Nhà Máy</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <select class="form-control">
                <option value="">XUONG 1</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-4 text-left mt-2">
          <div class="row">
            <div class="col-sm-12">
              <span>Chuyền</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <select class="form-control">
                <option value="">Chuyền 1</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-3 text-left mt-4">
          <button class="btn btn-primary mt-2">Xem</button>
        </div>
      </div>
      <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
        <div class="row">
          <div class="col-12 text-right">
            <Table></Table>
          </div>
        </div>
      </div>
      <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
        <BarChart></BarChart>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/vi";
import Table from "./../../components/table";
import BarChart from "./../../components/BarChart";
import { db } from "./../../firebase";
export default {
  components: {
    DatePicker,
    Table,
    BarChart
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
  },
  created() {
    let History = this;
    let dataProducts = db.ref("history");
    dataProducts.on("value", (snapshot) => {
      History.$store.dispatch("fetchHistory", snapshot.val());
    });
  },
};
</script>

<style scoped>
.mx-datepicker {
  width: 100% !important;
}
</style>