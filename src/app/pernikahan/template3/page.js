'use client'
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WeddingInvite() {
  // === Data utama (ubah sesuai kebutuhan) ===
  const brideName = "Alya";
  const groomName = "Rafi";
  const weddingDate = "Sabtu, 12 Juli 2025";
  const weddingLocation = "The Harmony Garden, Balikpapan";
  const receptionTime = "Pukul 10.00 WITA - Selesai";
  const musicUrl =
    "https://cdn.pixabay.com/download/audio/2023/03/08/audio_6f4a64a5a2.mp3?filename=beautiful-day-138864.mp3";

  // === State Musik ===
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // === Init AOS + Musik ===
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    return () => audioRef.current.pause();
  }, []);

  return (
    <main className="font-sans text-[#2C2C2C] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[#f9f8f6]">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1500&q=80"
          alt="floral background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f9f8f6]/90"></div>

        <div className="relative z-10" data-aos="fade-up">
          <p className="text-gray-500 uppercase tracking-widest mb-2">The Wedding Of</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-3">{brideName} & {groomName}</h1>
          <p className="text-gray-600 mb-4">{weddingDate}</p>
          <button
            onClick={toggleMusic}
            className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full text-sm tracking-wide hover:bg-[#444] transition"
          >
            {isPlaying ? "Matikan Musik" : "Putar Musik"}
          </button>
        </div>
      </section>

      {/* DOA / AYAT */}
      <section className="bg-[#F3F2EE] py-24 px-6 text-center" data-aos="fade-up">
        <p className="text-lg italic text-gray-700 max-w-2xl mx-auto leading-relaxed">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya.”
          <br />
          <span className="text-sm mt-2 block">(QS. Ar-Rum: 21)</span>
        </p>
      </section>

      {/* DETAIL ACARA */}
      <section className="bg-white py-20 text-center relative">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-10"
        ></div>
        <div className="relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-serif mb-8">Rangkaian Acara</h2>
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm p-8">
            <p className="font-semibold mb-2 text-[#2C2C2C]">{weddingDate}</p>
            <p className="text-gray-600">{receptionTime}</p>
            <p className="text-gray-600 mt-2">{weddingLocation}</p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 bg-[#ECEBE7] text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-serif mb-6">Lokasi Acara</h2>
        <p className="text-gray-600 mb-4">{weddingLocation}</p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.769189743133!2d116.835!3d-1.265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTQuMCJTIDExNsKwNTAnMDYuMCJF!5e0!3m2!1sen!2sid!4v1679312552494!5m2!1sen!2sid"
          className="w-full max-w-2xl h-64 mx-auto rounded-xl shadow-md border border-gray-200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* PENUTUP */}
      <section className="bg-[#2C2C2C] text-white py-20 text-center" data-aos="fade-up">
        <p className="text-lg mb-3">Dengan penuh rasa syukur, kami memohon doa restu agar perjalanan kami diberkahi oleh Allah SWT.</p>
        <h2 className="text-4xl font-serif mb-2">{brideName} & {groomName}</h2>
        <p className="text-sm tracking-widest text-gray-400">#AlyaRafiWedding</p>
      </section>

      <footer className="bg-[#1a1a1a] text-gray-400 text-center text-xs py-6">
        © {new Date().getFullYear()} {brideName} & {groomName}. All Rights Reserved.
      </footer>
    </main>
  );
}
