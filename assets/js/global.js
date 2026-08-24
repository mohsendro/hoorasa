// Navalone Configs
new Navalone("#mm", {
  responsive: "static",
  breakpoint: 991.98,
  position: "static",
  menuAlign: "left",
  drawerSide: "right",
  openOn: "hover",
  // items: [
  //     {
  //         label: "Company",
  //         submenu: {
  //             id: "company",
  //             display: "dropdown",
  //             items: [
  //                 {
  //                     label: "About us",
  //                     href: "#about"
  //                 },
  //                 {
  //                     label: "Careers",
  //                     href: "#careers",
  //                     badge: "5"
  //                 },
  //                 {
  //                     label: "Press",
  //                     href: "#press"
  //                 }
  //             ]
  //         }
  //     },
  //     {
  //         label: "Products",
  //         submenu: {
  //             id: "products",
  //             display: "dropdown-lg",
  //             items: [
  //                 {
  //                     label: "Analytics",
  //                     icon: "📊",
  //                     description: "Dashboards & reports",
  //                     href: "#analytics"
  //                 },
  //                 {
  //                     label: "Automation",
  //                     icon: "⚡",
  //                     description: "Workflows without code",
  //                     badge: "New",
  //                     href: "#automation"
  //                 },
  //                 {
  //                     label: "Developer Tools",
  //                     icon: "🛠️",
  //                     description: "APIs, SDKs and the CLI",
  //                     submenu: {
  //                         id: "devtools",
  //                         display: "dropdown",
  //                         items: [
  //                             {
  //                                 label: "REST API",
  //                                 href: "#api"
  //                             },
  //                             {
  //                                 label: "Command Line",
  //                                 submenu: {
  //                                     id: "cli",
  //                                     display: "dropdown",
  //                                     items: [
  //                                         {
  //                                             label: "Install",
  //                                             href: "#cli-install"
  //                                         },
  //                                         {
  //                                             label: "Commands",
  //                                             href: "#cli-commands"
  //                                         }
  //                                     ]
  //                                 }
  //                             }
  //                         ]
  //                     }
  //                 }
  //             ]
  //         }
  //     },
  //     {
  //         label: "Resources",
  //         submenu: {
  //             id: "resources",
  //             display: "mega",
  //             columns: [
  //                 {
  //                     heading: "Learn",
  //                     items: [
  //                         {
  //                             label: "Documentation",
  //                             icon: "📚",
  //                             description: "Guides & API reference",
  //                             href: "#docs"
  //                         },
  //                         {
  //                             label: "Tutorials",
  //                             icon: "🎓",
  //                             description: "Step-by-step lessons",
  //                             href: "#tutorials"
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     heading: "Community",
  //                     items: [
  //                         {
  //                             label: "Blog",
  //                             icon: "✍️",
  //                             description: "News & articles",
  //                             badge: "New",
  //                             href: "#blog"
  //                         },
  //                         {
  //                             label: "Forum",
  //                             icon: "💬",
  //                             description: "Ask the community",
  //                             href: "#forum"
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     heading: "Support",
  //                     items: [
  //                         {
  //                             label: "Help center",
  //                             icon: "🛟",
  //                             description: "FAQs & contact",
  //                             href: "#help"
  //                         },
  //                         {
  //                             label: "Status",
  //                             icon: "📈",
  //                             description: "Uptime & incidents",
  //                             href: "#status"
  //                         }
  //                     ]
  //                 }
  //             ]
  //         }
  //     },
  //     {
  //         label: "Shop",
  //         submenu: {
  //             id: "shop",
  //             display: "mega-tabs",
  //             items: [
  //                 {
  //                     label: "Electronics",
  //                     icon: "🔌",
  //                     submenu: {
  //                         id: "electronics",
  //                         display: "mega",
  //                         columns: [
  //                             {
  //                                 heading: "Computers",
  //                                 items: [
  //                                     {
  //                                         label: "Laptops",
  //                                         icon: "💻",
  //                                         description: "Thin & light to pro",
  //                                         href: "#laptops"
  //                                     },
  //                                     {
  //                                         label: "Monitors",
  //                                         icon: "🖥️",
  //                                         description: "4K, ultrawide, portable",
  //                                         href: "#monitors"
  //                                     }
  //                                 ]
  //                             },
  //                             {
  //                                 heading: "Audio",
  //                                 items: [
  //                                     {
  //                                         label: "Headphones",
  //                                         icon: "🎧",
  //                                         description: "Noise-cancelling picks",
  //                                         badge: "Sale",
  //                                         href: "#headphones"
  //                                     },
  //                                     {
  //                                         label: "Speakers",
  //                                         icon: "🔊",
  //                                         description: "Room-filling sound",
  //                                         href: "#speakers"
  //                                     }
  //                                 ]
  //                             }
  //                         ]
  //                     }
  //                 },
  //                 {
  //                     label: "Fashion",
  //                     icon: "👟",
  //                     submenu: {
  //                         id: "fashion",
  //                         display: "mega",
  //                         columns: [
  //                             {
  //                                 heading: "Featured",
  //                                 items: [
  //                                     {
  //                                         label: "Sneakers",
  //                                         icon: "👟",
  //                                         description: "New season drops",
  //                                         badge: "Hot",
  //                                         href: "#sneakers"
  //                                     },
  //                                     {
  //                                         label: "Outerwear",
  //                                         icon: "🧥",
  //                                         description: "Rain or shine",
  //                                         href: "#outerwear"
  //                                     }
  //                                 ]
  //                             }
  //                         ]
  //                     }
  //                 },
  //                 {
  //                     label: "Gift cards",
  //                     href: "#gift-cards",
  //                     icon: "🎁"
  //                 }
  //             ]
  //         }
  //     },
  //     {
  //         label: "Pricing",
  //         href: "#pricing"
  //     }
  // ]
});

// Copyright Scripts
(function () {
  const now = new Date();
  const gregorianYear = now.getFullYear();

  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  })
    .format(now)
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  document.getElementById("years").textContent =
    `${gregorianYear} - ${persianYear}`;
})();
