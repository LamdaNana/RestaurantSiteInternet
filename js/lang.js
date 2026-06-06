/* =========================================================
   La Maison Pourpre — lang.js
   Gestion bilingue FR / ZH + effets communs
   ========================================================= */

/* ─── Traductions ─────────────────────────────────────── */
const TRANSLATIONS = {

  /* ---- NAVIGATION & ÉLÉMENTS COMMUNS ---- */
  "nav_home":       { fr: "Accueil",     zh: "首页"   },
  "nav_menu":       { fr: "La Carte",    zh: "菜单"   },
  "nav_gallery":    { fr: "Galerie",     zh: "图库"   },
  "nav_about":      { fr: "À Propos",    zh: "关于我们" },
  "nav_contact":    { fr: "Contact",     zh: "联系"   },

  /* ---- INDEX ---- */
  "hero_sub":       { fr: "食膳坊",      zh: "食膳坊"  },
  "hero_title":     { fr: "Cuisine Chinoise Traditionnelle", zh: "传统中国美食" },
  "hero_desc":      { fr: "Une cuisine familiale au cœur du 11ᵉ arrondissement de Paris.", zh: "巴黎第十一区的家庭式中餐馆。" },
  "btn_carte":      { fr: "Découvrir la carte",  zh: "查看菜单" },
  "btn_find":       { fr: "Nous trouver",         zh: "找到我们" },

  "intro_label":    { fr: "Le Restaurant",        zh: "餐厅" },
  "intro_title":    { fr: "La Maison Pourpre",    zh: "紫屋" },
  "intro_p1":       { fr: "Ouvert depuis bientôt 8 ans, au coeur du quartier Belleville, La Maison Pourpre est un restaurant familial proposant une cuisine chinoise préparée à la commande.", zh: "位于巴黎贝尔维尔街区中心的家庭餐厅，提供现点现做的中国料理。" },
  "intro_p2":       { fr: "Notre carte réunit des plats populaires et des spécialités régionales, cuisinés avec soin et servis dans une ambiance simple et conviviale.", zh: "我们的菜单汇集了大众喜爱的菜肴和地方特色，精心烹制，在简洁温馨的氛围中为您呈上。" },

  "atm_label":      { fr: "Le Restaurant",        zh: "餐厅环境" },
  "atm_title":      { fr: "Une ambiance chaleureuse", zh: "温馨的用餐环境" },

  "info_addr_title":  { fr: "Adresse",    zh: "地址"   },
  "info_addr":        { fr: "13 Rue Louis Bonnet<br>75011 Paris", zh: "13 Rue Louis Bonnet<br>法国巴黎 75011" },
  "info_phone_title": { fr: "Téléphone",  zh: "电话"   },
  "info_hours_title": { fr: "Horaires",   zh: "营业时间" },
  "info_hours":       { fr: "Jeudi à Mardi<br>11h30 – 22h15<br><small>Fermé le mercredi</small>", zh: "周四至周二<br>11:30 – 22:15<br><small>周三休息</small>" },
  "info_email_title": { fr: "E-mail",     zh: "邮箱"   },

  /* ---- MENU ---- */
  "menu_hero_title":  { fr: "Notre Carte",  zh: "菜单" },
  "menu_hero_desc":   { fr: "Cuisine chinoise traditionnelle préparée à la commande.", zh: "传统中国菜现点现做。" },
  "allergen_label":   { fr: "Allergènes",   zh: "过敏原" },
  "allergen_text":    { fr: "Pour en savoir plus sur les ingrédients, les allergènes et les méthodes de préparation, vous pouvez appeler La Maison Pourpre.", zh: "如需了解食材、过敏原及烹饪方式，请致电紫屋餐厅。" },

  "cat_entrees":       { fr: "Entrées",                     zh: "前菜"       },
  "cat_trad":          { fr: "Spécialités",                 zh: "招牌菜"     },
  "cat_wok":           { fr: "Plats Principaux",            zh: "主菜"       },
  "cat_rice":          { fr: "Riz & Nouilles",              zh: "饭面"       },
  "cat_images":        { fr: "Images",                      zh: "照片"       },
  "cat_teppan":        { fr: "Plaque Chauffante",           zh: "铁板"       },
  "cat_rice_cake":     { fr: "Galettes de Riz & Vapeur",    zh: "年糕及蒸食" },
  "cat_seafood":       { fr: "Fruits de Mer",               zh: "海鲜"       },

  /* ---- À PROPOS ---- */
  "about_hero_title": { fr: "À Propos",       zh: "关于我们" },
  "about_hero_desc":  { fr: "Une cuisine familiale, simple et authentique.", zh: "家常、质朴、真实的中国料理。" },
  "about_label":      { fr: "La Maison Pourpre", zh: "紫屋餐厅"   },
  "about_title":      { fr: "Un restaurant de quartier", zh: "街区小餐馆" },
  "about_p1":         { fr: "Situé dans le 11ᵉ arrondissement de Paris, La Maison Pourpre est un petit restaurant familial fréquenté notamment par une clientèle chinoise qui y retrouve les goûts du pays.", zh: "紫屋位于巴黎第十一区，是一家小型家庭餐厅，深受中国顾客喜爱，因为在这里能品尝到家乡的味道。" },
  "about_p2":         { fr: "Ici, pas de mise en scène. Une cuisine honnête, des plats généreux, et un accueil sans façon.", zh: "这里没有刻意的摆设，只有诚实的烹饪、丰盛的菜肴和简单的招待。" },
  "about_p3":         { fr: "La carte regroupe des classiques appréciés — bœuf aux cinq parfums, raviolis grillés, travers de porc, soupes de nouilles — ainsi que des plats sur plaque chauffante qui font la réputation de la maison.", zh: "菜单涵盖众多经典菜肴——五香牛肉、煎饺、排骨、面条汤——以及深受好评的铁板系列。" },

  "val_label":   { fr: "Notre Cuisine",   zh: "我们的烹饪" },
  "val_title":   { fr: "Ce qui nous tient à cœur", zh: "我们所珍视的" },
  "val1_title":  { fr: "Tradition",       zh: "传统"    },
  "val1_text":   { fr: "Des recettes inspirées de la cuisine chinoise traditionnelle.", zh: "源自中国传统饮食的食谱。" },
  "val2_title":  { fr: "Partage",         zh: "分享"    },
  "val2_text":   { fr: "Une cuisine pensée pour être dégustée ensemble.", zh: "为共同品味而设计的美食。" },
  "val3_title":  { fr: "Convivialité",    zh: "温情"    },
  "val3_text":   { fr: "Un accueil chaleureux dans un cadre simple et familial.", zh: "简洁家常环境中的温暖招待。" },

  "visit_title":  { fr: "Nous rendre visite",  zh: "来访我们" },
  "visit_p1":     { fr: "Nous vous accueillons tout au long de la semaine pour partager avec vous les saveurs de notre cuisine.", zh: "我们每周都欢迎您的到来，与您分享我们的美食风味。" },
  "visit_p2":     { fr: "Retrouvez-nous au cœur du quartier Belleville, au 13 Rue Louis Bonnet dans le 11ᵉ arrondissement de Paris.", zh: "我们位于贝尔维尔街区中心，巴黎第十一区路易·博内街13号。" },

  /* ---- CONTACT ---- */
  "contact_hero_title": { fr: "Contact",            zh: "联系我们"   },
  "contact_hero_desc":  { fr: "Nous trouver et nous contacter.",  zh: "找到我们并联系我们。" },
  "contact_info_label": { fr: "Informations",       zh: "联系信息"   },
  "contact_info_title": { fr: "Coordonnées",        zh: "详细信息"   },
  "contact_access":     { fr: "Accès",              zh: "交通指南"   },
  "contact_access_p1":  { fr: "Situé au cœur du quartier Belleville, dans le 11ᵉ arrondissement de Paris.", zh: "位于巴黎第十一区贝尔维尔街区中心。" },
  "contact_access_p2":  { fr: "Métro Belleville à quelques minutes à pied.", zh: "步行几分钟即可到达贝尔维尔地铁站。" },
  "contact_access_p3":  { fr: "Repas sur place, à emporter et livraison.", zh: "堂食、外带及外送均可。" },
  "contact_map_label":  { fr: "Localisation",       zh: "位置"       },
  "contact_map_title":  { fr: "Nous trouver",       zh: "找到我们"   },

  /* ---- GALERIE ---- */
  "gal_hero_title":  { fr: "Galerie",          zh: "图库"       },
  "gal_hero_desc":   { fr: "L'ambiance et les saveurs de notre restaurant.", zh: "我们餐厅的氛围与美食。" },
  "gal_label":       { fr: "食膳坊",            zh: "食膳坊"     },
  "gal_title":       { fr: "Un aperçu de nos plats", zh: "菜品一瞥" },
  "gal_desc":        { fr: "Entre plats traditionnels et moments de partage, bienvenue dans l'univers de La Maison Pourpre.", zh: "在传统菜肴与共享时光之间，欢迎来到紫屋的世界。" },

  /* ---- FOOTER ---- */
  "footer_tagline":  { fr: "Cuisine chinoise traditionnelle · Paris 11ᵉ", zh: "传统中国料理 · 巴黎第十一区" },
  "footer_copy":     { fr: "© 2026 La Maison Pourpre",  zh: "© 2026 紫屋餐厅" },
};

/* ─── Appliquer la langue ─────────────────────────────── */
function applyLang(lang) {
  localStorage.setItem('mp_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'fr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.innerHTML = TRANSLATIONS[key][lang];
    }
  });

  /* Attributs placeholder, title, alt */
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.setAttribute('title', TRANSLATIONS[key][lang]);
    }
  });

  /* Activer le bon bouton */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ─── Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Langue mémorisée (ou FR par défaut) */
  const savedLang = localStorage.getItem('mp_lang') || 'fr';
  applyLang(savedLang);

  /* Boutons de langue */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  /* Back to top */
  const btn = document.getElementById('backToTop');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 300);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* Reveal on scroll */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Lightbox galerie */
  document.querySelectorAll('.gal-item img').forEach(img => {
    img.addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      if (!lb) return;
      lb.querySelector('img').src = img.src;
      lb.classList.add('open');
    });
  });
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.addEventListener('click', () => lb.classList.remove('open'));
    document.querySelector('.lightbox-close')?.addEventListener('click', () => lb.classList.remove('open'));
  }
});
