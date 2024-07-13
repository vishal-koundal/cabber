import Button from '@/elements/Button'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <main className="grid min-h-[90vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-grayDark">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/">Go back home</Button>
            <Link href="/contact" className="text-sm font-semibold text-brand">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
