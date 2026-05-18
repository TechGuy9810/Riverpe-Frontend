"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#2563EB] pt-12 md:pt-20 lg:pt-24 dark:bg-[#060D1A]">
        {/* Subtle top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-accent opacity-60" />

        {/* Background orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/8 blur-[80px]" />
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            {/* Brand column */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-8 lg:mb-16 max-w-[360px]">
                <Link href="/" className="mb-8 inline-flex items-center gap-2">
                  <Image src="/images/riverpe.png" alt="RiverPe Logo" width={36} height={36} className="shrink-0" />
                  <span className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">
                    RiverPe
                  </span>
                </Link>
                <p className="mb-9 text-base leading-relaxed text-white/80">
                  Payment APIs built for modern business. Seamless integration,
                  enterprise security, and world-class documentation.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {/* Twitter/X */}
                  <a
                    href="/"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                  >
                    <svg width="15" height="15" viewBox="0 0 22 22" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a
                    href="/"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/80 transition-all duration-300 hover:bg-white/20 hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 17 16" className="fill-current">
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Product links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-widest text-white/90 font-[family-name:var(--font-outfit)]">
                  Product
                </h2>
                <ul className="space-y-4">
                  {["API Gateway", "Webhooks", "Dashboard"].map((item) => (
                    <li key={item}>
                      <Link
                        href="/#products"
                        className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-widest text-white/90 font-[family-name:var(--font-outfit)]">
                  Resources
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blog" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">Blog</Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">API Docs</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">About</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal links */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 md:mb-8 text-sm font-semibold uppercase tracking-widest text-white/90 font-[family-name:var(--font-outfit)]">
                  Legal
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-white/80 transition-colors duration-200 hover:text-white">Contact Sales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <div className="py-8">
            <p className="text-center text-sm text-white/60">
              © {new Date().getFullYear()} RiverPe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
