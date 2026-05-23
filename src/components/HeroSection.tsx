import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  GaugeCircle,
  Headphones,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  trustBadge: string;
  highlights: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  panelStats: {
    value: string;
    label: string;
  }[];
  serviceCards: {
    title: string;
    description: string;
  }[];
  chips: string[];
};

const serviceIcons = [DatabaseZap, Network, Headphones];

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <section
      id="home"
      className="dark-brand-gradient relative isolate min-h-screen overflow-hidden text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/75 to-transparent" />

      <div className="container relative z-10 grid min-h-screen items-center gap-10 pb-14 pt-32 sm:pb-16 sm:pt-36 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:pb-20 lg:pt-40 xl:gap-16">
        <div className="mx-auto max-w-3xl text-right lg:mx-0">
          <Badge variant="glass" className="mb-5 max-w-full gap-2 px-4 py-2 text-xs leading-6 sm:text-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </Badge>

          <h1 id="hero-title" className="max-w-4xl text-4xl font-black leading-[1.18] tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-[4.05rem]">
            <span className="block">{data.title}</span>
            <span className="mt-2 block bg-gradient-to-l from-cyan-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              {data.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-9 text-slate-300 sm:text-lg sm:leading-10 lg:max-w-3xl">
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="gradient" size="lg" className="h-[3.35rem] w-full px-7 text-base font-black sm:w-auto">
              <Link href={data.primaryHref}>
                {data.primaryCta}
                <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-[3.35rem] w-full border-white/15 bg-white/[0.07] px-7 text-base font-black text-white hover:bg-white hover:text-slate-950 sm:w-auto"
            >
              <Link href={data.secondaryHref}>{data.secondaryCta}</Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {data.highlights.map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-start gap-2 rounded-3xl border border-white/10 bg-white/[0.055] p-4 text-sm font-bold leading-7 text-slate-200 shadow-lg shadow-slate-950/10 backdrop-blur-xl"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {data.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.055] px-5 py-4 backdrop-blur-xl">
                <div className="text-2xl font-black text-white sm:text-3xl">{metric.value}</div>
                <div className="mt-1 text-xs font-extrabold text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-black text-slate-300">
            {data.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-xl">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem] lg:mx-0">
          <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />

          <div className="glass-card relative overflow-hidden rounded-[2.1rem] p-3 sm:p-4">
            <div className="rounded-[1.65rem] border border-white/10 bg-slate-950/82 p-4 shadow-2xl shadow-slate-950/30 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-end gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-black text-slate-300">
                  <LockKeyhole className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                  <bdi dir="ltr" className="truncate">https://kohzadict.com</bdi>
                </div>
              </div>

              <div className="mt-5 rounded-[1.45rem] border border-cyan-300/15 bg-gradient-to-br from-blue-500/[0.16] via-cyan-400/[0.10] to-emerald-400/[0.13] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200/90">Kohzad ICT Console</p>
                    <h2 className="mt-2 max-w-sm text-2xl font-black leading-9 text-white sm:text-3xl sm:leading-10">
                      مدیریت خدمات دیجیتالی در یک داشبورد منظم
                    </h2>
                  </div>
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                    <span className="absolute h-14 w-14 rounded-2xl border border-emerald-300/35 animate-pulse-ring" />
                    <CloudCog className="h-7 w-7" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {data.panelStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-3 text-center backdrop-blur-xl">
                      <div className="text-lg font-black text-white">{stat.value}</div>
                      <div className="mt-1 text-[11px] font-bold leading-5 text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {data.serviceCards.map((card, index) => {
                  const Icon = serviceIcons[index] ?? ServerCog;
                  return (
                    <div
                      key={card.title}
                      className="group rounded-3xl border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.085]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-cyan-200 transition group-hover:bg-cyan-300/15 group-hover:text-cyan-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-black text-white">{card.title}</h3>
                          <p className="mt-1 text-sm leading-7 text-slate-400">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.055] p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2 font-black text-slate-200">
                    <GaugeCircle className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                    آمادگی اجرای پروژه
                  </span>
                  <span className="font-black text-cyan-200">۹۷٪</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[97%] rounded-full brand-gradient" />
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.09] p-4 text-emerald-50">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <div>
                  <p className="text-sm font-black">{data.trustBadge}</p>
                  <p className="mt-1 text-xs leading-6 text-emerald-50/75">
                    مناسب برای شرکت‌ها، فروشگاه‌ها، مکاتب، شفاخانه‌ها، لابراتوارها و سازمان‌های در حال رشد.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-5 right-8 hidden rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white shadow-glow backdrop-blur md:flex md:items-center md:gap-3">
            <Zap className="h-5 w-5 text-emerald-200" aria-hidden="true" />
            اجرای سریع و مرحله‌وار
          </div>
          <div className="pointer-events-none absolute -left-4 top-20 hidden rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white shadow-glow backdrop-blur md:flex md:items-center md:gap-3">
            <TerminalSquare className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            کدنویسی قابل توسعه
          </div>
        </div>
      </div>
    </section>
  );
}
