# Design Decisions – LeetCode-Style Judge System

This document explains the **key architectural and technology choices** made while building this LeetCode-style code submission system. The focus is on **why** each decision was taken, not just **what** was built.

---

## 1. Why Asynchronous Architecture?

### Problem

Executing user code synchronously inside an HTTP request:

* Blocks the API server
* Increases response latency
* Makes the system vulnerable to crashes and malicious code

### Decision

Use an **asynchronous, queue-based execution model**.

### Benefit

* API server responds immediately
* Execution is handled independently
* System remains responsive under heavy load

---

## 2. Why Redis?

Redis was chosen as the core infrastructure component for this system.

### Reasons

* **In-memory speed** → Extremely low latency
* **Simple data structures** → Lists, streams, pub/sub
* **Battle-tested** → Widely used in production systems
* **Easy horizontal scaling**

### Alternatives Considered

* RabbitMQ → Heavier setup
* Kafka → Overkill for this use case

### Conclusion

Redis provides the **best trade-off between simplicity and performance** for a mini online judge system.

---

## 3. Why a Queue?

### Problem

Multiple users can submit code at the same time, but execution resources are limited.

### Decision

Use a **Redis-backed job queue** between the API server and workers.

### Benefits

* Smooths traffic spikes
* Prevents API overload
* Enables controlled execution rate

### Key Insight

> A queue turns unpredictable traffic into predictable processing.

---

## 4. Why Worker-Based Execution?

### Problem

User code is:

* Untrusted
* Resource-intensive
* Prone to infinite loops

### Decision

Execute code inside **isolated worker processes**.

### Benefits

* Failures are contained
* Workers can be restarted independently
* Easy horizontal scaling

---

## 5. Why Stateless Workers?

### Decision

Workers do not store state locally.

### Reason

* Enables easy scaling
* Prevents data inconsistency
* Allows any worker to process any job

### Result

True **horizontal scalability**.

---

## 6. Why Separate API and Execution Layers?

### Decision

Strict separation between:

* API layer (request handling)
* Execution layer (code running)

### Benefits

* Security isolation
* Independent scaling
* Cleaner architecture

---

## 7. Why Polling First, Pub/Sub Later?

### Polling (Chosen as default)

* Simple to implement
* Reliable
* Easier to debug

### Pub/Sub (Optional enhancement)

* Real-time updates
* Better user experience
* Added complexity

### Strategy

Start simple → evolve when needed.

---

## 8. Why This Design Is Production-Oriented

This system demonstrates:

* Asynchronous processing
* Load decoupling
* Fault tolerance
* Clear responsibility boundaries

These are **core backend engineering principles**, not framework-specific tricks.

---


**End of Design Decisions Document**
