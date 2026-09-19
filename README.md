# هورآسا | Hoorasa

وب‌سایت رسمی مجموعه **هورآسا** — پلتفرم تخصصی طراحی، تولید، تبلیغات، برندسازی و اجرای رویدادهای سازمانی.

> از ایده تا اجرا با هورآسا

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-RTL-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey)]()

---

## درباره پروژه

این مخزن شامل فرانت‌اند استاتیک وب‌سایت هورآسا است. سایت به صورت **RTL** و با تم تاریک (Dark Theme) طراحی شده و بر پایه سیستم طراحی اختصاصی (Design System) ساخته شده است.

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
| `about.html` | صفحه درباره ما (معرفی، تاریخچه، جوایز و افتخارات) |
| `contact.html` | صفحه تماس (اطلاعات تماس، فرم، نقشه، شبکه‌های اجتماعی) |
| `single-service.html` | صفحه جزئیات خدمت (Kickstart + مسیر همکاری) |
| `404.html` | صفحه خطای ۴۰۴ |
| `components.html` | نمایشگاه کامپوننت‌ها (Why-us، Categories، کارت‌ها) |
| `style-guide.html` | راهنمای استایل و سیستم طراحی |

---

## ساختار پروژه

```
hoorasa/
├── index.html
├── about.html
├── contact.html
├── single-service.html
├── 404.html
├── components.html
├── style-guide.html
├── assets/
│   ├── css/
│   │   ├── variables.css          # متغیرهای طراحی (رنگ، فاصله، تایپوگرافی)
│   │   ├── globals.css            # استایل‌های پایه و ریست
│   │   ├── colors.css
│   │   ├── guides.css
│   │   ├── sections/              # هدر، فوتر، هیرو، سکشن‌ها
│   │   ├── components/            # کامپوننت‌های اختصاصی هر بخش
│   │   └── utilities/             # ابزارهای مشترک (دکمه، کارت، آکاردئون و ...)
│   ├── fonts/
│   │   └── peyda/                 # فونت فارسی پِیدا (Peyda)
│   ├── images/
│   ├── js/
│   │   └── global.js              # اسکریپت‌های سراسری (منو، کرسر، Swiper، CTA)
│   ├── videos/                    # ویدیوهای پس‌زمینه (hero.mp4 و ...)
│   └── vendor/                    # Bootstrap RTL، Swiper، Navalone
└── README.md
```

---

## تکنولوژی‌ها و ابزارها

| فناوری | کاربرد |
|--------|--------|
| **HTML5** | ساختار صفحات |
| **CSS3** (Custom Properties) | سیستم طراحی و استایل‌دهی |
| **Bootstrap 5 (RTL)** | گرید و کامپوننت‌های پایه |
| **Navalone** | منوی ناوبری چندسطحی |
| **Swiper** | اسلایدر پروژه‌ها و مقالات |
| **Peyda Font** | تایپوگرافی فارسی |
| **Vanilla JS** | تعاملات (کرسر سفارشی، دکمه مغناطیسی، کپی‌رایت سال) |

---

## ویژگی‌های کلیدی

- طراحی کاملاً **RTL** و سازگار با زبان فارسی
- تم تاریک پیش‌فرض (`data-bs-theme="dark"`)
- سیستم طراحی ماژولار با کامپوننت‌های قابل استفاده مجدد
- کرسر سفارشی (Cursor Follower)
- دکمه مغناطیسی در بخش CTA
- مارquee مشتریان با افکت grayscale → color
- آکاردئون خدمات
- تایم‌لاین تاریخچه
- پشتیبانی از ویدیو پس‌زمینه در هیرو
- صفحه Style Guide و Components Showcase

---

## نحوه اجرا

این پروژه **استاتیک** است و نیاز به بیلد یا پکیج‌منیجر ندارد.

### روش ساده
فایل‌ها را با یک لایو سرور محلی باز کنید:

```bash
# با VS Code Live Server
# یا با Python
python -m http.server 8000

# یا با npx
npx serve .
```

سپس به آدرس `http://localhost:8000` بروید.

### نکته مهم
ویدیوهای پس‌زمینه (`assets/videos/hero.mp4` و `more-us.mp4`) باید توسط شما اضافه شوند؛ در حال حاضر ممکن است در مخزن موجود نباشند.

---

## سیستم طراحی

- **متغیرها**: `assets/css/variables.css`
- **یوتیلیتی‌ها**: `assets/css/utilities/utilities.css` (`.section-intro`، `.btn-primary`، `.btn-secondary` و ...)
- **راهنما**: صفحه `style-guide.html` برای مشاهده رنگ‌ها، تایپوگرافی و کامپوننت‌ها

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

- هر کامپوننت جدید به صورت **افزایشی** اضافه می‌شود (کد قبلی حذف یا بازنویسی نشود).
- فایل‌های CSS مربوط به هر بخش در پوشه مناسب (`sections/` یا `components/` یا `utilities/`) قرار می‌گیرند.
- برای مشاهده کامپوننت‌های جدید از `components.html` استفاده کنید.

---

## مجوز

این پروژه متعلق به مجموعه هورآسا است و استفاده تجاری یا انتشار بدون اجازه ممنوع می‌باشد.

---

<div align="center">

**هورآسا** — از ایده تا اجرا

[وب‌سایت](https://hoorasa.org) · [تماس](mailto:info@hoorasa.org)

</div>
