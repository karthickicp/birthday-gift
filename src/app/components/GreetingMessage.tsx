import React, { useCallback, useEffect, useState } from "react";
import "./styles.css"; // Make sure to create a CSS file with the necessary styles
import Image from "next/image";
import balloonImage from "@/assets/img/balloon-1.svg";
import birthdayBanner from "@/assets/img/birthday-banner.jpg";
import ReactConfetti from "react-confetti";

const GreetingMessage = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [viewport, setViewPort] = useState({ width, height });

  const updatedWidth = viewport.width - 30;

  const handleViewport = ()=> {
    setViewPort({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', handleViewport);
    return () => {
      window.removeEventListener('resize', handleViewport)
    }
  }, [])

  const ConfettiCallback = useCallback(() => {
    return <ReactConfetti width={updatedWidth} height={height} />;
  }, [viewport]); //eslint-disable-line

  return (
    <>
      <div>
        <ConfettiCallback />
      </div>

      <div className="greeting-message-container container relative">
        <div className="banner-img">
          <Image src={birthdayBanner} alt="banner-image" />
        </div>
        <div className="greeting-message">
          <div className="flex justify-center">
            <p className="text-lg font-bold greet-title text-lobster">
              Dear <span className="txt-pharmacy">Shalini</span>
              <span>,</span>
            </p>
          </div>
          <p>
            Happy Birthday! On this special day, I find myself compelled to
            express feelings that I&apos;ve kept hidden for far too long.
            It&apos;s been two beautiful years since I first stepped into our
            workplace, and on that very day, you left an indelible impression. I
            can vividly recall the vibrant yellow chudi, the red shaal, and that
            striking red lipstick that defined your elegance. Since that
            momentous day, a simple truth has lingered in my heart – that you
            are exceptionally beautiful. Despite numerous attempts, my fear has
            always stifled my words, preventing me from expressing what I feel.
            In the quiet moments, I&apos;ve desperately wanted to convey my
            admiration. I&apos;ve tried many times to talk, but my fear has been
            an unyielding adversary. Yet, here I am, breaking free from the
            constraints of silence on your special day, a day that holds
            profound significance to me. Happy birthday to you, the radiant soul
            who has become a source of inspiration and admiration in my life.
            May this day bring you joy and warmth, just as your presence has
            illuminated my world. Here&apos;s to you, and the hope that this
            year allows us the chance to connect in ways words have failed to
            convey.
          </p>
          <div className="signature-sec">
            <p className="txt-pharmacy">Warmest wishes,</p>
            <p>Karthick Raja</p>
          </div>

          <div className="balloon-attachment">
            <Image src={balloonImage} alt="balloon-image" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetingMessage;
