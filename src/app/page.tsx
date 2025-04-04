import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { HowItWorksFreelancers } from '@/components/sections/HowItWorksFreelancers';
import { HowItWorksEmployers } from '@/components/sections/HowItWorksEmployers';
import { Journey } from '@/components/sections/Journey';
import { Categories } from '@/components/sections/Categories';
import { SuccessStories } from '@/components/sections/SuccessStories';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorksFreelancers />
        <HowItWorksEmployers />
        <Journey />
        <Categories />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}
