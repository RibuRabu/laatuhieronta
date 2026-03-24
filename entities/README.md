# Laatuhieronta.fi — Entity Data Layer

This repository contains the machine-readable semantic data layer for the Laatuhieronta.fi operational compliance system.

It defines structured entities using JSON-LD aligned with schema.org standards.

---

## What this repository is

This is not an application.

This repository serves as a **semantic data layer** describing:

- the organization entity  
- the operational system entity  
- service and documentation entities  
- regulatory context entities  
- page-level semantic definitions  

All data is provided in JSON-LD format for machine readability.

---

## Why this exists

Traditional websites present information primarily for humans.

This repository exposes the same system as structured entities designed for:

- entity-based search indexing  
- semantic web integration  
- AI knowledge extraction  
- long-term data stability  

It acts as a canonical reference layer for the system’s identity and structure.

---

## Structure Overview

### Core Entities

`/entities/organization.jsonld`  
Defines the organization entity.

`/entities/website.jsonld`  
Defines the website entity.

`/entities/solution-omavalvontajarjestelma.jsonld`  
Defines the operational compliance system entity.

---

### Page Entities

`/entities/page-*.jsonld`

Each page entity describes:

- purpose  
- relationships  
- regulatory scope  
- operational context  

---

## Design Principles

The entity structure follows these principles:

### Stability over presentation
Entities represent core meaning rather than UI structure.

### Machine-first readability
All definitions prioritize semantic clarity.

### Canonical reference model
This repository serves as the authoritative entity source.

### Separation of layers
The semantic layer is independent from the website implementation.

---

## Use Cases

This data layer supports:

- search engine entity recognition  
- knowledge graph integration  
- AI agent contextual understanding  
- semantic indexing of operational systems  

---

## Relationship to the live system

The public interface of the system is available at:

👉 https://laatuhieronta.fi

This repository represents the underlying semantic structure that describes it.

---

## Repository Scope

This repository intentionally contains only:

- JSON-LD entity definitions  
- minimal structural documentation  

It does **not** include:

- application code  
- business logic  
- UI components  

---

## Maintainer

Maintained as part of the structural infrastructure for the Laatuhieronta operational compliance system.
