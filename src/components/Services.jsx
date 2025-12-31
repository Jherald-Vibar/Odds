import React, { useEffect, useState } from 'react'
import { techStacks } from '../constants'

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationOffset, setRotationOffset] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setRotationOffset(prev => prev + 60); 
        
        
    };

    const deckLabels = ['TaskFlow', 'Sibol', 'Avonic', 'Retail Analytics', 'Sproutopia', 'Simula'];

    const getCardPosition = (index, total, offset) => 
    {
        const angle = ((index * 360) / total - 90 + offset) % 360; 
        const radius = 180; 
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        return { x, y };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 8;
                return nextIndex >= techStacks.length ? 0 : nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [techStacks.length])

    const displayedTechs = techStacks.slice(currentIndex, currentIndex + 8);

    return (
        <section className='flex min-h-screen px-3 py-3 overflow-hidden border-b-2 border-gray-400'>
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <span className='text-2xl font-sans font-bold md:text-5xl'>SERVICES</span>
                <span className='border-3 border-black w-60'></span>
                
                <div className='flex flex-col items-start justify-center mt-5'>
                    <span className='text-[0.7rem] font-sans font-semibold md:text-xl'>Tech Stacks</span>
                
                    <div className='w-[230px] grid grid-cols-4 gap-2'>
                        {displayedTechs.map((stack, index)=> (
                            <img key={currentIndex + index} src={stack.src} width="40" height="40" alt={stack.name} />
                        ))}
                    </div>
                </div>
            </div>  

            <div className='w-1/2 flex flex-col items-center justify-center'>
                <div className="relative w-[300px] h-[300px] flex items-center justify-center mt-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => {
                    const pos = getCardPosition(index, 6, rotationOffset);
                    const isSelected = selectedCard === index;
                    
                    // If selected, move to center top
                    const finalX = isSelected ? 0 : pos.x;
                    const finalY = isSelected ? -100 : pos.y;
                    
                    return (
                        <button
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className="absolute w-32 h-44 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50 rounded-xl"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${finalX}px, ${finalY}px) rotateY(${isSelected ? '180deg' : '0deg'}) scale(${isSelected ? 1.2 : 1})`,
                            transformStyle: 'preserve-3d',
                            transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
                            zIndex: isSelected ? 20 : 1
                        }}
                        >
                        {/* Front of card */}
                        <div
                            className={`absolute inset-0 bg-gray-400 rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 border-4 ${isSelected ? 'border-yellow-400' : 'border-white/20'}`}
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div className="text-5xl mb-2"></div>
                            <div className="text-white font-bold text-base">{deckLabels[index]}</div>
                        </div>

                        {/* Back of card */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 border-4 ${isSelected ? 'border-yellow-400' : 'border-white/20'}`}
                            style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                            }}
                        >
                            <div className="text-4xl mb-2">✨</div>
                            <div className="text-white font-bold text-base">Selected!</div>
                            <div className="text-white/80 text-xs mt-1">{deckLabels[index]}</div>
                        </div>
                        </button>
                    );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services