<template>
  <div :style="{ color: 'white' }">
    <PopularFilm />
    <Filters />
    <FilmsList />
  </div>
</template>

<script>
import PopularFilm from "@/components/PopularFilm.vue";
import Filters from "@/components/Filters.vue";
import FilmsList from "@/components/FilmsList.vue";

export default {
  name: "IndexPage",
  components: { PopularFilm, Filters, FilmsList },
};
</script>
