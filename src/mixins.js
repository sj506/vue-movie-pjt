import axios from 'axios';

export default {
  data() {
    return {
      key: '0beecfdd3a0eba0dbb97b9a5772fbf18',
      baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
      boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
      weekboxOfficeByDay: 'boxoffice/searchWeeklyBoxOfficeList.json',
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
    numberComma(num) {
      return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
