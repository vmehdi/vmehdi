"use client";
import { Home, LayoutPanelLeft, MessageSquareMore } from "lucide-react";
import { FloatingNav } from "@/components/ui/FloatingNav";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home size={28} />
  },
  {
    name: "Projects",
    href: "/#",
    icon: <LayoutPanelLeft size={28} />
  }
  // {
  //   name: "Contact",
  //   href: "/contact",
  //   icon: <MessageSquareMore size={28} />
  // }
];
export function AppBar() {
  return (
    <header className="relative">
      <FloatingNav navItems={navItems} />
    </header>
  );
}
