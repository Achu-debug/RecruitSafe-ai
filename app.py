"""
RecruitSafe AI — Phase 1: Streamlit Landing Page
Verify Before You Trust

Run with:
    streamlit run app.py
"""

import streamlit as st
import config

# Set page configuration with cybersecurity branding
st.set_page_config(
    page_title=f"{config.APP_NAME} — {config.TAGLINE}",
    page_icon="🛡️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for trustworthy cybersecurity SaaS appearance
st.markdown("""
<style>
    /* Dark navy headers & modern typography */
    .main-header {
        font-size: 2.4rem;
        font-weight: 700;
        color: #0F172A;
        letter-spacing: -0.02em;
        margin-bottom: 0.2rem;
    }
    .tagline-sub {
        font-size: 1.15rem;
        color: #475569;
        margin-bottom: 1.5rem;
    }
    .hero-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: #EEF2F6;
        color: #1E293B;
        font-size: 0.85rem;
        font-weight: 600;
        border-radius: 4px;
        margin-bottom: 0.8rem;
    }
    .feature-card {
        background-color: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        padding: 1.25rem;
        margin-bottom: 1rem;
    }
    .risk-high {
        color: #DC2626;
        font-weight: 700;
    }
    .risk-medium {
        color: #D97706;
        font-weight: 700;
    }
    .risk-low {
        color: #059669;
        font-weight: 700;
    }
    .disclaimer-box {
        background-color: #F1F5F9;
        border: 1px solid #CBD5E1;
        border-radius: 6px;
        padding: 1rem;
        font-size: 0.88rem;
        color: #475569;
        margin-top: 2rem;
    }
</style>
""", unsafe_allow_html=True)

# Sidebar Navigation
with st.sidebar:
    st.markdown("### 🛡️ RecruitSafe AI")
    st.markdown(f"*{config.TAGLINE}*")
    st.markdown(f"**Version:** `{config.VERSION}`")
    st.markdown("---")
    
    navigation = st.radio(
        "Navigation",
        [
            "🏠 Home & Overview",
            "🔍 Interactive Offer Analyzer (Demo)",
            "⚠️ 6 Critical Scam Warning Signs",
            "👥 User Roles & Access",
            "✅ Safe Verification Checklist",
            "🗺️ 10-Phase Project Roadmap",
            "💻 Windows Setup Instructions"
        ]
    )
    
    st.markdown("---")
    st.caption("RecruitSafe AI • Cybersecurity & Recruitment Defense")
    st.caption("Phase 1: Foundation Milestone")

# -------------------------------------------------------------
# PAGE 1: Home & Overview
# -------------------------------------------------------------
if navigation == "🏠 Home & Overview":
    st.markdown('<div class="hero-badge">Phase 1 Foundation • Active Prototype</div>', unsafe_allow_html=True)
    st.markdown(f'<div class="main-header">{config.APP_NAME}</div>', unsafe_allow_html=True)
    st.markdown(f'<div class="tagline-sub"><strong>{config.TAGLINE}</strong> — Protecting job seekers, students, and businesses from recruitment fraud.</div>', unsafe_allow_html=True)
    
    # Mission Statement Card
    st.info(f"**Mission:** {config.MISSION}")
    
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("""
        <div class="feature-card">
            <h4>🎯 For Students & Job Seekers</h4>
            <p>Free, accessible verification of unsolicited job emails, internship offers, and work-from-home claims.</p>
        </div>
        """, unsafe_allow_html=True)
    with col2:
        st.markdown("""
        <div class="feature-card">
            <h4>🏢 For Verified Businesses</h4>
            <p>Impersonation defense, incident reporting, and verified recruiter profiles with 3-month free trials.</p>
        </div>
        """, unsafe_allow_html=True)
    with col3:
        st.markdown("""
        <div class="feature-card">
            <h4>🛡️ Platform Governance</h4>
            <p>Audited administrative controls, fraud report triage, false-positive remediation, and rate management.</p>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("### Why Recruitment Verification Matters")
    st.markdown("""
    Over 40% of tech and entry-level students report receiving suspicious recruitment messages, fake remote data-entry offers, 
    or check-cashing schemes. **RecruitSafe AI** empowers users with explainable, evidence-backed warning signs rather than black-box guesses.
    """)

# -------------------------------------------------------------
# PAGE 2: Interactive Offer Analyzer (Demo)
# -------------------------------------------------------------
elif navigation == "🔍 Interactive Offer Analyzer (Demo)":
    st.header("🔍 Offer & Message Quick-Analyzer")
    st.write("Test recruitment messages against Phase 1 transparent detection rules. Essential safety scans are 100% free.")

    # Preset selector for fast demonstration
    sample_choice = st.selectbox(
        "Choose a sample scenario or select 'Custom Input':",
        [
            "Custom Input",
            "Scenario A: High-Risk Fake Job with Advance Training Fee",
            "Scenario B: Check Cashing / Equipment Vendor Scam",
            "Scenario C: Telegram Chat Redirect with Big Tech Impersonation",
            "Scenario D: Legitimate Verified Offer from Acme Corp"
        ]
    )

    preset_texts = {
        "Scenario A: High-Risk Fake Job with Advance Training Fee": (
            "Congratulations! You have been selected for our remote data entry position at $55/hr. "
            "To confirm your appointment and ship your company MacBook, a refundable registration fee of $120 "
            "must be sent via Zelle to hr-desk@outlook.com before 5 PM today."
        ),
        "Scenario B: Check Cashing / Equipment Vendor Scam": (
            "Welcome to our logistics team. We will mail you a certified cashier check for $3,500 to purchase "
            "home office supplies from our approved certified vendor. Once you deposit the check, please wire "
            "the remaining balance back to our vendor immediately."
        ),
        "Scenario C: Telegram Chat Redirect with Big Tech Impersonation": (
            "Hello, I am HR Director from Google Careers. Your resume was shortlisted for Data Analyst. "
            "Add our hiring manager immediately on Telegram @GoogleRecruiter2026 for your 20-minute chat interview."
        ),
        "Scenario D: Legitimate Verified Offer from Acme Corp": (
            "Dear Candidate, Thank you for completing your interviews with Acme Technologies. "
            "We are pleased to extend an offer for the Software Engineer role. "
            "Please review the formal offer letter on our official portal at https://careers.acme.com/offers/48291. "
            "Our onboarding team will coordinate your start date next Monday."
        )
    }

    default_value = preset_texts.get(sample_choice, "") if sample_choice != "Custom Input" else ""
    offer_text = st.text_area("Paste recruitment email, SMS, or LinkedIn message text here:", value=default_value, height=140)

    if st.button("Analyze Offer Now", type="primary"):
        if not offer_text.strip():
            st.warning("Please enter or select recruitment text to evaluate.")
        else:
            # Phase 1 transparent rule evaluation
            text_lower = offer_text.lower()
            detected_warnings = []
            score = 10

            if any(term in text_lower for term in ["registration fee", "training fee", "processing fee", "refundable fee", "refundable deposit", "zelle", "crypto"]):
                detected_warnings.append(("Advance Payment Demanded", "Legitimate employers never demand application fees, deposits, or gift cards from candidates.", "HIGH"))
                score += 45
            
            if any(term in text_lower for term in ["certified vendor", "deposit the check", "mail you a check", "wire the remaining"]):
                detected_warnings.append(("Check Deposit & Wire Scheme", "Fake check scam pattern detected: Scammer sends counterfeit check and instructs you to wire money.", "HIGH"))
                score += 45
                
            if any(term in text_lower for term in ["telegram", "whatsapp"]) and "interview" in text_lower:
                detected_warnings.append(("Chat-Only Interview Redirect", "Official hiring processes do not conduct interviews exclusively via anonymous Telegram or WhatsApp chats.", "MEDIUM"))
                score += 25

            if any(dom in text_lower for dom in ["@outlook.com", "@gmail.com", "@yahoo.com"]) and any(corp in text_lower for corp in ["google", "microsoft", "amazon", "apple"]):
                detected_warnings.append(("Corporate Impersonation via Public Webmail", "Claiming to represent major enterprises while sending from free public webmail addresses.", "HIGH"))
                score += 35

            if "$55/hr" in text_lower and "data entry" in text_lower:
                detected_warnings.append(("Disproportionate Compensation", "$55/hour for basic data entry without formal evaluation is typical bait for recruitment fraud.", "MEDIUM"))
                score += 20

            final_score = min(max(score, 0), 100)
            
            st.markdown("---")
            st.subheader("Analysis Findings")
            
            # Risk Category Indicator
            if final_score >= 60 or any(w[2] == "HIGH" for w in detected_warnings):
                st.error(f"🚨 **High Risk Detected** (Risk Index: {final_score}/100)")
                st.write("**Assessment:** Strong indicators of recruitment fraud or payment scam detected.")
            elif final_score >= 25 or len(detected_warnings) > 0:
                st.warning(f"⚠️ **Medium Risk Detected** (Risk Index: {final_score}/100)")
                st.write("**Assessment:** Several cautionary indicators observed. Proceed only with independent verification.")
            else:
                st.success(f"✅ **Low Risk Observed** (Risk Index: {final_score}/100)")
                st.write("**Assessment:** No blatant advance fee, fake check, or unverified chat redirects detected.")

            # Warning signs breakdown
            if detected_warnings:
                st.markdown("#### Detected Warning Signs:")
                for title, exp, sev in detected_warnings:
                    sev_class = "risk-high" if sev == "HIGH" else "risk-medium"
                    st.markdown(f"- <span class='{sev_class}'>[{sev}] {title}</span>: {exp}", unsafe_allow_html=True)
            else:
                st.info("No explicit fraud signatures detected in this text. Always perform independent company portal checks.")

            st.markdown("#### Verification Guidance:")
            st.markdown("""
            1. Never transfer money, buy gift cards, or wire funds for a job.
            2. Never accept a check to buy supplies from a designated vendor.
            3. Look up the company on LinkedIn and verify the recruiter's exact profile.
            4. Check if the job requisition ID is listed on the official company careers website.
            """)

# -------------------------------------------------------------
# PAGE 3: 6 Critical Scam Warning Signs
# -------------------------------------------------------------
elif navigation == "⚠️ 6 Critical Scam Warning Signs":
    st.header("⚠️ The 6 Critical Recruitment Warning Signs")
    st.write("RecruitSafe AI trains users and models to detect these common fraudulent tactics:")

    signs = [
        ("1. Advance Fees & Equipment Charges", "Any request to pay for registration, onboarding, software licenses, or laptop shipping. Legitimate companies never charge applicants.", "🚨 High Risk"),
        ("2. The Fake Check & Vendor Scheme", "The scammer sends an overpayment check and asks you to deposit it and wire funds to their 'authorized vendor'. The check later bounces, leaving you liable.", "🚨 High Risk"),
        ("3. Public Webmail for Enterprise Hiring", "Receiving emails claiming to represent Microsoft, Google, or Amazon from addresses ending in @gmail.com or @outlook.com instead of corporate domains.", "⚠️ Medium Risk"),
        ("4. Exclusive Text/Chat Interviews", "Recruiters refusing phone/video calls and insisting that the complete screening occur on Telegram, WhatsApp, or Signal.", "⚠️ Medium Risk"),
        ("5. Unrealistic Salary for Basic Tasks", "Offers promising $50–$100/hr for simple typing, captcha entry, or form filling with no prerequisite skills.", "⚠️ Medium Risk"),
        ("6. Extreme Urgency & Missing Interviews", "Being declared 'hired' immediately without an interview, accompanied by high pressure to sign or pay within hours.", "⚠️ Medium Risk")
    ]

    for title, desc, risk_label in signs:
        with st.expander(f"{title} ({risk_label})"):
            st.write(desc)

# -------------------------------------------------------------
# PAGE 4: User Roles & Access
# -------------------------------------------------------------
elif navigation == "👥 User Roles & Access":
    st.header("👥 User Access Model")
    st.write("RecruitSafe AI supports three tailored user roles:")

    tab1, tab2, tab3 = st.tabs(["Students & Public", "Business Users", "Platform Administrator"])
    
    with tab1:
        st.subheader("Students & General Job Seekers")
        st.markdown("""
        - Free basic recruitment offer analysis.
        - Plain-English warning sign explanations.
        - Actionable employer verification checklist.
        - Option to save scan history (with explicit user consent).
        - Submit suspicious offers to improve community safety.
        """)
    
    with tab2:
        st.subheader("Business Users & Agencies")
        st.markdown("""
        - Application form required with official domain and company registration details.
        - **Manual administrator review** before access is approved.
        - **3-Month Free Trial** beginning upon recorded activation date.
        - Brand impersonation dashboard and user alert triage.
        - Subscription status and transparent terms (no unconsented billing).
        """)
        
    with tab3:
        st.subheader("Platform Administrator")
        st.markdown("""
        - Private, segregated admin credentials (no public admin self-registration).
        - Business application review, approval, and trial date configuration.
        - User account management and abuse restriction.
        - Suspicious-offer report triage (Pending, Reviewed, Confirmed, Inconclusive, Disputed).
        - False-positive and false-negative correction workflow.
        - Audit logs for security and compliance.
        """)

# -------------------------------------------------------------
# PAGE 5: Safe Verification Checklist
# -------------------------------------------------------------
elif navigation == "✅ Safe Verification Checklist":
    st.header("✅ Safe Employer Verification Checklist")
    st.write("Follow these 5 non-negotiable rules whenever evaluating a new job offer:")

    st.checkbox("1. Never pay money to get a job or start training (No registration fees, no equipment fees).")
    st.checkbox("2. Independently look up the company domain via your browser, not via email links.")
    st.checkbox("3. Confirm the job exists on the company's official career portal (careers.company.com).")
    st.checkbox("4. Cross-check the recruiter on LinkedIn to verify their tenure and official company affiliation.")
    st.checkbox("5. Never deposit a check and wire funds to a third-party vendor.")

# -------------------------------------------------------------
# PAGE 6: 10-Phase Project Roadmap
# -------------------------------------------------------------
elif navigation == "🗺️ 10-Phase Project Roadmap":
    st.header("🗺️ RecruitSafe AI Development Roadmap")
    st.write("Structured, step-by-step development plan following software engineering best practices:")

    phases = [
        ("Phase 1: Foundation (CURRENT MILESTONE)", "Project structure, Streamlit landing page, Windows setup guide, and core architecture.", "Active 🚀"),
        ("Phase 2: Rules-Based Analyzer", "Python regex & heuristic detection engine, transparent warning indicators, and unit tests.", "Upcoming"),
        ("Phase 3: Machine Learning Baseline", "scikit-learn classifier, dataset curation, precision/recall evaluation, and limitation documentation.", "Upcoming"),
        ("Phase 4: Grok / xAI Integration", "Server-side xAI API client, structured evidence explanations, fallback mechanisms, and quota management.", "Upcoming"),
        ("Phase 5: User Accounts & Data", "User authentication, consent-driven saved reports, and user report submission.", "Upcoming"),
        ("Phase 6: Administrator Dashboard", "Admin authentication, business application review, triage workflow, and audit logging.", "Upcoming"),
        ("Phase 7: Business Accounts & 3-Month Trial", "Business application, manual approval, trial tracking, and impersonation alerts.", "Upcoming"),
        ("Phase 8: Security Testing & Pilot", "Authorization testing, false-alarm calibration, and real user feedback collection.", "Upcoming"),
        ("Phase 9: Monetization & Cost Model", "Cost accounting (AI/hosting), business subscriptions, and payment integration.", "Upcoming"),
        ("Phase 10: Production Deployment", "Production database, environment hardening, backups, and live deployment.", "Upcoming")
    ]

    for p_title, p_desc, p_status in phases:
        col_a, col_b = st.columns([4, 1])
        with col_a:
            st.markdown(f"**{p_title}**  \n{p_desc}")
        with col_b:
            st.caption(f"`{p_status}`")
        st.divider()

# -------------------------------------------------------------
# PAGE 7: Windows Setup Instructions
# -------------------------------------------------------------
elif navigation == "💻 Windows Setup Instructions":
    st.header("💻 How to Run RecruitSafe AI Locally on Windows")
    st.write("Step-by-step instructions for running this Streamlit application on Windows with VS Code and a virtual environment:")

    st.markdown("#### Step 1: Open Terminal in VS Code")
    st.write("Open your project folder in VS Code, then press `Ctrl + ~` (or select **Terminal → New Terminal**).")

    st.markdown("#### Step 2: Check Python Installation")
    st.code("python --version", language="powershell")
    st.caption("You should see Python 3.10 or higher. If not, install Python from python.org and check 'Add Python to PATH'.")

    st.markdown("#### Step 3: Create a Python Virtual Environment")
    st.code("python -m venv venv", language="powershell")
    st.caption("This creates an isolated folder named 'venv' so dependencies don't interfere with your system.")

    st.markdown("#### Step 4: Activate the Virtual Environment")
    st.code(".\\venv\\Scripts\\Activate.ps1", language="powershell")
    st.caption("If you get a PowerShell ExecutionPolicy error, run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`")

    st.markdown("#### Step 5: Install Requirements")
    st.code("pip install -r requirements.txt", language="powershell")

    st.markdown("#### Step 6: Launch Streamlit")
    st.code("streamlit run app.py", language="powershell")
    st.caption("Streamlit will automatically open your browser at http://localhost:8501!")

# Footer Disclaimer
st.markdown("""
<div class="disclaimer-box">
    <strong>Legal & Safety Disclaimer:</strong> RecruitSafe AI is an informational decision-support tool designed to highlight 
    warning signs commonly associated with recruitment fraud. It does not provide legal advice, absolute fraud determinations, or corporate warranties. 
    Always verify employment opportunities through independently confirmed official corporate career portals.
</div>
""", unsafe_allow_html=True)
