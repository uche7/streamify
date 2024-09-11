import { dashboardData } from "./db";

export const topStreamedSongsOptions = {
  title: {
    text: "Top 5 Streamed Songs",
    left: "center",
  },
  xAxis: {
    type: "category",
    data: dashboardData.topStreamedSongs30Days.map((song) => song.song),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: dashboardData.topStreamedSongs30Days.map((song) => song.streams),
      type: "bar",
      showBackground: true,
    },
  ],
};
