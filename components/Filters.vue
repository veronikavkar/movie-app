<template>
  <div class="search-tags">
    <ul class="search-tags__list">
      <li class="search-tags__item" v-for="genre in genres" :key="genre">
        <button class="search-tags__btn">{{ genre }}</button>
      </li>
    </ul>
    <DropdownFilters />
  </div>
</template>

<script>
import DropdownFilters from "@/components/DropdownFilters.vue";
export default {
  name: "Filters",
  components: { DropdownFilters },
  data() {
    return {
      genres: [
        "Комедии",
        "Драмы",
        "Ужасы",
        "Боевики",
        "Триллеры",
        "Фантастика",
        "Криминал",
        "Биография",
        "Военный",
        "История",
      ],
    };
  },
};
</script>

<style lang="scss">
.search-tags {
  margin-top: 80px;
  display: flex;
  align-items: baseline;
  &__list {
    display: flex;
  }
  &__item {
    margin-right: 30px;
  }
  &__btn {
    position: relative;
  }
  &__btn::after {
    content: "";
    position: absolute;
    width: 100%;
    background: #c90000;
    height: 3px;
    left: 0;
    bottom: 0;
  }
  &__btn::after {
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }
  &__btn:hover::after {
    transform: scale(1, 1);
  }
}
</style>
