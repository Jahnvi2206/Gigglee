import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SuccessStoriesProps {
  className?: string;
}

interface ReviewCardProps {
  title: string;
  body: string;
  reviewerName: string;
  date: string;
  rating: number;
  imageSrc: string;
}

const reviews: ReviewCardProps[] = [
  {
    title: 'Review title',
    body: 'Review body',
    reviewerName: 'Reviewer name',
    date: 'Date',
    rating: 5,
    imageSrc: '/images/freelancers-1.jpg'
  },
  {
    title: 'Review title',
    body: 'Review body',
    reviewerName: 'Reviewer name',
    date: 'Date',
    rating: 5,
    imageSrc: '/images/freelancers-2.jpg'
  },
  {
    title: 'Review title',
    body: 'Review body',
    reviewerName: 'Reviewer name',
    date: 'Date',
    rating: 5,
    imageSrc: '/images/freelancers-3.jpg'
  },
  {
    title: 'Review title',
    body: 'Review body',
    reviewerName: 'Reviewer name',
    date: 'Date',
    rating: 5,
    imageSrc: '/images/employers-1.jpg'
  },
  {
    title: 'Review title',
    body: 'Review body',
    reviewerName: 'Reviewer name',
    date: 'Date',
    rating: 5,
    imageSrc: '/images/employers-2.jpg'
  }
];

function ReviewCard({ title, body, reviewerName, date, rating, imageSrc }: ReviewCardProps) {
  return (
    <div className="min-w-[280px] p-6 rounded-lg bg-[#1E0E34] flex flex-col gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating ? 'text-yellow-400' : 'text-gray-400'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{body}</p>
      <div className="flex items-center gap-3 mt-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={reviewerName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-white font-medium">{reviewerName}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}

export function SuccessStories({ className }: SuccessStoriesProps) {
  return (
    <section className={cn('w-full py-24 px-6 bg-[#1f0522]', className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        What Success looks like at gig-gle
      </h2>
      <div className="flex justify-center gap-6 pb-6 scrollbar-hide">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}