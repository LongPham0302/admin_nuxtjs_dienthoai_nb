<template>
    <div class="col-span-10">
        <footerAdmin />
    </div>
</template>
<script>
import footerAdmin from '@components/admin/footer/index.vue'

export default {
    layout: 'admin',
    components: {
        footerAdmin,
    },
}
</script>