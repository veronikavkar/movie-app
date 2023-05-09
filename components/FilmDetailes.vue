<template>
  <div class="members">
    <p>В главных ролях</p>
    <transition-group tag="ul" name="list" mode="out-in" appear>
      <li class="members__item" v-for="member in actors" :key="member.staffId">
        {{ member.nameRu }}
      </li>
    </transition-group>

    <p>Режиссёр</p>
    <ul v-for="member in directors" :key="member.staffId">
      <li class="members__item">
        {{ member.nameRu }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$store.dispatch("fetchMembersByFilmId", this.film.kinopoiskId);
  },
  computed: {
    actors() {
      return this.$store.state.members.filter(
        (member) => member.professionKey === "ACTOR"
      );
    },
    directors() {
      return this.$store.state.members.filter(
        (member) => member.professionKey === "DIRECTOR"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.members {
  p {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #bdbdbd;
  }
  &__item {
    color: white;
    font-size: 18px;
  }
}
</style>
