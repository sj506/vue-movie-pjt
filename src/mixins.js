import axios from 'axios';

export default {
  data() {
    return {
      key: '59dcc34d141da4367d1b52ab55ebc3e6',
      baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
      boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
      weekboxOfficeByDay: 'boxoffice/searchWeeklyBoxOfficeList.json',
      detailsBoxOffice: 'movie/searchMovieInfo.json',
    };
  },
  methods: {
    async $api(url, parameter) {
      return (
        await axios
          .get(url, {
            params: parameter,
          })
          .catch((e) => {
            console.log(e);
          })
      ).data;
    },
    async getBoxOfficeByDay(targetDt) {
      const parameter = {
        key: this.key,
        targetDt,
        // targetDt : targetDt 랑 같음
      };
      const url = this.baseUrl + this.boxOfficeByDay;
      return await this.$api(url, parameter);
    },

    async getWeekboxOfficeByDay(targetDt, weekGb) {
      const parameter = {
        key: this.key,
        targetDt,
        weekGb,
        // targetDt : targetDt 랑 같음
      };
      const url = this.baseUrl + this.weekboxOfficeByDay;
      return await this.$api(url, parameter);
    },

    async getDetailsboxOfficeByDay(movieCd) {
      const parameter = {
        key: this.key,
        movieCd,
      };
      const url = this.baseUrl + this.detailsBoxOffice;
      return await this.$api(url, parameter);
    },

    numberComma(num) {
      return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
