<template>
    <div class="flex items-center justify-between px-10 py-4 bg-gray-800" id="app">
        <h1 class="text-2xl font-bold">
            DASHBOARD
        </h1>
        <div class="flex items-center">
            <button class="text-gray-300 hover:text-white focus:outline-none mr-4">
                <i class="fas fa-search">
                </i>
            </button>
            <button class="text-gray-300 hover:text-white focus:outline-none mr-4">
                <i class="fas fa-heart">
                </i>
            </button>
            <button class="text-gray-300 hover:text-white focus:outline-none mr-4">
                <i class="fas fa-shopping-cart">
                </i>
            </button>
            <img alt="Placeholder profile image" class="rounded-full border-2 border-pink-500" height="32"
                src="https://ss-images.saostar.vn/wp700/pc/1680086926197/saostar-oa39qko2qbm6ow4p.jpg"
                width="32" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerAdmin'
}
</script>