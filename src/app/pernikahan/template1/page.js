"use client";

import { useEffect, useState, useRef } from "react";
import Countdown from "react-countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPause, FaPlay } from "react-icons/fa";

// === Cover Undangan (Amplop) ===
function CoverScreen({ onOpen }) {
  const [guestName, setGuestName] = useState(null); // null awal

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(decodeURIComponent(name));
    } else {
      setGuestName("Tamu Undangan");
    }
  }, []);

  // Jangan render sampai guestName sudah diset
  if (guestName === null) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center border-4 border-pink-300">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Dengan Hormat,
        </h2>
        <p className="text-gray-600 mb-4">
          Kami mengundang <span className="font-bold">{guestName}</span>
          <br /> pada acara pernikahan kami.
        </p>
        <h1 className="text-2xl font-bold text-pink-600 mb-6">
          Roman & Picisan
        </h1>
        <button
          onClick={onOpen}
          className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}

export default function Template1() {
  const [opened, setOpened] = useState(false);

  // === Musik Background ===
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOpen = () => {
    setOpened(true);

    // Mainkan musik saat undangan dibuka
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay diblokir:", err);
          setIsPlaying(false);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const date = new Date("2025-12-20T09:00:00");

  return (
    <>
      {!opened && <CoverScreen onOpen={handleOpen} />}
      {opened && (
        <main className="w-full overflow-x-hidden">
          {/* 🎶 Musik Background */}
          <audio ref={audioRef} loop>
            <source src="/music/wedding-song.mp3" type="audio/mpeg" />
            Browser Anda tidak mendukung audio
          </audio>

          {/* Tombol Play / Pause */}
          <button
            onClick={togglePlay}
            className="fixed bottom-6 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition z-50"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* SECTION 1: Hero */}
          <section
            className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative text-white text-center"
            style={{ backgroundImage: "url('/bg-wedding.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 px-4">
              <p className="text-lg tracking-wide mb-4" data-aos="fade-up">
                The Wedding Of
              </p>
              <h1
                className="text-5xl font-bold mb-4 font-serif"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Roman & Picisan
              </h1>
              <p
                className="text-xl tracking-widest"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                23 | September | 2025
              </p>
            </div>
          </section>

          {/* SECTION 2: Tanggal & Countdown */}
          <section className="py-16 bg-white text-center">
            <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
              Save The Date
            </h2>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
              Sabtu, 20 Desember 2025 • Balikpapan
            </p>
            <div
              data-aos="zoom-in"
              className="text-xl font-bold text-pink-600 mb-4"
            >
              <Countdown date={date} />
            </div>
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Simpan ke Kalender
            </a>
          </section>

          {/* SECTION 3: Gallery */}
          <section className="py-10 bg-gray-50">
            <h2
              className="text-center text-2xl font-semibold mb-6"
              data-aos="fade-up"
            >
              Gallery
            </h2>
            <div className="columns-2 gap-2 px-4">
              {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="gallery"
                    className="mb-2 rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  />
                )
              )}
            </div>
          </section>

          {/* SECTION 4: Stories */}
          <section className="py-16 bg-white px-6">
            <h2
              className="text-center text-2xl font-semibold mb-6"
              data-aos="fade-up"
            >
              Our Story
            </h2>
            <div className="space-y-6">
              <div data-aos="fade-right">
                <h3 className="font-bold">Pertama Bertemu</h3>
                <p className="text-gray-600">
                  Kami bertemu pertama kali di kampus dan sejak itu berteman
                  baik.
                </p>
              </div>
              <div data-aos="fade-left">
                <h3 className="font-bold">Perjalanan Bersama</h3>
                <p className="text-gray-600">
                  Banyak momen indah yang kami lalui bersama hingga hari ini.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: Reservasi */}
          <section className="py-16 bg-gray-50 px-6">
            <h2
              className="text-center text-2xl font-semibold mb-6"
              data-aos="fade-up"
            >
              Konfirmasi Kehadiran
            </h2>
            <form
              action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
              method="POST"
              className="space-y-4 max-w-md mx-auto"
              data-aos="fade-up"
            >
              <input
                type="text"
                name="entry.123456"
                placeholder="Nama"
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="entry.654321"
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Pilih Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg"
              >
                Kirim
              </button>
            </form>
          </section>

          {/* SECTION 6: Ucapan */}
          <section className="py-16 bg-white px-6">
            <h2
              className="text-center text-2xl font-semibold mb-6"
              data-aos="fade-up"
            >
              Ucapan & Doa
            </h2>
            <form className="space-y-4 max-w-md mx-auto" data-aos="fade-up">
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Ucapan"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg"
              >
                Kirim
              </button>
            </form>

            {/* List ucapan scroll horizontal */}
            <div
              className="mt-8 overflow-x-auto flex space-x-4 pb-4"
              data-aos="fade-up"
            >
              {["Selamat ya!", "Semoga bahagia", "Langgeng selalu"].map(
                (msg, i) => (
                  <div
                    key={i}
                    className="min-w-[200px] bg-gray-100 p-4 rounded shadow"
                  >
                    {msg}
                  </div>
                )
              )}
            </div>
          </section>
        </main>
      )}
    </>
  );
}
