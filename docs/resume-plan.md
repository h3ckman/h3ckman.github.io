Plan: Turn Quartz into a Resume Website
Context
Alex Heck has a standard Quartz v4.4.0 installation at h3ckman.github.io and wants to convert it into a resume website. Each content page will be a resume section. The site currently has default wiki-style components (graph, backlinks, search) that need to be replaced with resume-appropriate elements. A profile picture component needs to be created.

Step 1: Create ProfilePicture Component
New file: quartz/components/ProfilePicture.tsx

Preact component following QuartzComponentConstructor pattern (same as PageTitle.tsx)
Renders <img> pointing to /static/profile.jpg with circular crop via CSS
Uses pathToRoot + joinSegments to resolve the static asset path
Inline CSS: 150px width, border-radius: 50%, centered
New file: quartz/static/profile.jpg -- placeholder image (user replaces with real photo)

Edit: quartz/components/index.ts -- import and export ProfilePicture

Step 2: Restructure Layout (quartz.layout.ts)
Shared components:

footer: Update links to GitHub, LinkedIn, and email (user to provide actual URLs during implementation)
header / afterBody: remain empty
Content page layout:

beforeBody: Remove Breadcrumbs, keep ArticleTitle, ContentMeta({ showReadingTime: false }), TagList
left: Add ProfilePicture at top, keep PageTitle, Darkmode, Explorer({ title: "Sections" }) with custom sort order (Experience > Education > Skills > Projects). Remove Search.
right: Keep only DesktopOnly(TableOfContents). Remove Graph and Backlinks.
List page layout: Same left sidebar; empty right sidebar.

Step 3: Update Site Config (quartz.config.ts)
enablePopovers: false (not useful for a resume)
Remove Latex plugin (not needed)
Keep SyntaxHighlighting (useful if Projects shows code)
Keep all other plugins, especially TagPage (skills cross-referencing)
Step 4: Create Content Structure
Delete example files (Another Note.md, Some Note File.md). Create:

File Frontmatter Purpose
content/index.md title: Alex Heck, cssclasses: [resume-landing], enableToc: false Landing page with summary + section links
content/Experience.md title: Experience, cssclasses: [resume-section], enableToc: true Work history
content/Education.md title: Education, cssclasses: [resume-section], enableToc: true Academic background
content/Skills.md title: Skills, tags: [javascript, python, ...], enableToc: true Technical skills
content/Projects.md title: Projects, cssclasses: [resume-section], enableToc: true Notable projects
content/Contact.md title: Contact, cssclasses: [resume-section], enableToc: false Contact info / about page
Content uses [[wikilinks]] between sections (supported by ObsidianFlavoredMarkdown plugin). Tags on each page enable cross-referencing (e.g., tag "python" links Experience and Skills pages).

Step 5: Custom Styling (quartz/styles/custom.scss)
Profile picture responsive adjustments (smaller on mobile)
Resume landing page: centered title
Resume sections: tighter heading spacing for job entries
Footer: centered layout
Optional: reduce right sidebar width since only ToC is there
Step 6: Explorer Sort Order
Configure Explorer with a custom sortFn that orders sections: Experience, Education, Skills, Projects, Contact.

Files Changed Summary
File Action
quartz/components/ProfilePicture.tsx Create
quartz/static/profile.jpg Create (placeholder)
quartz/components/index.ts Edit (register component)
quartz.layout.ts Edit (restructure layout)
quartz.config.ts Edit (disable popovers, remove Latex)
quartz/styles/custom.scss Edit (resume styles)
content/index.md Replace
content/Experience.md Create
content/Education.md Create
content/Skills.md Create
content/Projects.md Create
content/Contact.md Create
content/Another Note.md Delete
content/Some Note File.md Delete
Verification
Run npx quartz build --serve and check:
Profile picture renders in left sidebar
Explorer shows "Sections" with correct order
Footer has personal links
No Graph/Backlinks/Search/Breadcrumbs
Landing page links navigate to section pages
Dark mode toggle works with all new components
Mobile layout stacks sidebar above content properly
Check tag pages work (visit /tags/javascript)
Verify cssclasses from frontmatter are applied to pages
