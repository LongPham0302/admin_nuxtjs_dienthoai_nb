<template>
    <div class="">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4" @click="createCategory">+
            Create</button>
        <br>
        <table class="table-auto w-full text-left mt-5">
            <thead>
                <tr class="border-b p-2">
                    <th>id</th>
                    <th>name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in getListCategories" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <button type="button" class="text-white bg-green-700 mr-5 p-3 rounded mt-5"
                        @click="updateCategory(item._id)">Update</button>
                    <button type="button" class="text-white bg-red-700 p-3 rounded"
                        @click="deleteCategory(item._id)">Delete</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "categoriesAdmin",
    created() {
        this.$store.dispatch('getlistCategories');
    },
    computed: {
        ...mapGetters(['getListCategories']),
    },
    methods: {
        createCategory() {
            this.$router.replace('/admin/category/create')
        },
        updateCategory(categoryId) {
            this.$router.replace(`/admin/category/update/${categoryId}`);
        },
        deleteCategory(_id) {
            // this.$router.replace(`'/admin/category/update'/${_id}`)
        }
    }
}
</script>