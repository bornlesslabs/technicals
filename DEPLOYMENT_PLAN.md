# Deployment Plan: Deploying technicals.dev from GitHub using GitHub Actions (No Vercel)

This plan outlines how to remove Vercel from your workflow and deploy your Next.js app directly from GitHub to your custom domain technicals.dev using GitHub Actions and a static hosting solution (e.g., GitHub Pages, Cloudflare Pages, or a VPS). This example uses GitHub Pages for static export, but you can adapt it for other hosts.

Going forward it will be hosted on https://bornlesslabs.github.io/technicals/ until a new domain has been acquired

---

## 1. Prerequisites
- You own the domain technicals.dev and can manage its DNS.
- Your code is in a GitHub repository.
- You have admin access to the repo and domain.

## 2. Remove Vercel Integration
1. Remove the Vercel GitHub App from your repository (GitHub > Settings > Applications > Installed GitHub Apps).
2. Delete any `vercel.json` or Vercel-specific config files from your repo.
3. Remove Vercel environment variables and webhooks from your GitHub repo settings.
4. Remove the project from your Vercel dashboard (optional).

## 3. Prepare for Static Export (Next.js)
1. In `next.config.mjs`, add or update:
    ```js
    export default {
       output: 'export',
    };
    ```
2. Ensure all dynamic features are compatible with static export (see Next.js docs for limitations).
3. Test locally: `pnpm build && pnpm export`
    - Output should be in the `out/` directory.

## 4. Set Up GitHub Actions for Deployment
1. Create `.github/workflows/deploy.yml` with the following:
    ```yaml
    name: Deploy to GitHub Pages

    on:
       push:
          branches: [main]

    permissions:
       contents: write

    jobs:
       build-and-deploy:
          runs-on: ubuntu-latest
          steps:
             - uses: actions/checkout@v4
             - uses: actions/setup-node@v4
                with:
                   node-version: 20
             - uses: pnpm/action-setup@v3
               with:
                  version: 9
                  run_install: true
             - run: pnpm build && pnpm export
             - name: Deploy to GitHub Pages
                uses: peaceiris/actions-gh-pages@v4
                with:
                   github_token: ${{ secrets.GITHUB_TOKEN }}
                   publish_dir: ./out
    ```
2. Commit and push this workflow file.

## 5. Configure GitHub Pages
1. In your repo, go to **Settings > Pages**.
2. Set the source to **GitHub Actions**.
3. After the first successful deploy, your site will be available at `https://<username>.github.io/<repo>/`.

## 6. Point technicals.dev to GitHub Pages
1. In **Settings > Pages**, add `technicals.dev` as a custom domain.
2. GitHub will provide DNS records (CNAME or A records) to add to your domain registrar.
3. Add these records to your DNS provider.
4. Wait for DNS to propagate and for GitHub to issue an SSL certificate.

## 7. Test Your Deployment
- Visit https://technicals.dev to confirm your site is live.
- Test all features.

---

**Notes:**
- If you need SSR or API routes, use a VPS or cloud provider (e.g., DigitalOcean, AWS EC2) and deploy with rsync, scp, or Docker via GitHub Actions.
- For static sites, GitHub Pages is free and easy to maintain.
- Remove any Vercel-specific code, configs, and environment variables from your project.
