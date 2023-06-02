<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<!-- <template>
  <v-card>
    <v-card-text class="pa-7">
      <div class="d-sm-flex align-center mb-5">
        <div>
          <h3 class="text-h6 title font-weight-medium">Sales Overview</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="text-primary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Ample</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="text-secondary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Pixel Admin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible">
        <apexchart
          type="bar"
          height="280px"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'VoteResult',

    data: () => ({
      series: [
      {
        name: "Ample Admin",
        data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
      },
      {
        name: "Pixel Admin",
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
        borderColor: "transparent",
        padding: { left: 0, right: 0, bottom: 0 },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "42%", borderRadius: 5 },
      },
      colors: ["#fb9778", "#03c9d7"],
      fill: { type: "solid", opacity: 1 },
      chart: {
        type: "bar",
        height: 270,
        offsetX: -15,
        toolbar: { show: false },
        foreColor: "#adb0bb",
        fontFamily: "DM sans",
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        show: true,
        min: 100,
        max: 400,
        tickAmount: 3,
      },
      stroke: {
        show: true,
        width: 5,
        lineCap: "butt",
        colors: ["transparent"],
      },
      tooltip: { theme: "dark" },
    },
   
    })
  }
</script> -->
