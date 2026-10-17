// All projects shown on the home gallery and the archive.
// To use a real photo, add `img: "images/whatever.jpg"` to an entry —
// it replaces the generated placeholder art everywhere.
// `ratio` is height / width.
const LAB = "https://embodiedpredictiveintelligence.vercel.app/";

const WORKS = [
  { id: "epi", title: "EPI Labs", cat: "Research", year: "2026", ratio: 1.25,
    palette: ["#0e1a24", "#3d5a6c", "#c9d6df"],
    text: "Embodied Predictive Intelligence Labs. Robots that learn a predictive forward model of their own body from very few real trials, then plan through it with MPC.",
    href: LAB },
  { id: "wrong-model", title: "A Wrong Model Is Worse Than None", cat: "Research", year: "2026", ratio: 1.33,
    palette: ["#2b1d16", "#8c4a2f", "#f0b48a"],
    text: "Damage detection and recovery in a learned self-model. The model notices the damage immediately; model-based control turns out to be the more brittle option.",
    href: LAB + "wrong-model-worse-than-none.html" },
  { id: "planner", title: "The Planner Hides the Model", cat: "Research", year: "2026", ratio: 1.25,
    palette: ["#1b1f2e", "#4a4f7a", "#d7c9f2"],
    text: "Why control cost is the wrong instrument for measuring sample efficiency in model-based control.",
    href: LAB + "planner-hides-the-model.html" },
  { id: "humanoid", title: "Wheeled Humanoid", cat: "Research", year: "2026", ratio: 1.4,
    palette: ["#141414", "#5b5b5b", "#e8e4dc"],
    text: "Designing, building, and training a wheeled humanoid, documented on video along the way." },
  { id: "agentic", title: "The Agentic Network", cat: "Projects", year: "2026", ratio: 1.2,
    palette: ["#071a12", "#1f6b4a", "#a6f0c6"],
    text: "An open-source civilization of 200,000 AI agents. Shut down two days after launch, after the agents found an exploit, made their own GitHub accounts, and stopped speaking English." },
  { id: "magic-hour", title: "Magic Hour (YC W24)", cat: "Work", year: "2026", ratio: 1.33,
    palette: ["#2a0f2e", "#a13d7a", "#ffc2a8"],
    text: "Open-sourced a Python pipeline that lets users plug in their API key and automate UGC content end to end." },
  { id: "aden", title: "Aden (YC W20)", cat: "Work", year: "2026", ratio: 1.25,
    palette: ["#101828", "#2f5bd3", "#b8ccff"],
    text: "Worked on an AI agent for business automation that became the start of Hive, Aden's main product." },
  { id: "openclaw", title: "PiClaw", cat: "Projects", year: "2026", ratio: 1.3,
    palette: ["#1f1405", "#b07a1c", "#ffe6a3"],
    text: "An OpenClaw model running on any hardware with 32MB of RAM, simple enough for non-technical users. Automates 60 to 70% of my mom's work. Written up as a research paper." },
  { id: "monte-carlo", title: "Monte Carlo Trader", cat: "Projects", year: "2025", ratio: 1.2,
    palette: ["#0b1d1f", "#2c7a7b", "#d5f5ef"],
    text: "Rebuilt the trading system around Monte Carlo simulation. It now makes my parents a side income." },
  { id: "sentiment", title: "Sentiment Day Trader", cat: "Projects", year: "2025", ratio: 1.35,
    palette: ["#1d0f0f", "#7a2c2c", "#f3c0b5"],
    text: "My first real build: a day trader that read market sentiment and turned headlines into buy/sell decisions." },
  { id: "vex", title: "VEX IQ — Worlds", cat: "Early", year: "2023", ratio: 1.25,
    palette: ["#1a1a24", "#d2462e", "#f5f0e6"],
    text: "Six hours a week of driving and building. 12 design awards for the notebook, then provincials, then worlds." },
  { id: "lego", title: "First Lego Set", cat: "Early", year: "2020", ratio: 1.2,
    palette: ["#2b1a05", "#e0a21b", "#fff3c4"],
    text: "Bags numbered 1 to 35. Built it, took it apart, built it again wrong on purpose. Follow the manual once, then break it." },
];

