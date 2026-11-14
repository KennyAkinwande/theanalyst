# Kenny Akinwande: Business Analyst Portfolio

A static portfolio website for a Healthcare Business Analyst. It is plain **HTML, CSS and JavaScript**:

- no Next.js, React, npm, Node.js or build step
- upload the files to GitHub and it works
- runs on GitHub Pages, Netlify, Vercel (static) or any web host
- you can also double-click `index.html` to preview it on your computer

---

## What's in the folder

```
business-analyst-portfolio/
├── index.html                  ← the home page (entry point)
├── favicon.ico                 ← browser tab icon
├── README.md                   ← this guide
├── PORTFOLIO-INPUT.md          ← questionnaire for collecting your content
├── .gitignore
│
├── projects/                   ← one page per case study
│   ├── patient-no-show-analysis.html
│   ├── immunization-program-performance.html
│   ├── sales-performance-dashboard.html
│   ├── prior-authorization-process-redesign.html
│   └── closed-loop-medication-platform.html
│
└── assets/
    ├── css/style.css           ← all styling (colours, fonts, layout)
    ├── js/data.js              ← ★ YOUR CONTENT: skills, experience, projects, links
    ├── js/script.js            ← behaviour (menu, dark mode, form); no need to edit
    ├── fonts/                  ← Inter and Plus Jakarta Sans (free, open licence)
    ├── images/
    │   ├── profile.jpg         ← your photo
    │   ├── og-image.png        ← preview image when the link is shared on LinkedIn etc.
    │   ├── favicon-32.png, apple-touch-icon.png
    │   └── projects/           ← one cover image per project
    └── documents/
        ├── resume.pdf          ← your CV
        └── projects/           ← (empty) put project files here (xlsx, sql, pbix, pdf)
```

---

## 1. Upload it to GitHub

1. Sign in at <https://github.com> and click **New repository** (the **+** at the top right).
2. **Name the repository `KennyAkinwande.github.io`**. With this exact name, your site will live at
   `https://kennyakinwande.github.io/`. Any other name works too, but the address becomes
   `https://kennyakinwande.github.io/<repository-name>/`.
3. Choose **Public**, then click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Open the `business-analyst-portfolio` folder on your computer, select **everything inside it**
   (not the folder itself) and drag it into the browser.
   - Make sure `index.html` sits at the **top level** of the repository, not inside another folder.
   - `.gitignore` is a hidden file. If you can't see it, that's fine; it's optional.
6. Scroll down and click **Commit changes**.

## 2. Turn on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
4. Wait 1–2 minutes and refresh. GitHub shows the live address at the top of the Pages screen.

GitHub Pages automatically uses `index.html` as the home page.

> **If you used a different repository name**, open `index.html` and update the addresses in the
> `EDIT: SEO & SHARING` block at the top (canonical, `og:url`, `og:image`, `twitter:image`),
> so link previews on LinkedIn show the right image.

---

## 3. Update your information

Almost everything is in **one file: `assets/js/data.js`**. Open it in any text editor
(on GitHub, open the file and click the pencil ✏️ icon), change the text between the quotes, and commit.

| What you want to change | Where |
|---|---|
| Name, title, tagline, short intro | `index.html`: the **HERO** section (search for `EDIT:`) |
| Badge above your name, typed tagline words, tags around your photo | `data.js` → `heroBadge`, `heroTypedText`, `heroTags` |
| Scrolling skills strip under the hero | `data.js` → `highlights` |
| Stat cards beside About (4+, 300+…) | `data.js` → `aboutStats` |
| About text | `index.html`: the **ABOUT** section |
| Email, LinkedIn, GitHub, CV path | `data.js` → `profile` |
| Formspree endpoint | `data.js` → `profile.formspreeEndpoint` |
| Skills | `data.js` → `competencies` |
| Jobs | `data.js` → `experience` |
| "How I work" steps | `data.js` → `approach` |
| Selected results table | `data.js` → `results` |
| Projects and case studies | `data.js` → `projects` |
| Page title / Google description | `index.html`: the `EDIT: SEO & SHARING` block at the top |

**Editing tips**
- Text goes inside quotes: `"like this"`. If your text contains a `"` character, write it as `\"`.
- Items in a list are separated by commas. A missing comma is the most common reason a page goes blank.
- If a section suddenly disappears after an edit, undo your last change and check the quotes and commas.
- To hide a link, leave its value empty: `github: ""`.

---

## 4. Images

- **Your photo:** replace `assets/images/profile.jpg` with a new photo of the **same name**.
  A portrait (4:5) image around 900 × 1100 pixels works best.
