import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { data } from "@/lib/utils";

const CardComponent = () => {
  return (
    <Carousel className="w-full items-center justify-center mx-auto max-w-xs md:max-w-4xl">
      <CarouselContent className="-ml-1">
        {data.map((item) => (
          <CarouselItem
            key={item.name}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col  gap-3 p-3">
                  <div className="flex gap-2">
                    <div className="">
                      <img
                        src={item.src}
                        className="w-32 rounded-lg object-cover h-32 shrink-0"
                      />
                    </div>
                    <div className="w-full h-full">
                      <h1 className="font-semibold text-center">{item.name}</h1>
                      <p className="text-sm text-center">{item.description}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full border border-zinc-200"
                  >
                    READ
                  </Button>
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
};
export default CardComponent;
