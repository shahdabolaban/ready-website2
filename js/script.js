// Ready? — Arabic tips for every new beginning
const categoryData = {
  university: {
    title: "أول يوم جامعة",
    subtitle: "اتعلم · اتطور · انتمي",
    symbol: "🎓",
    tips: [
      { title: "ألبس إيه؟", text: "اختار لبس مريح وشبه ستايلك، مش لازم تشتري لبس جديد. جهّز لبسك والشنطة من بالليل عشان متتوترش الصبح. اختار جزمة مريحة عشان هتتحرك كتير." },
      { title: "أتعرف على ناس جديدة إزاي؟", text: "ابدأ بابتسامة وسلام بسيط. اسأل اللي جنبك عن الجدول أو المحاضرات عشان تفتح كلام. متحاولش تجبر نفسك تبقى اجتماعي، خليك على طبيعتك. خد وقتك في اختيار صحابك ومتستعجلش الحكم على الناس." },
      { title: "أذاكر إزاي؟", text: "راجع محاضراتك أول بأول حتى لو نص ساعة يوميًا. اكتب مواعيد الامتحانات والتسليمات من البداية. قسم المواد لأجزاء صغيرة بدل ما تتراكم عليك. متستناش قبل الامتحان عشان تبدأ." },
      { title: "لو متوتر من أول يوم", text: "افتكر إن ناس كتير حواليك متوترة زيك. اعرف طريقك وجدولك قبلها بيوم. مش لازم تعمل صحاب أو تفهم كل حاجة من أول يوم. ادّي لنفسك فرصة تتعود واحدة واحدة." }
    ]
  },
  career: {
    title: "أول يوم شغل",
    subtitle: "استعد · اتواصل · اتعلم",
    symbol: "💼",
    tips: [
      { title: "أجهز نفسي إزاي؟", text: "اختار لبس مناسب لطبيعة المكان. جهّز أوراقك وأي حاجة طلبوها منك. اعرف الطريق وحاول توصل قبل المعاد بعشر دقايق. نام كويس وجهّز شنطتك من الليلة اللي قبلها." },
      { title: "أتعامل مع زمايلي إزاي؟", text: "سلّم على الناس وعرّفهم بنفسك ببساطة. خليك ودود ومحترم مع الكل. اسأل لو محتاج مساعدة ومتتكسفش من السؤال. متدخلش في النميمة أو مشاكل الشغل من أول يوم." },
      { title: "أتصرف إزاي في الشغل؟", text: "اسمع التعليمات كويس واكتب أي تفاصيل مهمة. لو مش فاهم التاسك، اسأل عن المطلوب والميعاد النهائي. لو خلصت شغلك، اسأل لو فيه حاجة تانية تساعد فيها. لو غلطت، اعترف بالغلط واتعلم إزاي تصلحه." }
    ]
  },
  interviews: {
    title: "أول Interview",
    subtitle: "استعد · اتدرب · اتقدم",
    symbol: "🗣️",
    tips: [
      { title: "أقدم نفسي إزاي؟", text: "ممكن تقول: «أنا اسمي …، طالب في كلية …، مهتم بمجال …، وعندي اهتمام إني أطور مهاراتي وأكتسب خبرة عملية في المجال.» عدّل الكلام حسب دراستك وخبرتك الحقيقية، ومتقولش كلام محفوظ من غير ما تفهمه." },
      { title: "أجاوب على الأسئلة إزاي؟", text: "لو اتسألت عن نقاط قوتك، اختار حاجتين حقيقيتين فيك واذكر مثال عليهم. لو معندكش خبرة، اتكلم عن مشاريع الجامعة أو أي مهارات اتعلمتها. لو السؤال مش واضح، اطلب من الشخص يوضحه. جاوب بصدق ومتدّعيش إنك تعرف حاجة مش عارفها." },
      { title: "لو متوتر؟", text: "اتدرب على إجاباتك بصوت عالي قبل المقابلة. جهّز لبسك وأوراقك من اليوم اللي قبله. خد نفس ببطء قبل ما تدخل. مش لازم تجاوب بسرعة، خد ثانية تفكر." },
      { title: "أعمل إيه بعد المقابلة؟", text: "اشكر الشخص على وقته وفرصة المقابلة. لو قالك هيرد في موعد معين، استنى الموعد ده. لو مفيش رد، ممكن تبعت رسالة متابعة مهذبة. متعتبرش الرفض نهاية الطريق؛ كل مقابلة بتعلمك حاجة." }
    ]
  },
  travel: {
    title: "أول سفر لوحدي",
    subtitle: "خطط · جهّز · خليك آمن",
    symbol: "✈️",
    tips: [
      { title: "أجهز إيه قبل السفر؟", text: "احجز المواصلات والسكن من مصدر موثوق. اتأكد من العنوان وطريقة الوصول. ابعت تفاصيل الرحلة لشخص تثق فيه. حمّل الخرائط والتذاكر على موبايلك قبل ما تتحرك." },
      { title: "Checklist الشنطة", text: "خد البطاقة والتذاكر والأوراق المهمة، والشاحن وباور بانك مشحون، ولبس مناسب للطقس وعدد أيام الرحلة، والأدوية الشخصية لو بتستخدمها، وفلوس كاش بسيطة وكارت الدفع لو متاح." },
      { title: "أحافظ على أماني إزاي؟", text: "شارك تفاصيل رحلتك مع شخص موثوق. خليك في أماكن معروفة ومضاءة، خصوصًا بالليل. متشاركش تفاصيل مكان إقامتك مع أشخاص متعرفهمش. احتفظ بأوراقك وفلوسك في مكان آمن. اعرف رقم الطوارئ المحلي قبل ما تسافر." },
      { title: "أنظم ميزانيتي إزاي؟", text: "حدد ميزانية للمواصلات والأكل والإقامة. سيب مبلغ للطوارئ ومتعتبرهوش من مصاريفك اليومية. قارن الأسعار قبل الحجز. سجل مصاريفك على الموبايل عشان تعرف فلوسك بتروح فين." }
    ]
  },
  training: {
    title: "أول تدريب",
    subtitle: "اتعلم · اسأل · اتطور",
    symbol: "🌟",
    tips: [
      { title: "أبدأ إزاي؟", text: "اعرف الشركة بتعمل إيه وإيه طبيعة المجال قبل ما تبدأ. اسأل عن المهام المطلوبة منك بدل ما تفضل مستني توجيه. دوّن المعلومات الجديدة عشان تقدر ترجع لها. متقارنش نفسك بالناس اللي عندها خبرة أكبر منك. اطلب Feedback من المسؤول عشان تعرف إيه اللي محتاج تطوره. احتفظ بشغلك ومشاريعك في ملف، بشرط يكون مسموح لك تعرضها." },
      { title: "💡 افتكر", text: "مش مطلوب منك تعرف كل حاجة من أول يوم؛ المطلوب إنك تكون مستعد تتعلم وتحاول." }
    ]
  },
  internship: {
    title: "أول تدريب",
    subtitle: "اتعلم · اسأل · اتطور",
    symbol: "🌟",
    tips: [
      { title: "أبدأ إزاي؟", text: "اعرف الشركة بتعمل إيه وإيه طبيعة المجال قبل ما تبدأ. اسأل عن المهام المطلوبة منك بدل ما تفضل مستني توجيه. دوّن المعلومات الجديدة عشان تقدر ترجع لها. متقارنش نفسك بالناس اللي عندها خبرة أكبر منك. اطلب Feedback من المسؤول عشان تعرف إيه اللي محتاج تطوره. احتفظ بشغلك ومشاريعك في ملف، بشرط يكون مسموح لك تعرضها." },
      { title: "💡 افتكر", text: "مش مطلوب منك تعرف كل حاجة من أول يوم؛ المطلوب إنك تكون مستعد تتعلم وتحاول." }
    ]
  },
  living: {
    title: "أول مرة أعيش بعيد عن البيت",
    subtitle: "استقر · اتأقلم · ابدأ",
    symbol: "🏠",
    tips: [
      { title: "أتعامل مع الحياة الجديدة إزاي؟", text: "اتعلم تعمل كام أكلة سهلة بدل ما تعتمد على الأكل الجاهز. حدد مصروف أسبوعي للأكل والمواصلات والاحتياجات. حافظ على مواعيد نوم معقولة ونظام بسيط لتنضيف المكان. كلم أهلك وصحابك، وفي نفس الوقت ادّي لنفسك فرصة تكوّن حياة جديدة. لو حاسس بالوحدة، انزل اتمشى أو شارك في نشاط بتحبه. مش لازم تتأقلم من أول أسبوع؛ ادّي لنفسك وقت." }
    ]
  }
};

