<template>
  <div class="app">
    <img
      src="https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="background image"
      class="absolute h-screen w-screen object-cover z-negative"
    />
    <div v-if="loading">
      <div class="lg:flex lg:justify-center lg:flex-col lg:items-center">
        <h1 class="pt-4 text-4xl text-center">Memory Card Game with Animals !</h1>
        <p v-if="userName" class="text-xl text-center">Welcome, {{ userName }}</p>
        <div class="w-screen flex justify-around flex-wrap content-start pt-4 md:px-24 lg:max-w-screen-lg mt-5">
        <Card
          v-for="animal in animals"
          :key="animal.id"
          :card="animal"
          @click="handleCardClick"
          :active="
            first === animal || second === animal || animal.matched
          "
        />
      </div>
      </div>
      <div class="flex my-5">
        <div
          class="w-full flex justify-center items-center z-0 text-2xl text-gray font-bold "
        >
          Hits: {{ hits }}
        </div>
        <div
          class="w-full flex justify-center items-center z-0 text-2xl text-gray font-bold "
        >
          Errors: {{ errors }}
        </div>
    </div>
    <div class="flex justify-center my-4">
      <button
        class="
          px-4
          py-2
          bg-green-400
          hover:bg-green-700
          text-white text-xl
          rounded-full
          border-none
          focus:outline-none
          bg-cyan-500 shadow-lg shadow-cyan-500/50
        "
        @click="handleRestart"
      >
        Restart Game
      </button>
    </div>
    <div v-if="!userName">
      <InitModal v-show="!userName" @click="closeModal" />
    </div>
    <Modal v-show="done" :hits="hits" :errors="errors" @click="handleRestart" />
  </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";
import InitModal from "./components/InitModal.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Card,
    Modal,
    InitModal
  },
  data() {
    return {
      items: [],
      animals: [],
      first: null,
      second: null,
      hits: 0,
      errors: 0,
      done: false,
      init: false,
      loading: false,
    };
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
  created() {
    axios.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20')
      .then(response => {
        this.items = response.data.entries.slice(0, 8);
        this.createBoard();
        this.loading = true;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
    createBoard() {
      this.shuffleCards();
      this.animals = [...this.items, ...this.items].map(
      (animal, index) => ({
        ...animal,
        matched: false,
        id: index,
      })
      );
    },
    handleCardClick(card) {
      this.first ? (this.second = card) : (this.first = card);
      if (this.first && this.second) {
        if (this.first.fields.image.title === this.second.fields.image.title) {
          const firstIndex = this.animals.indexOf(card);
          const secondIndex = this.animals.indexOf(this.first);
          this.animals[firstIndex].matched = true;
          this.animals[secondIndex].matched = true;
          this.hits++;
          this.resetActive();
        } else {
          this.errors++;
          this.resetActive();
        }
      }
      this.checkIfCompleted();
    },
    resetActive() {
      setTimeout(() => {
        this.first = null;
        this.second = null;
      }, 500);
    },
    shuffleCards() {
      let array = this.items
      for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
      }
      this.items = array
    },
    checkIfCompleted(){
      if(this.animals.every(animal => animal.matched)) this.done = true;
    },
    closeModal() {
      this.init = false;
    },
    handleRestart(){
      this.first = null;
      this.second = null;
      this.hits = 0;
      this.errors = 0;
      this.done = false;
      this.createBoard();
    }
  },
};
</script>