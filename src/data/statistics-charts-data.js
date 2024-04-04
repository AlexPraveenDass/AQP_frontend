import { chartsConfig } from "@/configs";

// const websiteViewsChart = {
//   type: "bar",
//   height: 220,
//   series: [
//     {
//       name: "Views",
//       data: [50, 20, 10, 22, 50, 10, 40],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: "#388e3c",
//     plotOptions: {
//       bar: {
//         columnWidth: "16%",
//         borderRadius: 5,
//       },
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: ["M", "T", "W", "T", "F", "S", "S"],
//     },
//   },
// };

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Utente",
      data: [50, 40, 30, 30, 50, 80, 100, 90, 70],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

// const completedTaskChart = {
//   type: "line",
//   height: 220,
//   series: [
//     {
//       name: "utente",
//       data: [5, 4, 3, 3, 5, 8, 10, 9, 7],
//     },
//   ],
//   options: {
//     ...chartsConfig,
//     colors: ["#388e3c"],
//     stroke: {
//       lineCap: "round",
//     },
//     markers: {
//       size: 5,
//     },
//     xaxis: {
//       ...chartsConfig.xaxis,
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//   },
// };
// const completedTasksChart = {
//   ...completedTaskChart,
//   series: [
//     {
//       name: "Tasks",
//       data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//     },
//   ],
// };

export const statisticsChartsData = [
  // {
  //   color: "white",
  //   title: "Website View",
  //   description: "Last Campaign Performance",
  //   footer: "campaign sent 2 days ago",
  //   chart: websiteViewsChart,
  // },
  {
    color: "white",
    title: "Statistiche degli Utenti",
    chart: dailySalesChart,
  },
  // {
  //   color: "white",
  //   title: "Completed Tasks",
  //   description: "Last Campaign Performance",
  //   footer: "just updated",
  //   chart: completedTasksChart,
  // },
];

export default statisticsChartsData;
