// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getCarBySlug, urlFor } from '../../../../lib/sanity';

export default async function CarPage({ params }) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Images */}
        <div className="space-y-4">
          {car.images && car.images.length > 0 && (
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={
                  urlFor(car.images[0])?.width(800).height(400).url() ||
                  car.images[0].asset.url
                }
                alt={car.images[0].alt || car.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          {car.images && car.images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {car.images.slice(1, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative h-24 w-full rounded overflow-hidden"
                >
                  <Image
                    src={
                      urlFor(image)?.width(300).height(200).url() ||
                      image.asset.url
                    }
                    alt={image.alt || `${car.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Car Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-blue-600">
                ${car.price}/day
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  car.availability
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {car.availability ? 'Available' : 'Unavailable'}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{car.description}</p>
          </div>

          {/* Car Specifications */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Seats:</span>
                <span className="ml-2 font-medium">{car.seats}</span>
              </div>
              <div>
                <span className="text-gray-600">Transmission:</span>
                <span className="ml-2 font-medium capitalize">
                  {car.transmission}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Fuel Type:</span>
                <span className="ml-2 font-medium capitalize">
                  {car.fuelType}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 font-medium">
                  {car.category?.title || 'N/A'}
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          {car.features && car.features.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {feature.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Book Now Button */}
          <div className="pt-4">
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                car.availability
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!car.availability}
            >
              {car.availability ? 'Book This Car' : 'Currently Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
