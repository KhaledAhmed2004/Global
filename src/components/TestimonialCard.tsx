// app/components/TestimonialCard.tsx
import Image from 'next/image';
import { cn } from '@/lib/utils';

type TestimonialCardProps = {
  rating: number;
  quote: string;
  name: string;
  imageSrc: string;
  role?: string;
  interactive?: boolean;
  className?: string;
};

export default function TestimonialCard({
  rating,
  quote,
  name,
  imageSrc,
  role = 'Doctor',
  interactive = true,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-8 md:p-9 min-h-[280px] md:min-h-[320px] shadow-lg transition-shadow duration-300',
        interactive && 'hover:shadow-xl transform hover:-translate-y-2',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
          <div>
            <p className="text-gray-900 font-medium text-sm">{name}</p>
            {role && (
              <p className="text-gray-500 text-xs">{role}</p>
            )}
          </div>
        </div>
        <div className="text-yellow-500 flex items-center">
          {rating.toFixed(1)}★
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>
    </div>
  );
}