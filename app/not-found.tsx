import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-[120px] pb-20">
      <div className="container-x text-center">
        <p className="eyebrow justify-center mb-4">
          <span className="dot" />
          404
        </p>
        <h1 className="serif text-[44px] md:text-[68px] leading-[1.05] max-w-2xl mx-auto">
          This cove doesn&apos;t exist <em className="text-gold not-italic">— yet.</em>
        </h1>
        <p className="text-text2 mt-5 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for moved or never existed. Try one of
          these instead.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href="/" className="btn-gold">
            Back home
          </Link>
          <Link href="/book" className="btn-ghost">
            Browse experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
