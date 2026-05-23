# Kohzad Technology - Hero Only Home Page

صفحه Home فقط شامل Header و Hero است. لینک‌های صفحات آینده در منو حفظ شده‌اند، اما کامپوننت‌های بخش‌های دیگر حذف/استفاده نشده‌اند.

## اجرا

```bash
npm install
npm run dev
```

سپس باز کنید:

```text
http://localhost:3000
```

## ساختار مهم

```text
src/app/page.tsx
src/components/Header.tsx
src/components/HeroSection.tsx
src/data/content.json
src/app/globals.css
```

## تغییرات این نسخه

- Hero با الهام از ساختار مدرن سایت‌های hosting: پس‌زمینه تیره، CTA واضح، کارت داشبورد، شاخص‌های اعتماد و نمایش مزیت‌ها.
- منو شبیه ساختار kohzadict.com: تاپ‌بار تماس، دکمه درخواست قیمت‌نامه، منوی اصلی و dropdown برای درباره ما، خدمات و محصولات.
- متن Hero بازنویسی شده تا حرفه‌ای‌تر، خواناتر و مناسب خدمات ICT باشد.
- فقط صفحه Home/Hero ساخته شده و لینک‌های صفحات آینده آماده مانده‌اند.
- TypeScript، ESLint و production build بررسی شده‌اند.

## بررسی کیفیت

```bash
npm run typecheck
npm run lint
npm run build
```
