import { ReactNode } from 'react';
import { Button } from '../ui/button';

const WHATSAPP_LINK = `https://wa.me/233544074578?text=Hi%2C%20I%20want%20to%20procure%20an%20item%20with%20Godday!`;

interface ProcurementStepCardProps {
  icon: ReactNode;
  title: string;
  text: ReactNode;
  color: string;
  hasButton?: boolean;
  idx: number;
  isLast: boolean;
}

export default function ProcurementStepCard({
  icon,
  title,
  text,
  color,
  hasButton = false,
  idx,
  isLast,
}: ProcurementStepCardProps) {
  return (
    <li
      className="group relative flex flex-col"
      style={{ animationDelay: `${idx * 0.15}s` }}>
      <div className="flex items-start gap-6">
        {/* Icon Circle */}
        <div
          className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-r ${color} rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl`}>
          {icon}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="text-sm font-bold text-gray-700">
              {idx + 1}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-1">{text}</p>
          {hasButton && (
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-semibold"
                aria-label="Chat on WhatsApp">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
      )}
    </li>
  );
}
