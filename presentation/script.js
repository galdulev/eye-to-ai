(() => {
  "use strict";

  // ═══════════════════════════════════════
  // State
  // ═══════════════════════════════════════

  let currentSection = 0;
  let currentChunk = -1; // -1 = showing section card
  let sectionStartTime = null;
  let totalStartTime = null;
  let timerInterval = null;
  let pauseInterval = null;
  let isBlackout = false;
  let isPickerOpen = false;
  let isSectionCard = true;

  const CONTEXT_BEFORE = 2;
  const CONTEXT_AFTER = 1;

  // ═══════════════════════════════════════
  // DOM refs
  // ═══════════════════════════════════════

  const $chunks = document.getElementById("chunks");
  const $sectionCard = document.getElementById("section-card");
  const $blackout = document.getElementById("blackout");
  const $timer = document.getElementById("timer");
  const $timerElapsed = document.getElementById("timer-elapsed");
  const $timerBudget = document.getElementById("timer-budget");
  const $totalTimer = document.getElementById("total-timer");
  const $progressFill = document.getElementById("progress-fill");
  const $sectionDots = document.getElementById("section-dots");
  const $picker = document.getElementById("section-picker");

  // ═══════════════════════════════════════
  // Helpers
  // ═══════════════════════════════════════

  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  function totalChunksUpTo(sIdx, cIdx) {
    let n = 0;
    for (let i = 0; i < sIdx; i++) n += TALK[i].chunks.length;
    n += Math.max(0, cIdx + 1);
    return n;
  }

  function totalChunksAll() {
    return TALK.reduce((s, sec) => s + sec.chunks.length, 0);
  }

  // ═══════════════════════════════════════
  // Render section card
  // ═══════════════════════════════════════

  function showSectionCard() {
    isSectionCard = true;
    const sec = TALK[currentSection];

    document.body.setAttribute("data-emotion", sec.emotion);

    $sectionCard.innerHTML = `
      <div class="section-number">${sec.id}</div>
      <div class="section-title">${sec.title}</div>
      <div class="section-subtitle">${sec.subtitle}</div>
      ${sec.budgetSeconds ? `<div class="section-budget">~${fmtTime(sec.budgetSeconds)}</div>` : ""}
    `;
    $sectionCard.classList.add("active");
    $chunks.innerHTML = "";

    updateDots();
    updateProgress();
  }

  // ═══════════════════════════════════════
  // Render chunks
  // ═══════════════════════════════════════

  function renderChunks() {
    isSectionCard = false;
    $sectionCard.classList.remove("active");

    const sec = TALK[currentSection];
    const chunks = sec.chunks;
    document.body.setAttribute("data-emotion", sec.emotion);

    $chunks.innerHTML = "";

    for (let i = 0; i < chunks.length; i++) {
      const c = chunks[i];
      let state;
      if (i < currentChunk - CONTEXT_BEFORE) state = "hidden";
      else if (i < currentChunk) state = "prev";
      else if (i === currentChunk) state = "active";
      else if (i <= currentChunk + CONTEXT_AFTER) state = "next";
      else state = "hidden";

      const el = document.createElement("div");
      el.className = `chunk state-${state}`;
      el.setAttribute("data-type", c.type);
      el.setAttribute("data-size", c.size || "normal");

      if (c.type === "pause" && state === "active") {
        el.innerHTML = `<div class="pause-ring"><div class="pause-ring-fill" id="pause-fill"></div></div><span>${c.text}</span>`;
      } else {
        el.textContent = c.text;
      }

      $chunks.appendChild(el);
    }

    if (chunks[currentChunk]?.type === "pause") {
      startPauseTimer(chunks[currentChunk].duration || 2);
    }

    updateProgress();
    updateDots();
  }

  // ═══════════════════════════════════════
  // Pause ring animation
  // ═══════════════════════════════════════

  function startPauseTimer(durationSec) {
    clearInterval(pauseInterval);
    const fill = document.getElementById("pause-fill");
    if (!fill) return;

    const start = Date.now();
    const durationMs = durationSec * 1000;

    pauseInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / durationMs) * 100);
      fill.style.background = `conic-gradient(var(--pause-color) ${pct}%, transparent 0%)`;
      if (elapsed >= durationMs) clearInterval(pauseInterval);
    }, 50);
  }

  // ═══════════════════════════════════════
  // Navigation
  // ═══════════════════════════════════════

  function advance() {
    if (isBlackout) { toggleBlackout(); return; }
    if (isPickerOpen) return;

    clearInterval(pauseInterval);

    if (isSectionCard) {
      currentChunk = 0;
      sectionStartTime = Date.now();
      if (!totalStartTime) totalStartTime = Date.now();
      renderChunks();
      startTimer();
      return;
    }

    const sec = TALK[currentSection];
    if (currentChunk < sec.chunks.length - 1) {
      currentChunk++;
      renderChunks();
    } else {
      if (currentSection < TALK.length - 1) {
        currentSection++;
        currentChunk = -1;
        stopTimer();
        showSectionCard();
      }
    }
  }

  function retreat() {
    if (isBlackout) { toggleBlackout(); return; }
    if (isPickerOpen) return;

    clearInterval(pauseInterval);

    if (isSectionCard) {
      if (currentSection > 0) {
        currentSection--;
        const sec = TALK[currentSection];
        currentChunk = sec.chunks.length - 1;
        sectionStartTime = Date.now();
        renderChunks();
        startTimer();
      }
      return;
    }

    if (currentChunk > 0) {
      currentChunk--;
      renderChunks();
    } else {
      showSectionCard();
    }
  }

  function jumpToSection(idx) {
    currentSection = idx;
    currentChunk = -1;
    stopTimer();
    closePicker();
    showSectionCard();
  }

  // ═══════════════════════════════════════
  // Timer
  // ═══════════════════════════════════════

  function startTimer() {
    clearInterval(timerInterval);
    if (!sectionStartTime) sectionStartTime = Date.now();

    timerInterval = setInterval(updateTimerDisplay, 500);
    updateTimerDisplay();
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function updateTimerDisplay() {
    const sec = TALK[currentSection];
    const elapsed = (Date.now() - sectionStartTime) / 1000;
    const budget = sec.budgetSeconds;

    $timerElapsed.textContent = fmtTime(elapsed);

    if (budget) {
      $timerBudget.textContent = fmtTime(budget);
      $timer.classList.remove("warn", "over");
      if (elapsed > budget) $timer.classList.add("over");
      else if (elapsed > budget * 0.8) $timer.classList.add("warn");
    } else {
      $timerBudget.textContent = "--:--";
      $timer.classList.remove("warn", "over");
    }

    if (totalStartTime) {
      const total = (Date.now() - totalStartTime) / 1000;
      $totalTimer.textContent = fmtTime(total);
    }
  }

  // ═══════════════════════════════════════
  // Progress
  // ═══════════════════════════════════════

  function updateProgress() {
    const done = totalChunksUpTo(currentSection, currentChunk);
    const total = totalChunksAll();
    const pct = total > 0 ? (done / total) * 100 : 0;
    $progressFill.style.width = `${pct}%`;
  }

  function updateDots() {
    const dots = $sectionDots.querySelectorAll(".section-dot");
    dots.forEach((dot, i) => {
      dot.classList.remove("active", "completed");
      if (i === currentSection) dot.classList.add("active");
      else if (i < currentSection) dot.classList.add("completed");
    });
  }

  // ═══════════════════════════════════════
  // Blackout
  // ═══════════════════════════════════════

  function toggleBlackout() {
    isBlackout = !isBlackout;
    $blackout.classList.toggle("active", isBlackout);
  }

  // ═══════════════════════════════════════
  // Section picker
  // ═══════════════════════════════════════

  function openPicker() {
    isPickerOpen = true;
    $picker.innerHTML = TALK.map((sec, i) =>
      `<div class="picker-item" data-idx="${i}">
        <span class="picker-idx">${sec.id}</span>
        ${sec.title} — ${sec.subtitle}
      </div>`
    ).join("");

    $picker.querySelectorAll(".picker-item").forEach(el => {
      el.addEventListener("click", () => jumpToSection(parseInt(el.dataset.idx)));
    });

    $picker.classList.add("active");
  }

  function closePicker() {
    isPickerOpen = false;
    $picker.classList.remove("active");
  }

  function togglePicker() {
    isPickerOpen ? closePicker() : openPicker();
  }

  // ═══════════════════════════════════════
  // Keyboard
  // ═══════════════════════════════════════

  document.addEventListener("keydown", (e) => {
    if (isPickerOpen && e.key === "Escape") { closePicker(); return; }

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
      case "PageDown":
      case "Enter":
        e.preventDefault();
        advance();
        break;

      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
      case "Backspace":
        e.preventDefault();
        retreat();
        break;

      case "b":
      case "B":
        e.preventDefault();
        toggleBlackout();
        break;

      case "Home":
      case "h":
      case "H":
        e.preventDefault();
        togglePicker();
        break;

      case "Escape":
        if (isBlackout) toggleBlackout();
        break;
    }
  });

  // Mouse click to advance (anywhere on the page)
  document.addEventListener("click", (e) => {
    if (isPickerOpen) return;
    if (e.target.closest(".section-dot")) return;
    advance();
  });

  // Right-click to go back
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (isPickerOpen) return;
    retreat();
  });

  // Show cursor on mouse move, hide after 2s
  let cursorTimeout;
  document.addEventListener("mousemove", () => {
    document.body.classList.add("cursor-visible");
    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => document.body.classList.remove("cursor-visible"), 2000);
  });

  // ═══════════════════════════════════════
  // Init
  // ═══════════════════════════════════════

  function init() {
    // Build section dots
    $sectionDots.innerHTML = TALK.map((sec, i) =>
      `<div class="section-dot" data-idx="${i}" title="${sec.title}"></div>`
    ).join("");

    $sectionDots.querySelectorAll(".section-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        jumpToSection(parseInt(dot.dataset.idx));
      });
    });

    showSectionCard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
