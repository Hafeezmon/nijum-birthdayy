import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #ffc1cc, #ff9aad, #ffc1cc)",
      }}
    >
      {/* Background Music */}
      <audio autoPlay loop>
        <source
          src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
          type="audio/mpeg"
        />
      </audio>

      <h1
        style={{
          fontSize: "3rem",
          color: "#d6336c",
          marginBottom: "20px",
        }}
      >
        Happy Birthday My Nijumieee 💖
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          color: "#c72c48",
          maxWidth: "600px",
          marginBottom: "20px",
        }}
      >
        Nijumieee, you are the softest, sweetest, and most beautiful part of my
        life. This little website is made only for you 🌸
      </p>

      <button
        onClick={() => setShowMessage(true)}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          borderRadius: "20px",
          cursor: "pointer",
          backgroundColor: "#ff6699",
          color: "#fff",
          border: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        Click for a surprise 🎁
      </button>

      {showMessage && (
        <div
          style={{
            marginTop: "30px",
            maxWidth: "600px",
            color: "#c72c48",
            lineHeight: "1.5",
            fontSize: "1rem",
          }}
        >
          My Nijumieee ❤️,
          <br />
          The day I met you, everything in my life changed. The world became
          softer, brighter, and more beautiful because you were in it. Before
          you, I was just existing… but with you, I started living.
          <br />
          <br />
          Your smile is my favorite sunrise, your voice is my peace, and your
          love is the safest place I have ever known. Even on my worst days,
          just thinking about you makes my heart feel calm and full.
          <br />
          <br />
          I am so grateful for every moment with you — every laugh, every
          late-night talk, every little fight that made us stronger, and every
          memory that only belongs to us.
          <br />
          <br />
          You are not just my girlfriend, you are my comfort, my happiness, my
          home, and my biggest blessing. Loving you is the easiest and most
          beautiful thing I have ever done.
          <br />
          <br />
          I promise to stand with you, protect your heart, make you smile when
          you feel low, and love you louder with every passing year.
          <br />
          <br />
          Happy Birthday to the most precious girl in my universe. I don’t need
          the whole world — I just need you.
          <br />
          <br />
          Forever yours,
          <br />
          Your Hafeez
        </div>
      )}

      {/* Photo Gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "10px",
          marginTop: "30px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <img
            key={item}
            src={`https://via.placeholder.com/150?text=Photo+${item}`}
            alt="memory"
            style={{
              borderRadius: "15px",
              width: "100%",
              height: "auto",
            }}
          />
        ))}
      </div>

      <div style={{ marginTop: "30px", color: "#d6336c", fontSize: "0.9rem" }}>
        Made with love 💕 just for you
      </div>
    </div>
  );
}
