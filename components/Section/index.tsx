import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  title,
  description,
  children,
  className,
}: SectionProps): JSX.Element {
  return (
    <section className={`${className} [&>div]:py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-4xl text-primaryDarker font-bold text-center sm:text-right">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-gray-400 font-bold">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
