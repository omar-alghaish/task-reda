export const filterOptions = [
  {
    title: "اعداد المتجر لاول مره",
    iconClass: "fa-solid fa-gear",
    children: [
      {
        title: "مقالات عامه",
        children: [
          {
            title: "تسجيل حساب جديد",
            id: "test1",
            content: {
              title: "مثال على مقال ديناميكي",
              date: "3 ديسمبر، 2024",
              sections: [
                {
                  type: "intro",
                  content:
                    "محلي من سلة هي قناة بيع متكاملة تمكّن تجار سلة من عرض وتسويق منتجاتهم مجاناً لآلاف العملاء الجدد في مكان واحد، حيث يمكن للعميل التجول بين عشرات الآلاف من المتاجر المحلية على منصة سلة، وملايين المنتجات المميَّزة، مع إمكانية البحث باسم وتصنيف المنتج، والمدينة.",
                },
                {
                  type: "list",
                  title: "قسم القائمة",
                  items: [
                    {
                      text: "البند 1",
                      image:
                        "https://cdn.salla.sa/Gnh9ZhcPEehUOP4Uy5Gk9jEXzruq566WquHxsUKS.jpg",
                    },
                    { text: "البند 2" },
                    {
                      text: "البند 3",
                      image:
                        "https://cdn.salla.sa/U3SwS8HhqfobTemHk2al3uM7oN4C7fHRE9qtYni6.jpg",
                    },
                  ],
                },
                {
                  type: "steps",
                  title: "الخطوات التي يجب اتباعها",
                  items: [
                    {
                      text: "الخطوة 1",
                      image:
                        "https://cdn.salla.sa/hC4qH2DxgGsPWLRp96836wkEYdYyUdTLreZElc9x.jpg",
                    },
                    { text: "الخطوة 2" },
                    {
                      text: "الخطوة 3",
                      image:
                        "https://cdn.salla.sa/5vRBRSvMO9EQ8i7TDEgvOGtUrlzxd4k3VEFvvqqG.jpg",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://cdn.salla.sa/JG6lDPqEMek5HS7cU33xNQ4YaF5RpbxaWSLIYmMt.jpg",
                  alt: "صورة توضيحية",
                },
                {
                  type: "faq",
                  title: "الأسئلة المتكررة",
                  items: [
                    {
                      question: "ما هو هذا؟",
                      answer: "هذا مثال على الأسئلة المتكررة.",
                    },
                    { question: "كيف يعمل؟", answer: "يعمل بشكل ديناميكي." },
                  ],
                },
                {
                  type: "related",
                  title: "روابط ذات صلة",
                  links: [
                    { href: "https://example.com", text: "رابط مثال 1" },
                    { href: "https://example2.com", text: "رابط مثال 2" },
                  ],
                },
              ],
            },
          },
          {
            title: "إعدادات الحساب",
            id: "test2",
          },
          {
            title: "دليل الاستخدام",
            id: "test3",
          },
        ],
      },
      {
        title: "مقالات عامه 2",
        children: [
          {
            title: "كيفية إضافة منتج",
            id: "test4",
          },
          {
            title: "إدارة الحسابات",
            id: "test5",
          },
        ],
      },
      {
        title: "مقالات عامه 3",
        children: [
          {
            title: "تحديثات النظام",
            id: "test6",
          },
          {
            title: "إدارة المخزون",
            id: "test7",
          },
        ],
      },
    ],
  },
  {
    title: "المنتجات",
    iconClass: "fa-solid fa-box",
    children: [
      {
        title: "مقال 1",
        id: "article1",
      },
      {
        title: "مقال 2",
        id: "article2",
      },
      {
        title: "إضافة منتج جديد",
        id: "article3",
      },
      {
        title: "إدارة المنتجات",
        id: "article4",
      },
    ],
  },
  {
    title: "العملاء",
    iconClass: "fa-solid fa-users",
    children: [
      {
        title: "إضافة عميل",
        id: "client1",
      },
      {
        title: "إدارة العملاء",
        id: "client2",
      },
      {
        title: "ملاحظات العملاء",
        id: "client3",
      },
      {
        title: "إرسال رسائل للعملاء",
        id: "client4",
      },
    ],
  },
  {
    title: "الطلبات",
    iconClass: "fa-solid fa-cart-shopping",
    children: [
      {
        title: "الطلبات الواردة",
        id: "order1",
      },
      {
        title: "الطلبات المكتملة",
        id: "order2",
      },
      {
        title: "إلغاء الطلبات",
        id: "order3",
      },
      {
        title: "التقارير الإحصائية للطلبات",
        id: "order4",
      },
    ],
  },
  {
    title: "المخزون",
    iconClass: "fa-solid fa-warehouse",
    children: [
      {
        title: "إضافة مخزون جديد",
        id: "stock1",
      },
      {
        title: "تحديث الكميات",
        id: "stock2",
      },
      {
        title: "إدارة الموردين",
        id: "stock3",
      },
      {
        title: "تقارير المخزون",
        id: "stock4",
      },
    ],
  },
  {
    title: "الإعدادات",
    iconClass: "fa-solid fa-cogs",
    children: [
      {
        title: "تخصيص واجهة المتجر",
        id: "settings1",
      },
      {
        title: "إعدادات الدفع",
        id: "settings2",
      },
      {
        title: "إعدادات الشحن",
        id: "settings3",
      },
      {
        title: "إعدادات اللغة",
        id: "settings4",
      },
    ],
  },
  {
    title: "التقارير",
    iconClass: "fa-solid fa-chart-line",
    children: [
      {
        title: "تقارير المبيعات",
        id: "report1",
      },
      {
        title: "تقارير العملاء",
        id: "report2",
      },
      {
        title: "تقارير المخزون",
        id: "report3",
      },
      {
        title: "تقارير الأداء العام",
        id: "report4",
      },
    ],
  },
  {
    title: "الخصومات والعروض",
    iconClass: "fa-solid fa-tags",
    children: [
      {
        title: "إضافة عرض جديد",
        id: "discount1",
      },
      {
        title: "إدارة العروض",
        id: "discount2",
      },
      {
        title: "الخصومات الحالية",
        id: "discount3",
      },
      {
        title: "تفعيل العروض الموسمية",
        id: "discount4",
      },
    ],
  },
  {
    title: "الشحن",
    iconClass: "fa-solid fa-truck",
    children: [
      {
        title: "إعدادات الشحن",
        id: "shipping1",
      },
      {
        title: "إضافة شركة شحن",
        id: "shipping2",
      },
      {
        title: "تتبع الشحنات",
        id: "shipping3",
      },
      {
        title: "إدارة خيارات الشحن",
        id: "shipping4",
      },
    ],
  },
  {
    title: "التسويق",
    iconClass: "fa-solid fa-bullhorn",
    children: [
      {
        title: "إدارة الحملات الإعلانية",
        id: "marketing1",
      },
      {
        title: "إعلانات الفيسبوك",
        id: "marketing2",
      },
      {
        title: "إعلانات جوجل",
        id: "marketing3",
      },
      {
        title: "التسويق عبر البريد الإلكتروني",
        id: "marketing4",
      },
    ],
  },
  {
    title: "إدارة المحتوى",
    iconClass: "fa-solid fa-pencil-alt",
    children: [
      {
        title: "إضافة مقالة جديدة",
        id: "content1",
      },
      {
        title: "إدارة المقالات",
        id: "content2",
      },
      {
        title: "إضافة فيديوهات",
        id: "content3",
      },
      {
        title: "إدارة الوسائط",
        id: "content4",
      },
    ],
  },
  {
    title: "المراجعات والتقييمات",
    iconClass: "fa-solid fa-star",
    children: [
      {
        title: "إدارة المراجعات",
        id: "reviews1",
      },
      {
        title: "مراجعات العملاء",
        id: "reviews2",
      },
      {
        title: "الرد على التقييمات",
        id: "reviews3",
      },
    ],
  },
  {
    title: "التدريب والدعم",
    iconClass: "fa-solid fa-headset",
    children: [
      {
        title: "دورات تدريبية",
        id: "support1",
      },
      {
        title: "دعم العملاء",
        id: "support2",
      },
      {
        title: "أسئلة شائعة",
        id: "support3",
      },
    ],
  },
  {
    title: "الأمان",
    iconClass: "fa-solid fa-shield-alt",
    children: [
      {
        title: "إعدادات الأمان",
        id: "security1",
      },
      {
        title: "إدارة الوصول",
        id: "security2",
      },
      {
        title: "حماية الحسابات",
        id: "security3",
      },
    ],
  },
  {
    title: "الموارد البشرية",
    iconClass: "fa-solid fa-users-cog",
    children: [
      {
        title: "إضافة موظف جديد",
        id: "hr1",
      },
      {
        title: "إدارة الموظفين",
        id: "hr2",
      },
      {
        title: "الرواتب والمزايا",
        id: "hr3",
      },
    ],
  },
  {
    title: "البيانات والتحليلات",
    iconClass: "fa-solid fa-database",
    children: [
      {
        title: "تحليل البيانات",
        id: "data1",
      },
      {
        title: "إعداد التقارير التحليلية",
        id: "data2",
      },
      {
        title: "الاستفادة من البيانات",
        id: "data3",
      },
    ],
  },
];

export const filterOptionsIdeas = [
  {
    title: "الإعدادات",
    iconClass: "fa-solid fa-cogs",
    children: [
      {
        title: "تخصيص واجهة المتجر",
        id: "settings1",
      },
      {
        title: "إعدادات الدفع",
        id: "settings2",
      },
      {
        title: "إعدادات الشحن",
        id: "settings3",
      },
      {
        title: "إعدادات اللغة",
        id: "settings4",
      },
    ],
  },
  {
    title: "التقارير",
    iconClass: "fa-solid fa-chart-line",
    children: [
      {
        title: "تقارير المبيعات",
        id: "report1",
      },
      {
        title: "تقارير العملاء",
        id: "report2",
      },
      {
        title: "تقارير المخزون",
        id: "report3",
      },
      {
        title: "تقارير الأداء العام",
        id: "report4",
      },
    ],
  },
  {
    title: "الخصومات والعروض",
    iconClass: "fa-solid fa-tags",
    children: [
      {
        title: "إضافة عرض جديد",
        id: "discount1",
      },
      {
        title: "إدارة العروض",
        id: "discount2",
      },
      {
        title: "الخصومات الحالية",
        id: "discount3",
      },
      {
        title: "تفعيل العروض الموسمية",
        id: "discount4",
      },
    ],
  },
  {
    title: "الشحن",
    iconClass: "fa-solid fa-truck",
    children: [
      {
        title: "إعدادات الشحن",
        id: "shipping1",
      },
      {
        title: "إضافة شركة شحن",
        id: "shipping2",
      },
      {
        title: "تتبع الشحنات",
        id: "shipping3",
      },
      {
        title: "إدارة خيارات الشحن",
        id: "shipping4",
      },
    ],
  },
  {
    title: "التسويق",
    iconClass: "fa-solid fa-bullhorn",
    children: [
      {
        title: "إدارة الحملات الإعلانية",
        id: "marketing1",
      },
      {
        title: "إعلانات الفيسبوك",
        id: "marketing2",
      },
      {
        title: "إعلانات جوجل",
        id: "marketing3",
      },
      {
        title: "التسويق عبر البريد الإلكتروني",
        id: "marketing4",
      },
    ],
  },
  {
    title: "إدارة المحتوى",
    iconClass: "fa-solid fa-pencil-alt",
    children: [
      {
        title: "إضافة مقالة جديدة",
        id: "content1",
      },
      {
        title: "إدارة المقالات",
        id: "content2",
      },
      {
        title: "إضافة فيديوهات",
        id: "content3",
      },
      {
        title: "إدارة الوسائط",
        id: "content4",
      },
    ],
  },
  {
    title: "المراجعات والتقييمات",
    iconClass: "fa-solid fa-star",
    children: [
      {
        title: "إدارة المراجعات",
        id: "reviews1",
      },
      {
        title: "مراجعات العملاء",
        id: "reviews2",
      },
      {
        title: "الرد على التقييمات",
        id: "reviews3",
      },
    ],
  },
  {
    title: "التدريب والدعم",
    iconClass: "fa-solid fa-headset",
    children: [
      {
        title: "دورات تدريبية",
        id: "support1",
      },
      {
        title: "دعم العملاء",
        id: "support2",
      },
      {
        title: "أسئلة شائعة",
        id: "support3",
      },
    ],
  },
  {
    title: "الأمان",
    iconClass: "fa-solid fa-shield-alt",
    children: [
      {
        title: "إعدادات الأمان",
        id: "security1",
      },
      {
        title: "إدارة الوصول",
        id: "security2",
      },
      {
        title: "حماية الحسابات",
        id: "security3",
      },
    ],
  },
  {
    title: "الموارد البشرية",
    iconClass: "fa-solid fa-users-cog",
    children: [
      {
        title: "إضافة موظف جديد",
        id: "hr1",
      },
      {
        title: "إدارة الموظفين",
        id: "hr2",
      },
      {
        title: "الرواتب والمزايا",
        id: "hr3",
      },
    ],
  },
  {
    title: "البيانات والتحليلات",
    iconClass: "fa-solid fa-database",
    children: [
      {
        title: "تحليل البيانات",
        id: "data1",
      },
      {
        title: "إعداد التقارير التحليلية",
        id: "data2",
      },
      {
        title: "الاستفادة من البيانات",
        id: "data3",
      },
    ],
  },
];
