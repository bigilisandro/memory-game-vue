<template>
  <div
    class="card h-22 w-20 md:w-40 md:h-44 xs:justify-center xs:m-2 sm:h-26"
    :class="{'flipped' : active}"
    @click="clickHandler"
  >
  <div class="imgcon h-full w-full custom-green front shadow-lg flex items-center justify-center">
    <img
      :src="card.fields.image.url"
      alt="ac"
      class="h-full w-full object-full xs:h-4/5 xs:w-4/5 rounded-3xl"
    />
  </div>
    <img
      src="https://plus.unsplash.com/premium_photo-1671683371896-53dc511734c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
      alt="back"
      class="h-full w-full back rounded-3xl"
    />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['card','active'],
  methods : {
    clickHandler(){
      if(!this.active){
        this.$emit('click', this.card);
      }
    }
  }
};
</script>

<style scoped>
.front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}
.back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
</style>