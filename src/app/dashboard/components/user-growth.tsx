import { formatDate } from "@/utils/format-date";
import { dashboardData } from "./db";

export const userGrowthOptions = {
  title: {
    text: "User Growth Over the Past 12 Months",
    left: "center",
    top: "top",
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#cbd5e1",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    textStyle: {
      color: "#333",
    },
  },
  legend: {
    data: ["Total Users", "Active Users"],
    top: "bottom",
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      color: "#666",
    },
  },
  xAxis: {
    type: "category",
    data: dashboardData.userGrowthData12Months.map((item) =>
      formatDate(item.date)
    ),
    axisLabel: {
      rotate: 45,
      formatter: function (value: string) {
        return value.length > 10 ? value.slice(0, 10) + "..." : value;
      },
    },
    axisLine: {
      lineStyle: {
        color: "#ccc",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#ccc",
      },
    },
    splitLine: {
      lineStyle: {
        color: "#eee",
        type: "dashed",
      },
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  series: [
    {
      name: "Total Users",
      type: "line",
      data: dashboardData.userGrowthData12Months.map((item) => item.totalUsers),
      smooth: true,
      lineStyle: {
        color: "#007bff",
        width: 2,
      },
      itemStyle: {
        color: "#007bff",
      },
      areaStyle: {
        color: "rgba(0, 123, 255, 0.3)", // Semi-transparent blue
      },
      emphasis: {
        focus: "series",
        itemStyle: {
          color: "#0056b3",
        },
        lineStyle: {
          width: 3,
        },
      },
    },
    {
      name: "Active Users",
      type: "line",
      data: dashboardData.userGrowthData12Months.map(
        (item) => item.activeUsers
      ),
      smooth: true,
      lineStyle: {
        color: "#28a745",
        width: 2,
      },
      itemStyle: {
        color: "#28a745",
      },
      areaStyle: {
        color: "rgba(40, 167, 69, 0.3)", // Semi-transparent green
      },
      emphasis: {
        focus: "series",
        itemStyle: {
          color: "#1c7430",
        },
        lineStyle: {
          width: 3,
        },
      },
    },
  ],
};
