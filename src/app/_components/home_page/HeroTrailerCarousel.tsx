import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

export function HeroTrailerCarousel() {
  const mockarray = [
    {
      id: "race-001",
      title: "MOF Desert Challenge 2025",
      subtitle: "Extreme off-road endurance in the Mongolian desert",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      ctaText: "Watch Trailer",
      ctaLink: "/events/desert-challenge-2025",
    },
    {
      id: "race-002",
      title: "Mountain Off-Road Rally",
      subtitle: "Conquering rocks, mud, and altitude",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      ctaText: "View Highlights",
      ctaLink: "/events/mountain-rally",
    },
    {
      id: "race-003",
      title: "Night Rally Showdown",
      subtitle: "When speed meets darkness",
      image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      ctaText: "See Moments",
      ctaLink: "/events/night-rally",
    },
    {
      id: "race-004",
      title: "Extreme Mud Race",
      subtitle: "Pure power. Zero limits.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      ctaText: "Explore Race",
      ctaLink: "/events/mud-race",
    },
    {
      id: "race-005",
      title: "Cross-Country Championship",
      subtitle: "Endurance across unforgiving terrain",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      ctaText: "Full Coverage",
      ctaLink: "/events/cross-country",
    },
    {
      id: "race-006",
      title: "Off-Road Legends",
      subtitle: "Where champions are forged",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      ctaText: "Meet the Legends",
      ctaLink: "/legends",
    },
  ];

  return (
    <Carousel className="w-full  h-fit py-4 ">
      <CarouselContent>
        {mockarray.map((mock, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={mock.image} alt={mock.title} className="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
