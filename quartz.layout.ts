import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/h3ckman",
      LinkedIn: "https://www.linkedin.com/in/h3ckman",
      Email: "mailto:thealexheck@gmail.com",
    },
  }),
}

// Resume section sort order
const resumeSectionOrder = ["Experience", "Skills", "Projects"]

const resumeSidebar = [
  Component.ProfilePicture(),
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Darkmode(),
  Component.Explorer({
    title: "Sections",
    folderDefaultState: "open",
    sortFn: (a, b) => {
      const aIdx = resumeSectionOrder.indexOf(a.displayName)
      const bIdx = resumeSectionOrder.indexOf(b.displayName)
      if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
      if (aIdx !== -1) return -1
      if (bIdx !== -1) return 1
      return a.displayName.localeCompare(b.displayName)
    },
  }),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
  ],
  left: resumeSidebar,
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta({ showReadingTime: false })],
  left: resumeSidebar,
  right: [],
}
