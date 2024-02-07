<template>
  <div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="createFooter()"
    >
      + Create
    </button>

    <table class="table-auto w-full text-left mt-5">
      <thead>
        <tr class="border-b p-2">
          <th>Id</th>
          <th>CompanyName</th>
          <th>SocialMedia</th>
          <th>YearRelease</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getListFooter" :key="index">
          <td>{{ item._id }}</td>
          <td>
            <ul>
              <li
                v-for="(location, locationIndex) in item.companyLocation"
                :key="locationIndex"
              >
                {{ location }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li
                v-for="(policy, policyIndex) in item.policyRegulations"
                :key="policyIndex"
              >
                {{ policy }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li
                v-for="(support, supportIndex) in item.customerSupport"
                :key="supportIndex"
              >
                {{ support }}
              </li>
            </ul>
          </td>
 
          <td>
            <button
              type="button"
              class="text-white bg-green-700 mr-5 p-3 mt-4 rounded"
              @click="updateFooter(item._id)"
            >
              Update
            </button>
            <button
              type="button"
              class="text-white bg-red-700 p-3 rounded mt-5"
              @click="deleteFooter(item._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "footerAdmin",
  created() {
    this.$store.dispatch("getListFooter");
  },
  computed: {
    ...mapGetters(["getListFooter"]),
  },
  methods: {
    createFooter() {
      this.$router.replace("/admin/footer/create");
    },
    updateFooter(id) {
      this.$router.replace(`/admin/footer/update/${id}`);
    },
    deleteFooter(id) {
      this.$store.dispatch("deleteFooter", id).then((res) => {
        if (res.ok) {
          alert("Deleted success");
          this.$router.go(0);
        }
      });
    },
  },
};
</script>
