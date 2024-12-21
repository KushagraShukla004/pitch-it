# Pitch-It 🚀

Pitch-It is a modern web platform where innovators can share their ideas, get feedback, and connect with potential collaborators. Built with Next.js, Sanity CMS, and TypeScript, it offers a seamless experience for presenting and discovering innovative solutions.

## 🌟 Features

- **Idea Showcase**: Present your innovative solutions with rich markdown support
- **Real-time Interactions**: Engage with the community through comments and reactions
- **Dark Mode Support**: Comfortable viewing experience in any lighting condition
- **Authentication**: Secure user authentication powered by NextAuth.js
- **Content Management**: Flexible content management through Sanity.io
- **Responsive Design**: Optimized for all devices and screen sizes

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with React 19 RC
- **Styling**: TailwindCSS with custom UI components
- **CMS**: Sanity.io
- **Authentication**: NextAuth.js
- **Content**: Markdown support with react-md-editor
- **Type Safety**: TypeScript
- **Error Tracking**: Sentry
- **Package Management**: pnpm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pitch-it.git

# Navigate to project directory
cd pitch-it

# Install dependencies with pnpm
pnpm install

# Set up environment variables
cp .env.example .env.local
```

## 🔧 Configuration

1. **Create a .env.local file with the following variables:**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=<doman>(for local use: http://localhost:3000)
```

2. **Configure Sanity Studio:**

```bash
pnpm sanity init
```

## 🚀 Development

```bash
# Run the development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run type generation
pnpm typegen
```

## 📝 Scripts

- `dev`: Runs the development server
- `build`: Creates a production build
- `start`: Starts the production server
- `lint`: Runs ESLint
- `typegen`: Generates TypeScript types from Sanity schema

## 🏗️ Project Structure

```
pitch-it/
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # Reusable UI components
│   ├── lib/            # Utility functions and configurations
│   ├── sanity/         # Sanity CMS configuration and schemas
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
└── sanity/            # Sanity Studio configuration
```

## 🔒 Security

- Secure authentication with NextAuth.js
- Error tracking and monitoring with Sentry
- Type-safe development with TypeScript
- Secure content management with Sanity.io

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 👥 Authors

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) : [Kushagra Shukla](https://github.com/KushagraShukla004) ![Avatar](https://avatars.githubusercontent.com/u/73269482?s=48&v=4)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Sanity.io for the powerful CMS
- The open-source community for various dependencies
