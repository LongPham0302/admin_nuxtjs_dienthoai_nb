<template>
  <div class="">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="createHeader"
    >
      + Create
    </button>
    <br />
    <table class="table-auto w-full text-left mt-5">
      <thead>
        <tr class="border-b p-2">
          <th>Id</th>
          <th>CompanyName</th>
          <th>ContactPhone</th>
          <th>OperatingHours</th>
          <th>Action</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getListHeaders" :key="index">
          <td>{{ item._id }}</td>
          <td>{{ item.companyName }}</td>
          <td>{{ item.contactPhone }}</td>
          <td>{{ item.operatingHours }}</td>
          <button
            type="button"
            class="text-white bg-green-700 mr-5 p-3 rounded mt-5"
            @click="updateHeader(item._id)"
          >
            Update
          </button>
          <button
            type="button"
            class="text-white bg-red-700 p-3 rounded"
            @click="deleteHeader(item._id)"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "headersAdmin",
  created() {
    this.$store.dispatch("getListHeaders");
  },
  computed: {
    ...mapGetters(["getListHeaders"]),
  },
  methods: {
    createHeader() {
      this.$router.replace("/admin/header/create");
    },
    updateHeader(headerId) {
      this.$router.replace(`/admin/header/update/${headerId}`);
    },
    deleteHeaders(_id) {
      // this.$router.replace(`'/admin/category/update'/${_id}`)
    },
  },

};
</script>
