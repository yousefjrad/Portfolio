# Yousef Jrad – Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Edit content
All copy, skills, projects and timeline live in `src/data/content.ts` (typed by `src/data/types.ts`).
Drop project screenshots into `public/screens/<project-id>.png` (ids: educational-center, unibooking, dvld, clinic)
and swap the placeholder in `src/components/Projects.tsx` for an `<img>`.

## Notes
- The contact form validates client-side and opens the visitor's mail app (mailto) with the message pre-filled. Swap `onSubmit` in `Contact.tsx` for Formspree/EmailJS/your API if you want server-side delivery.
- `SINGLE_FILE=1 npm run build` produces one self-contained `dist/index.html`.
