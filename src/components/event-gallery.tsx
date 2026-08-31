"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { Container, SectionHeader } from "@/components/ui";
import { basePath } from "@/lib/site";
import type { EventRecord, Locale } from "@/types/content";

type EventGalleryProps = {
  eyebrow: string;
  title: string;
  summary: string;
  events: EventRecord[];
  locale: Locale;
};

export function EventGallery({ eyebrow, title, summary, events, locale }: EventGalleryProps) {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeEvent = events[activeEventIndex];
  const activeImage = activeEvent.images[activeImageIndex];
  const labels = locale === "zh-Hant"
    ? { events: "活動切換", previous: "上一張照片", next: "下一張照片", image: "照片" }
    : { events: "Choose an event", previous: "Previous photo", next: "Next photo", image: "Photo" };

  function selectEvent(index: number) {
    setActiveEventIndex(index);
    setActiveImageIndex(0);
  }

  function handleEventKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % events.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + events.length) % events.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = events.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    selectEvent(nextIndex);
    document.getElementById(`event-tab-${events[nextIndex].id}`)?.focus();
  }

  function showPreviousImage() {
    setActiveImageIndex((current) => (current - 1 + activeEvent.images.length) % activeEvent.images.length);
  }

  function showNextImage() {
    setActiveImageIndex((current) => (current + 1) % activeEvent.images.length);
  }

  return (
    <section className="surface-grid bg-graphite py-20 text-warm-white sm:py-28">
      <Container>
        <SectionHeader description={summary} eyebrow={eyebrow} inverse title={title} />

        <div aria-label={labels.events} className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
          {events.map((event, index) => {
            const selected = index === activeEventIndex;
            return (
              <button
                aria-controls="event-panel"
                aria-selected={selected}
                className={`min-h-11 shrink-0 snap-start rounded-full border px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-avocado ${selected ? "border-avocado bg-avocado text-graphite" : "border-white/20 bg-white/5 text-white/72 hover:border-white/40 hover:bg-white/10"}`}
                id={`event-tab-${event.id}`}
                key={event.id}
                onClick={() => selectEvent(index)}
                onKeyDown={(keyEvent) => handleEventKeyDown(keyEvent, index)}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                {event.title}
              </button>
            );
          })}
        </div>

        <div
          aria-labelledby={`event-tab-${activeEvent.id}`}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035]"
          id="event-panel"
          role="tabpanel"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.65fr)]">
            <div className="relative flex min-h-[18rem] items-center justify-center bg-black/25 sm:min-h-[32rem] lg:min-h-[40rem]">
              <Image
                alt={activeImage.alt}
                className="object-contain"
                fill
                key={activeImage.src}
                priority={activeEventIndex === 0 && activeImageIndex === 0}
                sizes="(min-width: 1024px) 70vw, 100vw"
                src={`${basePath}${activeImage.src}`}
                unoptimized
              />
              {activeEvent.images.length > 1 ? (
                <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                  <button aria-label={labels.previous} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-graphite/80 text-xl text-white shadow-lg backdrop-blur transition hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avocado" onClick={showPreviousImage} type="button">←</button>
                  <button aria-label={labels.next} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-graphite/80 text-xl text-white shadow-lg backdrop-blur transition hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avocado" onClick={showNextImage} type="button">→</button>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col border-t border-white/12 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-avocado">{activeEvent.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-warm-white">{activeEvent.title}</h3>
              <p className="mt-5 text-base leading-8 text-white/65">{activeEvent.summary}</p>
              <p aria-live="polite" className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/48">
                {labels.image} {String(activeImageIndex + 1).padStart(2, "0")} / {String(activeEvent.images.length).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/72">{activeImage.caption}</p>

              <div className="mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:mt-auto lg:pt-8 [&::-webkit-scrollbar]:hidden">
                {activeEvent.images.map((image, index) => (
                  <button
                    aria-label={`${labels.image} ${index + 1}: ${image.caption}`}
                    aria-pressed={index === activeImageIndex}
                    className={`relative h-20 w-28 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avocado ${index === activeImageIndex ? "border-avocado" : "border-white/12 opacity-60 hover:opacity-100"}`}
                    key={image.src}
                    onClick={() => setActiveImageIndex(index)}
                    type="button"
                  >
                    <Image alt="" aria-hidden="true" className="object-cover" fill sizes="112px" src={`${basePath}${image.src}`} unoptimized />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
