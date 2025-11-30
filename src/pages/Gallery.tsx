import { Banner } from "@/components/molecules/Banner";
import { Pagination } from "@/components/molecules/Pagination";
import { images } from "@/data";
import { X } from "lucide-react";
import { useState, useMemo } from "react";

interface SelectedImage {
  img: string;
  title?: string;
}

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Get current page images
  const currentImages = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return images.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <Banner
        title="Gallery"
        subtitle="A non-profit, non-political organization dedicated to community development, cultural preservation, and social welfare support since 2019."
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {currentImages?.map(({ id, img }) => (
            <div
              key={id}
              onClick={() => setSelectedImage({ img })}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer bg-gray-100"
            >
              <img
                src={img}
                alt={"Gallery image"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.title || "Gallery image"}
              className="w-full h-full object-contain"
            />

            {selectedImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )} */}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container - Smaller and Centered */}
          <div
            className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.title || "Gallery image"}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Optional: Title below image */}
            {selectedImage.title && (
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { Gallery };
