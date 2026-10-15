import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, MapPin, Music, Mail, Phone, Send } from 'lucide-react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    // Set loading to false after a short delay to allow for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const weddingDate = new Date('November 7, 2026 16:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      // Check if wedding date has passed
      if (distance < 0) {
        // Wedding day has arrived/passed
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setCountdownFinished(true);
      } else {
        // Normal countdown calculation
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    };

    // Initial update
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleGetDirectionsNikkah = () => {
    const latitude = 11.4195833;
    const longitude = 76.0186111;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
  };

  const handleSendWishes = () => {
    window.location.href = "mailto:rasalmail99@gmail.com?subject=Wedding Wishes for Rasal and Fidha";
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-amber-50">
        <div className="text-center">
          <Heart className="animate-pulse mx-auto text-red-800" size={50} />
          <p className="mt-4 text-2xl font-serif text-red-900 italic">With love...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-serif text-gray-800 bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1524777313293-86d2ab467344?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {countdownFinished && (
          <div className="absolute inset-0 overflow-hidden">
            {/* Falling hearts animation for wedding day */}
            <div className="falling-hearts">
              <style jsx>{`
                @keyframes fall {
                  0% {
                    opacity: 0;
                    transform: translateY(-20px) rotate(0deg);
                  }
                  10% {
                    opacity: 1;
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(100vh) rotate(360deg);
                  }
                }
                
                @keyframes sway {
                  0%, 100% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(30px);
                  }
                }
                
                .heart {
                  position: absolute;
                  color: rgba(255, 255, 255, 0.6);
                  animation: fall linear infinite, sway ease-in-out infinite alternate;
                  z-index: 1;
                }
              `}</style>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="heart"
                  style={{
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 20 + 10}px`,
                    animationDuration: `${Math.random() * 5 + 5}s, ${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                >
                  ♥
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-4 animate-fade-in italic tracking-wide text-red-100">
            We are getting married 
            <span className="block mt-1 arabic-text font-normal" style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif", fontSize: "0.9rem" }}>
              إن شاء الله
            </span>
          </p>
          {/* Mobile-friendly name display */}
          <style jsx>{`
            @media (max-width: 768px) {
              .mobile-names {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              
              .mobile-names .name {
                display: block;
                font-size: 3rem;
                line-height: 1;
              }
              
              .mobile-names .and {
                font-size: 1.8rem;
                margin: 0.3rem 0;
                opacity: 0.9;
              }
              
              .desktop-names {
                display: none;
              }
            }
            
            @media (min-width: 769px) {
              .mobile-names {
                display: none;
              }
            }
            
            @keyframes heartbeat {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            
            .celebration-message {
              animation: heartbeat 1.5s infinite ease-in-out;
            }
          `}</style>
          
          {/* Desktop names */}
          <h1 className="desktop-names text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wider">
            Rasal <span className="inline-block mx-2 font-serif italic text-red-200">&</span> Fidha
          </h1>
          
          {/* Mobile names */}
          <div className="mobile-names mb-8">
            <span className="name font-light tracking-wider">Rasal</span>
            <span className="and font-serif italic text-red-200">&</span>
            <span className="name font-light tracking-wider">Fidha</span>
          </div>
          <div className="h-px w-40 bg-red-200 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl tracking-wide">November 7, 2026</p>
          
          {!countdownFinished ? (
            <div className="mt-16 grid grid-cols-4 gap-6 max-w-lg mx-auto">
              <div className="text-center bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
                <div className="text-2xl md:text-4xl font-light">{days}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-red-100">Days</div>
              </div>
              <div className="text-center bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
                <div className="text-2xl md:text-4xl font-light">{hours}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-red-100">Hours</div>
              </div>
              <div className="text-center bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
                <div className="text-2xl md:text-4xl font-light">{minutes}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-red-100">Mins</div>
              </div>
              <div className="text-center bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
                <div className="text-2xl md:text-4xl font-light">{seconds}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-red-100">Secs</div>
              </div>
            </div>
          ) : (
            <div className="mt-16 celebration-message">
              <div className="text-center p-6 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20">
                <Heart className="mx-auto mb-4 text-red-200" size={40} />
                <h2 className="text-2xl md:text-3xl font-light text-white">Today is our Wedding Day!</h2>
                <p className="mt-3 text-red-100">We are so excited to share this special day with you!</p>
              </div>
            </div>
          )}
          
          <div className="mt-8 hidden md:block">
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <a href="#details" className="animate-bounce inline-block">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Event Details Section - Split Design with Directions Buttons */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center px-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-light mb-2 text-gray-800">Function Details</h2>
            <p className="text-base text-gray-600 italic mb-4">Join us for our special day</p>
            <div className="h-px w-24 bg-red-300 mx-auto"></div>
          </div>
          
          <div className="flex justify-center px-4">
            <div className="w-full max-w-lg bg-red-50 px-6 md:px-12 py-16 flex flex-col items-center">
              <div className="w-fit max-w-full mx-auto md:w-full md:max-w-md text-left md:text-center">
                <div className="flex items-center justify-start md:justify-center mb-6">
                  <Calendar className="text-red-700 mr-3" size={24} />
                  <h3 className="text-2xl font-light text-gray-800">Nikkah</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center justify-start md:justify-center gap-2 text-sm md:text-base">
                    <Calendar size={14} className="text-red-600 shrink-0 w-[14px]" />
                    <span>November 7, 2026</span>
                  </p>
                  <p className="flex items-center justify-start md:justify-center gap-2 text-sm md:text-base">
                    <Clock size={14} className="text-red-600 shrink-0 w-[14px]" />
                    <span>4:00 PM</span>
                  </p>
                  <div className="space-y-1 text-sm md:text-base">
                    <p className="flex items-center justify-start md:justify-center gap-2">
                      <MapPin size={14} className="text-red-600 shrink-0 w-[14px]" />
                      <span className="whitespace-nowrap">REVERA</span>
                    </p>
                    <p className="pl-[22px] md:pl-0 md:text-center">Murampathy, Kodanchery</p>
                  </div>
                  <div className="pt-4 flex justify-start md:justify-center">
                    <button
                      onClick={handleGetDirectionsNikkah}
                      className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-red-900 transition-all duration-300 flex items-center shadow-md hover:shadow-lg text-xs md:text-sm"
                    >
                      <MapPin className="mr-2" size={12} />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Elegant Banner with fixed background */}
      <section className="py-28 px-4 text-white relative bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-43d1cfa7b0bd?q=80&w=2940&auto=format&fit=crop")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-5xl text-red-300 mb-4">"</div>
          <p className="text-base md:text-xl text-white italic leading-relaxed mb-4">
            "And among His Signs is this, that He created for you mates from among yourselves.."
          </p>
          <div className="h-px w-16 bg-red-200 mx-auto mb-3"></div>
          <p className="text-sm text-gray-300">- (30:21) </p>
        </div>
      </section>

      {/* Send Wishes Section - Full Width Banner */}
      <section className="py-24 px-4 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="text-white mx-auto mb-6 opacity-80" size={36} />
          <h2 className="text-2xl md:text-4xl font-light mb-4">Send Your Wishes</h2>
          <p className="text-base text-red-100 italic mb-8">Your blessings mean a lot to us</p>
          
          <p className="mb-10 leading-relaxed text-red-50 text-sm md:text-base">
            We would be honored to receive your heartfelt wishes and blessings for our new life together. 
            Please send us your message through email, and we'll cherish your kind words forever.
          </p>
            
          <button 
            onClick={handleSendWishes}
            className="bg-white text-red-900 px-8 py-3 rounded-full hover:bg-red-50 transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl text-sm"
          >
            <Send className="mr-2" size={16} />
            Send Wishes
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-white text-center border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Heart className="text-red-400 mx-auto mb-3" size={24} />
          </div>
          <h2 className="text-3xl font-light mb-4 text-gray-800">Rasal & Fidha</h2>
          <p className="mb-6 text-base italic text-gray-500">We joyfully invite you to the Nikkah</p>
          <p className="mb-6 text-base italic text-gray-500">Together with our families & Friends</p>
          
          <div className="h-px w-24 bg-red-200 mx-auto mb-6"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;