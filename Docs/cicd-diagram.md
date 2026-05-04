CI/CD Pipeline Diagram
Project: Matrix Software Implementation
Workflow file: .github/workflows/ci-cd.yml
Trigger: Every push to main branch (tests also run on pull requests)

Pipeline Overview
Push to main
|
| 
▼
┌─────────────────────────────────────────────────────────────────┐
│                       GitHub Actions                            │
│                                                                 │
│  ┌─────────────┐      ┌─────────────┐      ┌────────────────┐   │
│  │   JOB 1     │      │   JOB 2     │      │    JOB 3       │   │
│  │             │      │             │      │                │   │
│  │    TEST     │────▶│   DEPLOY    │────▶ │  SMOKE TEST    │   │
│  │             │      │             │      │                │   │
│  └─────────────┘      └─────────────┘      └────────────────┘   │
│   (all events)        (main only)          (main only)          │
└─────────────────────────────────────────────────────────────────┘

Step-by-Step Breakdown
🔵 JOB 1 — Test (runs on every push & PR)
StepAction
1. Checkout repository source code
2. Set up Node.js 20 (with npm cache)
3. Install all dependencies (npm ci)
4. Run Jest unit test suite (npm test)

If any test fails, the pipeline stops here. Jobs 2 and 3 do not run.


🟢 JOB 2 — Deploy (runs on push to main only, after Job 1 passes)
StepAction
1. Checkout repository source code
2. Set up Node.js 20 (with npm cache)
3. Install production dependencies (npm ci --omit=dev)
4. Execute deployment script (logs branch, commit SHA, actor, timestamp)

Deployment step is pre-wired for extension — replace the echo block with your real deploy command (SSH, Vercel, Railway, Render, etc.).


🟡 JOB 3 — Smoke Test (runs on push to main only, after Job 2 passes)
StepAction
1. Checkout repository source code
2. Set up Node.js 20 (with npm cache)
3. Install all dependencies (npm ci)
4. Run smoke-test.js — validates module loads and core matrix operations work
The smoke test checks:

matrix.js loads without error
add() returns correct results
multiply() handles identity matrix
transpose() produces correct output

If any smoke test assertion fails the process exits with code 1, marking the workflow run as failed.

Detailed Flow Diagram
developer pushes to main
        │
        ▼
  GitHub receives push
        │
        ▼
  ┌─────────────────────┐
  │   JOB 1: TEST       │
  │  ─────────────────  │
  │  checkout           │
  │  setup-node@v4      │
  │  npm ci             │
  │  npm test (Jest)    │
  └────────┬────────────┘
           │
    ┌──────┴──────┐
    │             │
  PASS          FAIL
    │             │
    ▼             ▼
  JOB 2       ❌ Pipeline
  DEPLOY         fails,
  runs           no deploy
    │
    ▼
  ┌─────────────────────┐
  │   JOB 2: DEPLOY     │
  │  ─────────────────  │
  │  checkout           │
  │  setup-node@v4      │
  │  npm ci --omit=dev  │
  │  deploy script      │
  └────────┬────────────┘
           │
    ┌──────┴──────┐
    │             │
  PASS          FAIL
    │             │
    ▼             ▼
  JOB 3       ❌ Pipeline
  SMOKE          fails
  TEST
    │
    ▼
  ┌─────────────────────┐
  │  JOB 3: SMOKE TEST  │
  │  ─────────────────  │
  │  checkout           │
  │  setup-node@v4      │
  │  npm ci             │
  │  node smoke-test.js │
  └────────┬────────────┘
           │
    ┌──────┴──────┐
    │             │
  PASS          FAIL
    │             │
    ▼             ▼
  ✅ All        ❌ Deploy
  green!          unhealthy