import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  alt?: string;
  minH?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  alt = "Mallorca",
  minH = "min-h-[88vh]",
}: Props) {
  return (
    <section
      className={`relative ${minH} flex items-end overflow-hidden pt-[80px]`}
    >
      <Image
        src={img.hero(image)}
        alt={alt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-x pb-16 md:pb-24">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="eyebrow text-white/80 mb-5">
                <span className="dot" />
                {eyebrow}
              </span>
            )}
            <h1 className="serif text-white text-[42px] sm:text-[58px] md:text-[78px] leading-[1.02] tracking-[-0.02em] mt-4">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 text-[15px] md:text-[16.5px] text-white/75 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-gold">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-ghost text-white border-white/30 hover:border-white/60">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
