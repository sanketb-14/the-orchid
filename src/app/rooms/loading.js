function RoomSkeleton() {
  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      {/* Image Skeleton */}
      <figure className="relative h-64 bg-base-300 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-base-200 to-base-300"></div>
        
        {/* Badge Skeletons */}
        <div className="absolute top-4 right-4 w-20 h-8 bg-base-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-32 h-10 bg-base-200/90 rounded-full animate-pulse"></div>
      </figure>

      <div className="card-body">
        {/* Title Skeleton */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-accent/30 rounded animate-pulse"></div>
          <div className="h-8 bg-base-300 rounded-lg w-3/4 animate-pulse"></div>
        </div>

        {/* Price Skeleton */}
        <div className="flex items-baseline gap-2 my-4">
          <div className="h-10 bg-primary/30 rounded-lg w-24 animate-pulse"></div>
          <div className="h-6 bg-base-300 rounded w-16 animate-pulse"></div>
        </div>

        {/* Badges Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-base-300 rounded-full w-20 animate-pulse"></div>
          <div className="h-6 bg-base-300 rounded-full w-24 animate-pulse"></div>
          <div className="h-6 bg-base-300 rounded-full w-20 animate-pulse"></div>
        </div>

        {/* Button Skeleton */}
        <div className="card-actions justify-end mt-4">
          <div className="h-12 bg-primary/30 rounded-lg w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

function loading() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-10 bg-base-300 rounded-lg w-64 animate-pulse"></div>
        <div className="h-6 bg-base-300 rounded w-96 animate-pulse"></div>
      </div>

      {/* Filter Skeleton */}
      <div className="flex gap-4">
        <div className="h-10 bg-base-300 rounded-lg w-24 animate-pulse"></div>
        <div className="h-10 bg-base-300 rounded-lg w-24 animate-pulse"></div>
        <div className="h-10 bg-base-300 rounded-lg w-24 animate-pulse"></div>
        <div className="h-10 bg-base-300 rounded-lg w-24 animate-pulse"></div>
      </div>

      {/* Room Cards Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
      </div>

      {/* Loading Indicator */}
      <div className="flex justify-center items-center gap-3 py-8">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <span className="text-base-content/60 text-lg">Loading amazing rooms...</span>
      </div>
    </div>
  );
}

export default loading;