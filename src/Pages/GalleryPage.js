import React from "react";

export default function GalleryPage() {
  const images = Array.from({ length: 10 }, (_, i) => ({
    src: `https://picsum.photos/id/${Math.round(Math.random() * 110)}/800/600`,
    alt: `Image ${i + 1}`,
  }));
  return (
    <>
      <h1 className="my-10 text-4xl font-bold text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {images.map((image) => (
          <div className="p-2" key={image.src}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
}
