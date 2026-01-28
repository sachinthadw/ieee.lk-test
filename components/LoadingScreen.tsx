import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-gray-50 dark:bg-[#050505] flex flex-col items-center justify-center transition-colors duration-500">
      <div className="relative">
        {/* Pulsing Core */}
        <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
           <img 
              src="https://file.garden/aTVAtCzGbgwzLBKB/IEEE%20Sri%20Lanka%20Section%20Flag%20Identifier.png" 
              alt="Loading" 
              className="w-16 h-auto object-contain animate-pulse"
           />
        </div>
        
        {/* Orbiting Ring */}
        <div className="absolute inset-0 -m-1 border-2 border-ieee-blue/30 rounded-2xl animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-0 -m-1 border-2 border-t-ieee-blue border-r-transparent border-b-transparent border-l-transparent rounded-2xl animate-[spin_2s_linear_infinite]" />

        {/* Outer Ripple */}
        <div className="absolute inset-0 bg-ieee-blue/20 rounded-2xl animate-ping" />
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-1 w-48 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-ieee-blue w-full origin-left animate-[grow_2s_ease-in-out]" />
        </div>
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase animate-pulse">
          Initializing
        </span>
      </div>

      <style>{`
        @keyframes grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};