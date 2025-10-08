"use client";

import { useEffect, useState, useRef } from "react";
import Countdown from "react-countdown";
import { FaPlay, FaPause } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// === COVER SCREEN ===
function CoverScreen({ onOpen }) {
  const [guestName, setGuestName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    setGuestName(name ? decodeURIComponent(name) : "Tamu Undangan");
  }, []);

  if (guestName === null) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#E7E3DF] to-[#F5F5F4] z-50">
      <div className="relative bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl p-10 text-center max-w-md mx-auto">
        <h2 className="text-gray-500 mb-2 italic">Kepada Yth.</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          {guestName}
          <br />
          <span className="text-gray-500 text-sm">di tempat</span>
        </p>

        <h1 className="text-3xl font-serif font-semibold text-[#4A4A48] mb-6">
          Rama & Aluna
        </h1>

        <button
          onClick={onOpen}
          className="px-8 py-3 bg-[#4A4A48] text-white rounded-full shadow hover:bg-[#3A3A38] transition"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}

export default function TemplateUndangan() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const date = new Date("2025-12-20T09:00:00");

  return (
    <>
      {!opened && <CoverScreen onOpen={handleOpen} />}

      {opened && (
        <main className="w-full overflow-x-hidden bg-[#F9F9F7] text-[#3A3A38]">
          {/* 🎵 Background Music */}
          <audio ref={audioRef} loop>
            <source
              src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_ef05d13b9e.mp3?filename=wedding-inspirational-background-music-10911.mp3"
              type="audio/mpeg"
            />
          </audio>

          <button
            onClick={togglePlay}
            className="fixed bottom-6 right-6 bg-[#4A4A48] text-white p-4 rounded-full shadow-lg hover:bg-[#3A3A38] transition z-50"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* HERO */}
          <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
            <img
              src="https://images.unsplash.com/photo-1618220380875-28a4b4d7fd9c?auto=format&fit=crop&w=800&q=80"
              alt="floral background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <p className="text-lg mb-2 font-light" data-aos="fade-up">
                The Wedding of
              </p>
              <h1
                className="text-5xl font-serif font-bold mb-4 text-[#4A4A48]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Rama & Aluna
              </h1>
              <p
                className="text-xl tracking-widest"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                20 | Desember | 2025
              </p>
            </div>
          </section>

          {/* SAVE THE DATE */}
          <section className="py-20 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
              Save The Date
            </h2>
            <p className="text-gray-600 mb-4" data-aos="fade-up">
              Sabtu, 20 Desember 2025 • Balikpapan
            </p>
            <div
              className="text-2xl font-bold text-[#4A4A48] mb-6"
              data-aos="zoom-in"
            >
              <Countdown date={date} />
            </div>
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#4A4A48] text-white rounded-full hover:bg-[#2E2E2C] transition"
            >
              Simpan ke Kalender
            </a>
          </section>

          {/* GALLERY */}
          <section className="py-16 bg-[#F9F9F7]">
            <h2
              className="text-center text-2xl font-semibold mb-10"
              data-aos="fade-up"
            >
              Our Moments
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4 md:px-20">
              {[
                "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1545156521-77bd85671d47?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="gallery"
                  className="rounded-xl shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                />
              ))}
            </div>
          </section>

          {/* STORY */}
          <section className="py-20 bg-white px-6 md:px-20">
            <h2
              className="text-center text-2xl font-semibold mb-10"
              data-aos="fade-up"
            >
              Our Story
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              <p data-aos="fade-right">
                Kami pertama kali bertemu di sebuah kafe kecil di kota ini —
                sebuah pertemuan sederhana yang menjadi awal cerita panjang
                penuh tawa dan perjalanan bersama.
              </p>
              <p data-aos="fade-left">
                Hari demi hari berlalu, hingga akhirnya kami memutuskan untuk
                melangkah menuju babak baru yang lebih indah.
              </p>
            </div>
          </section>

          {/* RSVP */}
          <section className="py-20 bg-[#F9F9F7] px-6">
            <h2
              className="text-center text-2xl font-semibold mb-8"
              data-aos="fade-up"
            >
              Konfirmasi Kehadiran
            </h2>
            <form
              className="max-w-md mx-auto space-y-4"
              data-aos="fade-up"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Terima kasih atas konfirmasinya!");
                e.target.reset();
              }}
            >
              <input
                type="text"
                placeholder="Nama"
                className="w-full border rounded-lg p-3"
                required
              />
              <select
                className="w-full border rounded-lg p-3"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih Kehadiran
                </option>
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#4A4A48] text-white py-3 rounded-full hover:bg-[#3A3A38] transition"
              >
                Kirim
              </button>
            </form>
          </section>
        </main>
      )}
    </>
  );
}
