# هورآسا | Hoorasa

وب‌سایت رسمی مجموعه **هورآسا** — پلتفرم تخصصی طراحی، تولید، تبلیغات، برندسازی و اجرای رویدادهای سازمانی.

> از ایده تا اجرا با هورآسا

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-RTL-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey)]()

---

## درباره پروژه

این مخزن شامل **فرانت‌اند استاتیک تکمیل‌شده** وب‌سایت هورآسا است. سایت به صورت **RTL** و با تم تاریک (Dark Theme) طراحی شده و بر پایه سیستم طراحی اختصاصی (Design System) ساخته شده است.

هورآسا مجموعه‌ای تخصصی در زمینه‌های زیر است:

- طراحی هویت بصری و تجربه کاربری
- تولید محتوا و چاپ
- تبلیغات و کمپین‌های یکپارچه
- رویدادهای سازمانی
- هدایای سازمانی

---

## صفحات موجود

| فایل | توضیح |
|------|--------|
| `index.html` | صفحه اصلی (Hero، خدمات، پروژه‌ها، درباره، مشتریان، آمار، فرآیند، FAQ، CTA، مقالات) |
| `about.html` | درباره ما (معرفی، تاریخچه، جوایز و افتخارات) |
| `contact.html` | تماس (اطلاعات تماس، فرم، نقشه، شبکه‌های اجتماعی) |
| `service.html` | جزئیات خدمت (Kickstart + مسیر همکاری) |
| `projects.html` | آرشیو پروژه‌ها |
| `project.html` | جزئیات پروژه (متا، داستان، چالش، گالری Masonry + Fancybox) |
| `posts.html` | آرشیو مقالات |
| `post.html` | مقاله تکی (متن، دسته‌ها/برچسب‌ها، نظرات، سایدبار TOC چسبان، مقالات مرتبط/آخرین، CTA) |
| `404.html` | صفحه خطای ۴۰۴ |
| `components.html` | نمایشگاه کامپوننت‌ها (Why-us، Categories، کارت‌ها) |
| `style-guide.html` | راهنمای استایل و سیستم طراحی |
| `section.html` | پیش‌نمایش/الگوی سکشن |

---

## ساختار پروژه

```
hoorasa/
├── index.html
├── about.html
├── contact.html
├── service.html
├── projects.html
├── project.html
├── posts.html
├── post.html
├── 404.html
├── components.html
├── style-guide.html
├── section.html
├── assets/
│   ├── css/
│   │   ├── variables.css       # توکن‌های طراحی (رنگ، فاصله، تایپوگرافی)
│   │   ├── globals.css         # استایل‌های پایه
│   │   ├── utilities.css       # intro، دکمه، search-form و ...
│   │   ├── colors.css
│   │   ├── guides.css
│   │   ├── cursor-follower.css
│   │   ├── blocks/             # بلوک‌های مشترک (hero، cta، kickstart، ...)
│   │   ├── components/         # کارت‌ها، pagination، accordion و ...
│   │   ├── sections/           # استایل هر سکشن صفحه
│   │   └── layoutit/           # استایل سطح‌صفحه (header، footer، post، project، ...)
│   ├── fonts/peyda/            # فونت فارسی پِیدا
│   ├── images/
│   ├── js/
│   │   └── global.js           # منو، کرسر، CTA، سال کپی‌رایت و ...
│   ├── videos/                 # ویدیوهای پس‌زمینه (در صورت نیاز اضافه شوند)
│   └── vendor/
│       ├── bootstrap/          # Bootstrap 5 RTL
│       ├── navalone/           # منوی چندسطحی
│       ├── swiper/             # اسلایدر
│       ├── masonry/            # desandro/masonry (گالری پروژه)
│       └── fancybox/           # لایت‌باکس گالری
└── README.md
```

---

## تکنولوژی‌ها و ابزارها

| فناوری | کاربرد |
|--------|--------|
| **HTML5** | ساختار صفحات |
| **CSS3** (Custom Properties) | سیستم طراحی و استایل‌دهی |
| **Bootstrap 5 (RTL)** | گرید، offcanvas و کامپوننت‌های پایه |
| **Navalone** | منوی ناوبری چندسطحی |
| **Swiper** | اسلایدر پروژه‌ها و مقالات |
| **Masonry** (desandro) | چیدمان آبشاری گالری پروژه |
| **Fancybox** | مشاهده تمام‌صفحه تصاویر/ویدیوی گالری |
| **Peyda Font** | تایپوگرافی فارسی |
| **Vanilla JS** | کرسر سفارشی، دکمه مغناطیسی، TOC فعال، init گالری |

---

## ویژگی‌های کلیدی

- طراحی کاملاً **RTL** و سازگار با زبان فارسی
- تم تاریک پیش‌فرض (`data-bs-theme="dark"`)
- سیستم طراحی ماژولار با کامپوننت‌های قابل استفاده مجدد
- کرسر سفارشی (Cursor Follower)
- دکمه مغناطیسی در بخش CTA
- مارquee مشتریان با افکت grayscale → color
- آکاردئون خدمات و FAQ
- تایم‌لاین تاریخچه
- گالری پروژه با **Masonry** + لایت‌باکس **Fancybox**
- صفحه مقاله تکی با **فهرست مطالب چسبان** (دسکتاپ) و **bottom sheet** در موبایل
- آرشیو پروژه‌ها و مقالات با کارت و صفحه‌بندی
- پشتیبانی از ویدیو در هیرو و سکشن‌های رسانه‌ای
- صفحات Style Guide و Components Showcase

---

## نحوه اجرا

این پروژه **استاتیک** است و نیاز به بیلد یا پکیج‌منیجر ندارد.

```bash
# با VS Code Live Server
# یا با Python
python -m http.server 8000

# یا با npx
npx serve .
```

سپس به آدرس `http://localhost:8000` بروید.

### نکته
ویدیوهای پس‌زمینه (مثلاً `assets/videos/hero.mp4`) در صورت استفاده باید در مسیر مربوط قرار گیرند؛ ممکن است در مخزن نباشند.

---

## سیستم طراحی

- **متغیرها**: `assets/css/variables.css`
- **یوتیلیتی‌ها**: `assets/css/utilities.css` (`.section-intro`، `.btn-primary`، `.btn-secondary`، `.search-form` و ...)
- **راهنما**: `style-guide.html` برای رنگ‌ها، تایپوگرافی و کامپوننت‌ها

ساختار استاندارد سکشن‌ها:

```html
<section id="name" class="container-fluid name">
  <div class="container">
    <div class="row">
      <div class="col-12 column">
        <!-- محتوا -->
      </div>
    </div>
  </div>
</section>
```

---

## توسعه و مشارکت

- هر کامپوننت جدید به صورت **افزایشی** اضافه می‌شود (کد قبلی حذف یا بازنویسی گسترده نشود).
- CSS هر بخش در پوشه مناسب قرار می‌گیرد:
  - `sections/` برای سکشن‌های صفحه
  - `components/` برای کارت و اجزای قابل استفاده مجدد
  - `blocks/` برای بلوک‌های مشترک
  - `layoutit/` برای استایل سطح‌صفحه
- برای مشاهده کامپوننت‌ها از `components.html` و برای توکن‌ها از `style-guide.html` استفاده کنید.

---

## مجوز

این پروژه متعلق به مجموعه هورآسا است و استفاده تجاری یا انتشار بدون اجازه ممنوع می‌باشد.

---

<div align="center">

**هورآسا** — از ایده تا اجرا

[وب‌سایت](https://hoorasa.org) · [تماس](mailto:info@hoorasa.org)

</div>
