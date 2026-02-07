"use client";

import React, { useState } from "react";
import {
  FiMenu,
  FiArrowRight,
  FiX,
  FiChevronDown,
  FiShoppingCart,
} from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { useUIStore, useCartStore } from "@/lib/store";

export const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <nav
      className={`hidden md:block fixed top-0 z-50 w-full px-6 text-mist transition-all duration-300 ${
        scrolled
          ? "bg-void/90 py-3 shadow-xl backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <Links />
          <CTAs />
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-berry group-hover:bg-berry/80 transition-colors">
        <Leaf className="w-5 h-5 text-mist" />
      </div>
      <span className="font-bold text-xl text-mist">Berry Bank</span>
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      <NavLink href="/">Home</NavLink>
      <FlyoutLink href="#" FlyoutContent={FeaturesContent}>
        Features
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={CompanyContent}>
        Company
      </FlyoutLink>
      <NavLink href="/shop">Shop</NavLink>
    </div>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="relative text-mist/70 hover:text-mist transition-colors"
    >
      {children}
    </Link>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative text-mist/70 hover:text-mist">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-berry transition-transform duration-300 ease-out"
        />
      </a>
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

const CTAs = () => {
  const { toggleCart } = useUIStore();
  const cartItems = useCartStore((state) => state.getTotalItems());

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleCart}
        className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist/70 transition-colors hover:bg-white/10 hover:text-mist"
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
