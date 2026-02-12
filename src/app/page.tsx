"use client";

import { Suspense, useState, useCallback, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <Suspense>
      <Valentine />
    </Suspense>
  );
}

function Valentine() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "Someone";
  const toRaw = searchParams.get("to") || "You";
  const to = toRaw.charAt(0).toUpperCase() + toRaw.slice(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [maybePos, setMaybePos] = useState({ x: 0, y: 0 });
  const [noInitialized, setNoInitialized] = useState(false);
  const [maybeInitialized, setMaybeInitialized] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const runAway = useCallback(
    (
      setter: typeof setNoPos,
      setInitialized: typeof setNoInitialized,
      e?: React.TouchEvent | React.MouseEvent
    ) => {
      if (e) e.preventDefault();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const btnW = 180;
      const btnH = 65;
      const padding = 10;
      const newX = Math.random() * (vw - btnW - padding * 2) + padding;
      const newY = Math.random() * (vh - btnH - padding * 2) + padding;
      setter({ x: newX, y: newY });
      setInitialized(true);
    },
    []
  );

  // Initialize runaway button positions after mount
  useEffect(() => {
    if (!noInitialized) {
      runAway(setNoPos, setNoInitialized);
    }
    if (!maybeInitialized) {
      runAway(setMaybePos, setMaybeInitialized);
    }
  }, [noInitialized, maybeInitialized, runAway]);

  if (accepted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #ff69b4 0%, #ff1493 50%, #ff69b4 100%)",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            animation: "spin-heart 2s linear infinite",
          }}
        >
          💖
        </div>
        <h1
          style={{
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
            fontSize: "48px",
            color: "#ffff00",
            textShadow:
              "3px 3px 0 #ff0000, -1px -1px 0 #ff0000, 1px -1px 0 #ff0000, -1px 1px 0 #ff0000",
            margin: "20px 0",
          }}
        >
          YAAAAY!!! 💕💕💕
        </h1>
        <p
          style={{
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
            fontSize: "28px",
            color: "#ffffff",
            textShadow: "2px 2px #cc0066",
          }}
        >
          I knew you&apos;d say yes!!! 😘🥰💗
        </p>
        <div style={{ fontSize: "60px", marginTop: "30px" }}>
          💐🧸🍫💝💌
        </div>

        {/* Marquee */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#cc0066",
            borderTop: "3px solid #ff99cc",
            padding: "8px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              display: "inline-block",
              animation: "marquee 10s linear infinite",
              color: "#ffff00",
              fontSize: "16px",
              fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
            }}
          >
            💕💕💕 You just made {from.toUpperCase()} very happy!!! 💕💕💕 Happy
            Valentine&apos;s Day 2026!!! 💕💕💕
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #ff69b4 0%, #ff1493 50%, #ff69b4 100%)",
        position: "relative",
      }}
    >
      {/* Marquee bar */}
      <div
        style={{
          width: "100%",
          background: "#cc0066",
          borderBottom: "3px solid #ff99cc",
          padding: "8px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 15s linear infinite",
            color: "#ffff00",
            fontSize: "16px",
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          }}
        >
          💕💕💕 {to}, welcome to the MOST IMPORTANT page on the internet!!! 💕💕💕
          Please answer the question below!!! 💕💕💕
        </div>
      </div>

      {/* Decorative hearts */}
      <div
        style={{
          fontSize: "60px",
          marginTop: "40px",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        💝
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontSize: "clamp(32px, 6vw, 56px)",
          color: "#ffff00",
          textShadow:
            "3px 3px 0 #ff0000, -1px -1px 0 #ff0000, 1px -1px 0 #ff0000, -1px 1px 0 #ff0000",
          textAlign: "center",
          margin: "20px 20px 10px",
          lineHeight: 1.3,
        }}
      >
        {to}, will You Be My Valentine?
      </h1>

      {/* Blinking subtitle */}
      <p
        style={{
          fontSize: "20px",
          color: "#ffffff",
          textShadow: "2px 2px #cc0066",
          animation: "blink 1s step-end infinite",
          margin: "10px 0 40px",
        }}
      >
        *** Please choose wisely!!! ***
      </p>

      {/* Decorative divider */}
      <div
        style={{
          fontSize: "30px",
          letterSpacing: "10px",
          marginBottom: "30px",
          animation: "rainbow 3s linear infinite",
        }}
      >
        ~*~*~*~*~*~
      </div>

      {/* Yes button - stays put */}
      <button
        onClick={() => setAccepted(true)}
        style={{
          background: "linear-gradient(to bottom, #ff0000, #cc0000)",
          color: "#ffff00",
          border: "4px outset #ff6666",
          padding: "18px 50px",
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
          textShadow: "2px 2px #990000",
          boxShadow: "4px 4px 0px #660000",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        💖 YES!!! 💖
      </button>

      {/* No button - runs away */}
      <button
        onMouseEnter={(e) => runAway(setNoPos, setNoInitialized, e)}
        onTouchStart={(e) => runAway(setNoPos, setNoInitialized, e)}
        onClick={(e) => e.preventDefault()}
        style={{
          position: "fixed",
          left: noPos.x,
          top: noPos.y,
          background: "linear-gradient(to bottom, #c0c0c0, #808080)",
          color: "#333333",
          border: "3px outset #d0d0d0",
          padding: "15px 40px",
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
          textShadow: "1px 1px #ffffff",
          boxShadow: "3px 3px 0px #404040",
          userSelect: "none",
          opacity: noInitialized ? 1 : 0,
          zIndex: 10,
        }}
      >
        No
      </button>

      {/* Maybe button - also runs away */}
      <button
        onMouseEnter={(e) => runAway(setMaybePos, setMaybeInitialized, e)}
        onTouchStart={(e) => runAway(setMaybePos, setMaybeInitialized, e)}
        onClick={(e) => e.preventDefault()}
        style={{
          position: "fixed",
          left: maybePos.x,
          top: maybePos.y,
          background: "linear-gradient(to bottom, #c0c0c0, #808080)",
          color: "#333333",
          border: "3px outset #d0d0d0",
          padding: "15px 40px",
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
          textShadow: "1px 1px #ffffff",
          boxShadow: "3px 3px 0px #404040",
          userSelect: "none",
          opacity: maybeInitialized ? 1 : 0,
          zIndex: 10,
        }}
      >
        Maybe...
      </button>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          padding: "20px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            background: "#000000",
            color: "#00ff00",
            fontFamily: '"Courier New", monospace',
            padding: "4px 14px",
            border: "2px inset #333333",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          Visitors: 000001
        </div>
        <br />
        <span style={{ color: "#ffddee" }}>
          Best viewed on COMPUTER with a mouse for MAXIMUM FUN!!!
        </span>
        <br />
        <span style={{ fontSize: "16px" }}>🚧</span>{" "}
        <span style={{ color: "#ffff00" }}>(LOVE) Under Construction</span>{" "}
        <span style={{ fontSize: "16px" }}>🚧</span>
      </div>

      {/* Bottom marquee */}
      <div
        style={{
          width: "100%",
          background: "#cc0066",
          borderTop: "3px solid #ff99cc",
          padding: "8px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 12s linear infinite",
            color: "#ffff00",
            fontSize: "16px",
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          }}
        >
          💌💌💌 Made with ❤️ and HTML by your favourite {from.toUpperCase()} 💌💌💌 Sign my guestbook (aka my HEART)!!! 💌💌💌
        </div>
      </div>
    </div>
  );
}
