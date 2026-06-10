# node-red-trexmes-service

> A Node-RED package for **trexMes Edge** panel software — real-time event handling, form design, and control management over a NodeRED connector plugin.

[![npm version](https://img.shields.io/npm/v/node-red-trexmes-service)](https://www.npmjs.com/package/node-red-trexmes-service)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node-RED](https://img.shields.io/badge/Node--RED-3.0%2B-red)](https://nodered.org)

📖 **Full documentation:** [asafyurdakul.github.io/node-red-trexmes-service](https://asafyurdakul.github.io/node-red-trexmes-service/)

---

## What does it do?

`node-red-trexmes-service` collects real-time event triggers from **150–200 trexMes panels** on the production floor into a single Node-RED server. It lets you:

- Capture panel events (business, system, communication, display, form)
- Design real-time WinForms with XML
- Bind data to form controls
- Invoke panel methods and read state contexts
- Trigger processes and run scripts on the panel side
- Generate Node-RED flows from natural language using an LLM

> **Prerequisite:** The trexMes Edge panel software must have the NodeRED connector plugin enabled.

---

## Install

Run the following command in your Node-RED install directory:

```bash
npm install node-red-trexmes-service
```

Or install directly from the Node-RED palette manager by searching for `node-red-trexmes-service`.

---

## Nodes (23 total)

### 🟢 Core Nodes (2)
Required in every trexMes project.

| Node | I/O | Description |
|---|---|---|
| **trex Subscriber** | 0 → 1 | Registers all project events on the panel side. **One per project, mandatory.** |
| **Responser** | 1 → 0 | Returns the HTTP response to the panel. Must be the last node in every event flow. |

### 🔔 Event Nodes (8)
Triggered by the trexMes panel. Each captures a specific event type.

| Node | Description |
|---|---|
| **Business Events** | Business workflow events |
| **System Events** | System-level events |
| **Communication Events** | Communication layer events |
| **Display Events** | UI display events |
| **Form Events** | User interactions on custom forms |
| **Display Methods** | Main form method triggers |
| **Method Returns** | Asynchronous method invocation responses |
| **Handle Setter** | Dynamically sets `IsHandled=true` to stop further panel processing |

### 🧩 Form Nodes (5)
Custom form design, data binding and property management.

| Node | Description |
|---|---|
| **Custom Form** | Creates a form from XML design at runtime |
| **Form Bind Controls** | Binds data to form input fields |
| **Control Properties** | Sets properties of controls on the panel form |
| **Button Configurator** | Configures buttons on custom forms |
| **Main Form Action** | Triggers actions on the main panel form |

### ⚙️ Action Nodes (4)
Method invocation, process triggering, and script execution.

| Node | Description |
|---|---|
| **Method Invoker** | Calls a panel method with parameters (async — response via Method Returns) |
| **Context Getter** | Queries a station's StateContext data (async — response via Method Returns) |
| **Execute Process** | Triggers a defined process on the panel |
| **Execute Script** | Runs a script on the active form |

### 🤖 AI (1)

| Node | Description |
|---|---|
| **LLM Flow Builder** | Generates a Node-RED flow from a natural language prompt using an LLM |

---

## Typical Flow Structure

`trex Subscriber` runs independently — it does not trigger other nodes. Event flows start directly from Event nodes.

```
[trex Subscriber]  ← standalone, registers events on panel

── Flow 1: open form ──────────────────────────────────────────────────────
[Business Events] → [Custom Form] → [Responser]

── Flow 2: bind data when form loads (Form Events / Load) ─────────────────
[Form Events control="_" Load] → [Form Bind Controls] → [Control Properties] → [Responser]

── Flow 3: handle button click ────────────────────────────────────────────
[Form Events / btnSave / Click] → [...] → [Responser]

── Async method call ──────────────────────────────────────────────────────
[Display Methods] → [Method Invoker] → [Responser]
                          ↓ (async)
                    [Method Returns] → [...process result...] → [Responser]
```

> Every project needs **exactly one `trex Subscriber`**. Every event flow must end with a **`Responser`**.  
> `Custom Form` is **always** followed directly by `Responser`. Data binding and control property changes go in the **Form Events Load** flow.

---

## Requirements

| Component | Minimum Version |
|---|---|
| Node.js | 18.16+ |
| Node-RED | 3.0+ |
| trexMes Edge | NodeRED connector plugin enabled |

---

## Documentation

Full reference documentation is available at:

**[https://asafyurdakul.github.io/node-red-trexmes-service/](https://asafyurdakul.github.io/node-red-trexmes-service/)**

Includes:
- Installation & quick start guide
- Architecture overview
- Per-node property tables, payload examples, and flow diagrams
- Flow examples (custom form, button configuration, method invocation)
- FAQ & troubleshooting

---

## License & Author

Licensed under [GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html).

Author: [Asaf Yurdakul](https://github.com/asafyurdakul) · [trex Digital Manufacturing](https://trex.com.tr)
