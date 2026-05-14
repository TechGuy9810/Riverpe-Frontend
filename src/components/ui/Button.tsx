import Link from "next/link";
import { ButtonData } from "@/types/strapi";
import Icon from "@/components/ui/Icon";

interface ButtonProps {
  data: ButtonData;
  className?: string;
  /** Override the variant from Strapi (useful for default fallbacks) */
  defaultVariant?: ButtonData["variant"];
}

export default function Button({ data, className = "", defaultVariant = "primary" }: ButtonProps) {
  const { label, href, variant = defaultVariant, openInNewTab, icon } = data;

  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
        ? "btn-outline"
        : "btn-primary";

  const classes = `btn ${variantClass} ${className}`.trim();

  const content = (
    <>
      {icon && <Icon data={icon} isMonochrome={true} />}
      <span>{label}</span>
    </>
  );

  if (!href) {
    return (
      <button className={classes} type="button">
        {content}
      </button>
    );
  }

  const isExternal = href.startsWith("http") || href.startsWith("//");

  if (isExternal || openInNewTab) {
    return (
      <a
        href={href}
        className={classes}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
