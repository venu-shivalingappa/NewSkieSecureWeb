import * as React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3';

export interface SectionHeadingProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  headingLevel: HeadingLevel;
  className: string;
  titleClassName: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  headingLevel,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <div className={className}>
      {badge}
      <Heading className={titleClassName}>{title}</Heading>
      {description !== undefined && (
        <p className={descriptionClassName}>{description}</p>
      )}
    </div>
  );
}
