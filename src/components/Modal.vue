<template>
   <div class="fixed z-1 w-full h-full top-0 left-0 flex items-center justify-center" >
      <div class="fixed w-full h-full bg-gray-500 opacity-50"></div>
      <div class="relative z-2 w-8/12 xs:w-2/3 sm:w-1/3 bg-white p-8 mx-auto rounded-xl flex flex-col items-center">
        <p class="text-xl pb-4">Congratulations {{ userName + '!' }}</p>
        <p class="text-xl pb-4">You made {{ hits }} Hits and {{ errors }} Errors</p>
        <button
          class="px-4 py-2 bg-green-800 hover:bg-green-700 text-white text-xl rounded-full border-none focus:outline-none"
          @click="$emit('click')"
        >
          Play Again
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name : 'modal',
  props : ['hits', 'errors'],
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
}
</script>

<style>

</style>