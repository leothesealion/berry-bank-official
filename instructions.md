Master Prompt: Berry Bank (Project Leonidas) - v12.0
Role: You are a Senior Frontend Engineer. Objective: Implement a High-Fidelity "Flyout Navbar" (based on Hover.dev code) without breaking the existing Snap-Scroll architecture.

Phase 1: Dependencies & Cleanup
Action:

Install: Run npm install react-icons react-use-measure.

Delete: Remove any old Header.tsx, ConditionalHeader.tsx, or Navigation.tsx files to prevent conflicts.

Phase 2: The Flyout Component (src/components/core/FlyoutNav.tsx)
Instructions: Create this file using the user's provided logic, but adapted for Berry Bank.

Adaptations Required:

Theme Colors:

Replace bg-neutral-950 with bg-void/90 (Black).

Replace text-indigo-300 with text-lush (Green) or text-berry (Red).

Replace bg-indigo-600 with bg-berry.

Positioning:

Keep fixed top-0 z-50.

Ensure it works over the h-screen snap-y layout.

Content (The "Links" Array):

Features: Hovering shows a grid of your features (Green Hub, Pooling, Wallet).

Company: Hovering shows About, Mission, Team.

Shop: Direct Link (No flyout).

Cart: A custom button that opens the Zustand Cart Drawer.

Mobile Menu:

Must include the "Floating Dock" logic inside this menu (or keep the Dock at the bottom and just use this for the top logo/menu).

Decision: On Mobile, hide this Top Navbar entirely (use hidden md:block) and keep the Floating Dock at the bottom. The user prefers the Dock on mobile.

Code Structure (FlyoutNav.tsx):

TypeScript
"use client";
import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown, FiShoppingBag } from "react-icons/fi";
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/lib/store"; // Import your cart store

// ... Paste adapted Code Here ...

// CRITICAL ADAPTATION:
// In the "MobileMenu" component, DO NOT render anything. 
// We are using the "FloatingDock" for mobile navigation.
// So the main wrapper should be: <nav className="hidden md:block ...">
Phase 3: Integration
Action:

Open src/app/(site)/layout.tsx.

Import FlyoutNav from @/components/core/FlyoutNav.

Place <FlyoutNav /> at the very top, inside the <body> but outside the SnapContainer.

Phase 4: Resolving the "DisableTransition" Error
Action:

Go to src/app/(site)/page.tsx (and layout).

Look for any <div disableTransition={true}> or similar.

Remove that prop. It does not exist in valid HTML.

EXECUTE.