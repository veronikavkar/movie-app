<template>
  <div :style="{ color: 'white' }">
    <PopularFilm />
    <Filters />
  </div>
</template>

<script>
import PopularFilm from "@/components/PopularFilm.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "IndexPage",
  components: { PopularFilm, Filters },
};
</script>
