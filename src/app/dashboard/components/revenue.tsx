import { dashboardData } from "./db";

export const revenueOptions = {
  title: {
    text: "Revenue Distribution",
    subtext: "Last 30 Days",
    left: "center",
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#cbd5e1",
    },
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Revenue Source",
      type: "pie",
      radius: "50%",
      data: dashboardData.revenueData30Days.map((item) => ({
        value: item.value,
        name: item.name,
      })),
    },
  ],
};
