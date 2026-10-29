# RecruitSafe AI — Verify Before You Trust 🛡️

**RecruitSafe AI** is an AI- and rules-powered web application designed to help students, fresh graduates, job seekers, and organizations identify recruitment scams, detect enterprise impersonation, understand evidence-based warning signs, and make safer career decisions.

---

## 🎯 Phase 1: Foundation Milestone

In **Phase 1**, we establish the local Python development environment on Windows, build the clean Streamlit landing page, configure application constants, and define the core architectural structure.

---

## 📁 Project Directory Structure

```text
RecruitSafeAI/
├── app.py                # Streamlit web application & landing page
├── config.py             # Global constants, versioning, and thresholds
├── requirements.txt      # Python dependencies (Streamlit)
├── README.md             # Windows setup guide and documentation
├── .env.example          # Template for environment variables
├── .gitignore            # Git exclusion rules (venv, secrets, cache)
└── data/
    └── README.md         # Data handling guidelines and privacy policy
```

---

## 💻 Step-by-Step Windows Setup Guide

Follow these simple steps in **VS Code** on Windows:

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File → Open Folder...** and select the `RecruitSafeAI` folder.
3. Open a terminal by pressing `` Ctrl + ` `` (Control + Backtick) or navigating to **Terminal → New Terminal**.

### Step 2: Verify Python is Installed
Run this command in the terminal:
```powershell
python --version
```
*Expected output:* `Python 3.10.x` or higher.
*(If you see an error, download Python from [python.org](https://www.python.org/) and make sure to check "Add Python to PATH" during installation.)*

### Step 3: Create an Isolated Virtual Environment
A virtual environment (`venv`) keeps this project's dependencies separate from other Python projects on your machine:
```powershell
python -m venv venv
```
*You will see a new folder named `venv` appear in your file explorer.*

### Step 4: Activate the Virtual Environment
Activate the environment in PowerShell:
```powershell
.\venv\Scripts\Activate.ps1
```
*Expected output:* You will see `(venv)` appear at the start of your terminal prompt line.

> **Troubleshooting PowerShell Script Execution Error:**
> If you encounter: *`File ... cannot be loaded because running scripts is disabled on this system`*, run this command once to permit local scripts, then re-run the activation:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> .\venv\Scripts\Activate.ps1
> ```

### Step 5: Install Project Dependencies
Install the required packages using `pip`:
```powershell
pip install -r requirements.txt
```

### Step 6: Launch the Streamlit Web Application
Start the RecruitSafe AI server:
```powershell
streamlit run app.py
```
*Expected output:*
```text
  You can now view your Streamlit app in your browser.
  Local URL: http://localhost:8501
  Network URL: http://192.168.x.x:8501
```
Your browser will automatically open to `http://localhost:8501`.

---

## 🧪 What is Included in the Phase 1 Landing Page?

1. **Brand Identity & Mission:** Clear definition of RecruitSafe AI ("Verify Before You Trust").
2. **Interactive Offer Analyzer Demo:** Test preset recruitment scenarios (e.g. check-cashing scheme, advance fee scam, Telegram redirect, or verified Acme Corp offer) or paste custom text.
3. **6 Critical Scam Warning Signs:** Educational breakdown of upfront fees, fake checks, free email impersonation, chat-only interviews, unrealistic compensation, and extreme urgency.
4. **Three User Roles:**
   - **Students & Public:** Free safety scanner, plain-language reports, verification checklists.
   - **Business Users:** Enterprise verification, impersonation alerts, and 3-month free trial.
   - **Platform Administrator:** Secure review console, application approval, and report triage.
5. **Safe Verification Checklist:** 5 rules for candidate safety.
6. **10-Phase Engineering Roadmap:** Clear transparency into the software build plan.

---

## 🔒 Security & Privacy Principles

- **No Upfront Personal Data:** Essential scans do not require an account or phone number.
- **Untrusted Input Handling:** All candidate messages and pasted texts are treated as untrusted data.
- **Safe Secrets:** API keys are never hardcoded or committed to version control.
- **Explainable Decisions:** We distinguish observed indicators from speculative assumptions.

---

## 🎓 Interview Talking Points (Internship / Junior Dev Prep)

When discussing this project in an interview:
- **Architecture Choice:** *"We started with a clean Streamlit prototype to rapidly validate UX and detection logic before migrating to FastAPI and a dedicated frontend."*
- **Explainability vs. Black-Box:** *"Rather than blindly trusting an AI score, RecruitSafe AI combines rule-based heuristics with evidence citations so candidates clearly understand WHY an offer was flagged."*
- **Role-Based Access:** *"We structured the platform around three distinct user models (students, businesses with a 3-month trial, and a private audited admin)."*
