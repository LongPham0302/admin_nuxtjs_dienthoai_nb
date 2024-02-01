<template>
    <div class="col-span-10">
        <headerAdmin />
    </div>
</template>
<script>
import headerAdmin from '@components/admin/head/index.vue'

export default {
    layout: 'admin',
    components: {
        headerAdmin,
    },
}
</script>