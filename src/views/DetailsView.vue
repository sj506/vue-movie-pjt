<template>
  <div></div>
</template>
<script>
export default {
  name: 'DetailsView',
  props: {
    name: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      sampleData: '',
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
      this.list = data.movieInfoResult.movieInfo;
    },
  },
};
</script>
