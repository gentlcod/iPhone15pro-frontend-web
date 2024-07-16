import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { explore1Img, exploreVideo } from '../utils';
import { animateWithGsap } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;

    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
        onEnter: () => {
          videoRef.current.play();
        },
      },
    });

    animateWithGsap('#features_title', {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      '.g_grow',
      {
        scale: 1,
        opacity: 1,
        ease: 'power1',
      },
      {
        scrub: 5.5,
      }
    );

    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'Power2.inOut',
      duration: 1,
    });
  }, []);

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-width'>
        <div className='w-full mb-12'>
          <h1 id='features_title' className='section-heading'>
            Explore the full story
          </h1>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-23'>
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone</h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium</h2>
          </div>

          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video
                playsInline
                muted
                autoPlay
                ref={videoRef}
                id='exploreVideo'
                preload='none'
                className='w-full h-full object-cover object-center'
              >
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>

            <div className='flex flex-col w-full relative'>
              <div className='feature-vide-container'>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img
                    src={explore1Img}
                    alt='titanium'
                    className='feature-video g_grow'
                  />
                </div>
              </div>

              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    iPhone 15 Pro is {''}
                    <span className='text-white'>
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Titanium has one of the best strength-to-weight ratios of any
                    metal, making these our {''}
                    <span className='text-white'>lightest Pro models ever.</span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
