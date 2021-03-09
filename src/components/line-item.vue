<template>
  <div class="my-3 p-4 bg-white rounded box-shadow border-bottom">
    <table class="table table-bordered">
      <thead>
        <tr class="bg-success">
          <th colspan="4">
            <div class="row">
              <h3 class="col-6 text-left text-warning font-weight-bold">
                LINE 8
              </h3>
              <h3 class="col-6 text-right text-danger font-weight-bold">
                17/10/2016 - 08:54:43
              </h3>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-primary">
            <h4 class="font-weight-bold text-white">MODEL</h4>
          </td>
          <td>
            <h4 class="text-danger font-weight-bold">A01</h4>
          </td>
          <td class="bg-primary">
            <h4 class="font-weight-bold text-white">ID</h4>
          </td>
          <td><h4 class="text-danger font-weight-bold">AA111</h4></td>
        </tr>
        <tr class="font-weight-bold">
          <td class="bg-gray">PLANT</td>
          <td>1200</td>
          <td class="bg-gray">TARGET</td>
          <td>600</td>
        </tr>
        <tr class="font-weight-bold">
          <td class="bg-gray">ACTUAL</td>
          <td>597</td>
          <td class="bg-gray">HOURS</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
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
</style>