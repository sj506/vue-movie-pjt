<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: '',
  components: { Header, Footer },
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav,
a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table {
  border: 1px solid rgb(70, 70, 70);
  border-collapse: collapse;
}
td,
th {
  border: 1px solid rgb(70, 70, 70);
  padding: 16px;
}
.container-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dNone {
  display: none;
}
.dBlock {
  display: block;
}
</style>
