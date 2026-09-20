(() => {
  const WEDDING = new Date("2027-05-23T00:00:00");

  const TIMELINE = [
    {
      when: "2019",
      what: "First chat",
      detail: "Two strangers, one conversation — and something quietly began.",
    },
    {
      when: "After",
      what: "Lost contact",
      detail: "Life pulled us onto different paths. The story paused… but it wasn’t over.",
    },
    {
      when: "Those years",
      what: "Different paths",
      detail: "Growing, changing, becoming who we needed to be — before finding each other again.",
    },
    {
      when: "2026",
      what: "Reconnected",
      detail: "Same hearts. Better timing. The universe hit ‘retry’ — and it worked.",
    },
    {
      when: "20 Aug 2026",
      what: "Engagement",
      detail: "A yes that felt like coming home. Forever officially started here.",
    },
    {
      when: "21 Oct 2026",
      what: "Birthday",
      detail: "Another year of you. Another level unlocked. Celebrating the love of my life.",
    },
    {
      when: "23 May 2027",
      what: "Wedding",
      detail: "The day I get to call you my husband. We’re counting every heartbeat until then.",
    },
  ];

  const REASONS = [
    "You always make me smile",
    "Your calm in my chaos",
    "The way you listen — really listen",
    "How safe I feel with you",
    "Your quiet kindness",
    "That laugh I can recognize anywhere",
    "You chose me again in 2026",
    "How you turn ordinary days soft",
    "Your patience with my overthinking",
    "The future I see in your eyes",
    "You make ‘home’ feel like a person",
    "Your stubborn hope",
    "Little texts that fix my whole day",
    "How gently you love me",
    "You’re my favorite notification",
    "The way you say my name",
    "You believe in us out loud",
    "Growing together, not apart",
    "You’re my person — full stop",
    "Becoming your wife is my favorite plot twist",
  ];

  const MEMORIES = [
    {
      label: "First spark",
      note: "That first conversation still lives rent-free in my heart.",
      tone: "linear-gradient(145deg, #e8d5dc, #f0c4d0)",
      src: "assets/1.png",
    },
    {
      label: "The gap",
      note: "Even the silence was part of our story.",
      tone: "linear-gradient(145deg, #d4c0c8, #e8b8c8)",
      src: "assets/2.png",
    },
    {
      label: "Hello again",
      note: "2026: the year the plot thickened — beautifully.",
      tone: "linear-gradient(145deg, #f0d0d8, #c45d7a55)",
      src: "assets/3.png",
    },
    {
      label: "Engaged",
      note: "20 Aug — my favorite yes.",
      tone: "linear-gradient(145deg, #f5e0e6, #d4a0b0)",
      src: "assets/4.png",
    },
    {
      label: "Us",
      note: "Not a placeholder forever — your photo goes here.",
      tone: "linear-gradient(160deg, #ecd0d8, #b87a8e)",
      src: "assets/5.png",
    },
    {
      label: "Soon",
      note: "May 2027 — walking toward forever, hand in hand.",
      tone: "linear-gradient(145deg, #f7e8ec, #c45d7a66)",
      src: "assets/6.png",
    },
  ];

  const LETTER = `Dear Kichu Chetta,

Thank you for finding your way back into my life.

What started as a chat in 2019 became a pause, then a miracle in 2026. You didn’t just return — you arrived as my future.

On your birthday, I celebrate every version of you: the boy I first messaged, the man who chose me again, and the husband I’ll walk toward on 23 May 2027.

This little project is my love letter in code — because some feelings deserve their own .exe. Love you Kichu Chetta ummmmaaahhhhhhh 😙💋

I love you.
Always,
Ponnu ♥`;

  /* ——— Boot ——— */
  const boot = document.getElementById("boot");
  const bootLog = document.getElementById("boot-log");
  const bootBar = document.getElementById("boot-bar");
  const welcome = document.getElementById("welcome");
  const journey = document.getElementById("journey");

  const bootLines = [
    "Initializing...",
    "Loading memories...",
    "Connecting hearts...",
    "Connection established ♥",
  ];

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function runBoot() {
    for (let i = 0; i < bootLines.length; i++) {
      const p = document.createElement("p");
      p.textContent = `> ${bootLines[i]}`;
      p.style.animationDelay = "0s";
      bootLog.appendChild(p);
      bootBar.style.width = `${((i + 1) / bootLines.length) * 100}%`;
      await sleep(700);
    }
    await sleep(600);
    boot.classList.add("done");
    await sleep(700);
    boot.classList.add("hidden");
    welcome.classList.remove("hidden");
    welcome.setAttribute("aria-hidden", "false");
    startWelcomeHearts();
  }

  function spawnHearts(layerId, className, count) {
    const layer = document.getElementById(layerId);
    if (!layer || layer.dataset.ready === "1") return;
    layer.dataset.ready = "1";
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = className;
      heart.textContent = "♥";
      const size = 0.65 + Math.random() * 1.35;
      const duration = 8 + Math.random() * 10;
      const delay = Math.random() * -16;
      const left = Math.random() * 100;
      const drift = (Math.random() * 90 - 45).toFixed(0) + "px";
      heart.style.left = `${left}%`;
      heart.style.fontSize = `${size}rem`;
      heart.style.animationDuration = `${duration}s`;
      heart.style.animationDelay = `${delay}s`;
      heart.style.setProperty("--drift", drift);
      layer.appendChild(heart);
    }
  }

  function startWelcomeHearts() {
    spawnHearts("welcome-hearts", "welcome__heart", 28);
  }

  function startPageHearts() {
    spawnHearts("page-hearts", "page-heart", 36);
  }

  // Start hearts immediately so they show on all pages
  startPageHearts();

  document.getElementById("start-journey").addEventListener("click", () => {
    welcome.classList.add("hidden");
    welcome.setAttribute("aria-hidden", "true");
    journey.classList.remove("hidden");
    journey.setAttribute("aria-hidden", "false");
    document.getElementById("birthday").scrollIntoView({ behavior: "smooth" });
    initJourney();
  });

  /* ——— Timeline ——— */
  function buildTimeline() {
    const list = document.getElementById("timeline");
    list.innerHTML = "";
    TIMELINE.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "timeline__item reveal";
      li.style.transitionDelay = `${i * 0.05}s`;
      li.innerHTML = `
        <button type="button" class="timeline__btn" aria-expanded="false">
          <div class="timeline__when">${item.when}</div>
          <div class="timeline__what">${item.what}</div>
          <p class="timeline__detail">${item.detail}</p>
        </button>`;
      li.querySelector("button").addEventListener("click", () => {
        const open = li.classList.toggle("open");
        li.querySelector("button").setAttribute("aria-expanded", String(open));
      });
      list.appendChild(li);
    });
  }

  /* ——— Reasons ——— */
  function buildReasons() {
    const grid = document.getElementById("reasons-grid");
    grid.innerHTML = "";
    REASONS.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reason reveal";
      btn.style.transitionDelay = `${(i % 5) * 0.04}s`;
      btn.innerHTML = `
        <div class="reason__front">
          <p class="reason__num">Reason #${i + 1}</p>
          <p class="reason__hint">Click to reveal</p>
        </div>
        <div class="reason__back">
          <p class="reason__num">Reason #${i + 1}</p>
          <p class="reason__text">${text}</p>
        </div>`;
      btn.addEventListener("click", () => btn.classList.toggle("revealed"));
      grid.appendChild(btn);
    });
  }

  /* ——— Polaroids ——— */
  function buildPolaroids() {
    const wrap = document.getElementById("polaroids");
    wrap.innerHTML = "";
    MEMORIES.forEach((m, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "polaroid reveal";
      btn.style.transitionDelay = `${i * 0.06}s`;
      const photo = document.createElement("div");
      photo.className = "polaroid__photo";
      photo.style.background = m.tone;
      photo.textContent = m.label;
      if (m.src) {
        const img = new Image();
        img.alt = m.label;
        img.onload = () => {
          photo.textContent = "";
          photo.appendChild(img);
        };
        img.src = m.src;
      }
      const cap = document.createElement("p");
      cap.className = "polaroid__cap";
      cap.textContent = m.label;
      const note = document.createElement("p");
      note.className = "polaroid__note";
      note.textContent = m.note;
      btn.append(photo, cap, note);
      btn.addEventListener("click", () => btn.classList.toggle("unlocked"));
      wrap.appendChild(btn);
    });
  }

  /* ——— Letter typing ——— */
  let letterStarted = false;
  function typeLetter() {
    if (letterStarted) return;
    letterStarted = true;
    const body = document.getElementById("letter-body");
    const cursor = document.getElementById("letter-cursor");
    let i = 0;
    const speed = 28;

    function tick() {
      if (i <= LETTER.length) {
        body.textContent = LETTER.slice(0, i);
        i++;
        setTimeout(tick, speed + (LETTER[i - 1] === "\n" ? 120 : 0));
      } else {
        cursor.classList.add("done");
      }
    }
    tick();
  }

  /* ——— Terminal ——— */
  function initTerminal() {
    const screen = document.getElementById("terminal-screen");
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");

    function print(text, cls = "") {
      const p = document.createElement("p");
      if (cls) p.className = cls;
      p.textContent = text;
      screen.appendChild(p);
      screen.scrollTop = screen.scrollHeight;
    }

    print("Ananthu.exe terminal ready.");
    print('Type "help" for available commands.');

    const commands = {
      help: () => {
        print("Available Commands:\n\n  memories\n  future\n  wedding\n  love");
      },
      memories: () => {
        print(
          "Loading archive...\n2019 → chat\n— → silence\n2026 → us again\nStatus: precious."
        );
      },
      future: () => {
        print("Forecast: soft mornings, shared jokes, one last name.");
      },
      wedding: () => {
        print("Target date: 23 May 2027\nDress code: forever\nRSVP: already yes.");
      },
      love: () => {
        print(
          "Error:\nLove cannot be measured.\nValue exceeds integer limit.",
          "out-err"
        );
      },
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      print(`> ${raw}`, "out-cmd");
      const key = raw.toLowerCase();
      if (commands[key]) commands[key]();
      else print(`Command not found: ${raw}\nTry "help".`, "out-err");
      input.value = "";
    });
  }

  /* ——— Countdown ——— */
  function updateCountdown() {
    const now = new Date();
    let ms = WEDDING - now;
    if (ms < 0) ms = 0;

    const totalHours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms / (1000 * 60)) % 60);

    // Approximate months from remaining calendar span
    let months =
      (WEDDING.getFullYear() - now.getFullYear()) * 12 +
      (WEDDING.getMonth() - now.getMonth());
    if (WEDDING.getDate() < now.getDate()) months -= 1;
    if (months < 0) months = 0;

    const afterMonths = new Date(now);
    afterMonths.setMonth(afterMonths.getMonth() + months);
    let dayMs = WEDDING - afterMonths;
    if (dayMs < 0) dayMs = 0;
    const days = Math.floor(dayMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    document.getElementById("cd-months").textContent = String(months);
    document.getElementById("cd-days").textContent = String(days);
    document.getElementById("cd-hours").textContent = String(hours);
    document.getElementById("cd-mins").textContent = String(minutes);
  }

  /* ——— Gift ——— */
  function initGift() {
    const btn = document.getElementById("open-gift");
    const box = document.getElementById("ring-box");
    btn.addEventListener("click", () => {
      box.hidden = false;
      requestAnimationFrame(() => box.classList.add("show"));
      btn.disabled = true;
      btn.textContent = "Gift opened ♥";
    });
  }

  /* ——— Scroll reveal + letter observer ——— */
  function initObservers() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const letterIo = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          typeLetter();
          letterIo.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    letterIo.observe(document.getElementById("letter-paper"));
  }

  let journeyReady = false;
  function initJourney() {
    if (journeyReady) return;
    journeyReady = true;
    buildTimeline();
    buildReasons();
    buildPolaroids();
    initTerminal();
    initGift();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initObservers();
    document.querySelectorAll(".section").forEach((s) => s.classList.add("reveal", "in"));
  }

  runBoot();
})();
