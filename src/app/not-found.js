import Link from "next/link"

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold ">Page Not found.</h1>
        <Link href="/" className="btn mt-4 btn-primary ">Go to Home..</Link>
      </div>
    </div>
  </div>
  )
}

export default NotFound
