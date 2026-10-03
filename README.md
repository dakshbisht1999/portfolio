# Dishant Bisht — Personal Portfolio & Cloud Infrastructure

[![Live Portfolio](https://img.shields.io/badge/Live_Site-dishantbisht.in-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://dishantbisht.in)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![AWS](https://img.shields.io/badge/AWS-EC2_%7C_S3_%7C_CloudFront_%7C_Lambda_%7C_SES-232f3e?style=for-the-badge&logo=amazonwebservices&logoColor=white)](https://aws.amazon.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Web_Server-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088ff?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

> Personal portfolio of **Dishant Bisht** — Full-Stack Software Engineer (5+ years exp.) transitioning into GenAI engineering. Designed with modern frontend architecture and deployed on scalable AWS infrastructure with automated CI/CD pipelines.

---

## 🎯 Recruiter & Technical Reviewer Summary

This repository demonstrates more than just clean frontend engineering — it reflects **hands-on cloud architecture, production problem-solving, systems administration, and DevOps automation**:

- **Cloud & Serverless Experience**: Architected hosting solutions across **AWS S3, CloudFront CDN, AWS Lambda, AWS SES (Simple Email Service), and AWS EC2**.
- **Real-World Engineering Problem Solving**: Diagnosed and resolved custom domain SSL/TLS certificate limitations on S3 static hosting; navigated AWS account verification hurdles by swiftly engineering an alternative **EC2 + Nginx reverse proxy** deployment to meet deadlines.
- **Dual CI/CD Automation**: Authored independent, production-grade **GitHub Actions workflows** for both EC2 (SSH/SCP deployment with automated Nginx reload) and S3 (AWS CLI synchronized bucket sync with cleanup).
- **Cross-Service Backend Integration & Security**: Engineered contact form communication with the existing production backend (`devtinder-be`), including origin-level **CORS whitelisting** for `dishantbisht.in` and input validation.
- **AI Leverage & Vendor Decoupling**: Harnessed AI developer tooling (Codex) for rapid UI scaffolding, followed by deep refactoring to strip out all proprietary vendor runtimes/plugins into a clean, standalone React 19 + TypeScript codebase.

---

## 💡 Engineering Philosophy: AI-Accelerated Prototyping & Decoupling

Rather than spending weeks hand-crafting static UI presentation components from scratch, this portfolio was approached with an engineering mindset focused on high leverage and rapid delivery:

- **AI-Assisted Prototyping**: Leveraged AI developer tooling (Codex) to accelerate the initial structural prototyping and boilerplate generation.
- **Vendor Decoupling & Refactoring**: Cleaned and refactored the raw UI prototype into a standalone, vendor-independent codebase — systematically stripping away proprietary runtime dependencies, bloated plugins, and third-party scripts.
- **Modern Standards Migration**: Re-architected the layout into pure **React 19**, **TypeScript**, and **Tailwind CSS**, backed by custom routing, state management, and AWS deployment automation.
- **Strategic Prioritization**: This approach allowed the vast majority of engineering bandwidth to remain focused on high-complexity systems: backend architecture, AWS cloud infrastructure, and advancing GenAI pipelines in [DevTinder](https://devtinder.dishantbisht.in).

---

## 📐 Architecture Evolution & Infrastructure Journey

```
                              ┌─────────────────────────────────────────────────────────┐
                              │  INITIAL BLUEPRINT (Serverless S3 + CloudFront + Lambda)│
                              └─────────────────────────────────────────────────────────┘
                                                           │
               [Client Browser] ──> [CloudFront CDN / ACM SSL] ──> [AWS S3 Bucket (Static Host)]
                      │
                      └── Contact Form POST ──> [AWS Lambda] ──> [AWS SES] ──> [Inbox]
                                                           │
                        ⚠️  Challenge: Custom domain SSL on S3 required CloudFront;
                            CloudFront distribution pending AWS account verification.
                                                           │
                                                           ▼
                              ┌─────────────────────────────────────────────────────────┐
                              │     PRODUCTION DEPLOYMENT (AWS EC2 + Nginx + CORS)      │
                              └─────────────────────────────────────────────────────────┘
                                                           │
               [Client Browser] ── HTTPS ──> [AWS EC2 (Ubuntu + Nginx)] ──> [/var/www/html]
                      │
                      └── Contact Form POST ──> [devtinder-be (Node/Express API)] ──> [AWS SES / Mailer]
                                                (CORS allowed: dishantbisht.in)
```

### 1. Initial Architecture: Serverless Static Hosting (AWS S3 + CloudFront + Lambda + SES)
- **Static Hosting**: The client build (`dist/`) was originally configured and hosted on a public **AWS S3 bucket** configured for static website hosting with custom bucket policies.
- **Serverless Form Handling**: Designed to process contact messages via a serverless **AWS Lambda** function communicating with **AWS SES (Simple Email Service)** — leveraging the verified email pipeline already implemented in the [DevTinder](https://devtinder.dishantbisht.in) production backend.
- **The SSL / DNS Challenge**:
  - Direct S3 static website endpoints do not support custom domain SSL/TLS certificates (e.g., `https://dishantbisht.in`). They only support HTTP or Amazon's shared wildcard SSL under `*.s3-website.*.amazonaws.com`.
  - Pointing Cloudflare DNS directly to the S3 bucket website endpoint caused SSL handshake and CNAME routing conflicts.
  - The standard AWS pattern is fronting S3 with **AWS CloudFront** and attaching an **AWS Certificate Manager (ACM)** SSL certificate.
  - When configuring CloudFront, AWS flagged the new account requiring additional service verification before provisioning distributions. A formal verification query was raised with AWS Support.

### 2. The Production Pivot: AWS EC2 + Nginx Reverse Proxy
- Rather than waiting on cloud provider support ticket resolution, an agile engineering decision was made to pivot deployment without delaying launch.
- **AWS EC2 Compute**: Provisioned an Ubuntu EC2 instance configured with **Nginx** to serve the static bundle from `/var/www/html/` with SSL termination.
- **Backend API Integration (`devtinder-be`)**:
  - Connected the portfolio contact form directly to the battle-tested email route in the DevTinder backend API: `https://devtinder.dishantbisht.in/api/v1/auth/email`.
  - Dispatches structured payload identifying the traffic source:
    ```ts
    {
      emailComingFrom: 'portfolio',
      name: '...',
      emailId: '...',
      subject: '...',
      message: '...'
    }
    ```
- **Cross-Origin Security (CORS)**:
  - Whitelisted `https://dishantbisht.in` in the `devtinder-be` Express CORS configuration to allow safe, authenticated cross-origin communication between the portfolio domain and the API.

---

## 🚀 Dual CI/CD Pipelines (GitHub Actions)

Both deployment strategies have automated workflows committed under `.github/workflows`:

| Workflow | File | Status | Deployment Target | Trigger |
|---|---|---|---|---|
| **EC2 Automated Deployment** | [`.github/workflows/deploy-ec2.yml`](.github/workflows/deploy-ec2.yml) | **Active Production** | AWS EC2 (`/var/www/html`) | Push to `main` with commit message prefixed with `deploy:` |
| **S3 Sync Deployment** | [`.github/workflows/deploy-s3.yml.disabled`](.github/workflows/deploy-s3.yml.disabled) | **Ready / Archived** | AWS S3 Bucket (`s3://...`) | Push to `main` with commit message prefixed with `deploy:` |

### EC2 Production Workflow Mechanics (`deploy-ec2.yml`)
1. **Conditional Triggering**: Inspects the commit message using `${{ startsWith(github.event.head_commit.message, 'deploy:') }}` to prevent unneeded runner executions on simple doc/config tweaks.
2. **Build**: Checks out repository, provisions Node.js 24, installs dependencies via `npm ci`, and builds production bundle (`npm run build`).
3. **Secure SCP Transfer**: Uses `appleboy/scp-action` with encrypted GitHub Secrets (`EC2_HOST`, `EC2_USERNAME`, `EC2_SSH_KEY`) to stage build files into `/tmp/portfolio-build`.
4. **Zero-Friction Release**: Uses `appleboy/ssh-action` to atomically copy files to `/var/www/html/`, cleans up temporary build files, and gracefully reloads Nginx (`sudo systemctl reload nginx`).

### S3 Deployment Workflow Mechanics (`deploy-s3.yml.disabled`)
1. Authenticates against AWS using official `aws-actions/configure-aws-credentials` with IAM user credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`).
2. Syncs production assets using `aws s3 sync ./dist s3://${{ secrets.S3_BUCKET_NAME }} --delete` to ensure removed files in build are immediately purged from the bucket.
3. Fully configured to seamlessly re-enable and append `aws cloudfront create-invalidation` once CloudFront distribution is attached.

---

## 🛠️ Cloud & DevOps Competency Matrix

| Domain | Technologies & Skills |
|---|---|
| **AWS Cloud** | EC2 (Linux administration, systemd), S3 (Static Hosting, Bucket Policies), CloudFront (CDN, Edge caching), Lambda (Serverless functions), SES (Email deliverability), IAM (Least privilege roles/keys) |
| **DevOps & Automation** | GitHub Actions (CI/CD Pipelines, SSH/SCP orchestration), AWS CLI, Zero-downtime Nginx reloads |
| **Web Server & Networking** | Nginx (Virtual hosts, reverse proxy, static file serving), Cloudflare DNS, SSL/TLS Certificates, CORS security policies, HTTP/HTTPS headers |
| **Frontend Architecture** | React 19, TypeScript, Vite, Tailwind CSS, Motion (Framer Motion animations), Radix UI, TanStack Query |

---

## 💻 Tech Stack & Libraries

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/) with HMR and optimized asset hashing
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [tailwind-merge](https://github.com/dcastil/tailwind-merge), [class-variance-authority](https://cva.style/)
- **Animation & Motion**: [Motion](https://motion.dev/) (Framer Motion)
- **UI Components**: [@radix-ui/react-slot](https://www.radix-ui.com/)
- **Data & State**: [@tanstack/react-query](https://tanstack.com/query)
- **Routing**: [react-router-dom v7](https://reactrouter.com/)

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── deploy-ec2.yml           # Active GitHub Actions pipeline for EC2
│       └── deploy-s3.yml.disabled   # Ready-to-use pipeline for AWS S3 bucket sync
├── public/                          # Static assets & favicons
├── src/
│   ├── components/                  # Reusable UI primitives & layouts
│   ├── contents/                    # Centralized content & portfolio data
│   │   └── content.ts               # Experience, projects, skills & bio copy
│   ├── pages/                       # Page components
│   │   ├── home.tsx                 # Landing / Hero & overview
│   │   ├── about.tsx                # Career journey & GenAI transition
│   │   ├── projects.tsx             # Featured & full project catalog
│   │   ├── skills.tsx               # Tech stack radar & learning roadmap
│   │   └── contact.tsx              # Validated contact form (API integration)
│   ├── routes.tsx                   # Client-side route declarations
│   ├── index.css                    # Tailwind utility and theme rules
│   └── main.tsx                     # Application entry point
├── index.html                       # HTML5 template
├── package.json                     # Dependencies & build scripts
├── tsconfig.json                    # TypeScript compiler configuration
└── vite.config.ts                   # Vite bundler plugins and alias mapping
```

---

## ⚡ Local Development

### Prerequisites
- **Node.js**: `v20.x` or `v24.x` (Recommended)
- **npm**: `v10.x` or higher

### Setup & Run
```bash
# 1. Clone the repository
git clone https://github.com/dakshbisht1999/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Create production build
npm run build

# 5. Run ESLint checks
npm run lint
```

---

## 👤 Author

**Dishant Bisht**
*Full-Stack Software Engineer · GenAI Engineer*

- **Website**: [dishantbisht.in](https://dishantbisht.in)
- **LinkedIn**: [linkedin.com/in/dishantbisht](https://linkedin.com/in/dishantbisht)
- **GitHub**: [@dakshbisht1999](https://github.com/dakshbisht1999)
- **NamasteDev**: [@dakshbisht1999](https://namastedev.com/dakshbisht1999)
- **Email**: [dakshbisht1999@gmail.com](mailto:dakshbisht1999@gmail.com)
- **Other Projects**: [DevTinder (Live)](https://devtinder.dishantbisht.in) · [Frontend Code](https://github.com/dakshbisht1999/devtinder-fe) · [Backend Code](https://github.com/dakshbisht1999/devtinder-be)
