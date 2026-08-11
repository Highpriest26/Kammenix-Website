# Kammenix Nig. Limited — Corporate Website

Official corporate website for **KAMMENIX NIG. LIMITED** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

> Tagline: *“Excellence, Professionalism & Trust”*

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or pnpm or yarn

### Installation & Execution
1. Clone or open the workspace folder:
   ```bash
   cd c:\Users\Samsung\Documents\programing\Kammenix-website
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build production bundle:
   ```bash
   npm run build
   ```

---

## 🎨 Branding & Customization

### 1. Replacing Official Logo
The website uses SVG components and placeholder logo files derived from the company's official brand palette:
- `public/logo.svg` — Full horizontal corporate logo.
- `public/favicon.svg` — Favicon symbol.
- `src/components/ui/Logo.tsx` — Dynamic React SVG component for light and dark backgrounds.

To insert your official logo image file:
1. Replace `public/logo.svg` with your official SVG file or PNG logo.
2. If using PNG/JPG, update `src/components/ui/Logo.tsx` to reference `<Image src="/logo.png" ... />`.

### 2. Updating Contact & Company Information
All company information, contact details, phone numbers, email addresses, working hours, and social media handles are stored in **ONE central configuration file**:
- File location: [src/config/companyData.ts](file:///c:/Users/Samsung/Documents/programing/Kammenix-website/src/config/companyData.ts)

Simply update the properties in `companyConfig`:
```typescript
export const companyConfig = {
  name: 'Kammenix',
  legalName: 'KAMMENIX NIG. LIMITED',
  tagline: 'Excellence, Professionalism & Trust',
  address: 'Victoria Island / Ikeja, Lagos State, Nigeria',
  phone: '+2348000000000',
  displayPhone: '+234 800 000 0000',
  email: 'info@kammenix.example',
  workingHours: 'Monday to Friday: 8:00 AM – 5:00 PM',
  whatsappNumber: '2348000000000',
  ...
};
```

### 3. Adding Real Client Projects
Project data is located in `src/config/companyData.ts` under `projectItems`.
Update the title, category, location, description, and high-resolution `imageUrl` for each project.

---

## 🏛️ Business Divisions Covered

1. **Project Management** (`/services/project-management`)
2. **Facility Management** (`/services/facility-management`)
3. **Cleaning Services** (`/services/cleaning-services`)
4. **Financial Consulting** (`/services/financial-consulting`)
5. **Credit, Loans & Cooperative Services** (`/services/credit-loans-cooperative-services`)
6. **Estate Development** (`/services/estate-development`)
7. **General Contracting** (`/services/general-contracting`)
8. **Consultancy Services** (`/services/consultancy-services`)

---

## 📄 Pages Included

- **Home (`/`)**: Hero banner, introduction, 8 business division cards, 6 core selling points, featured project showcase, 4-step process, dual CTA section.
- **About Us (`/about`)**: Company story, mission, vision, 6 core values, operational advantage, leadership structure.
- **Services (`/services`)**: Grid overview of all 8 divisions and detailed capability matrix.
- **Service Details (`/services/[slug]`)**: Dynamic individual pages for all 8 divisions with capabilities, problem-solution breakdowns, benefits, process steps, FAQ accordion, inline quotation form, and WhatsApp CTA.
- **Projects (`/projects`)**: Filterable project gallery with modal viewer and placeholder disclaimer.
- **Contact Us (`/contact`)**: Dual tabbed contact and quotation request forms with full client-side validation, loading states, success toasts, interactive map, and direct communication links.
- **Privacy Policy (`/privacy-policy`)**: Data protection policy.
- **Terms & Conditions (`/terms`)**: Operational conditions & credit disclaimer.

---

## ⚡ Form & WhatsApp Integration

- **WhatsApp Floating Button**: Sticky bottom-right button opening direct chat with pre-filled message: `"Hello Kammenix Nig. Limited, I would like to enquire about your services."`
- **Form Submission Service**: [src/services/formService.ts](file:///c:/Users/Samsung/Documents/programing/Kammenix-website/src/services/formService.ts) handles form validation, loading states, and honeypot anti-spam protection. Ready for direct connection to Formspree, EmailJS, Resend, or a custom API.
