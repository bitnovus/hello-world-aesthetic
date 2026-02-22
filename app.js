const greetings = [
  { text: "Hello, world!", language: "English", region: "United States" },
  { text: "Hola, mundo!", language: "Spanish", region: "Latin America" },
  { text: "Bonjour, le monde!", language: "French", region: "France" },
  { text: "Hallo, Welt!", language: "German", region: "Germany" },
  { text: "Ciao, mondo!", language: "Italian", region: "Italy" },
  { text: "Olá, mundo!", language: "Portuguese", region: "Brazil" },
  { text: "Hej, verden!", language: "Danish", region: "Denmark" },
  { text: "Salam, dünya!", language: "Azerbaijani", region: "Azerbaijan" },
  { text: "Merhaba, dünya!", language: "Turkish", region: "Turkey" },
  { text: "Привет, мир!", language: "Russian", region: "Russia" },
  { text: "你好，世界！", language: "Mandarin Chinese", region: "China" },
  { text: "こんにちは、世界！", language: "Japanese", region: "Japan" },
  { text: "안녕하세요, 세상!", language: "Korean", region: "South Korea" },
  { text: "नमस्ते, दुनिया!", language: "Hindi", region: "India" },
  { text: "مرحبا بالعالم!", language: "Arabic", region: "Middle East" },
  { text: "Shikamoo, dunia!", language: "Swahili", region: "East Africa" },
  { text: "שלום עולם!", language: "Hebrew", region: "Israel" },
  { text: "Γειά σου, κόσμε!", language: "Greek", region: "Greece" }
];

const ROTATE_MS = 3600;
const EXIT_MS = 200;
const ENTER_CLASS_MS = 450;

const root = document.documentElement;
const greetingEl = document.querySelector("#greeting");
const metaEl = document.querySelector("#meta");
const timelineEl = document.querySelector(".timeline-fill");

let index = 0;

function updateGreeting(nextIndex) {
  greetingEl.classList.add("is-out");
  metaEl.classList.add("is-out");

  window.setTimeout(() => {
    const item = greetings[nextIndex];
    greetingEl.textContent = item.text;
    metaEl.textContent = `${item.language} • ${item.region}`;

    greetingEl.classList.remove("is-out");
    metaEl.classList.remove("is-out");
    greetingEl.classList.add("is-in");
    metaEl.classList.add("is-in");

    window.setTimeout(() => {
      greetingEl.classList.remove("is-in");
      metaEl.classList.remove("is-in");
    }, ENTER_CLASS_MS);
  }, EXIT_MS);
}

function resetTimeline() {
  timelineEl.style.animation = "none";
  void timelineEl.offsetWidth;
  timelineEl.style.animation = "";
}

function rotate() {
  index = (index + 1) % greetings.length;
  updateGreeting(index);
  resetTimeline();
}

root.style.setProperty("--timeline-ms", `${ROTATE_MS}ms`);
window.setInterval(rotate, ROTATE_MS);