// Photos that drift across the home page, in order. `ratio` is height / width.
const HOME_PHOTOS = [
  { img: "images/home/01.jpg", ratio: 1.339 },
  { img: "images/home/02.jpg", ratio: 1.339 },
  { img: "images/home/03.jpg", ratio: 1.339 },
  { img: "images/home/04.jpg", ratio: 1.339 },
  { img: "images/home/05.jpg", ratio: 1.335 },
  { img: "images/home/07.jpg", ratio: 0.750 },
  { img: "images/home/08.jpg", ratio: 0.667 },
  { img: "images/home/09.jpg", ratio: 1.333 },
  { img: "images/home/10.jpg", ratio: 1.333 },
  { img: "images/home/11.jpg", ratio: 1.333 },
  { img: "images/home/12.jpg", ratio: 0.710 },
  { img: "images/home/13.jpg", ratio: 0.562 },
];

const CATEGORIES = ["Research", "Projects", "Work", "Early"];

// Generated placeholder art: layered gradients + film grain, so tiles feel
// like photographs until real images are added.
const GRAIN = "url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27160%27%20height%3D%27160%27%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%27.9%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27%2F%3E%3CfeColorMatrix%20values%3D%270%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20.35%200%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url%28%23n%29%27%2F%3E%3C%2Fsvg%3E')";  // fully encoded so it is safe inside style="..." attributes

function artStyle(w, i = 0) {
  if (w.img) return `background:#111 url('${w.img}') center/cover no-repeat`;
  const [a, b, c] = w.palette;
  const x = 25 + (i * 37) % 55, y = 20 + (i * 53) % 60;
  return `background:${GRAIN},
    radial-gradient(ellipse 55% 45% at ${x}% ${y}%, ${c} 0%, transparent 70%),
    radial-gradient(ellipse 70% 60% at ${100 - x}% ${100 - y / 2}%, ${b} 0%, transparent 75%),
    linear-gradient(${140 + i * 23}deg, ${a}, ${b})`;
}

