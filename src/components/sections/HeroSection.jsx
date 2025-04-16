import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const threshold = window.innerHeight * 0.5
            setDarkMode(scrollY > threshold)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const logoSrc = darkMode
        ? '/images/light_logo.png'
        : '/images/original_logo.png'
    const videoSrc = darkMode
        ? '/videos/dark_hero_video.mp4'
        : '/videos/light_hero_video.mp4'

    return (
        <section className="relative h-[200vh]">
            <div
                className={`sticky top-0 h-screen w-full transition-all duration-700 ease-in-out
          ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
                <header className="flex justify-between items-center px-4 sm:px-12 py-6 mb-16 transition-all duration-700 ease-in-out">
                    <img
                        src={logoSrc}
                        alt="Logo"
                        className="w-[150px] sm:w-[250px] h-[50px] sm:h-[70px] object-contain transition-all duration-700 ease-in-out"
                    />
                    <div className="flex flex-col justify-between w-12 sm:w-16 h-3 cursor-pointer">
                        <span
                            className={`h-[3px] w-full transition-colors duration-700 ease-in-out ${
                                darkMode ? 'bg-white' : 'bg-black'
                            }`}
                        />
                        <span
                            className={`h-[3px] w-full transition-colors duration-700 ease-in-out ${
                                darkMode ? 'bg-white' : 'bg-black'
                            }`}
                        />
                    </div>
                </header>

                <div
                    className={`${darkMode ? 'text-end' : ''} mb-12 px-4 sm:px-12`}
                >
                    <h1 className="text-4xl sm:text-[80px] leading-[1.1] font-light transition-colors duration-700 ease-in-out">
                        <span>Remarkable</span>
                        <br />
                        <strong className="font-bold">
                            {darkMode
                                ? 'Investment Experience.'
                                : 'Mining Experience.'}
                        </strong>
                    </h1>
                </div>

                <div className="max-w-[1920px] mx-auto px-4 sm:px-12 pb-4">
                    <div className="relative rounded-[20px] overflow-hidden h-[300px] sm:h-[600px] transition-all duration-700 ease-in-out">
                        <video
                            key={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={videoSrc}
                            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out"
                        />

                        {/* Сам грид: адаптивно меняем кол-во колонок */}
                        <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 h-full gap-0">
                            {Array.from({ length: 10 }).map((_, i) => {
                                const corners =
                                    {
                                        0: 'sm:rounded-tl-[20px]',
                                        4: 'sm:rounded-tr-[20px]',
                                        5: 'sm:rounded-bl-[20px]',
                                        9: 'sm:rounded-br-[20px]',
                                    }[i] || ''

                                const whiteBlocks = new Set([3, 5, 9])
                                const isFilled = whiteBlocks.has(i)
                                const isText = i === 3

                                return (
                                    <div
                                        key={i}
                                        className={`relative z-10 ${isFilled ? (darkMode ? 'bg-black' : 'bg-white') : ''} ${corners} border ${darkMode ? 'border-black' : 'border-white'} flex items-center justify-center transition-colors duration-700 ease-in-out`}
                                    >
                                        {isText && (
                                            <p
                                                className={`text-[18px] sm:text-[32px] font-light leading-[100%] pl-[10%] sm:pl-[30%] transition-colors duration-700 ease-in-out ${darkMode ? 'text-white' : 'text-black'}`}
                                            >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut.
                                            </p>
                                        )}
                                    </div>
                                )
                            })}

                            <div
                                className={`${darkMode ? 'bg-black' : 'bg-white'} hidden sm:block absolute top-0 z-20 transition-all duration-700 ease-in-out`}
                                style={{
                                    left: 'calc(60% - 25px)',
                                    width: '50px',
                                    height: '50%',
                                }}
                            />
                            <div
                                className={`${darkMode ? 'bg-black' : 'bg-white'} hidden sm:block absolute bottom-0 z-20 transition-all duration-700 ease-in-out`}
                                style={{
                                    left: 'calc(60% - 25px)',
                                    width: '50px',
                                    height: '50%',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
