function AccountSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="bg-base-200 rounded-3xl p-8 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-base-300 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-10 bg-base-300 rounded-lg w-64"></div>
            <div className="h-6 bg-base-300 rounded w-48"></div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-base-100 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-base-300 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-300 rounded w-24 animate-pulse"></div>
                <div className="h-8 bg-base-300 rounded w-16 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions Skeleton */}
      <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
        <div className="h-8 bg-base-300 rounded-lg w-48 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-14 bg-base-300 rounded-lg animate-pulse"></div>
          <div className="h-14 bg-base-300 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    </div>
  )
}

export default AccountSkeleton