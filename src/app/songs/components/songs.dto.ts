export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  albumCover: string;
  src: string;
}

export const dummySongs: Song[] = [
  {
    id: 1,
    title: "Nzaza",
    artist: "Asake",
    duration: 200,
    albumCover:
      "https://trendybeatz.com/images/Asake-Mr-Money-With-The-Vibe-AlbumArtwork1.jpg",
    src: "https://cdn.trendybeatz.com/audio/Asake-Nzaza-(TrendyBeatz.com).mp3",
  },
  {
    id: 2,
    title: "HEHEHE",
    artist: "Rema",
    duration: 200,
    albumCover: "https://trendybeatz.com/images/Rema-HEHEHE-Artwork.jpg",
    src: "https://cdn.trendybeatz.com/audio/Rema-HEHEHE-(TrendyBeatz.com).mp3",
  },
  {
    id: 3,
    title: "Higher",
    artist: "Burna Boy",
    duration: 200,
    albumCover: "https://trendybeatz.com/images/Burna-Boy-Higher-Artwork.jpg",
    src: "https://files.vistanaij.com/wp-content/uploads/2024/06/Burna_Boy_-_Higher_Vistanaij.com.ng.mp3",
  },
  {
    id: 4,
    title: "Over Dem",
    artist: "Davido",
    duration: 200,
    albumCover:
      "https://trendybeatz.com/images/Davido-Timeless-AlbumArtwork1.jpg",
    src: "https://cdn.trendybeatz.com/audio/Davido-Over-Dem-(TrendyBeatz.com).mp3",
  },
  {
    id: 5,
    title: "For My Hand",
    artist: "Burna Boy / Ed-Sheeran",
    duration: 200,
    albumCover:
      "https://trendybeatz.com/images/Burna-Boy-Love-Damini-AlbumArtwork1.jpg",
    src: "https://cdn.trendybeatz.com/audio/Burna-Boy-Ft-Ed-Sheeran-For-My-Hand-New-Song-(TrendyBeatz.com).mp3",
  },
];
