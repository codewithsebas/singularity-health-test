'use client';

import { useState } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/users/user_1.svg',
    name: 'Kenned Dsouza',
    testimonial:
      'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
  },
  {
    id: 2,
    image: '/users/user_3.svg',
    name: 'John Doe',
    testimonial:
      'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
  },
  {
    id: 3,
    image: '/users/user_2.svg',
    name: 'Jane Smith',
    testimonial:
      'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
  },
  {
    id: 4,
    image: '/users/user_1.svg',
    name: 'Alice Brown',
    testimonial:
      'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
  },
  {
    id: 5,
    image: '/users/user_3.svg',
    name: 'Michael Johnson',
    testimonial:
      'I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const getVisibleSlides = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;
    return [slides[prevIndex], slides[currentIndex], slides[nextIndex]];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="mx-auto w-full max-w-6xl">
      <h1 className="mb-2 px-5 text-center text-xl font-semibold text-coral sm:text-3xl">
        Here&apos;s what pet owners have to <br /> say about Fetch! Pet Care...
      </h1>
      <div className="overflow-hidden">
        <div className="relative my-16 mt-12 flex w-full max-w-6xl flex-col items-center justify-between gap-10 sm:flex-row sm:gap-3">
          <button
            className="absolute shadow-md left-5 right-0 top-1/2 z-30 flex max-h-10 min-h-10 min-w-10 max-w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-coral text-white transition-transform duration-200 hover:bg-coral/90 sm:static"
            onClick={prevSlide}
          >
            <MoveLeft size={18} />
          </button>

          <div className="flex w-full items-center justify-center">
            {visibleSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`h-60 w-96 transform duration-300 ${
                  index === 1
                    ? 'z-20 bg-blue shadow-xl hover:scale-[1.3] sm:scale-125'
                    : 'scale-90 bg-coral hover:scale-[1]'
                } flex-shrink-0 rounded-2xl p-6`}
                style={{
                  width: index === 1 ? '20rem' : '20rem',
                  animation: '0.3s ease',
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center text-white">
                  <Image
                    src={slide.image}
                    alt={`Image of ${slide.name}`}
                    className="h-16 w-16 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <h3 className="font-medium">{slide.name}</h3>
                  <p className="mt-2 text-xs font-light">{slide.testimonial}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute shadow-md right-5 top-1/2 z-30 flex min-h-10 min-w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-coral text-white transition-transform duration-200 hover:bg-coral/90 sm:static"
            onClick={nextSlide}
          >
            <MoveRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
