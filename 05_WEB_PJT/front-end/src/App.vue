<template>
  <div id="app">
    <LineChart />
  </div>
</template>

<script>
import { dataLab } from "./utils/axios";
import { mapState, mapMutations } from "vuex";
import LineChart from "./components/LineChart";
export default {
  name: "App",
  components: { LineChart },
  computed: {
    ...mapState(["chartData"]),
  },
  methods: {
    ...mapMutations(["CHANGE_CHART_DATA"]),
  },
  async created() {
    try {
      const response = await dataLab.get();
      const first = response.data[0];
      const labels = first.data.map((item) => item.period);
      const datasets = response.data.map((resp) => {
        return {
          label: resp.title,
          backgroundColor:
            "#" + Math.floor(Math.random() * 16777215).toString(16),
          data: resp.data.map((item) => item.ratio),
          tension: 0.3,
        };
      });
      const chartData = {
        labels,
        datasets,
      };
      console.log("chartData:", chartData)
    } catch (error) {
      console.log(error);
    }
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
