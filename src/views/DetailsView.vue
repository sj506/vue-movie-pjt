<template>
  <div>
    <ul>
      <li>제목 : {{ movies.movieNm }}</li>
      <li>개봉년도 : {{ movies.prdtYear }}</li>
      <li>쇼타임 : {{ movies.showTm }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailsView',
  components: {},
  data() {
    return {
      movies: [],
    };
  },
  setup() {},
  created() {
    this.getData();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getData() {
      const data = await this.getDetailsboxOfficeByDay(this.$route.params.id);
      console.log(data.movieInfoResult.movieInfo);
      this.movies = data.movieInfoResult.movieInfo;
    },
  },
};
</script>
