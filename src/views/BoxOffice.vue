<template>
  <div class="container-column-center">
    <h1>{{ title }}</h1>
    <div>
      <input type="date" v-model="selectedDate" @change="search" v-bind:class="{ dNone: this.$route.path == '/weekBoxOffice' }" />
      <input type="date" v-model="selectedDate2" @change="search" v-bind:class="{ dNone: this.$route.path == '/BoxOffice' }" />
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
            <router-link :to="`/DetailsView/${item.movieCd}`">{{ item.movieNm }}</router-link>
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
      selectedDate2: '',
      list: [],
      routePath: '',
      targetDt: '',
      title: '',
    };
  },
  setup() {},
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = d.toISOString().slice(0, 10);
    this.selectedDate2 = new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().slice(0, 10);
    this.search();
  },
  mounted() {},
  unmounted() {},
  beforeUpdate() {
    if (this.$route.path == '/BoxOffice') {
      this.title = 'BoxOfficeByDay';
    } else if (this.$route.path == '/weekBoxOffice') {
      this.title = 'BoxOfficeByWeek';
    }
  },
  updated() {},
  watch: {
    title: {
      handler() {
        this.search();
      },
    },
    // ㅠㅠ watch 써서 해결
  },
  methods: {
    search() {
      if (this.$route.path == '/BoxOffice') {
        this.targetDt = this.selectedDate.replaceAll('-', '');
      } else if (this.$route.path == '/weekBoxOffice') {
        this.targetDt = this.selectedDate2.replaceAll('-', '');
      }
      this.getData(this.targetDt);
      console.log('search');
    },
    async getData(targetDt) {
      if (this.$route.path == '/BoxOffice') {
        const data = await this.getBoxOfficeByDay(targetDt);
        this.list = data.boxOfficeResult.dailyBoxOfficeList;
      } else if (this.$route.path == '/weekBoxOffice') {
        const data = await this.getWeekboxOfficeByDay(targetDt, 0);
        this.list = data.boxOfficeResult.weeklyBoxOfficeList;
      }
      console.log('getData');
    },
  },
};
</script>
