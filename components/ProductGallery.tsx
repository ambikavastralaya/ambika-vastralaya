"use client";

import { useState } from "react";

export default function ProductGallery(props: {
  images: string[];
  title: string;
}) {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  return (
    <div>
      <img
        src={selectedImage}
        alt={props.title}
        className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
      />

      <div className="mt-6 grid grid-cols-3 gap-4">
        {props.images.map((image, index) => (
          <button key={index} onClick={() => setSelectedImage(image)}>
            <img
              src={image}
              alt={props.title}
              className="h-32 w-full rounded-2xl border-2 border-yellow-400 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}