"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Server,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type HeaderData = {
  brand: { name: string; tagline: string };
  topBar: { email: string; phone: string; address: string };
  navItems: NavItem[];
  cta: { label: string; href: string };
};

function getTelephoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function getMailHref(email: string) {
  return `mailto:${email.trim()}`;
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="relative inline-flex h-12 items-center rounded-full px-4 text-sm font-extrabold text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group/nav relative">
      <Link
        href={item.href}
        className="inline-flex h-12 items-center gap-1.5 rounded-full px-4 text-sm font-extrabold text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition group-hover/nav:rotate-180" aria-hidden="true" />
      </Link>
      <div className="invisible absolute right-0 top-full z-30 min-w-64 translate-y-3 pt-3 opacity-0 transition duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold leading-6 text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>{child.label}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onClick }: { item: NavItem; onClick: () => void }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-2">
      <Link
        href={item.href}
        onClick={onClick}
        className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-black text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <span>{item.label}</span>
        {item.children?.length ? <ChevronDown className="h-4 w-4 text-cyan-200" aria-hidden="true" /> : null}
      </Link>
      {item.children?.length ? (
        <div className="grid gap-1 px-2 pb-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClick}
              className="rounded-2xl px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/30 backdrop-blur-xl transition-colors duration-300">
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container flex h-11 items-center justify-between gap-4 text-xs font-bold text-slate-300">
          <div className="flex min-w-0 items-center gap-5">
            <a href={getMailHref(data.topBar.email)} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              <bdi dir="ltr">{data.topBar.email}</bdi>
            </a>
            <a href={getTelephoneHref(data.topBar.phone)} className="inline-flex items-center gap-2 transition hover:text-white">
              <Phone className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              <bdi dir="ltr">{data.topBar.phone}</bdi>
            </a>
            <span className="hidden min-w-0 items-center gap-2 xl:inline-flex">
              <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              <span className="truncate">{data.topBar.address}</span>
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="https://wa.me/93730382382"
              className="inline-flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 text-xs font-extrabold text-slate-100 transition hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              WhatsApp
            </a>
            <Button asChild variant="gradient" size="sm" className="h-8 px-4 text-xs">
              <Link href={data.cta.href}>{data.cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-slate-950/82 shadow-2xl shadow-slate-950/25" : "bg-slate-950/10"
        )}
      >
        <div className="container flex h-[4.75rem] items-center justify-between gap-5 lg:h-[5.35rem]">
          <Link href="/" className="group flex shrink-0 items-center gap-3" onClick={closeMenu}>
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl brand-gradient shadow-lg shadow-cyan-500/25 lg:h-14 lg:w-14">
              <span className="absolute inset-1 rounded-xl border border-white/25" />
              <Server className="relative h-6 w-6 text-white lg:h-7 lg:w-7" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-black text-white lg:text-xl">{data.brand.name}</span>
              <span className="block text-xs font-black tracking-[0.14em] text-cyan-200 lg:text-[0.82rem]">
                {data.brand.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="ناوبری اصلی">
            {data.navItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={getTelephoneHref(data.topBar.phone)}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-extrabold text-slate-100 transition hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              <bdi dir="ltr">{data.topBar.phone}</bdi>
            </a>
            <Button asChild variant="gradient" size="lg" className="h-12 px-5 text-sm font-black">
              <Link href={data.cta.href}>{data.cta.label}</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:scale-105 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 xl:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id={mobileMenuId} className="xl:hidden">
          <div className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-white/10 bg-slate-950/96 px-4 pb-6 pt-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
            <nav className="mx-auto grid max-w-xl gap-3" aria-label="ناوبری موبایل">
              {data.navItems.map((item) => (
                <MobileNavItem key={item.href} item={item} onClick={closeMenu} />
              ))}

              <div className="mt-1 grid gap-2 rounded-3xl border border-white/10 bg-white/[0.055] p-4 text-sm font-bold text-slate-200">
                <a href={getTelephoneHref(data.topBar.phone)} className="inline-flex items-center gap-2 rounded-2xl px-2 py-2 hover:bg-white/10">
                  <Phone className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  <bdi dir="ltr">{data.topBar.phone}</bdi>
                </a>
                <a href={getMailHref(data.topBar.email)} className="inline-flex items-center gap-2 rounded-2xl px-2 py-2 hover:bg-white/10">
                  <Mail className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  <bdi dir="ltr">{data.topBar.email}</bdi>
                </a>
                <span className="inline-flex items-center gap-2 rounded-2xl px-2 py-2">
                  <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {data.topBar.address}
                </span>
              </div>

              <Button asChild variant="gradient" className="h-12 w-full text-base font-black">
                <Link href={data.cta.href} onClick={closeMenu}>
                  {data.cta.label}
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
