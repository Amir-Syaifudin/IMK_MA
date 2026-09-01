# Graph Report - IMK_MA  (2026-09-01)

## Corpus Check
- 87 files · ~172,978 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 608 nodes · 916 edges · 88 communities (30 shown, 52 thin omitted)
- Extraction: 97% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.84)
- Token cost: 0 input · 151,760 output

## Community Hubs (Navigation)
- shadcn Sidebar & Input Primitives
- shadcn Alert/Badge/Popover Primitives
- Project Metadata & Design Rationale
- shadcn Accordion/Avatar/OTP Primitives
- Package Dependencies & Build Config
- shadcn AlertDialog & Button
- SearchPage Calendar & Case Search
- shadcn Command Palette & Dialog
- shadcn Menubar Primitive
- shadcn ContextMenu Primitive
- shadcn DropdownMenu Primitive
- Misc npm Dependencies
- Placeholder & Wireframe Pages
- shadcn Carousel Primitive
- shadcn Form & Label Primitives
- Jadwal Sidang (Court Schedule)
- shadcn Chart Primitive
- shadcn Drawer Primitive
- shadcn Select Primitive
- shadcn Sheet Primitive
- Layout, Navbar & Footer
- shadcn NavigationMenu Primitive
- Homepage News & Service Cards
- shadcn Breadcrumb Primitive
- shadcn Card Primitive
- FAQ Page & Glossary
- FAQ Wireframe
- Search Wireframe
- InformationPage (News/Articles)
- MA Official Seal/Logo Imagery
- App Entry & Router
- Digital Menu Dropdown
- class-variance-authority (dependency)
- clsx (dependency)
- cmdk (dependency)
- MA Visual Identity & Building Photo
- date-fns (dependency)
- embla-carousel-react (dependency)
- @emotion/react (dependency)
- @emotion/styled (dependency)
- input-otp (dependency)
- lucide-react (dependency)
- motion (dependency)
- @mui/icons-material (dependency)
- @mui/material (dependency)
- next-themes (dependency)
- @phosphor-icons/react (dependency)
- @popperjs/core (dependency)
- @radix-ui/react-accordion (dependency)
- @radix-ui/react-alert-dialog (dependency)
- @radix-ui/react-aspect-ratio (dependency)
- @radix-ui/react-avatar (dependency)
- @radix-ui/react-checkbox (dependency)
- @radix-ui/react-collapsible (dependency)
- @radix-ui/react-context-menu (dependency)
- @radix-ui/react-dialog (dependency)
- @radix-ui/react-dropdown-menu (dependency)
- @radix-ui/react-hover-card (dependency)
- @radix-ui/react-label (dependency)
- @radix-ui/react-menubar (dependency)
- @radix-ui/react-navigation-menu (dependency)
- @radix-ui/react-popover (dependency)
- @radix-ui/react-progress (dependency)
- @radix-ui/react-radio-group (dependency)
- @radix-ui/react-scroll-area (dependency)
- @radix-ui/react-slider (dependency)
- @radix-ui/react-switch (dependency)
- @radix-ui/react-tabs (dependency)
- @radix-ui/react-toggle (dependency)
- @radix-ui/react-toggle-group (dependency)
- @radix-ui/react-tooltip (dependency)
- react-day-picker (dependency)
- react-popper (dependency)
- react-resizable-panels (dependency)
- react-responsive-masonry (dependency)
- react-router (dependency)
- react-slick (dependency)
- recharts (dependency)
- sonner (dependency)
- tailwind-merge (dependency)
- tw-animate-css (dependency)
- vaul (dependency)

## God Nodes (most connected - your core abstractions)
1. `cn()` - 223 edges
2. `MA Website Redesign Prototyping Guide` - 11 edges
3. `buttonVariants` - 9 edges
4. `Redesign Mahkamah Agung Website (project)` - 7 edges
5. `Button()` - 6 edges
6. `Halaman Beranda (Homepage) Page Spec` - 6 edges
7. `useCarousel()` - 5 edges
8. `useFormField()` - 5 edges
9. `useSidebar()` - 5 edges
10. `Halaman Pencarian Putusan / Perkara (Case Search Page)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Tim 7 IMK Report (Team 7 HCI course document, unreadable - exceeds 20MB size limit)` --conceptually_related_to--> `MA Website Redesign Prototyping Guide`  [AMBIGUOUS]
  Tim 7_IMK.pdf → src/imports/pasted_text/ma-redesign-guide.md