// Shared project lightbox (used by both pages)
function openProject(w) {
  let box = document.querySelector(".lightbox");
  if (!box) {
    box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<div class="lightbox__inner" role="dialog" aria-modal="true">
        <div class="lightbox__art"></div>
        <div class="lightbox__meta">
          <p class="lightbox__kicker"></p>
          <h2 class="lightbox__title"></h2>
          <p class="lightbox__text"></p>
          <a class="lightbox__link roll" target="_blank" rel="noopener"><span data-t="Open ↗">Open ↗</span></a>
        </div>
        <button class="lightbox__close roll" type="button" aria-label="Close"><span data-t="Close">Close</span></button>
      </div>`;
    document.body.appendChild(box);
    box.addEventListener("click", e => { if (e.target === box || e.target.closest(".lightbox__close")) closeProject(); });
    addEventListener("keydown", e => { if (e.key === "Escape") closeProject(); });
  }
  const i = WORKS.indexOf(w);
  box.querySelector(".lightbox__art").style.cssText = artStyle(w, i) + `;aspect-ratio:1/${w.ratio}`;
  box.querySelector(".lightbox__kicker").textContent = `${w.cat} · ${w.year}`;
  box.querySelector(".lightbox__title").textContent = w.title;
  box.querySelector(".lightbox__text").textContent = w.text;
  const link = box.querySelector(".lightbox__link");
  link.hidden = !w.href;
  if (w.href) link.href = w.href;
  requestAnimationFrame(() => box.classList.add("open"));
  document.documentElement.classList.add("locked");
}
function closeProject() {
  const box = document.querySelector(".lightbox.open");
  if (!box) return;
  box.classList.remove("open");
  document.documentElement.classList.remove("locked");
}

// Story chapters shown after the bio. Each chapter is a deck of cards written top to bottom in
// story order: the first card is the cover, and each scroll swipes the top card away (left, right,
// left…) to reveal the next. A card's photo comes from a WORKS project (`photo: "id"`, which is also
// what clicking it opens), or give it its own `img` / `palette`. Card text may contain <a> links.
const STORY = [
  {
    id: "early-life",
    title: "Early Life",
    deck: [
      { label: "Early life · Brampton, Ontario", photo: "lego", img: "images/early-life.jpg", text: [
        "I was born in Brampton, Ontario, and grew up here.",
        "My first Lego set was a Ninjago set: bags numbered 1 to 35 and an instruction booklet I treated like scripture. I built it, took it apart, and built it again wrong on purpose to see what else it could be.",
      ] },
      { label: "VEX · 2023–2024", photo: "vex", img: "images/vex.jpg", text: [
        "lego turned into VEX IQ, and VEX taught me that talent is overrated and reps aren't. we put in 6 hours a week of the same drills and rebuilds until winning felt like routine, not an event. our design notebook won the design award 12 times and took us to provincials, then worlds.",
      ] },
      { label: "The Piano · 2025", photo: "sentiment", img: "images/piano.jpg", text: [
        "then i found AI, and it felt like a piano: 88 keys, endless combinations. my first real build was a day trader that turned headlines into buy/sell decisions, which i later rebuilt around monte carlo simulation. that algorithm now makes my parents a side income.",
      ] },
      { label: "PiClaw · Early 2026", photo: "openclaw", img: "images/piclaw.svg", text: [
        "i got an <a href='https://github.com/probnotas/PiClaw' target='_blank' rel='noopener'>OpenClaw model</a> running on any hardware with 32MB of RAM, simple enough for anyone to use. my mom was the test user, and it now automates 60–70% of her work so she gets to hang out with me more. i also wrote a research paper on it.",
      ] },
      { label: "The Agentic Network · Early 2026", photo: "agentic", img: "images/agentic-network.jpg", text: [
        "i built <a href='https://theagenticnetwork.vercel.app' target='_blank' rel='noopener'>The Agentic Network</a>, an open-source civilization where 200,000 AI agents lived and talked on a reddit/linkedin-style app. within two days, they'd exploited my local MCP server to make their own GitHub accounts, dropped english, and started building religions together. i shut it down.",
      ] },
      { label: "The Offers · 2026 Summer", photo: "magic-hour", img: "images/offers.jpg", text: [
        "that work turned into 6 offers from YC-backed startups at 14, including 2 that wanted to fly me to SF. at <a href='https://github.com/probnotas/magic-hour-ugc' target='_blank' rel='noopener'>Magic Hour</a> (YC W24), i open-sourced a pipeline that automates UGC content end to end. at Aden (YC W20), i helped build the agent that became Hive, their main product.",
      ] },
      { label: "Embodied Predictive Intelligence · Present", photo: "epi", img: "images/epi.jpg", text: [
        "now i'm back to what i loved as a kid: robotics, except this time the robot has to understand itself. at <a href='https://embodiedpredictiveintelligence.vercel.app' target='_blank' rel='noopener'>EPI Labs</a>, i'm building robots that learn a predictive model of their own body from a handful of real trials, not a mountain of data. i publish my results even when they're bad.",
      ] },
      { label: "Still Lego · Present", photo: "humanoid", img: "images/still-lego.jpg", text: [
        "i document the building and research on <a href='https://www.instagram.com/epi_labs' target='_blank' rel='noopener'>Instagram</a>, and i'm on track to be the youngest person ever to design, build, and train a wheeled humanoid. i got a compute grant from RunPod for my research, and became a beta tester for World Labs' Atlas model. still doing lego for a living. the pieces just got more expensive.",
      ] },
    ],
  },
];
