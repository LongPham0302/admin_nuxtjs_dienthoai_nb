<template>
  <div v-if="loading" class="loading">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
