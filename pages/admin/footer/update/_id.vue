<template>
    <div class="col-span-10 mt-20 ml-10">
        <label class="block mb-1 text-sm" for="CompanyName">Company Name:</label>
        <input v-model="companyName" id="CompanyName"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="CompanyName..." />

        <label class="block mb-1 mt-2 text-sm" for="SocialMedia">Social Media:</label>
        <input v-model="socialMedia" id="SocialMedia"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="SocialMedia..." />

        <label class="block mb-1 mt-2 text-sm" for="YearRelease">Year Release:</label>
        <input v-model="yearRelease" id="YearRelease"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="number"
            autofocus placeholder="YearRelease..." />

        <span v-if="error" class="font-medium">Info alert!</span> {{ error }}

        <br />
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  rounded p-3 mt-4" @click="updateFooter()">Update</button>
    </div>
</template>
<script>
export default {
    layout: "admin",
    data() {
        return {
            companyName: "",
            socialMedia: "",
            yearRelease: null,
            error: "",
        }
    },
    created() {
        this.getFooterById();
    },
    methods: {
        updateFooter() {
            let id = this.$route.params.id;
            let data = {
                companyName: this.companyName,
                socialMedia: this.socialMedia,
                yearRelease: this.yearRelease
            }
            this.$store.dispatch("updateFooter", {id, data}).then(res => {
                if(res.ok) {
                    return this.$router.replace("/admin/footer");
                }
            })
        },

        getFooterById() {
            let id = this.$route.params.id;
            this.$store.dispatch("getFooterById", id).then(res => {
                this.companyName = res.companyName;
                this.socialMedia = res.socialMedia;
                this.yearRelease = res.yearRelease;
            })
        }
    }
}
</script>