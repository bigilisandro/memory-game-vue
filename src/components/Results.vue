<template>
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
</template>

<script>
export default {
    name: 'results',
    props: ['hits','errors'],
}
</script>

<style>

</style>