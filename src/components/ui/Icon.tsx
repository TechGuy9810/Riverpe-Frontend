import Image from "next/image";
import { IconData } from "@/types/strapi";
import { API_BASE_URL } from "@/lib/endpoints";

interface IconProps {
  data: IconData;
  className?: string;
  isMonochrome?: boolean;
}

const SIZE_CLASS: Record<string, string> = {
  sm: "icon-sm",
  md: "icon-md",
  lg: "icon-lg",
};

const WRAPPER_CLASS: Record<string, string> = {
  sm: "icon-wrapper-sm",
  md: "icon-wrapper-md",
  lg: "icon-wrapper-lg",
};

/**
 * Renders a Strapi Icon component.
 * - Uses Next.js <Image> for media icons from Strapi.
 * - Applies icon-sm / icon-md / icon-lg sizing class.
 * - Wraps in an icon-wrapper div when used standalone (not inside a button).
 */
export default function Icon({ data, className = "", isMonochrome = false }: IconProps) {
  const { icon, alt, size = "md" } = data;

  if (!icon?.url) return null;

  const sizeClass = SIZE_CLASS[size] ?? SIZE_CLASS.md;
  const src = icon.url.startsWith("http")
    ? icon.url
    : `${API_BASE_URL}${icon.url}`;

  if (isMonochrome) {
    return (
      <span
        className={`${sizeClass} inline-flex items-center justify-center shrink-0 ${className}`}
        style={{
          backgroundColor: "currentColor",
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }

  return (
    <span className={`${sizeClass} inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src={src}
        alt={alt ?? icon.alternativeText ?? "icon"}
        width={icon.width ?? 32}
        height={icon.height ?? 32}
        className="w-full h-full object-contain"
      />
    </span>
  );
}

/**
 * A standalone Icon with a coloured background wrapper.
 * Use this inside feature cards, not inside buttons.
 */
export function IconBlock({ data, className = "" }: IconProps) {
  const { size = "md" } = data;
  const wrapperClass = WRAPPER_CLASS[size] ?? WRAPPER_CLASS.md;

  return (
    <div className={`${wrapperClass} ${className}`}>
      <Icon data={data} />
    </div>
  );
}
