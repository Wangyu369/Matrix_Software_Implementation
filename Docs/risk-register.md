# Risk Register – TaskFlow App

## Risk Scoring Formula
**Risk Score = Likelihood × Impact**

| Score Range | Level |
|-------------|-------|
| 1–4 | Low |
| 5–9 | Medium |
| 10–16 | High |
| 17–25 | Critical |

> Scale: Likelihood (1–5), Impact (1–5)

---

## Identified Risks

### Risk 1 – Authentication Security Vulnerability
- **Description:** User login and registration may be vulnerable to attacks such as SQL injection or brute force.
- **Likelihood:** 3
- **Impact:** 5
- **Risk Score:** 15 (High)
- **Mitigation:** Implement input validation, password hashing (bcrypt), and rate limiting on login attempts.
- **Owner:** Dax Oliver Romualdez (Backend Developer)

---

### Risk 2 – Deployment Failure on Vercel
- **Description:** Misconfigured CI/CD pipeline or environment variables may cause deployment to fail.
- **Likelihood:** 3
- **Impact:** 4
- **Risk Score:** 12 (High)
- **Mitigation:** Test deployments in a staging environment before production; maintain deployment checklist.
- **Owner:** Joshua Ganas (DevOps Engineer)

---

### Risk 3 – Scope Creep
- **Description:** New features may be added mid-sprint without proper planning, delaying delivery.
- **Likelihood:** 4
- **Impact:** 3
- **Risk Score:** 12 (High)
- **Mitigation:** Enforce strict backlog management; all new features must go through backlog refinement before being added to a sprint.
- **Owner:** Vince Rommel Manriquez (Project Manager)

---

### Risk 4 – Team Member Unavailability
- **Description:** A team member may become unavailable due to illness or personal emergencies, slowing progress.
- **Likelihood:** 3
- **Impact:** 3
- **Risk Score:** 9 (Medium)
- **Mitigation:** Document all work clearly; cross-train team members on key tasks so others can cover if needed.
- **Owner:** Vince Rommel Manriquez (Project Manager)

---

### Risk 5 – Data Loss or Database Corruption
- **Description:** Task data may be lost due to improper database handling or lack of backups.
- **Likelihood:** 2
- **Impact:** 5
- **Risk Score:** 10 (High)
- **Mitigation:** Implement regular automated backups and use transactions for database operations.
- **Owner:** Dax Oliver Romualdez (Backend Developer)

---

### Risk 6 – Poor UI/UX Leading to Low Usability
- **Description:** The interface may be confusing or unintuitive, reducing user satisfaction and adoption.
- **Likelihood:** 3
- **Impact:** 3
- **Risk Score:** 9 (Medium)
- **Mitigation:** Conduct usability reviews at each sprint; gather feedback and iterate on UI designs early.
- **Owner:** Nicole Shane Tuazon (Frontend Developer / QA Tester)

---

### Risk 7 – Undetected Bugs Reaching Production
- **Description:** Insufficient testing may allow critical bugs to reach the live environment.
- **Likelihood:** 3
- **Impact:** 4
- **Risk Score:** 12 (High)
- **Mitigation:** Maintain a test checklist for every feature; run smoke tests before each deployment.
- **Owner:** Nicole Shane Tuazon (Frontend Developer / QA Tester)

---

### Risk 8 – Merge Conflicts in Git
- **Description:** Multiple team members working on the same files may cause frequent and complex merge conflicts.
- **Likelihood:** 4
- **Impact:** 2
- **Risk Score:** 8 (Medium)
- **Mitigation:** Use feature branches per task; communicate clearly about file ownership and merge frequently to keep branches up to date.
- **Owner:** Joshua Ganas (DevOps Engineer)

---

### Risk 9 – Notification Feature Delay
- **Description:** The notifications feature (highest story points at 8) may not be completed within the planned sprint due to its complexity.
- **Likelihood:** 4
- **Impact:** 3
- **Risk Score:** 12 (High)
- **Mitigation:** Deprioritize notifications to a later sprint; deliver a simpler in-app alert as MVP if needed.
- **Owner:** Vince Rommel Manriquez (Project Manager)

---

### Risk 10 – Third-Party Service Outage
- **Description:** External services such as Vercel or email notification providers may experience downtime affecting the app.
- **Likelihood:** 2
- **Impact:** 4
- **Risk Score:** 8 (Medium)
- **Mitigation:** Monitor service status pages; have fallback plans and communicate downtime to users promptly.
- **Owner:** Joshua Ganas (DevOps Engineer)

---

## Risk Summary Table

| # | Risk | Likelihood | Impact | Score | Level | Owner |
|---|------|-----------|--------|-------|-------|-------|
| 1 | Authentication Security Vulnerability | 3 | 5 | 15 | High | Dax Oliver Romualdez |
| 2 | Deployment Failure on Vercel | 3 | 4 | 12 | High | Joshua Ganas |
| 3 | Scope Creep | 4 | 3 | 12 | High | Vince Rommel Manriquez |
| 4 | Team Member Unavailability | 3 | 3 | 9 | Medium | Vince Rommel Manriquez |
| 5 | Data Loss or Database Corruption | 2 | 5 | 10 | High | Dax Oliver Romualdez |
| 6 | Poor UI/UX Leading to Low Usability | 3 | 3 | 9 | Medium | Nicole Shane Tuazon |
| 7 | Undetected Bugs Reaching Production | 3 | 4 | 12 | High | Nicole Shane Tuazon |
| 8 | Merge Conflicts in Git | 4 | 2 | 8 | Medium | Joshua Ganas |
| 9 | Notification Feature Delay | 4 | 3 | 12 | High | Vince Rommel Manriquez |
| 10 | Third-Party Service Outage | 2 | 4 | 8 | Medium | Joshua Ganas |