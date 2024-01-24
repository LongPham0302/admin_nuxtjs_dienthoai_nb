<template>
    <div class="col-span-10 mt-20 ml-10">
        <label class="block mb-1 text-sm" for="input1"> name Category:</label>

        <input v-model="name" id="input1"
            class="w-3/5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text"
            autofocus placeholder="Full name..." />
        <span v-if="error" class="font-medium">Info alert!</span> {{ error }}

        <br>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  rounded p-3 mt-4"
            @click="createCategory">Create</button>

    </div>
</template>
<script>

export default {
    layout: 'admin',
    data() {
        return {
            name: '',
            error: ''
        }
    },
    methods: {
        createCategory() {
            this.error = ''
            let data = {
                name: this.name
            }
            this.$store.dispatch('createCategory', data).then((res) => {
                if (res.ok === true) {
                    return this.$router.replace('/admin/category/')
                }
                this.error = res
            });;
        }
    }

}
</script>