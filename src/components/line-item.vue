<template>
  <div class="my-3 bg-white rounded box-shadow border-bottom">
    <table class="table table-bordered">
      <thead>
        <tr class="bg-success">
          <th colspan="4">
            <div class="row">
              <h3 class="col-6 text-left text-warning font-weight-bold">
                LINE {{product.line}}
              </h3>
              <h3 class="col-6 text-right text-danger font-weight-bold">
                {{product.hours}}
              </h3>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-primary column1">
            <h4 class="font-weight-bold text-white">NAME</h4>
          </td>
          <td class="column2">
            <h4 class="text-danger font-weight-bold">{{product.name}}</h4>
          </td>
          <td class="bg-primary column3">
            <h4 class="font-weight-bold text-white">ID</h4>
          </td>
          <td><h4 class="text-danger font-weight-bold">{{product.id}}</h4></td>
        </tr>
        <tr class="font-weight-bold column1">
          <td class="bg-gray">PLAN</td>
          <td>{{product.plan}}</td>
          <td class="bg-gray">TARGET</td>
          <td>{{product.target}}</td>
        </tr>
        <tr class="font-weight-bold column1">
          <td class="bg-gray">PRESENT</td>
          <td>{{product.persent}}</td>
          <td class="bg-gray">HOURS</td>
          <td>{{product.hours}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
   props : ["product"]
};
</script>

<style scoped>
.bg-gray {
  background-color: #b7bcbf !important;
}

.border-bottom {
  border-bottom: 4px solid #007bff !important;
  border-bottom-width: 4px !important;
  border-bottom-style: solid !important;
  border-bottom-color: rgb(0, 123, 255) !important;
}

div.bg-white:hover {
  background-color: #eef0f1 !important;
}

.bg-danger {
  background-color: #af3440 !important;
}

.column1 {
  width: 15%
}
.column2 {
  width: 20%
}
.column3 {
  width: 20%;
}
.column4 {
  width: 45%;
}
</style>