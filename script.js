
const settings = {
  siteName: "SHAKIL'S SYSTEM",

  // Nijer logo-r first letter ba initials
  logoLetter: "S",

  // Contact button-er link
  contactUrl: "https://instagram.com/",

  // Nijer original profile URL ekhane boshao
  socials: [
    {
      name: "Instagram",
      handle: "@yourusername",
      icon: "◎",
      url: "https://instagram.com/"
    },
    {
      name: "Facebook",
      handle: "My Facebook Profile",
      icon: "f",
      url: "https://facebook.com/"
    },
    {
      name: "Telegram",
      handle: "Join my Telegram",
      icon: "➤",
      url: "https://t.me/"
    },
    {
      name: "WhatsApp",
      handle: "Chat with me",
      icon: "◉",
      url: "https://whatsapp.com/"
    },
    {
      name: "TikTok",
      handle: "My TikTok Videos",
      icon: "♪",
      url: "https://tiktok.com/"
    },
    {
      name: "YouTube",
      handle: "Videos & Shorts",
      icon: "▶",
      url: "https://youtube.com/"
    }
  ]
};

// Update website title
document.title = settings.siteName;

// Update logo
document.getElementById("brandLogo").textContent =
  settings.logoLetter;

document.getElementById("profileLogo").textContent =
  settings.logoLetter;

// Update contact button
document.getElementById("contactButton").href =
  settings.contactUrl;

// Update year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Render social cards
const grid = document.getElementById("socialGrid");

settings.socials.forEach((social, index) => {
  const card = document.createElement("a");

  card.className = "social-card";
  card.href = social.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.style.animationDelay = `${index * 0.07}s`;

  const icon = document.createElement("div");
  icon.className = "social-icon";
  icon.textContent = social.icon;

  const info = document.createElement("div");
  info.className = "social-info";

  const title = document.createElement("h3");
  title.textContent = social.name;

  const handle = document.createElement("p");
  handle.textContent = social.handle;

  const arrow = document.createElement("div");
  arrow.className = "social-arrow";
  arrow.textContent = "↗";

  info.appendChild(title);
  info.appendChild(handle);

  card.appendChild(icon);
  card.appendChild(info);
  card.appendChild(arrow);

  grid.appendChild(card);
});
