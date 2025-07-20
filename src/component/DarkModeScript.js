"use client";
import { useEffect } from "react";

export default function DarkModeScript() {
  useEffect(() => {
    const html = document.documentElement;
    const setDarkClass = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    };
    setDarkClass();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', setDarkClass);
    return () => media.removeEventListener('change', setDarkClass);
  }, []);
  return null;
} 