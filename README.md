# Avalon Cafe

A responsive, multi-language website for **Avalon Cafe** — an Australian-style brunch café on the seafront in Badalona, Barcelona. The site showcases the café's menu, allows guests to reserve a table online, and lets visitors reach out about catering or private events.

🔗 **Live Instagram:** [@avaloncafe_](https://www.instagram.com/avaloncafe_/)
📍 **Location:** Carrer d'Eduard Maristany, 227, 08912 Badalona, Barcelona, Spain

---

## ✨ Features

- **Multi-language support (EN / ES / CA)** — a language dropdown in the navbar translates the entire site instantly, including page content, forms, and the reservation calendar (month/day names localize too)
- **Home page** — hero section, About/Our Story section, and a photo gallery with graceful placeholders until real photos are added
- **Menu page** — the café's full brunch, sandwich, drinks, and natural wine menu, styled to match their printed menu design
- **Table reservations** — an interactive calendar (closed days automatically disabled), time slot picker, party size selector (up to 8 guests), and indoor/outdoor seating choice
- **Contact page** — a dynamic form that adapts based on inquiry type (**Catering**, **Event**, or **Other**), sending messages directly to the owners' inbox via EmailJS
- **Fully responsive** — mobile-first layout with a collapsible navbar menu, adapting from a single column on mobile up to multi-column layouts on desktop
- **Custom brand design system** — color palette, typography, and recurring motifs (rotated tags, circular badges) drawn directly from the café's own print materials

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Framework / Library | [React](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| Internationalization | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| Date Picker | [@daypicker/react](https://daypicker.dev/) + [date-fns](https://date-fns.org/) |
| Email Delivery | [EmailJS](https://www.emailjs.com/) |
| Icons | [lucide-react](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) |
| Linting | [ESLint](https://eslint.org/) |

---

## 📁 Project Structure
Avalon_Cafe/
├── public/
│ ├── avalon-logo.png
│ ├── favicon.ico
│ └── gallery/
├── src/
│ ├── components/ # Navbar, Footer, About, Gallery
│ ├── pages/ # Home, Menu, Reservation, Contact
│ ├── data/ # Static, language-agnostic data (menu structure, reservation config, gallery images)
│ ├── i18n/
│ │ ├── i18n.ts
│ │ └── locales/ # en / es / ca translation JSON files
│ ├── utils/ # Shared helpers (e.g. date-fns locale mapping)
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── .env # EmailJS keys (not committed)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json


---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/<your-username>/Avalon_Cafe.git
   cd Avalon_Cafe
```

2. Install dependencies:
```bash
   npm install
```

3. Set up environment variables for the Contact form:

   Create a `.env` file in the project root:
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key


   These come from your [EmailJS](https://www.emailjs.com/) dashboard. See [EmailJS docs](https://www.emailjs.com/docs/) for setting up a service and template.

4. Run the development server:
```bash
   npm run dev
```

   The site will be available at `http://localhost:5173` (or the port Vite assigns).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Type-checks and builds the app for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

---

## 🌍 Adding or Editing Translations

All translated text lives in `src/i18n/locales/{en,es,ca}/translation.json`. Each language file shares the same key structure — add a new key to all three files to keep them in sync. Static, non-translatable data (like image paths or day-of-week logic) lives separately in `src/data/`.

---

## 📄 License

This project was built for Avalon Cafe. All content, branding, and menu items are property of Avalon Cafe, Badalona.