import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  className,
  containerClassName,
  children,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const hasHeader = eyebrow || title || subtitle;
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("container-x", containerClassName)}>
        {hasHeader && (
          <div
            className={cn(
              "mb-10 md:mb-14 max-w-2xl",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && (
              <span className="eyebrow mb-4">
                <span className="dot" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="serif text-[28px] md:text-[42px] leading-[1.05] mt-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-text2 text-[15px] md:text-[16.5px] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
