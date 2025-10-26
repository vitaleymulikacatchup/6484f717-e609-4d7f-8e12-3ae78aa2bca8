"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Bed, Sparkles, Waves, ChefHat, Dumbbell, Star, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Golden Bay Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury at Golden Bay"
          description="Indulge in world-class accommodations with breathtaking ocean views, premium amenities, and exceptional service that creates unforgettable memories."
          tag="5-Star Hotel"
          tagIcon={Crown}
          buttons={[
            { text: "Book Now", href: "https://booking.example.com" },
            { text: "View Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxurious hotel lobby with golden lighting and elegant decor"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Golden Bay"
          description={[
            "Located on pristine coastline, Golden Bay Hotel offers an unparalleled luxury experience with world-class service and stunning architecture.",
            "Our commitment to excellence and attention to detail ensures every guest enjoys a memorable stay in our elegant accommodations and premium facilities."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Ocean View Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/3755585/pexels-photo-3755585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room with ocean view",
              initialQuantity: 1
            },
            {
              id: "suite",
              name: "Presidential Suite",
              price: "$599/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite living area",
              initialQuantity: 1
            },
            {
              id: "ocean-view",
              name: "Premium Ocean View Suite",
              price: "$449/night",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium suite with ocean balcony",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="Premium Amenities"
          description="Discover our exceptional facilities designed for your comfort and enjoyment"
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our world-class spa with therapeutic treatments and wellness programs",
              icon: Waves
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by renowned chefs using the finest local and international ingredients",
              icon: ChefHat
            },
            {
              title: "Infinity Pool & Bar",
              description: "Relax by our stunning infinity pool with panoramic ocean views and poolside bar service",
              icon: Waves
            },
            {
              title: "State-of-the-Art Fitness Center",
              description: "Maintain your fitness routine in our fully equipped gym with modern equipment and personal trainers",
              icon: Dumbbell
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Discover why travelers choose Golden Bay Hotel for unforgettable experiences"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahwilson",
              testimonial: "Absolutely stunning hotel! The ocean views from our suite were breathtaking and the service was impeccable. Every detail was perfect.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Wilson"
            },
            {
              id: "2",
              name: "Michael & Emma",
              handle: "@coupletravel",
              testimonial: "Our honeymoon at Golden Bay was magical. The spa treatments were divine and the restaurant exceeded all expectations. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/34436649/pexels-photo-34436649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael and Emma"
            },
            {
              id: "3",
              name: "James",
              handle: "@jamesmarketing",
              testimonial: "Perfect for business travel. The concierge service was outstanding and the fitness center helped me maintain my routine. Will definitely return.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James"
            },
            {
              id: "4",
              name: "Lisa",
              handle: "@lisaexplorer",
              testimonial: "The most luxurious hotel experience I've ever had. From check-in to checkout, everything was seamless. The infinity pool is absolutely gorgeous!",
              imageSrc: "https://images.pexels.com/photos/3762927/pexels-photo-3762927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive events at Golden Bay Hotel."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Golden Bay Hotel. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Golden Bay Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "restaurant" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Location", href: "location" },
                { label: "Events", href: "events" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Concierge", href: "concierge" },
                { label: "Guest Services", href: "services" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}