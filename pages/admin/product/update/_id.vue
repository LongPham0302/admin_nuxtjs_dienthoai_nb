<template>
  <div class="col-span-10 mt-20 ml-10">
    <label class="block mb-1 text-sm" for="input1"> name:</label>

    <input
      id="input1"
      class="w-3/5 border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Full name..."
    />
    <br />
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 rounded p-3 mt-4"
    >
      Update
    </button>
  </div>
</template>
<script>
export default {
  layout: "admin",
};
</script>
