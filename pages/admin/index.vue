<template>
    <div class="col-span-10">
        <categoriesAdmin />
    </div>
</template>
<script>
import categoriesAdmin from '@pages/admin/category'
export default {
    layout: 'adminPage',
    components: {
        categoriesAdmin,
    },
}
</script>