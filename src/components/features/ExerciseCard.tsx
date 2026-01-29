
import React from 'react';

interface ExerciseCardProps {
  name: string;
  sets?: string;
  reps?: string;
  duration?: string;
  rest: string;
  tips: string;
  gifUrl?: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ name, sets, reps, duration, rest, tips, gifUrl }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm mb-6">
      {gifUrl ? (
        <div className="h-48 bg-neutral-50 flex items-center justify-center">
          <img 
            src={gifUrl} 
            alt={name} 
            className="h-full object-contain" 
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-48 bg-neutral-100 flex items-center justify-center text-neutral-400">
          <p>No Visual Available</p>
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg text-neutral-900 leading-tight">{name}</h4>
          <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full uppercase tracking-wider">
            Rest: {rest}
          </span>
        </div>
        
        <div className="flex space-x-4 mb-4">
          {sets && (
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400 uppercase">Sets</span>
              <span className="font-semibold">{sets}</span>
            </div>
          )}
          {reps && (
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400 uppercase">Reps</span>
              <span className="font-semibold">{reps}</span>
            </div>
          )}
          {duration && (
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400 uppercase">Duration</span>
              <span className="font-semibold">{duration}</span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-neutral-50">
          <p className="text-sm text-neutral-600 italic">
            <span className="font-semibold text-neutral-400 not-italic mr-1">Pro Tip:</span>
            {tips}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
