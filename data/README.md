# Data Handling & Privacy Guidelines

This directory (`data/`) is reserved for datasets, synthetic recruitment examples, and benchmark evaluation splits used in Phase 3 (Machine Learning).

## 🛡️ Security & Privacy Rules:
1. **Never commit PII:** Do NOT store real applicant resumes, phone numbers, personal email addresses, or banking details.
2. **Synthetic or Anonymized Data Only:** Any sample messages used for testing or training must be synthetic or fully scrubbed of private personal information.
3. **No Production Database Files:** SQLite or Postgres database dumps containing user data must never be placed in this folder or committed to git.
4. **Gitignore Protection:** Ensure any `.csv`, `.json`, or `.db` files containing raw records are excluded in `.gitignore`.
