# Dynamic Institution-Based Theming Demo

A complete Next.js application demonstrating how to implement dynamic theming based on different institutions or organizations. This project showcases real-time theme switching using CSS custom properties, dynamic imports, and modern React patterns.

## 🚀 Features

- **Dynamic Theme Loading**: Automatically loads institution-specific themes based on subdomain, cookies, or query parameters
- **CSS Custom Properties Integration**: Seamless integration with Tailwind CSS using CSS variables
- **Font Customization**: Per-institution font loading with Google Fonts
- **Middleware-Based Detection**: Automatic institution detection using Next.js middleware
- **TypeScript Support**: Fully typed theme configurations
- **Fallback System**: Graceful fallback to default theme if institution theme fails
- **Modern Stack**: Built with Next.js 15, React 19, Tailwind CSS v4, and shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with CSS Variables
- **Components**: shadcn/ui (New York style)
- **Language**: TypeScript
- **Fonts**: Google Fonts (dynamic loading)
- **State Management**: React hooks with dynamic imports

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Main demo page
├── components/
│   └── ThemeProvider.tsx    # Core theming logic
├── themes/                  # Institution theme definitions
│   ├── default.ts
│   ├── institution-1.ts
│   └── institution-2.ts
├── fonts/                   # Font configurations
│   ├── default.ts
│   ├── institution-1.ts
│   └── institution-2.ts
├── middleware.ts            # Institution detection logic
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 How It Works

### 1. Institution Detection
The middleware (`middleware.ts`) automatically detects the institution using:
- **Production**: Subdomain extraction (e.g., `institution-1.myapp.com`)
- **Development**: Query parameter (`?host=institution-1`)
- **Fallback**: Cookie-based detection

### 2. Theme Loading
The `ThemeProvider` component:
- Dynamically imports theme files based on detected institution
- Injects CSS custom properties into the document root
- Loads institution-specific fonts
- Provides graceful fallback to default theme

### 3. CSS Integration
Themes are applied through CSS custom properties:
```css
:root {
  --primary: #0041c2;        /* Institution-1 blue */
  --background: #ffffff;
  --text: #111827;
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd custom-theme-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   - Default theme: [http://localhost:3000](http://localhost:3000)
   - Institution 1: [http://localhost:3000?host=institution-1](http://localhost:3000?host=institution-1)
   - Institution 2: [http://localhost:3000?host=institution-2](http://localhost:3000?host=institution-2)

## 🎯 Adding New Institutions

### 1. Create Theme File
Create a new theme file in `themes/your-institution.ts`:

```typescript
export const theme = {
  font: "--font-your-institution",
  colors: {
    primary: "#your-primary-color",
    background: "#your-bg-color", 
    text: "#your-text-color",
  },
};
```

### 2. Create Font Configuration
Create a font file in `fonts/your-institution.ts`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-your-institution",
});

export const font = yourFont;
```

### 3. Update CSS Variables (Optional)
Add any new CSS variables to `app/globals.css` if needed:

```css
:root {
  --your-custom-variable: value;
}
```

### 4. Test Your Theme
Visit: `http://localhost:3000?host=your-institution`

## 🔧 Configuration

### Environment Setup

For production deployment with subdomains:

1. Configure your DNS to point subdomains to your application
2. Update the domain in `middleware.ts`:
   ```typescript
   const currentHost = hostname.replace(".yourdomain.com", "");
   ```

### Theme Structure

Each theme file must export a `theme` object with:
- `font`: CSS variable name for the institution font
- `colors`: Object containing color definitions

### Font Configuration

Font files should export a `font` object that includes:
- Font configuration from `next/font/google`
- CSS variable name
- Font weights and subsets

## 📊 Available Themes

| Institution | Primary Color | Font | Demo |
|-------------|---------------|------|------|
| Default | `#333` | Roboto | [Demo](http://localhost:3000) |
| Institution 1 | `#0041c2` (Blue) | Custom | [Demo](http://localhost:3000?host=institution-1) |
| Institution 2 | `#efcc00` (Yellow) | Custom | [Demo](http://localhost:3000?host=institution-2) |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure custom domains for subdomains
4. Deploy automatically

### Other Platforms
The application works on any platform that supports Next.js:
- Netlify
- AWS Amplify  
- Railway
- Render

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- [Vercel](https://vercel.com) for seamless deployment

---

**Note**: This is a demonstration project showcasing dynamic theming patterns. Feel free to adapt the code for your specific use case!
