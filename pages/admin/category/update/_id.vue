<template>
    <div class="col-span-10 mt-20 ml-10">
        <label class="block mb-1 text-sm" for="input1"> name Category:</label>

        <input v-model="name" id="input1"
            class="w-3/5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="Full name..." />
        <br>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  rounded p-3 mt-4"
            @click="updateCategory">Update</button>

    </div>
</template>
<script>

export default {
    layout: 'admin',
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.getCategory();
    },
    methods: {
        updateCategory() {
            let data = {
                name: this.name
            }
            this.$store.dispatch('category/updateCategory', { id: this.$route.params.id, data }).then((res) => {
                if (res.ok === true) {
                    this.$router.replace('/admin/category/')
                }
            });
        },
        async getCategory() {
            this.$store.dispatch('category/getCategory', this.$route.params.id).then((res) => this.name = res.name)
        }
    }

}
</script>