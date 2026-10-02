"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { capabilityGalleries, type CapabilityGallery } from "./gallery-data";

function GalleryViewer({ gallery, onClose }: { gallery: CapabilityGallery; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<string | null>(null);
  const photo = gallery.images[index];
  const multiple = gallery.images.length > 1;

  function move(direction: number) {
    setIndex((current) => (current + direction + gallery.images.length) % gallery.images.length);
  }

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="gallery-title"
      aria-describedby="gallery-help"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%-1rem)] max-w-6xl overflow-y-auto border-0 bg-white p-0 text-[#222] shadow-2xl backdrop:bg-[#061525]/90 sm:w-[calc(100%-3rem)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#ddd] px-4 py-4 sm:px-6">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#BD1816]">Capabilities gallery</p>
          <h2 id="gallery-title" className="mt-1 text-xl font-black sm:text-3xl">{gallery.title}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Close gallery" className="flex size-12 shrink-0 items-center justify-center bg-[#BD1816] text-white hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004ff9]">
          <X aria-hidden="true" />
        </button>
      </div>
      <div
        className="relative h-[48dvh] min-h-56 bg-[#061525] sm:h-[58dvh]"
        role="region" aria-roledescription="carousel" aria-label={`${gallery.title} photos`}
        onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}
      >
        {failed === photo.src ? <p className="flex h-full items-center justify-center p-12 text-center text-white">This photo could not load. Please try another photo or reopen the gallery.</p> : (
          <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="(min-width: 1280px) 1152px, 100vw" className="object-contain p-2 sm:p-4" onError={() => setFailed(photo.src)} />
        )}
        {multiple && <>
          <button type="button" aria-label="Previous photo" onClick={() => move(-1)} className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/40 bg-[#061525]/85 text-white hover:bg-[#004ff9] focus-visible:outline-2 focus-visible:outline-white sm:left-4"><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Next photo" onClick={() => move(1)} className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/40 bg-[#061525]/85 text-white hover:bg-[#004ff9] focus-visible:outline-2 focus-visible:outline-white sm:right-4"><ChevronRight aria-hidden="true" /></button>
        </>}
      </div>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p aria-live="polite" aria-atomic="true" className="font-bold">Photo {index + 1} of {gallery.images.length}</p>
          <p id="gallery-help" className="text-sm text-[#666]">{multiple ? "Swipe or use the arrow keys to explore." : "A closer look at our work."}</p>
        </div>
        {multiple && <div className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="Choose a photo">
          {gallery.images.map((image, i) => (
            <button key={image.src} type="button" aria-label={`View photo ${i + 1}`} aria-current={index === i ? "true" : undefined} onClick={() => setIndex(i)} className={`relative h-16 w-20 shrink-0 border-2 bg-[#eef1f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004ff9] ${index === i ? "border-[#BD1816]" : "border-transparent hover:border-[#004ff9]"}`}>
              <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>}
      </div>
    </dialog>
  );
}

export function CapabilityGalleries() {
  const [active, setActive] = useState<CapabilityGallery | null>(null);
  return (
    <>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {capabilityGalleries.map((gallery) => (
          <button key={gallery.slug} type="button" onClick={() => setActive(gallery)} aria-haspopup="dialog" aria-label={`Open ${gallery.title} gallery`} className="group flex min-h-full cursor-pointer flex-col overflow-hidden bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#004ff9] motion-reduce:transform-none">
            <span className="relative block h-64 w-full overflow-hidden bg-[#061525]">
              <Image src={gallery.images[0].src} alt={gallery.images[0].alt} fill className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
              <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute left-5 top-5 flex size-12 items-center justify-center bg-[#004ff9] text-white shadow-lg"><Images aria-hidden="true" size={24} /></span>
              <span className="absolute bottom-4 right-5 text-xs font-bold uppercase tracking-widest text-white">{gallery.images.length} {gallery.images.length === 1 ? "photo" : "photos"}</span>
            </span>
            <span className="flex grow flex-col p-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#BD1816]">Explore our capabilities</span>
              <span className="mt-3 text-2xl font-black">{gallery.title}</span>
              <span className="mt-3 text-base leading-7 text-[#666]">{gallery.description}</span>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9]">View gallery <ArrowRight aria-hidden="true" size={18} /></span>
            </span>
          </button>
        ))}
      </div>
      {active && <GalleryViewer key={active.slug} gallery={active} onClose={() => setActive(null)} />}
    </>
  );
}
