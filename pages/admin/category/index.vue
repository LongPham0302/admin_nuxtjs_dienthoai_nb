<template>
    <div class="col-span-10">
        <categoriesAdmin />
    </div>
</template>
<script>
import categoriesAdmin from '@components/admin/category/index.vue'

export default {
    layout: 'admin',
    components: {
        categoriesAdmin,
    },
}
</script>