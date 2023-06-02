<template>
  <div>
    <apexchart width="380" type="donut" :options="options" :series="series" style="margin-top: 100px;"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      apiText: 'https://votingapp-9cffe-default-rtdb.firebaseio.com/',
      countryList: ['Japan', 'America', 'Thailand', 'Vietnam', 'Taiwan', 'Korea', 'Philippines'],
      options: { labels: [], colors: ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#99B898', '#F0C987'] },
      series: []
    }
  },
  created: function () {
    this.getAllData();
  },
  methods: {
    getAllData() {
      for (let word of this.countryList) {
        this.$axios.get(this.apiText + word + '.json')
          .then(response => {
            this.options.labels.push(word)
            this.series.push(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
      
    }
  }
}
</script>