- **Project covers:** the five covers in `assets/images/projects/` were designed for you from your
  real headline figures. To use your own screenshots instead, save them at **1600 × 1000 pixels**
  (16:10) with the same file names, for example `patient-no-show-analysis-thumbnail.png`,
  and overwrite the old files. Or use a new name and update the `image:` line for that project in `data.js`.
- **Sharing image:** `assets/images/og-image.png` (1200 × 630) is what LinkedIn shows when you share your link.
- Keep images under about 300 KB each. <https://squoosh.app> is a free tool for shrinking them.

## 5. Your CV

Your CV is at `assets/documents/resume.pdf`. To update it, replace that file with your new PDF
using the **same name**, `resume.pdf`. Every "View CV" button on the site points to it.
(If you use a different name, update `resume:` in `data.js`.)

## 6. Project files (Excel, SQL, Power BI, PDF)

Each case study can show download buttons. They're hidden until you add the files:

1. Put the file in `assets/documents/projects/`, for example
   `assets/documents/projects/Patient_No_Show_Analysis_Dashboard.xlsx`.
2. In `data.js`, find that project's `documents:` line and fill in the path:
   ```js
   documents: [
     { label: "Excel dashboard (.xlsx)", file: "assets/documents/projects/Patient_No_Show_Analysis_Dashboard.xlsx" }
   ],
   ```
3. Optional: add a public link to a dashboard or a GitHub repository:
   `links: { github: "https://github.com/…", dashboard: "https://app.powerbi.com/…" }`.

> Only upload files that contain no confidential or patient data. Everything in a public
> GitHub repository can be downloaded by anyone.

## 7. Add a new project

1. In `data.js`, copy one whole project block (from `{` to the matching `},`) and paste it at the end of the `projects` list.
2. Give it a new `slug`: lowercase words joined with hyphens, e.g. `discharge-workflow-analysis`.
3. Fill in the fields. Each case study follows the same story:
   **Business problem → Objective → Approach → Analysis → Findings → Recommendations → Outcome → Business impact**.
4. Copy any file in the `projects/` folder, rename it to `<your-slug>.html`, open it and change
   `data-project="..."` on the `<body>` line to your new slug. Optionally update its `<title>` and description.
5. Add a cover image at the path you set in `image:`.

To remove a project, delete its block in `data.js` and its file in `projects/`.

## 8. The contact form (Formspree)

The form sends messages to your Formspree inbox at `https://formspree.io/f/mrpqeajv`.
To change it, update `formspreeEndpoint` in `data.js` **and** the `action="…"` on the `<form>` tag in
`index.html` (that copy is only used when a visitor has JavaScript turned off).

- The first time someone submits, Formspree may ask **you** to confirm the form by email. Do this once.
- Submitting from a file on your computer (`file://…`) may fail. Test the form on the live site.
- A hidden "spam trap" field filters out simple bots. Nothing else is needed, and there are no passwords in the code.

## 9. Change the colours

Open `assets/css/style.css` and find **section 2, DESIGN TOKENS**.

- `:root { … }` holds the **light** theme colours.
- `[data-theme="dark"] { … }` holds the **dark** theme colours.
- `--accent` is the blue used for buttons, links and highlights, and `--teal` is the second accent. Change them in both themes.
  Keep enough contrast; <https://webaim.org/resources/contrastchecker/> will tell you if text is readable.

The theme follows the visitor's device setting on their first visit. The moon/sun button switches it, and the choice is remembered.

## 10. Change the fonts

Fonts are self-hosted in `assets/fonts/`, so the site loads fast and works offline.

- `--font-display` (headings): **Plus Jakarta Sans**
- `--font-body` (body text): **Inter**

Both are set in `style.css` section 2. To change them, add new `.woff2` files to `assets/fonts/`,
update the two `@font-face` blocks in section 1, and update the font names in `--font-display` and `--font-body`.
The `<link rel="preload">` lines in the `<head>` of `index.html` and the project pages should point to the same files.

## 11. Favicon

`favicon.ico` (root) and `assets/images/favicon-32.png` / `apple-touch-icon.png` show a blue "K" monogram.
To replace it, create your own at <https://realfavicongenerator.net> and overwrite those three files with the same names.

---

## Other hosting

- **Netlify:** drag the folder onto <https://app.netlify.com/drop>.
- **Vercel:** import the GitHub repository, choose **Framework preset: Other**, leave the build command empty.

## Credits

Fonts: Inter (Rasmus Andersson) and Plus Jakarta Sans (Tokotype), both under the SIL Open Font License; licences are included in `assets/fonts/`.

Design inspired by the layout ideas of [theanalyst](https://ubbit001.github.io/theanalyst/), [mena-t.github.io](https://mena-t.github.io/) and [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio). No code was copied.