- `Tim 9 IMK Report (Team 9 HCI course document, content inaccessible - PDF media unavailable)` --conceptually_related_to--> `MA Website Redesign Prototyping Guide`  [AMBIGUOUS]
  Tim 9_IMK.pdf → src/imports/pasted_text/ma-redesign-guide.md
- `shadcn/ui (MIT-licensed component library)` --conceptually_related_to--> `Redesign Mahkamah Agung Website (project)`  [INFERRED]
  ATTRIBUTIONS.md → README.md
- `Unsplash (stock photo source)` --conceptually_related_to--> `Redesign Mahkamah Agung Website (project)`  [INFERRED]
  ATTRIBUTIONS.md → README.md
- `Project Guidelines File (empty template)` --conceptually_related_to--> `Redesign Mahkamah Agung Website (project)`  [INFERRED]
  guidelines/Guidelines.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Four Required Prototype Pages (Homepage, Search, FAQ, Error)** — src_imports_pasted_text_ma_redesign_guide_homepage, src_imports_pasted_text_ma_redesign_guide_halaman_pencarian_putusan, src_imports_pasted_text_ma_redesign_guide_halaman_faq, src_imports_pasted_text_ma_redesign_guide_halaman_error_404 [EXTRACTED 1.00]
- **Nielsen Heuristic Violations Addressed by Redesign (H2, H4, H6)** — src_imports_pasted_text_ma_redesign_guide_heuristic_h2, src_imports_pasted_text_ma_redesign_guide_heuristic_h4_consistency, src_imports_pasted_text_ma_redesign_guide_heuristic_h6 [INFERRED 0.85]
- **UEQ Usability Testing Process (two clickable flows evaluated by UEQ)** — src_imports_pasted_text_ma_redesign_guide_ueq_usability_testing, src_imports_pasted_text_ma_redesign_guide_alur_mencari_putusan, src_imports_pasted_text_ma_redesign_guide_alur_mencari_bantuan [EXTRACTED 1.00]

## Communities (88 total, 52 thin omitted)

