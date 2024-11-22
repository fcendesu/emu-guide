![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Next Js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

# Emu Guide

<p align="center">
    <img src="https://github.com/atasoya/emu-guide/blob/main/src/app/opengraph-image.png" alt="Banner" />
</p>

[Emu Guide](https://www.emu.guide/) is your go-to platform for all things related to Eastern Mediterranean University (EMU). Whether you're a prospective student, current attendee, or alumni, Emu Guide provides comprehensive information about academic programs, campus life, and student services. Explore detailed guides, connect with the EMU community, and stay updated on the latest university news and events. Join us in discovering the opportunities and experiences that EMU has to offer!

## How To Contribute

Contributing to Emu Guide is a great way to help others in the Eastern Mediterranean University (EMU) community. Here's how you can get involved:

### 1. **Share Your Knowledge**

If you're a current student or alumni, you can contribute your insights about EMU, such as:

- Tips for new students
- Advice on navigating campus life
- Recommendations for academic resources
- Experiences with specific courses, clubs, or events

### 2. **Write Guides**

You can write and submit detailed guides about:

- Academic programs and their requirements
- Application and enrollment processes
- Scholarships and financial aid opportunities
- Living in Northern Cyprus and nearby regions

### 3. **Submit Updates**

If you notice outdated information or missing content, you can help by submitting updates. Whether it’s changes in academic policies, campus facilities, or new events, your contributions will ensure Emu Guide stays accurate and relevant.

### 4. **Suggest New Features**

We are always open to improving the platform. If you have suggestions for new features or sections that could benefit the EMU community, feel free to share your ideas.

### 5. **Just Make Emu Guide Better**

You can suggest new implementations of current logic, functionality, or views to help improve the website. Whether it’s optimizing performance, enhancing the user experience, or adding new features, every improvement matters. Even the smallest fixes, like improving readability or fixing minor bugs, are welcome!

Your contributions will help make Emu Guide a better resource for the EMU community.

## Contributing

### Development Process

1. Fork and clone the repository
2. Create your feature branch:

   ```bash
   git checkout -b feature/my-feature
   # or
   git checkout -b fix/my-fix
   ```

3. Set up development environment:

   ```bash
   npm install
   cp example.env.local .env.local
   # Update MongoDB URL in .env.local
   ```

4. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue #123"
   ```

### Pull Request Guidelines

1. **Title**: Use conventional commits format (feat/fix/docs/style/refactor)
2. **Description**:
   - Explain the changes
   - Reference related issues
   - Include screenshots for UI changes

### Bug Reports

Please include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details

### Feature Requests

Please include:

- Clear description
- Use case
- Expected behavior

### Code Quality

- Write tests for new features
- Follow existing code style
- Keep changes focused and atomic
- Add comments for complex logic

## Environment Setup

### Setting Up Environment Keys

1. Create a new `.env.local` file in the root directory:

   ```bash
   cp example.env.local .env.local
   ```

2. Update the `.env.local` file with your MongoDB connection string:

   - Replace `username` with your MongoDB username
   - Replace `password` with your MongoDB password
   - Replace `localhost:27017` with your MongoDB host and port
   - Replace `database_name` with your database name

   Example for local development:

   ```
   MONGODB_URL=mongodb://localhost:27017/your_database
   ```

   Example for MongoDB Atlas:

   ```
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/your_database
   ```

3. Make sure to never commit your `.env.local` file to version control. It's already included in `.gitignore`.
