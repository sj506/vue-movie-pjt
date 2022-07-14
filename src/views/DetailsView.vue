<template>
  <div>
    {{ name }}
  </div>
</template>
<script>
export default {
  name: 'DetailsView',
  props: {
    name: {
      type: String,
      default: '1',
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
    const val = this.$route.params;
    console.log(val);
  },
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