### Community 0 - "shadcn Sidebar & Input Primitives"
Cohesion: 0.07
Nodes (35): Input(), Separator(), Sidebar(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup() (+27 more)

### Community 1 - "shadcn Alert/Badge/Popover Primitives"
Cohesion: 0.06
Nodes (20): Alert(), AlertDescription(), AlertTitle(), alertVariants, Badge(), badgeVariants, Checkbox(), HoverCardContent() (+12 more)

### Community 2 - "Project Metadata & Design Rationale"
Cohesion: 0.07
Nodes (35): shadcn/ui (MIT-licensed component library), Unsplash (stock photo source), Project Guidelines File (empty template), index.html Application Entry Shell, pnpm Workspace Root Package Declaration, Original Figma Design File, Redesign Mahkamah Agung Website (project), Alur 2: Mencari Bantuan (Find-Help Interaction Flow) (+27 more)

### Community 3 - "shadcn Accordion/Avatar/OTP Primitives"
Cohesion: 0.10
Nodes (26): AccordionContent(), AccordionItem(), AccordionTrigger(), Avatar(), AvatarFallback(), AvatarImage(), InputOTP(), InputOTPGroup() (+18 more)

### Community 4 - "Package Dependencies & Build Config"
Cohesion: 0.07
Nodes (29): devDependencies, tailwindcss, @tailwindcss/vite, vite, @vitejs/plugin-react, name, vite, peerDependencies (+21 more)

### Community 5 - "shadcn AlertDialog & Button"
Cohesion: 0.10
Nodes (18): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle() (+10 more)

### Community 6 - "SearchPage Calendar & Case Search"
Cohesion: 0.11
Nodes (21): CalendarEvent, CalendarPicker(), CalendarPickerProps, caseTypes, DAYS, eventDotColor, eventIcon, EventType (+13 more)

### Community 7 - "shadcn Command Palette & Dialog"
Cohesion: 0.12
Nodes (14): Command(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator(), CommandShortcut(), Dialog() (+6 more)

### Community 8 - "shadcn Menubar Primitive"
Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 9 - "shadcn ContextMenu Primitive"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 10 - "shadcn DropdownMenu Primitive"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 11 - "Misc npm Dependencies"
Cohesion: 0.13
Nodes (15): canvas-confetti, dependencies, canvas-confetti, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slot, react-dnd, react-dnd-html5-backend (+7 more)

### Community 12 - "Placeholder & Wireframe Pages"
Cohesion: 0.18
Nodes (6): NotFound(), PlaceholderPage(), PlaceholderPageProps, HomepageWF(), InformationPageWF(), NavbarMenuWF()

### Community 13 - "shadcn Carousel Primitive"
Cohesion: 0.19
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 14 - "shadcn Form & Label Primitives"
Cohesion: 0.20
Nodes (11): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+3 more)

### Community 15 - "Jadwal Sidang (Court Schedule)"
Cohesion: 0.24
Nodes (6): CalendarGrid(), dates, JadwalFilterBar(), badgeColors, JadwalListItem(), Props

### Community 16 - "shadcn Chart Primitive"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 17 - "shadcn Drawer Primitive"
Cohesion: 0.18
Nodes (6): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 18 - "shadcn Select Primitive"
Cohesion: 0.18
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 19 - "shadcn Sheet Primitive"
Cohesion: 0.18
Nodes (7): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle()

### Community 20 - "Layout, Navbar & Footer"
Cohesion: 0.24
Nodes (7): Footer(), Layout(), digitalServices, informasiItems, Navbar(), navStyle, tentangItems

### Community 21 - "shadcn NavigationMenu Primitive"
Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 22 - "Homepage News & Service Cards"
Cohesion: 0.28
Nodes (5): NewsCard(), NewsCardProps, ServiceCard(), ServiceCardProps, Homepage()

### Community 23 - "shadcn Breadcrumb Primitive"
Cohesion: 0.25
Nodes (6): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 24 - "shadcn Card Primitive"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 25 - "FAQ Page & Glossary"
Cohesion: 0.29
Nodes (6): baseCategories, categories, Category, FAQ, FAQPage(), glossary

### Community 26 - "FAQ Wireframe"
Cohesion: 0.33
Nodes (4): categories, FAQPageWF(), faqs, glossary

### Community 27 - "Search Wireframe"
Cohesion: 0.33
Nodes (4): DATES, DAYS, HAS_AGENDA, SearchPageWF()

### Community 28 - "InformationPage (News/Articles)"
Cohesion: 0.40
Nodes (3): dummyData, InfoItem, InformationPage()

### Community 29 - "MA Official Seal/Logo Imagery"
Cohesion: 0.40
Nodes (5): Central Coat of Arms Shield (Pancasila-style emblem), Flanking Dolphin/Mythical Creature Figures, Gold Oval Medallion Border/Frame, Mahkamah Agung Official Seal (Logo), "MAHKAMAH AGUNG" Arced Text Banner

## Ambiguous Edges - Review These
- `MA Website Redesign Prototyping Guide` → `Tim 7 IMK Report (Team 7 HCI course document, unreadable - exceeds 20MB size limit)`  [AMBIGUOUS]
  Tim 7_IMK.pdf · relation: conceptually_related_to
- `MA Website Redesign Prototyping Guide` → `Tim 9 IMK Report (Team 9 HCI course document, content inaccessible - PDF media unavailable)`  [AMBIGUOUS]
  Tim 9_IMK.pdf · relation: conceptually_related_to
- `Tim 7 IMK Report (Team 7 HCI course document, unreadable - exceeds 20MB size limit)` → `Tim 9 IMK Report (Team 9 HCI course document, content inaccessible - PDF media unavailable)`  [AMBIGUOUS]
  Tim 7_IMK.pdf · relation: conceptually_related_to

## Knowledge Gaps
- **146 isolated node(s):** `name`, `private`, `version`, `type`, `build` (+141 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 221 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `MA Website Redesign Prototyping Guide` and `Tim 7 IMK Report (Team 7 HCI course document, unreadable - exceeds 20MB size limit)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `MA Website Redesign Prototyping Guide` and `Tim 9 IMK Report (Team 9 HCI course document, content inaccessible - PDF media unavailable)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Tim 7 IMK Report (Team 7 HCI course document, unreadable - exceeds 20MB size limit)` and `Tim 9 IMK Report (Team 9 HCI course document, content inaccessible - PDF media unavailable)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `cn()` connect `shadcn Accordion/Avatar/OTP Primitives` to `shadcn Sidebar & Input Primitives`, `shadcn Alert/Badge/Popover Primitives`, `shadcn AlertDialog & Button`, `shadcn Command Palette & Dialog`, `shadcn Menubar Primitive`, `shadcn ContextMenu Primitive`, `shadcn DropdownMenu Primitive`, `shadcn Carousel Primitive`, `shadcn Form & Label Primitives`, `shadcn Chart Primitive`, `shadcn Drawer Primitive`, `shadcn Select Primitive`, `shadcn Sheet Primitive`, `shadcn NavigationMenu Primitive`, `shadcn Breadcrumb Primitive`, `shadcn Card Primitive`?**
  _High betweenness centrality (0.225) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Misc npm Dependencies` to `Package Dependencies & Build Config`, `class-variance-authority (dependency)`, `clsx (dependency)`, `cmdk (dependency)`, `date-fns (dependency)`, `embla-carousel-react (dependency)`, `@emotion/react (dependency)`, `@emotion/styled (dependency)`, `input-otp (dependency)`, `lucide-react (dependency)`, `motion (dependency)`, `@mui/icons-material (dependency)`, `@mui/material (dependency)`, `next-themes (dependency)`, `@phosphor-icons/react (dependency)`, `@popperjs/core (dependency)`, `@radix-ui/react-accordion (dependency)`, `@radix-ui/react-alert-dialog (dependency)`, `@radix-ui/react-aspect-ratio (dependency)`, `@radix-ui/react-avatar (dependency)`, `@radix-ui/react-checkbox (dependency)`, `@radix-ui/react-collapsible (dependency)`, `@radix-ui/react-context-menu (dependency)`, `@radix-ui/react-dialog (dependency)`, `@radix-ui/react-dropdown-menu (dependency)`, `@radix-ui/react-hover-card (dependency)`, `@radix-ui/react-label (dependency)`, `@radix-ui/react-menubar (dependency)`, `@radix-ui/react-navigation-menu (dependency)`, `@radix-ui/react-popover (dependency)`, `@radix-ui/react-progress (dependency)`, `@radix-ui/react-radio-group (dependency)`, `@radix-ui/react-scroll-area (dependency)`, `@radix-ui/react-slider (dependency)`, `@radix-ui/react-switch (dependency)`, `@radix-ui/react-tabs (dependency)`, `@radix-ui/react-toggle (dependency)`, `@radix-ui/react-toggle-group (dependency)`, `@radix-ui/react-tooltip (dependency)`, `react-day-picker (dependency)`, `react-popper (dependency)`, `react-resizable-panels (dependency)`, `react-responsive-masonry (dependency)`, `react-router (dependency)`, `react-slick (dependency)`, `recharts (dependency)`, `sonner (dependency)`, `tailwind-merge (dependency)`, `tw-animate-css (dependency)`, `vaul (dependency)`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `Redesign Mahkamah Agung Website (project)` (e.g. with `shadcn/ui (MIT-licensed component library)` and `Unsplash (stock photo source)`) actually correct?**
  _`Redesign Mahkamah Agung Website (project)` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _146 weakly-connected nodes found - possible documentation gaps or missing edges._