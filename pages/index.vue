<template>
  <adminPage />
</template>

<script>
import adminPage from "@pages/admin";

export default {
  name: "MyComponent",
  layout: "admin",
  components: {
    adminPage,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
}

.layout {
  background-color: rgb(255, 244, 214);
  padding-bottom: 50px;
}
</style>
