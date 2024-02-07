<template>
  <div class="col-span-10 mt-5 ml-10 relative">
    <label class="block mb-1 text-sm" for="companyLocation"
      >companyLocation:</label
    >
    <textarea
      v-model="companyLocation"
      id="companyLocation"
      class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="companyLocation..."
    ></textarea>

    <label class="block mb-1 mt-2 text-sm" for="customerSupport"
      >customerSupport:</label
    >
    <textarea
      v-model="customerSupport"
      id="customerSupport"
      class="w-3/5 h-1/4 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="customerSupport..."
    ></textarea>

    <label class="block mb-1 mt-2 text-sm" for="policyRegulations"
      >policyRegulations:</label
    >
    <textarea
      v-model="policyRegulations"
      id="policyRegulations"
      class="w-3/5 h-2/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="policyRegulations..."
    ></textarea>

    <span v-if="error" class="font-medium">Info alert!</span> {{ error }}

    <br />
    <button
      type="button"
      class="absolute top-0 right-5 text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
      @click="updateFooter()"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      companyLocation: "",
      customerSupport: "",
      policyRegulations: null,
      error: "",
    };
  },
  created() {
    this.getFooterById();
  },

  methods: {
    async updateFooter() {
      try {
        let id = this.$route.params.id;
        let data = {
          companyLocation: this.companyLocation.split("\n"),
          customerSupport: this.customerSupport.split("\n"),
          policyRegulations: this.policyRegulations.split("\n"),
        };
        console.log("data", data);
        const response = await this.$store.dispatch("updateFooter", {
          id,
          data,
        });
        if (response.ok) {
          this.$router.replace("/admin/footer");
        }
      } catch (error) {
        console.error("Error updating footer:", error);
        this.error = "Error updating footer. Please try again.";
      }
    },

    async getFooterById() {
      try {
        let id = this.$route.params.id;
        const res = await this.$store.dispatch("getFooterById", id);
        this.companyLocation = res.companyLocation.join("\n");
        this.customerSupport = res.customerSupport.join("\n");
        this.policyRegulations = res.policyRegulations.join("\n");
      } catch (error) {
        console.error("Error fetching footer:", error);
        this.error = "Error fetching footer. Please try again.";
      }
    },

    formatArrayToString(array) {
      return array ? array.join("\n") : "";
    },

  },
};
</script>
