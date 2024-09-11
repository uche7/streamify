// Define the columns
export interface Column {
  id: "songName" | "artist" | "dateStreamed" | "streamCount" | "userId";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

// DataRow
export type DataRow = {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
};
