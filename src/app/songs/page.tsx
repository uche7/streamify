"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dummySongs, Song } from "./components/songs.dto";
import Rema from "@/assets/images/songs/Remy.webp";
import PlayArrow from "@/assets/images/songs/play-icon.svg";
import Pause from "@/assets/images/songs/pause-icon.svg";
import FilledHeartIcon from "@/assets/images/songs/filled-heart.svg";
import PreviousIcon from "@/assets/images/songs/prev-icon.svg";
import NextIcon from "@/assets/images/songs/play-arrow.svg";
import MusicIcon from "@/assets/images/dashboard/music.svg";

import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

/** Songs */
export default function Songs() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [songDuration, setSongDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const Router = useRouter();

  // Play song handler
  const handlePlay = (song: Song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(song.src);
    audioRef.current = audio;
    setCurrentSong(song);
    setIsPlaying(true);
    setSongDuration(song.duration);

    if (currentTime > 0) {
      audio.currentTime = currentTime;
    }

    audio.play();
    audio.ontimeupdate = () => {
      setProgress(audio.currentTime);
    };
    audio.onended = handleNext;
  };

  // Pause song handler
  const handlePause = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Next song handler
  const handleNext = () => {
    const currentIndex = dummySongs.findIndex(
      (s) => s.src === currentSong?.src
    );
    if (currentIndex < dummySongs.length - 1) {
      handlePlay(dummySongs[currentIndex + 1]);
    } else {
      handlePlay(dummySongs[0]);
    }
  };

  // Previous song handler
  const handlePrevious = () => {
    const currentIndex = dummySongs.findIndex(
      (s) => s.src === currentSong?.src
    );
    if (currentIndex > 0) {
      handlePlay(dummySongs[currentIndex - 1]);
    } else {
      handlePlay(dummySongs[dummySongs.length - 1]);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audioRef.current) return;

    // Get the position of the click within the progress bar
    const progressBarWidth = e.currentTarget.offsetWidth;
    const clickPositionX = e.nativeEvent.offsetX;
    const newProgress = (clickPositionX / progressBarWidth) * songDuration;

    // Set the audio's current time to the new progress
    audioRef.current.currentTime = newProgress;
    setProgress(newProgress);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying && audioRef.current) {
      interval = setInterval(() => {
        setProgress(audioRef.current!.currentTime);
      }, 1000);
    } else if (!isPlaying && progress !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [isPlaying, progress]);

  return (
    <div className="min-h-screen text-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 p-4 lg:p-8">
          {/* Hero Section */}
          <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden mb-6">
            <Image src={Rema} alt="Artist" layout="fill" objectFit="cover" />
            <div className="absolute bottom-4 left-4">
              <Typography
                variant="h3"
                className="font-bold text-white MobileScreen:text-[26px]"
              >
                Top 50 Songs
              </Typography>
              <Typography variant="subtitle1" className="text-gray-300">
                Recently Played
              </Typography>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="mb-4 flex justify-between items-center">
            <Typography variant="h6" className="font-bold">
              Recently Played
            </Typography>
            <button className="text-[#f472b6]">See All</button>
          </div>

          <div className="flex space-x-4 overflow-x-auto hide-scroll-bar w-full px-4">
            {dummySongs.map((song, index: number) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg flex-shrink-0 w-60 sm:w-72 md:w-48 lg:w-48"
              >
                <div
                  className="h-32 w-full bg-cover mb-4 rounded-lg"
                  style={{ backgroundImage: `url(${song.albumCover})` }}
                ></div>
                <Typography
                  variant="body1"
                  className="font-semibold text-white"
                >
                  {song.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {song.artist}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* In Queue Section */}
        <div className="w-full  bg-streamifty-grey p-2">
          <div
            onClick={() => Router.push("/")}
            className="relative flex gap-2 p-[20px] cursor-pointer"
          >
            <h3 className="font-streamifyCabinetGrotesk font-[600] text-[26px] text-streamifty-yellow">
              St<span className="text-pink-400">re</span>a
              <span className="text-pink-400">mi</span>
              <span className="text-purple-800">fy</span>
            </h3>
            <Image src={MusicIcon} className="text-white" alt={"Music FIcon"} />
          </div>
          <Typography variant="h6" className="font-bold ml-2 mb-4">
            In Queue
          </Typography>
          <List>
            {dummySongs.map((song, index) => (
              <ListItem
                key={index}
                className="flex justify-between gap-2 items-center cursor-pointer"
                onClick={() => handlePlay(song)}
              >
                <Image
                  className="rounded"
                  width={40}
                  height={40}
                  src={song.albumCover}
                  alt={"Cover"}
                />
                <div className="flex items-center">
                  <ListItemText
                    primary={song.title}
                    secondary={song.artist}
                    primaryTypographyProps={{
                      className: "text-white text-[12px]",
                    }}
                    secondaryTypographyProps={{
                      className: "text-gray-400 text-[12px]",
                    }}
                  />
                </div>
                <Typography variant="body2" className="text-gray-400 ml-4">
                  {new Date(song.duration * 1000).toISOString().substr(14, 5)}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* Music Player */}
      {/* Music Player */}
      {currentSong && (
        <div className="bg-streamifty-grey fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between gap-4 lg:gap-6 lg:px-8">
          {/* Left Section: Song Info */}
          <div className="flex items-center space-x-4 flex-shrink-0 w-[150px] lg:w-[200px]">
            <Image
              src={currentSong.albumCover}
              alt="cover"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-md"
              objectFit="cover"
            />
            <div className="truncate">
              <Typography variant="body1" className="text-white truncate">
                {currentSong?.title || "Unknown Song"}
              </Typography>
              <Typography variant="body2" className="text-gray-400 truncate">
                {currentSong?.artist || "Unknown Artist"}
              </Typography>
            </div>
          </div>

          {/* Middle Section: Music Controls */}
          <div className="flex items-center space-x-4 flex-grow justify-center">
            <IconButton onClick={handlePrevious}>
              <Image src={PreviousIcon} alt="Previous" width={30} height={30} />
            </IconButton>
            {isPlaying ? (
              <IconButton onClick={handlePause}>
                <Image src={Pause} alt="Pause" width={30} height={30} />
              </IconButton>
            ) : (
              <IconButton onClick={() => handlePlay(currentSong!)}>
                <Image src={PlayArrow} alt="Play" width={30} height={30} />
              </IconButton>
            )}
            <IconButton onClick={handleNext}>
              <Image src={NextIcon} alt="Next" width={30} height={30} />
            </IconButton>
          </div>

          {/* Right Section: Progress Bar */}
          <div className="flex items-center space-x-2 lg:space-x-4 flex-grow justify-center lg:mx-6">
            {/* Current Time */}
            <Typography variant="body2" className="text-gray-400">
              {new Date(progress * 1000).toISOString().substr(14, 5)}
            </Typography>

            {/* Music Progress Bar */}
            <div
              className="relative flex-1 h-2 bg-gray-500 rounded-full overflow-hidden cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="absolute top-0 left-0 h-full bg-[#f472b6]"
                style={{
                  width: `${(progress / songDuration) * 100}%`,
                }}
              ></div>
            </div>

            {/* Total Duration */}
            <Typography variant="body2" className="text-gray-400">
              {new Date(songDuration * 1000).toISOString().substr(14, 5)}
            </Typography>
          </div>

          {/* Like Button */}
          <IconButton>
            <Image src={FilledHeartIcon} alt="Like" width={30} height={30} />
          </IconButton>
        </div>
      )}
    </div>
  );
}
