# MDK Engineering — Strategic Roadmap

## Mission: The Full-Stack Automation Partner for German Medical Practices

MDK Engineering's positioning is **the technical partner that German Arztpraxen don't currently have** — someone who understands both software and hardware, can automate workflows end-to-end, and stays on as a long-term technical partner. The unique differentiator: software + hardware from a single source, combined with real understanding of the clinical workflow.

---

## Layered Service Model

The business is structured as a four-layer service stack, where each layer builds on the previous:

### Layer 1: Workflow-Automatisierung (Entry Point)
- **Focus:** ePA document automation, OCR, document classification, billing optimization
- **Why it's the entry point:** ePA compliance is mandatory since October 2025. Sanctions start in 2026. Every practice feels this pain right now.
- **Pricing:** From €3,000 per implementation
- **Timeline:** 1-3 weeks per practice
- **Technology:** Python, n8n, OCR (Tesseract), LLM APIs, GDT interface, HL7 FHIR

### Layer 2: Smart-Praxis-Hardware
- **Focus:** IoT hubs for treatment rooms, medical device integration (blood pressure, ECG, spirometry), check-in terminals, waiting room displays
- **Why it matters:** Eliminates manual data entry for the most common measurements. Differentiator vs. pure software competitors.
- **Pricing:** From €5,000 (hardware + software + installation)
- **Technology:** ESP32-S3, Raspberry Pi, Bluetooth LE, RS-232, MQTT, GDT

### Layer 3: Laufende Betreuung (Recurring Revenue)
- **Focus:** Monitoring, updates, new automations on demand, priority support
- **Why it matters:** Creates sticky, recurring relationships. Practices don't want to manage technical systems themselves.
- **Pricing:** From €500/month
- **Technology:** Monitoring, OTA updates, DSGVO compliance maintenance

### Layer 4: Praxis-Copilot (Future — AI Knowledge System)
- **Focus:** Context-aware clinical decision support embedded in the practice workflow
- **Why it depends on Layer 1-3:** The Copilot needs the data infrastructure (documents, measurements, patient context) that the earlier layers create.
- **Differentiator:** Not an isolated chatbot — it's embedded in the automation stack and has automatic access to patient context.
- **Technology:** RAG, AWMF guidelines, Rote Liste, ABDA, local AI (Llama/Mistral on Apple Silicon)

---

## Growth Strategy: The 50-Practice Network

### Phase 1 — Now to 6 months: First 5 practices
- Focus on ePA automation as the door opener
- Build case studies with measurable ROI (time saved per MFA per day)
- Refine the implementation process to be repeatable in 1-2 weeks
- Target: Munich area, personal network, medical contacts through partner

### Phase 2 — 6-18 months: Scale to 20 practices
- Standardized implementation playbook
- Hardware products (IoT hubs) ready for deployment
- Recurring revenue from ongoing support contracts
- Referral network among Praxisinhaber

### Phase 3 — 18-36 months: 50 practices, Copilot launch
- Praxis-Copilot pilot with practices that have full Layer 1-3 infrastructure
- Platform play: standardized tools that can be deployed across the network
- Potential for "Zapier for German Practice Software" — connecting PVS, ePA, devices, and AI

---

## Competitive Moat

1. **Software + Hardware:** No other practice automation provider can also install IoT hardware. Pure software companies can't bridge the physical-digital gap.
2. **Clinical understanding:** Partner studies medicine — real insight into daily clinical workflows, not market research.
3. **No vendor lock-in:** Open standards (GDT, HL7 FHIR), open-source technology. What we build belongs to the practice.
4. **Full-stack engineering:** From ML pipelines to PCB design. TUM, Oxford, Siemens, Devanthro background.
5. **Local presence:** Based in Munich, available for on-site visits. Practices want a person, not a ticket system.

---

## Decision Log

| Date     | Decision                                                        | Rationale                                                                                               |
| -------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Feb 2026 | Pivot from AI Knowledge Systems to Medical Practice Automation  | Clearer market need (ePA), specific audience (Praxisinhaber), hardware differentiator, recurring revenue potential |
| Feb 2026 | ePA automation as entry point                                   | Mandatory compliance, immediate pain point, short sales cycle, clear ROI                                |
| Feb 2026 | Layered service model (Workflow → Hardware → Support → Copilot) | Each layer builds on the previous, creates natural upsell path, Copilot needs infrastructure first     |
| Feb 2026 | German-language website                                         | Target audience operates entirely in German, builds trust with Praxisinhaber                            |