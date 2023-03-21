import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  childrenClassName?: string;
}

export default function Section({
  title,
  description,
  children,
  className,
  childrenClassName,
}: SectionProps): JSX.Element {
  return (
    <section className={`${className} [&>div]:py-10 mt-10`}>
      <div className="flex flex-row">
        {title && (
          
            <div className="flex flex-row items-center gap-2">
              <div className="sm:w-5 md:w-60 h-px bg-black"></div>
              <h2 className="text-2xl font-bold text-blue">{title}</h2>
            </div>
        )}
        {description && (
          <p className="text-xl text-blue font-bold">{description}</p>
        )}
        <div className={childrenClassName ?? "md:mx-52"}>
          {children}
        </div>
      </div>
    </section>
  );
}
