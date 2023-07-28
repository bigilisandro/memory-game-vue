<template>
    <div class="fixed z-1 w-full h-full top-0 left-0 flex items-center justify-center" >
       <div class="fixed w-full h-full bg-gray-500 opacity-50"></div>
       <div class="relative z-2 w-8/12 xs:w-2/3 lg:w-1/3 bg-white p-8 mx-auto rounded-xl flex flex-col items-center">
         <p class="text-xl pb-4">Welcome to Memory Animals Card Game!</p>
         <p class="text-xl pb-2">Please enter your name:</p>
         <div class="w-80">
            <input type="text" v-model="nameInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-8/12 m-auto p-2.5" placeholder="Name" required>
        </div>
         <button
          type="button"
           class="px-4 py-2 my-3 text-white text-xl rounded-full border-none"
           :class="[ nameInput.length ? 'bg-green-800 hover:bg-green-700' : 'cursor-not-allowed bg-green-200' ]"
           :disabled="!nameInput.length"
           @click="saveUserName"
         >
           Let's Play!
         </button>
       </div>
     </div>
 </template>
 
 <script>
 export default {
   name : 'init-modal',
   props : ['hits', 'errors'],
   data() {
    return {
      nameInput: '',
    };
  },
  methods: {
    saveUserName() {
      // Dispatch the action to save the user's name in the store
      this.$store.dispatch('setUserName', this.nameInput);
      this.$emit('click')
    },
  },
 }
 </script>