const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const detailTitle = document.getElementById("detailTitle");
const detailSubtitle = document.getElementById("detailSubtitle");
const detailSymbol = document.getElementById("detailSymbol");
const tipsContent = document.getElementById("tipsContent");
const toast = document.getElementById("toast");
const sideMenu = document.getElementById("sideMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function getSavedTips() {
  try { return JSON.parse(localStorage.getItem("readySavedTips") || "[]"); }
  catch { return []; }
}
function saveSavedTips(items) {
  localStorage.setItem("readySavedTips", JSON.stringify(items));
}

function openCategory(category) {
  const data = categoryData[category];
  if (!data) return;
  detailTitle.textContent = data.title;
  detailSubtitle.textContent = data.subtitle;
  detailSymbol.textContent = data.symbol;
  tipsContent.replaceChildren();

  data.tips.forEach((tip, index) => {
    const card = document.createElement("article");
    card.className = "tip-card";
    const heading = document.createElement("h2");
    const number = document.createElement("span");
    number.className = "tip-number";
    number.textContent = String(index + 1).padStart(2, "0");
    heading.append(number, document.createTextNode(tip.title));
    const paragraph = document.createElement("p");
    paragraph.textContent = tip.text;
    const saveButton = document.createElement("button");
    saveButton.className = "save-tip";
    const key = `${category}-${index}`;
    const isSaved = getSavedTips().includes(key);
    saveButton.textContent = isSaved ? "♥ Saved" : "♡ Save this tip";
    saveButton.setAttribute("aria-pressed", String(isSaved));
    saveButton.addEventListener("click", () => {
      const saved = getSavedTips();
      const exists = saved.includes(key);
      saveSavedTips(exists ? saved.filter(item => item !== key) : [...saved, key]);
      saveButton.textContent = exists ? "♡ Save this tip" : "♥ Saved";
      saveButton.setAttribute("aria-pressed", String(!exists));
      showToast(exists ? "Removed from Saved" : "Added to Saved");
    });
    card.append(heading, paragraph, saveButton);
    tipsContent.append(card);
  });

  homeView.classList.add("hidden");
  detailView.classList.remove("hidden");
  setActiveNav("home", false);
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  detailView.classList.add("hidden");
  homeView.classList.remove("hidden");
  setActiveNav("home", false);
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function setActiveNav(name, toastMessage = true) {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.nav === name);
  });
  if (toastMessage && name !== "home") {
    const messages = {
      explore: "Choose a topic from the home screen to explore.",
      saved: "Open a tip and tap “Save this tip” to keep it here.",
      profile: "Your profile space can be added when you're ready."
    };
    showToast(messages[name] || "Coming soon");
  }
}
function openMenu() {
  sideMenu.classList.add("open");
  sideMenu.setAttribute("aria-hidden", "false");
  menuBackdrop.classList.add("show");
  document.getElementById("menuButton").setAttribute("aria-expanded", "true");
}
function closeMenu() {
  sideMenu.classList.remove("open");
  sideMenu.setAttribute("aria-hidden", "true");
  menuBackdrop.classList.remove("show");
  document.getElementById("menuButton").setAttribute("aria-expanded", "false");
}

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => openCategory(button.dataset.category));
});
document.getElementById("backButton").addEventListener("click", showHome);
document.getElementById("menuButton").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);
document.querySelector("[data-home-link]").addEventListener("click", event => {
  event.preventDefault();
  showHome();
});
document.getElementById("notificationButton").addEventListener("click", () => showToast("You're all caught up ♡"));
document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    const nav = button.dataset.nav;
    setActiveNav(nav);
    if (nav === "home") showHome();
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});
