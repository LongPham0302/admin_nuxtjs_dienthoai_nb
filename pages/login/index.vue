<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <span
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        Login
      </span>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="Login">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required="true"
                v-model="email"
              />
            </div>
            <div class="relative">
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                />
              </div>
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute top-1/2 inset-y-0 right-0 flex items-center pr-2 cursor-pointer focus:outline-none"
              >
                <svg
                  v-if="showPassword"
                  class="w-5 h-5 text-gray-500 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.364 4.636a8 8 0 00-11.313 0M12 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm1.475 4.95a5.5 5.5 0 00-7.778 7.778l1.555-1.555a3.5 3.5 0 014.923 4.923l1.554-1.554a1.5 1.5 0 002.121-2.122l-1.554 1.554a3.5 3.5 0 01-4.923-4.923l-1.555 1.555a5.5 5.5 0 007.778-7.778z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-5 h-5 text-gray-500 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2 12s3 5.5 10 5.5 10-5.5 10-5.5S22 12 22 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start"></div>
              <div
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    Login() {
      const loginInput = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("logIn", loginInput);
    },
  },
};
</script>
