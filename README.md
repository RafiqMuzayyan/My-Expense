# My Expense 💰

A modern, intuitive expense tracking application built with Next.js, designed to help you manage your personal finances with ease.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## ✨ Features

- 📊 **Expense Tracking** - Easily record and categorize your daily expenses
- 📈 **Financial Overview** - Visualize your spending patterns
- 🎨 **Modern UI** - Clean and intuitive interface
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Next.js for lightning-fast experience
- 🔒 **Local Data** - Your financial data stays private

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) - React framework for production
- **Language:** JavaScript/React
- **Styling:** [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Font:** Geist - Optimized with `next/font`

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** 18.17 or later
- **npm** (comes with Node.js) or **yarn** / **pnpm** / **bun**

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/RafiqMuzayyan/My-Expense.git
cd My-Expense
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
My-Expense/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # Reusable React components
│   ├── lib/           # Utility functions and helpers
│   └── styles/        # Global styles and CSS
├── next.config.mjs     # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
└── package.json        # Project dependencies
```

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🏗️ Build & Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The production build will be created in the `.next` folder, optimized for best performance.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RafiqMuzayyan/My-Expense)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure everything automatically
4. Your app will be deployed!

### Other Deployment Options

- **Netlify** - [Deployment Guide](https://docs.netlify.com/frameworks/next-js/overview/)
- **Railway** - [Deployment Guide](https://docs.railway.app/guides/nextjs)
- **AWS Amplify** - [Deployment Guide](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html)
- **Self-Hosted** - [Next.js Docs](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting)

## 🎨 Customization

### Changing Theme

Tailwind CSS configuration can be modified in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
    },
  },
}
```

### Modifying Components

UI components are located in `src/components/`. You can customize them according to your needs.

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Next.js repository

### Styling Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS
- [Tailwind UI Components](https://tailwindui.com) - Official Tailwind components

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines

- Write clear, descriptive commit messages
- Follow the existing code style
- Test your changes thoroughly
- Update documentation if needed

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue on GitHub with:

- Clear description of the bug/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rafiq Muzayyan**

- GitHub: [@RafiqMuzayyan](https://github.com/RafiqMuzayyan)
- Repository: [My-Expense](https://github.com/RafiqMuzayyan/My-Expense)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide](https://lucide.dev)
- Font optimization by [Vercel](https://vercel.com/font)

## 📞 Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

For questions or support, feel free to open an issue or reach out through GitHub.

---

Made with ❤️ by Rafiq Muzayyan
