<template>
    <div class="col-span-10 mt-20 ml-10">

        <label class="block mb-1 text-sm " for="input1">CompanyName:</label>
        <input v-model="companyName" id="input1"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="CompanyName..." />
        

        <label class="block mb-1 text-sm" for="input1">ContactPhone:</label>
        <input v-model="contactPhone" id="input1"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="ContactPhone..." />

        <br />
            <label class="block mb-1 text-sm" for="input1">OperatingHours:</label>
        <input v-model="operatingHours" id="input1"
            class="w-3/5 border px-4 py-2 rounded mb-4 focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="OperatingHours..." />
        
        <span v-if="error" class="font-medium">Info alert!</span> {{ error }}

        <br>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  rounded p-3 mt-4"
            @click="updateHeader">Update</button>

    </div>
</template>
<script>

export default {
    layout: 'admin',
    data() {
        return {
            companyName: '',
            contactPhone: '',
            operatingHours: '',
        }
    },
    created() {
        this.getHeader();
    },
    methods: {
        updateHeader() {
            let data = {
                companyName: this.companyName,
                contactPhone: this.contactPhone,
                operatingHours: this.operatingHours,
            }
            this.$store.dispatch('updateHeader', { id: this.$route.params.id, data }).then((res) => {
                if (res.ok === true) {
                    this.$router.replace('/admin/header/')
                }
            });
        },
        async getHeader() {
            this.$store.dispatch('getHeader', this.$route.params.id).then((res) => {
                this.companyName = res.companyName;
                this.contactPhone = res.contactPhone;
                this.operatingHours = res.operatingHours;
            })
        }
    }

}
</script>