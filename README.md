# Minimal Next.js Portfolio Website Template

A customizable portfolio website template built with Next.js, designed to help developers and designers showcase their work effectively.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Customization](#customization)
  - [Global Configuration](#global-configuration)
  - [Adding New Sections](#adding-new-sections)
  - [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modern Design**: Clean and responsive design using [Tailwind CSS](https://tailwindcss.com/).
- **Fast Performance**: Built with Next.js for optimized performance.
- **Easy Content Management**: Manage content through Markdown files.
- **SEO Friendly**: Pre-configured with SEO best practices.
- **Dark Mode Support**: Toggle between light and dark themes.

## Demo

Check out the live demo: [https://portfolio-website-chi-bay.vercel.app/](https://portfolio-website-chi-bay.vercel.app/)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/deecaulcrick/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

```
.
├── all-posts
│   └── your-markdown-posts.md
├── public
│   └── fonts
│   └── images
├── src
│   ├── app
│   ├── components
│   └── utils
├── .gitignore
├── README.md
├── next.config.mjs
├── package.json
└── tailwind.config.mjs
```

- `all-posts/`: Directory containing Markdown files for blog posts or projects.
- `public/`: Static assets like images and icons.
- `src/app/`: Main application components and Next.js routing.
- `src/components/`: Reusable React components.
- `src/utils/`: Utility functions and helpers.

## Customization

### Global Configuration

Modify global settings such as site title, description, and navigation links in the `src/app/layout.js` file:

```javascript
export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'A brief description of your portfolio website.',
};
```

### Adding New Sections

To add a new section to your portfolio:

1. **Create a New Component:**

   In `src/components/`, create a new file for your section, e.g., `NewSection.js`:

   ```javascript
   const NewSection = () => {
     return (
       <section id="new-section">
         <h2>New Section</h2>
         <p>Content for the new section.</p>
       </section>
     );
   };

   export default NewSection;
   ```

2. **Include the Component in a Page:**

   Import and include your new component in the desired page, e.g., the home page: `src/app/page.js` or a new-page: `src/app/new-page/page.js` :

   ```javascript
   import NewSection from '../components/NewSection';

   export default function Home() {
     return (
       <>
         {/* Other sections */}
         <NewSection />
         {/* Other sections */}
       </>
     );
   }
   ```

### Styling

This project uses Tailwind CSS for styling. To customize styles:

- **Global Styles:** Edit `src/app/globals.css`.
- **Tailwind Configuration:** Modify `tailwind.config.mjs` for theme customization.

For detailed Tailwind CSS customization, refer to the [official documentation](https://tailwindcss.com/docs/configuration).

## Deployment

To deploy the website, consider using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Deploying to Vercel

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

   Follow the prompts to complete the deployment.

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! If you have suggestions or encounter issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this documentation further to align with your project's specifics. 
