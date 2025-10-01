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
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#9AA496] to-[#D9DAD3] z-50">
      <div className="relative bg-[#F5F1EE] rounded-3xl shadow-2xl p-10 max-w-lg mx-auto text-center border-8 border-[#9AA496]">
        {/* Ornamen Atas */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#D9DAD3] rounded-full flex items-center justify-center shadow-md">
          <span className="text-2xl">💍</span>
        </div>

        <h2 className="text-lg font-medium text-gray-600 mt-6 mb-2 italic">
          Dengan Hormat,
        </h2>

        <p className="text-gray-600 mb-4">
          Kami mengundang <span className="font-bold">{guestName}</span>
          <br /> untuk menghadiri acara pernikahan kami.
        </p>

        <h1 className="text-3xl font-extrabold text-[#5E7672] mb-4 font-serif">
          Roman & Picisan
        </h1>

        <button
          onClick={onOpen}
          className="px-8 py-3 bg-gradient-to-r from-[#9AA496] to-[#D9DAD3] text-[#5E7672] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
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
          <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative text-[#2C4642] text-center bg-[#F5F2EC] overflow-hidden">
            {/* Ornamen Atas Kiri */}
            <div className="absolute top-0 left-0 w-48 h-48 opacity-60">
              <img
                src="/ornament-floral-top.svg"
                alt="ornamen floral"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Ornamen Bawah Kanan */}
            <div className="absolute bottom-0 right-0 w-56 h-56 opacity-60">
              <img
                src="/ornament-floral-bottom.svg"
                alt="ornamen floral"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Konten Tengah */}
            <div className="relative z-10 px-4">
              <p className="text-lg tracking-wide mb-4" data-aos="fade-up">
                The Wedding Of
              </p>
              <h1
                className="text-5xl font-bold mb-4 font-serif text-[#C47A7A]"
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
