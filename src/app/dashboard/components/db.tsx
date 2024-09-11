// Data Transter Object (DTO)

export const dashboardData = {
  metrics: {
    totalUsers: 100000,
    activeUsers: 30000,
    totalStreams: 5000000,
    revenue: 150000,
    topArtist: "HIM B$V",
  },

  userGrowthData12Months: [
    { date: "2023-09-01", totalUsers: 9500, activeUsers: 5400 },
    { date: "2023-10-01", totalUsers: 9600, activeUsers: 5500 },
    { date: "2023-11-01", totalUsers: 9650, activeUsers: 5550 },
    { date: "2023-12-01", totalUsers: 9700, activeUsers: 2900 },
    { date: "2024-01-01", totalUsers: 9800, activeUsers: 2600 },
    { date: "2024-02-01", totalUsers: 9100, activeUsers: 3700 },
    { date: "2024-03-01", totalUsers: 10000, activeUsers: 5800 },
    { date: "2024-04-01", totalUsers: 10200, activeUsers: 5900 },
    { date: "2024-05-01", totalUsers: 10150, activeUsers: 6200 },
    { date: "2024-06-01", totalUsers: 10300, activeUsers: 6100 },
    { date: "2024-07-01", totalUsers: 10500, activeUsers: 6400 },
    { date: "2024-08-01", totalUsers: 10450, activeUsers: 6250 },
    { date: "2024-09-01", totalUsers: 10700, activeUsers: 6500 },
    { date: "2024-10-01", totalUsers: 10850, activeUsers: 6600 },
    { date: "2024-11-01", totalUsers: 10950, activeUsers: 6700 },
    { date: "2024-12-01", totalUsers: 11000, activeUsers: 6800 },
  ],

  revenueData30Days: [
    { value: 40000, name: "Subscriptions" },
    { value: 25000, name: "Ads" },
    { value: 5000, name: "Other" },
  ],

  topStreamedSongs30Days: [
    { song: "Song A", streams: 7000 },
    { song: "Song B", streams: 6000 },
    { song: "Song C", streams: 5500 },
    { song: "Song D", streams: 5000 },
    { song: "Song E", streams: 4800 },
  ],

  recentStreams30Days: [
    {
      songName: "Song A",
      artist: "Artist X",
      dateStreamed: "2024-08-30",
      streamCount: 120,
      userId: "User001",
    },
    {
      songName: "Song B",
      artist: "Artist Y",
      dateStreamed: "2024-08-29",
      streamCount: 100,
      userId: "User002",
    },
    {
      songName: "Song C",
      artist: "Artist Z",
      dateStreamed: "2024-08-28",
      streamCount: 90,
      userId: "User003",
    },
    {
      songName: "Song D",
      artist: "Artist X",
      dateStreamed: "2024-08-27",
      streamCount: 80,
      userId: "User004",
    },
    {
      songName: "Song E",
      artist: "Artist Y",
      dateStreamed: "2024-08-26",
      streamCount: 75,
      userId: "User005",
    },
    {
      songName: "Song f",
      artist: "Artist X",
      dateStreamed: "2024-08-25",
      streamCount: 110,
      userId: "User006",
    },
    {
      songName: "Song g",
      artist: "Artist Z",
      dateStreamed: "2024-08-24",
      streamCount: 95,
      userId: "User007",
    },
    {
      songName: "Song h",
      artist: "Artist X",
      dateStreamed: "2024-08-23",
      streamCount: 85,
      userId: "User008",
    },
    {
      songName: "Song i",
      artist: "Artist Y",
      dateStreamed: "2024-08-22",
      streamCount: 105,
      userId: "User009",
    },
  ],
};
