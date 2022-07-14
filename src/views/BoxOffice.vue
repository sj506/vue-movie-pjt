<template>
  <div class="container-column-center">
    <h1 v-bind:class="{ dNone: this.$route.path == '/weekBoxOffice' }">BoxOfficeByDay</h1>
    <h1 v-bind:class="{ dNone: this.$route.path == '/BoxOffice' }">BoxOfficeByWeek</h1>
    <div>
      <input type="date" v-model="selectedDate" @change="search" />
    </div>
    <h1 v-bind:class="{ dNone: list != '' }">Loding...</h1>
    <table v-bind:class="{ dNone: list == '' }">
      <thead>
        <tr>
          <th>순위</th>
          <th>제목</th>
          <th>개봉일</th>
          <th>누적관객수</th>
          <th>누적매출액</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in list" :key="item.movieCd">
          <td>{{ item.rank }}</td>
          <td>
            <router-link :to="`/DetailsView/${item.rnum}`">{{ item.movieNm }}</router-link>
          </td>
          <td>{{ item.openDt }}</td>
          <td>{{ numberComma(item.audiAcc) }}</td>
          <td>{{ numberComma(item.salesAcc) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      selectedDate: '',
      list: [],
      routePath: '',
    };
  },
  setup() {},
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = d.toISOString().slice(0, 10);
    this.search();
  },
  mounted() {},
  unmounted() {},
  updated() {
    if (this.$route.path == '/BoxOffice') {
      this.selectedDate = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10);
    } else if (this.$route.path == '/weekBoxOffice') {
      this.selectedDate = new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().slice(0, 10);
    }
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-', '');
      this.getData(targetDt);
    },
    async getData(targetDt) {
      if (this.$route.path == '/BoxOffice') {
        const data = await this.getBoxOfficeByDay(targetDt);
        this.list = data.boxOfficeResult.dailyBoxOfficeList;
      } else if (this.$route.path == '/weekBoxOffice') {
        const data = await this.getWeekboxOfficeByDay(targetDt, 0);
        this.list = data.boxOfficeResult.weeklyBoxOfficeList;
      }
    },
  },
};
</script>
