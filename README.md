# Automation Exercise – Playwright Login Automation
## 🎬 Automation Demo

![Automation Demo](automation_video.gif)
## Objective
Automate the required assessment scenario:
1. Open Automation Exercise.
2. Navigate to Login.
3. Enter a manually registered email/password.
4. Submit login.
5. Verify successful login.

## Tech Stack
- Playwright
- JavaScript
- Page Object Model

## Manual prerequisite
The assessment explicitly requires creating a new account manually before automation. Do this once on:
https://www.automationexercise.com/signup

Then provide the credentials through environment variables. Do **not** hard-code credentials in GitHub.

### PowerShell
```powershell
$env:AE_EMAIL="your-registered-email@example.com"
$env:AE_PASSWORD="your-password"
npm test
```

### CMD
```cmd
set AE_EMAIL=your-registered-email@example.com
set AE_PASSWORD=your-password
npm test
```

### Headed run
```powershell
npm run test:headed
```

### HTML report
```powershell
npm run report
```

## Suggested GitHub structure
- `pages/login.page.js`
- `tests/login.spec.js`
- `playwright.config.js`
- `package.json`
- `README.md`

## Security note
Never commit real credentials, `.env`, passwords, cookies, tokens, or Playwright storage state.
