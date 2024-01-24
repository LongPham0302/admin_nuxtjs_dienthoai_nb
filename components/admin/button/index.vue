<template>
    <button :class="buttonClass" @click="handleClick">{{ buttonText }}</button>
</template>
  
<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        buttonClass: {
            type: String,
            default: "bg-blue-500 text-white font-bold py-2 px-4 rounded",
        },
    },
    methods: {
        handleClick() {
            // Xử lý sự kiện click nếu cần
            console.log("Button clicked!");
        },
    },
};
</script>
  
<style scoped>
</style>
  