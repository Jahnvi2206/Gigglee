import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  className?: string;
}

export function Categories({ className }: CategoriesProps) {
  const categories = [
    { name: 'Programming & Tech', href: '/programming', color: 'bg-[#4A1B1B]', icon: 'programming-icon.svg' },
    { name: 'Graphics & Design', href: '/graphics', color: 'bg-[#4A421B]', icon: 'design-icon.svg' },
    { name: 'Digital Marketing', href: '/marketing', color: 'bg-[#1B4A1F]', icon: 'marketing-icon.svg' },
    { name: 'Business', href: '/business', color: 'bg-[#1B2B4A]', icon: 'business-icon.svg' },
    { name: 'Writing & Translation', href: '/writing', color: 'bg-[#4A421B]', icon: 'writing-icon.svg' }
  ];

  return (
    <section className={cn('w-full py-24 px-6 bg-[#1f0522] text-white', className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-white">From Freelancers to you</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href} 
              className={cn(
                'group relative w-64 aspect-square rounded-3xl overflow-hidden transition-transform hover:scale-105',
                category.color
              )}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={`/images/categories/${category.icon}`}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}