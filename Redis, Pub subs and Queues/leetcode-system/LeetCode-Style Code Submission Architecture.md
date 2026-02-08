# LeetCode-Style Code Submission Architecture (Mini System Design)

This document explains a **simplified LeetCode-style backend architecture** built using **Redis, queues, workers, and pub/sub**. It is meant to serve as a **reference guide** alongside the code in this repository.

---

## 1. Problem Statement

When users submit code on platforms like LeetCode, the system must:

* Handle **thousands of concurrent submissions**
* Execute **untrusted user code safely**
* Avoid blocking the main backend server
* Scale horizontally

Running code directly inside the request-response cycle is **not feasible**.

---

## 2. High-Level Architecture Overview

**Flow:**

```
Browser
   ↓
Primary Backend Server (API)
   ↓
Redis Queue
   ↓
Worker Processes
   ↓
Result Store (DB / Redis)
   ↓
Client Polling / Pub-Sub Notification
```

---

## 3. Components Explained

### 3.1 Browser (Client)

* User writes code and clicks **Submit**
* Sends the following payload to backend:

```json
{
  "userId": "123",
  "problemId": 42,
  "language": "cpp",
  "code": "..."
}
```

---

### 3.2 Primary Backend Server (API Server)

**Responsibilities:**

* Authenticate user
* Validate request
* Generate a `submissionId`
* Push job into Redis queue
* Respond immediately to client

**Important:**

* The backend **does NOT execute code**
* Keeps request-response cycle fast

**Response Example:**

```json
{
  "status": "SUBMITTED",
  "submissionId": "abc123"
}
```

---

### 3.3 Redis Queue (Job Buffer)

Redis acts as a **job broker** between API servers and workers.

**Why Redis Queue?**

* Extremely fast (in-memory)
* Handles traffic spikes
* Decouples producers (API) and consumers (workers)

**Job Structure Example:**

```json
{
  "submissionId": "abc123",
  "problemId": 42,
  "language": "cpp",
  "code": "..."
}
```

---

### 3.4 Worker Processes

Workers are **independent background services**.

**Worker Flow:**

1. Fetch job from Redis queue
2. Create isolated execution environment (Docker / sandbox)
3. Run code against test cases
4. Apply time and memory limits
5. Generate verdict (AC / WA / TLE / MLE / RE)
6. Store result in DB or Redis

**Key Properties:**

* Horizontally scalable
* Fault tolerant
* Can crash without affecting API servers

---

### 3.5 Result Storage & Retrieval

Results are stored in:

* Database (persistent)
* Redis (fast access)

**Client Retrieval Methods:**

#### Polling (Simple)

```
GET /submission-status/:submissionId
```

#### Pub/Sub / WebSockets (Advanced)

* Worker publishes status updates
* Client receives real-time notifications

---

## 4. Queue vs Pub/Sub

| Feature             | Queue         | Pub/Sub                |
| ------------------- | ------------- | ---------------------- |
| Consumers           | One worker    | Multiple subscribers   |
| Message Persistence | Yes           | No                     |
| Use Case            | Job execution | Notifications / events |

**Usage in this system:**

* Queue → Code execution
* Pub/Sub → Submission status updates

---

## 5. Why This Architecture Works

### Scalability

* Add more workers to handle higher load

### Fault Tolerance

* If a worker crashes, jobs remain in queue

### Security

* User code never runs on main server

### Performance

* API server responds instantly

---

## 6. Real-World Extensions

Possible improvements:

* Priority queues (paid vs free users)
* Multiple queues per difficulty
* Retry mechanism for failed jobs
* Worker auto-scaling
* Rate limiting
* Language-specific execution containers

---

## 7. Interview Value

This system demonstrates:

* Distributed system design
* Asynchronous processing
* Queue-based architecture
* Production-level backend thinking

Explaining this architecture clearly in interviews strongly reflects **backend engineering maturity**.

---

## 8. Summary

This mini system simulates how platforms like **LeetCode** process code submissions using:

* Redis queues
* Worker pools
* Asynchronous execution
* Event-driven notifications


---

**End of Document**
