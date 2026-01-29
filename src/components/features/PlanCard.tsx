
import React from 'react';
import { Calendar, Trash2, ChevronRight } from 'lucide-react';

interface PlanCardProps {
  title: string;
  type: string;
  date: string;
  onClick: () => void;
  onDelete: (e: React.MouseEvent) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, type, date, onClick, onDelete }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-5 rounded-3xl shadow-sm border border-neutral-100 flex items-center justify-between cursor-pointer hover:border-red-200 transition-colors mb-4 group"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
          <Calendar size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-800">{title}</h3>
          <p className="text-sm text-neutral-500 capitalize">{type} • {date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button 
          onClick={onDelete}
          className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
        <ChevronRight className="text-neutral-300 group-hover:translate-x-1 transition-transform" size={20} />
      </div>
    </div>
  );
};

export default PlanCard;
