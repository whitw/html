<template>
  <div id="app">
    <h1>두 단어의 검색어 순위를 비교해보자</h1>
    <LineChart />
    <DataSendForm />
  </div>
</template>

<script>
import { dataLab } from "./utils/axios";
import { mapState, mapMutations } from "vuex";
import LineChart from "./components/LineChart";
import DataSendForm from "./components/DataSendForm";
export default {
  name: "App",
  components: { LineChart, DataSendForm },
  computed: {
    ...mapState(["chartData"]),
  },
  methods: {
    ...mapMutations(["CHANGE_CHART_DATA"]),
    makeColor() {
      return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    },
    async update() {
    try {
      const response = await dataLab.get();
      const first = response.data[0];
      const labels = first.data.map((item) => item.period);
      const datasets = response.data.map((resp) => {
        return {
          label: resp.title,
          borderColor: this.makeColor(),
          data: resp.data.map((item) => item.ratio),
          tension: 0.3,
        };
      });
      const chartData = {
        labels,
        datasets,
      };
      console.log("chartData:", chartData)
      this.CHANGE_CHART_DATA(chartData);
      console.log(this.chartData);
    } catch (error) {
      console.log(error);
    }

    }
  },
  async created() {
    this.update();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
