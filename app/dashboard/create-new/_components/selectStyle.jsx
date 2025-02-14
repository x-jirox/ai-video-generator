import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({ onUserSelect }) { // Cambié el nombre a PascalCase por convención

    const styleOptions = [
        { name: 'Realistic', image: '/real.webp' },
        { name: 'Cartoon', image: '/cartoon.webp' },
        { name: 'Comic', image: '/comic.webp' },
        { name: 'Watercolor', image: '/watercolor.webp' },
        { name: 'GTA', image: '/gta.webp' }
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-xl text-primary'>Style</h2>
            <p className='text-gray-600'>Select your video style</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item, index) => (
                    <div
                        className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
                        ${selectedOption === item.name ? 'border-4 border-primary' : ''}`
                        }
                        key={index}
                    >
                        <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt={item.name}
                            className='h-48 object-cover rounded-lg w-full'
                            onClick={() => {
                                setSelectedOption(item.name); // Corrección aquí
                                onUserSelect('imageStyle', item.name);
                            }}
                        />
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle;
