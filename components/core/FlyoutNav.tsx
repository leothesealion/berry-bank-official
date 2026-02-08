"use client";

import React, { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiShoppingCart,
} from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { useUIStore, useCartStore } from "@/lib/store";

export const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">("light");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Chameleon: observe which section is behind the navbar
  useEffect(() => {
    const handleThemeDetection = () => {
      const sections = document.querySelectorAll("[data-nav-theme]");
      const navHeight = 80; // Approximate nav height

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Check if section is behind the navbar
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          const theme = section.getAttribute("data-nav-theme") as "light" | "dark";
          if (theme) setNavTheme(theme);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleThemeDetection, { passive: true });
    handleThemeDetection(); // Initial check

    return () => window.removeEventListener("scroll", handleThemeDetection);
  }, []);

  // When scrolled, always use dark background with light text
  // When not scrolled, adapt to the section behind
  const isLightText = scrolled || navTheme === "dark";

  return (
    <nav
      className={`hidden md:block fixed top-0 z-50 w-full px-6 transition-all duration-300 ${
        scrolled
          ? "bg-void/90 py-3 shadow-xl backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo isLight={isLightText} />
        <div className="flex items-center gap-6">
          <Links isLight={isLightText} />
          <CTAs isLight={isLightText} />
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ isLight }: { isLight: boolean }) => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-berry group-hover:bg-berry/80 transition-colors">
        <Leaf className="w-5 h-5 text-mist" />
      </div>
      <span className={`font-bold text-xl transition-colors duration-300 ${isLight ? "text-mist" : "text-void"}`}>
        Berry Bank
      </span>
    </Link>
  );
};

const Links = ({ isLight }: { isLight: boolean }) => {
  return (
    <div className="flex items-center gap-6">
      <NavLink href="/" isLight={isLight}>Home</NavLink>
      <FlyoutLink href="#" FlyoutContent={FeaturesContent} isLight={isLight}>
        Features
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={CompanyContent} isLight={isLight}>
        Company
      </FlyoutLink>
      <NavLink href="/shop" isLight={isLight}>Shop</NavLink>
    </div>
  );
};

const NavLink = ({
  href,
  children,
  isLight,
}: {
  href: string;
  children: React.ReactNode;
  isLight: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`relative transition-colors duration-300 ${
        isLight ? "text-mist/70 hover:text-mist" : "text-void/70 hover:text-void"
      }`}
    >
      {children}
    </Link>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
  isLight,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType;
  isLight: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <button type="button" className={`relative cursor-pointer transition-colors duration-300 ${
        isLight ? "text-mist/70 hover:text-mist" : "text-void/70 hover:text-void"
      }`}>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-berry transition-transform duration-300 ease-out"
        />
      </button>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-void/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-void/95 border-l border-t border-white/10" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = ({ isLight }: { isLight: boolean }) => {
  const { toggleCart } = useUIStore();
  const cartItems = useCartStore((state) => state.getTotalItems());

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleCart}
        className={`relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
          isLight
            ? "border-white/10 bg-white/5 text-mist/70 hover:bg-white/10 hover:text-mist"
            : "border-void/10 bg-void/5 text-void/70 hover:bg-void/10 hover:text-void"
        }`}
      >
        <FiShoppingCart />
        <span>Cart</span>
        {cartItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-berry text-mist text-xs font-bold rounded-full flex items-center justify-center">
            {cartItems}
          </span>
        )}
      </button>
      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-full bg-growth px-4 py-2 text-sm font-semibold text-mist transition-all hover:bg-growth/80 hover:shadow-lg hover:shadow-growth/30"
      >
        <span>Join Waitlist</span>
        <FiArrowRight />
      </Link>
    </div>
  );
};

const FeaturesContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-growth">Features</h3>
        <Link
          href="/green-hub"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          🌱 Green Hub
        </Link>
        <Link
          href="/impact"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          📊 Impact Dashboard
        </Link>
        <Link
          href="/shop"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          🛒 Eco Shop
        </Link>
      </div>
      <Link
        href="/green-hub"
        className="block w-full rounded-lg border border-growth/30 bg-growth/10 px-4 py-2 text-center text-sm font-medium text-growth transition-colors hover:bg-growth/20"
      >
        Explore All Features
      </Link>
    </div>
  );
};

const CompanyContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-berry">Company</h3>
        <Link
          href="/mission"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          🎯 Our Mission
        </Link>
        <Link
          href="/impact"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          🌍 Impact Report
        </Link>
        <Link
          href="/contact"
          className="block text-sm text-mist/70 hover:text-mist transition-colors"
        >
          📞 Contact Us
        </Link>
      </div>
      <Link
        href="/mission"
        className="block w-full rounded-lg border border-berry/30 bg-berry/10 px-4 py-2 text-center text-sm font-medium text-berry transition-colors hover:bg-berry/20"
      >
        Learn Our Story
      </Link>
    </div>
  );
};

export default FlyoutNav;
