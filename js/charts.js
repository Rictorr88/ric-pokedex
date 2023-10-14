const ctx = document.getElementById("stats").getContext("2d");

export function createChart(stats) {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Hp",
        "Atack",
        "Defense",
        ["Special", "Attack"],
        ["Special", "Defense"],
        "Speed",
      ],
      datasets: [
        {
          data: stats,
          backgroundColor: "rgba(255, 170, 0, 0.4)",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: "gray",
          },
          pointLabels: {
            color: "orange",
          },
          angleLines: {
            color: "gray",
          },
        },
      },
    },
  });
}
