# Japan Geospatial Times (JGTimes)

A simple and modern information platform exploring Japan's GIS past and present, built with SvelteKit and designed for geospatial enthusiasts worldwide.

## 📝 Contributing Articles

### Editorial Principles

This site embodies the spirit of FOSS4G: sharing knowledge, encouraging open collaboration, and highlighting social impact.

Articles may introduce both open-source and commercial products or services.
However, the focus should be on case studies, public benefits, technical insights, or lessons learned, rather than pure commercial promotion.

Contributions should be well-grounded (whether in facts, professional experience, or expert insights), relevant to GIS in Japan, and useful for an international audience.
Diverse perspectives are welcome, as long as they contribute to the broader GIS community's understanding.
Submissions may be edited for clarity, accuracy, and balance before publication.

### For Contributors

You can contribute articles to JGTimes by adding markdown files to the `articles/en/` directory. The site automatically detects and displays new articles without any manual configuration.

For detailed submission instructions, please see the **[How to Contribute](#how-to-contribute)** section below.

#### Article Requirements

Each article must be a markdown file (`.md`) with YAML frontmatter containing:

**Required metadata:**
- `title`: Article title
- `date`: Publication date (YYYY-MM-DD format)

**Optional metadata:**
- `category`: Single category or array of categories (e.g., `service` or `[service, government]`)
- `description`: Brief article description
- `author`: Single author or array of authors (e.g., `"Eita.H"` or `["Eita.H", "Taro.S"]`)

#### Example Article Structure

```markdown
---
title: "Your Article Title"
date: "2024-01-15"
category: [service, government]
description: "Brief description of your article"
author: ["Your Name", "Co-author Name"]
---

# Your Article Content

Write your article content here using standard markdown syntax.
```

#### How to Contribute

There are two ways to contribute articles:

##### Option 1: For GitHub Users (Direct Submission)

1. **Fork this repository**
2. **Create a new markdown file** in `articles/en/` with a descriptive filename
3. **Add your article content** following the structure above
4. **Include images (if needed)**:
   - Create a folder with your author name in `static/images/articles/[author-name]/`
   - Use lowercase with hyphens (e.g., `eita-h`, `taro-yamada`)
   - Place your image files in that folder
   - Reference them: `![Description](/images/articles/author-name/your-image.jpg)`
   - Ensure you have rights to use the images
5. **Submit a pull request** with your changes

##### Option 2: For Non-GitHub Users (Form Submission)

If you're not familiar with GitHub, you can submit your article through our submission form (powered by Google Forms):

**📝 [Submit Article via Google Forms](https://forms.gle/vsx2G7Cgat8xWyLg9)**

Simply fill out the form with your article details, and your submission will be reviewed and added to the site.

---

Articles are automatically sorted by date (newest first) and will appear on the site once merged or approved.

#### Supported Features

- **Multiple categories**: Use arrays for articles spanning multiple topics
- **Multiple authors**: Credit multiple contributors to an article
- **Rich markdown**: Full markdown support including links, images, code blocks, etc.
- **Automatic processing**: No manual registration needed - just add the file!

### For Maintainers

The article system is powered by:
- `src/lib/getArticles.ts`: Automatically scans `articles/en/` for markdown files
- `gray-matter`: Parses YAML frontmatter metadata
- Articles are validated for required metadata and sorted by date

## 🛠 For Site Development

### Quick Start

Install dependencies and start the development server:

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Technical Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Markdown Processing**: markdown-it with gray-matter
- **Language Support**: Currently English articles (extensible to other languages)

## 📄 License

This project uses a dual-license structure to support both open source development and content sharing:

### Code License
The codebase (SvelteKit application, build tools, etc.) is licensed under the **[BSD 3-Clause License](LICENSE)**.

### Content License  
All articles and content contributions are licensed under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](CONTENT_LICENSE)**.

### Why This Structure?
This dual-license approach:
- Aligns with **FOSS4G community** best practices for open geospatial projects
- Ensures **contributors receive proper attribution** for their articles
- Supports **open knowledge sharing** while maintaining code flexibility
- Enables both **educational and commercial use** with appropriate attribution

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

This project proudly supports the FOSS4G mission of making geospatial knowledge accessible to everyone.
