import videoForests from "@/assets/video-forests.mp4";
import videoOceans from "@/assets/video-oceans.mp4";
import videoMountains from "@/assets/video-mountains.mp4";
import videoSunsets from "@/assets/video-sunsets.mp4";
import videoWildlife from "@/assets/video-wildlife.mp4";
import videoWeather from "@/assets/video-weather.mp4";
import natureForests from "@/assets/nature-forests.jpg";
import natureOceans from "@/assets/nature-oceans.jpg";
import natureMountains from "@/assets/nature-mountains.jpg";
import natureSunsets from "@/assets/nature-sunsets.jpg";
import natureWildlife from "@/assets/nature-wildlife.jpg";
import natureWeather from "@/assets/nature-weather.jpg";

export type VideoCategory = "Forests" | "Oceans" | "Mountains" | "Sunsets" | "Wildlife" | "Weather" | "Desert" | "Water";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  duration: string;
  thumbnail: string;
  video: string;
}

const colors: Record<VideoCategory, string> = {
  Forests: "142 60% 30%",
  Oceans: "200 70% 40%",
  Mountains: "220 20% 50%",
  Sunsets: "25 90% 55%",
  Wildlife: "80 50% 35%",
  Weather: "210 30% 60%",
  Desert: "35 80% 45%",
  Water: "190 90% 50%",
};

export const categoryImages: Record<VideoCategory, string> = {
  Forests: natureForests,
  Oceans: natureOceans,
  Mountains: natureMountains,
  Sunsets: natureSunsets,
  Wildlife: natureWildlife,
  Weather: natureWeather,
  Desert: natureSunsets,
  Water: natureOceans,
};

export const categoryVideos: Record<VideoCategory, string> = {
  Forests: videoForests,
  Oceans: videoOceans,
  Mountains: videoMountains,
  Sunsets: videoSunsets,
  Wildlife: videoWildlife,
  Weather: videoWeather,
  Desert: videoSunsets,
  Water: videoOceans,
};

export function getCategoryColor(cat: VideoCategory) {
  return colors[cat];
}

export const videos: VideoItem[] = [
  { id: "1", title: "Morning Forest Mist", category: "Forests", duration: "0:18", thumbnail: natureForests, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2001.mp4" },
  { id: "2", title: "Ocean Waves at Sunset", category: "Oceans", duration: "0:24", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2002.mp4" },
  { id: "3", title: "Mountain Peak Timelapse", category: "Mountains", duration: "0:30", thumbnail: natureMountains, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2003.mp4" },
  { id: "4", title: "Golden Hour Horizon", category: "Sunsets", duration: "0:15", thumbnail: natureSunsets, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2004.mp4" },
  { id: "5", title: "Eagle Soaring Above Valley", category: "Wildlife", duration: "0:22", thumbnail: natureWildlife, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2005.mp4" },
  { id: "6", title: "Thunderstorm Rolling In", category: "Weather", duration: "0:20", thumbnail: natureWeather, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2006.mp4" },
  { id: "7", title: "Water Flow", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2007.mp4" },
  { id: "8", title: "Ocean Waves", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2008.mp4" },
  { id: "9", title: "Waterfall", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2017.mp4" },
  { id: "10", title: "River Flow", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2010.mp4" },
  { id: "11", title: "Ocean Breeze", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2011.mp4" },
  { id: "12", title: "Forest Canopy", category: "Forests", duration: "0:20", thumbnail: natureForests, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2012.mp4" },
  { id: "13", title: "Forest Path", category: "Forests", duration: "0:20", thumbnail: natureForests, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2013.mp4" },
  { id: "14", title: "Forest Stream", category: "Forests", duration: "0:20", thumbnail: natureForests, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2014.mp4" },
  { id: "15", title: "Forest Light", category: "Forests", duration: "0:20", thumbnail: natureForests, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2015.mp4" },
  { id: "16", title: "Waterfall", category: "Water", duration: "0:20", thumbnail: natureOceans, video: "https://storage.googleapis.com/stock-footage-vids/stock%20footage%20vids/stock%20footage%20vids%20with%20tru%20watermark/Tru%20Stock%20Watermark%2016.mp4" },
];

export const categories: VideoCategory[] = ["Forests", "Oceans", "Mountains", "Sunsets", "Wildlife", "Weather", "Desert", "Water"];
