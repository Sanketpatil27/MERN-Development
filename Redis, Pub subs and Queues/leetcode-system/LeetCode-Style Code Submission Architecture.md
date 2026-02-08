# LeetCode-Style Code Submission Architecture


## 1. Problem Being Solved

When users submit code on platforms like LeetCode, the system must:

* Handle **thousands of concurrent submissions**
* Execute **untrusted user code safely**
* Avoid blocking the main backend server
* Scale horizontally

Running code directly inside the request-response cycle is **not feasible**.

An online judge system must handle **large volumes of concurrent code submissions** while ensuring:

* Non-blocking APIs
* Safe execution of untrusted code
* Horizontal scalability
* Fault tolerance

Executing user code synchronously inside the API server is unsafe and unscalable. The solution is an **asynchronous, queue-based architecture**.

---

## 2. High-Level Architecture

```
┌──────────┐
│ Browser  │
│ (Submit) │
└────┬─────┘
     │ HTTP
     ▼
┌────────────────────┐
│ Primary API Server │
│ (Auth + Validate) │
└────┬───────────────┘
     │ Push Job
     ▼
┌────────────────────┐
│   Redis Queue      │
│ (Job Buffer)       │
└────┬───────────────┘
     │ Pop Job
     ▼
┌────────────────────┐
│ Worker Pool        │
│ (Code Execution)   │
└────┬───────────────┘
     │ Store Result
     ▼
┌────────────────────┐
│ DB / Redis Store   │
└────┬───────────────┘
     │ Poll / Events
     ▼
┌──────────┐
│ Browser  │
│ (Result) │
└──────────┘
```

---

## 3. Component Responsibilities

### 3.1 Browser (Client)

* Sends code, language, and problem metadata
* Receives immediate acknowledgment
* Fetches execution result asynchronously

---

### 3.2 Primary Backend Server (API Layer)

**Responsibilities**

* Authentication & authorization
* Input validation
* Submission ID generation
* Job creation and enqueueing

**Key Design Choice**

* API server **never executes user code**
* Ensures low latency and high availability

**Example Response**

```json
{ "status": "SUBMITTED", "submissionId": "abc123" }
```

---

### 3.3 Redis Queue (Asynchronous Job Buffer)

Redis is used as a **durable in-memory queue** between producers and consumers.

**Why a Queue?**

* Absorbs traffic spikes
* Decouples request handling from execution
* Enables independent scaling of workers

**Job Payload**

```json
{
  "submissionId": "abc123",
  "problemId": 42,
  "language": "cpp",
  "code": "..."
}
```

---

### 3.4 Worker Pool (Execution Layer)

Workers are **stateless background services** responsible for code execution.

**Worker Lifecycle**

```
while (true):
  job = pop(redis_queue)
  run_in_sandbox(job.code)
  apply_limits(time, memory)
  evaluate_testcases()
  store_result()
```

**Execution Guarantees**

* Isolated environment (Docker / sandbox)
* Resource limits enforced
* Failures do not affect API servers

---

### 3.5 Result Retrieval & Notification

**Option 1: Polling (Simple & Reliable)**

```
GET /submission-status/:submissionId
```

**Option 2: Pub/Sub / WebSockets (Real-time)**

```
Worker ──publish──▶ Redis Pub/Sub
                      │
                      ▼
                WebSocket Server
                      │
                      ▼
                   Browser
```

---

## 4. Queue vs Pub/Sub (Clear Separation)

| Aspect      | Queue          | Pub/Sub              |
| ----------- | -------------- | -------------------- |
| Delivery    | One consumer   | Multiple subscribers |
| Persistence | Yes            | No                   |
| Purpose     | Task execution | Event notification   |

**In this system**

* Queue → Execute submissions
* Pub/Sub → Notify status changes

---

## 5. Production Characteristics

* **Scalable**: Add workers without changing API layer
* **Fault-tolerant**: Jobs survive worker crashes
* **Secure**: No user code on API server
* **Responsive**: Immediate submit acknowledgment

---

## 6. Real-World Enhancements

* Priority queues (premium users)
* Separate queues per difficulty or language
* Retry & dead-letter queues
* Auto-scaling workers
* Rate limiting submissions


---

## 7. Summary

This architecture mirrors real-world online judges by combining:

* Asynchronous queues
* Stateless worker pools
* Safe execution boundaries
* Event-driven updates

Designed for **scale, safety, and performance**.

---
