import React from "react"

const Card = ({ src, skill, info ,className}) => {
    return (
        <div className={`relative max-w-sm overflow-hidden rounded-2xl 
      bg-gradient-to-br from-gray-900 via-gray-800 to-black 
      border border-gray-700 shadow-lg group 
      transform transition-all duration-500 hover:scale-105 hover:shadow-green-500/30 hover:-translate-y-2 cursor-pointer ${className}`}>

            {/* Glow layer */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
        opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />

            {/* Image container with tilt */}
            <div className="overflow-hidden relative">
                <img
                    className="rounded-t-2xl md:h-45  w-full object-cover 
          transform transition-transform duration-700 ease-out 
          group-hover:scale-110 group-hover:rotate-2"
                    src={src}
                    alt={skill}
                />

                {/* Floating badge */}
                <span className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-purple-500 
          text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg 
          opacity-0 group-hover:opacity-100 transition duration-500">
                    🚀 Featured
                </span>
            </div>

            {/* Content */}
            <div className="relative p-6 z-10">
                <h5 className="mb-2 text-2xl font-extrabold tracking-tight 
          bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent
          transition-all duration-500 group-hover:tracking-wider">
                    {skill}
                </h5>

                <p className="mb-4 text-gray-300 text-sm leading-relaxed 
          transition-all duration-500 group-hover:text-gray-100">
                    {info}
                </p>

                {/* Call to action */}
                {/* <button className="mt-2 px-4 py-2 rounded-xl text-sm font-semibold 
          bg-gradient-to-r from-green-400 to-purple-500 text-white shadow-md
          hover:shadow-lg hover:shadow-green-500/40 transition-all duration-500">
                    Learn More →
                </button> */}
            </div>

            {/* Bottom accent glow */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 
        bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 
        transition-all duration-500 group-hover:w-full" />
        </div>
    )
}

export default Card