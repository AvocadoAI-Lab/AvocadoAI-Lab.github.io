# ADR-001 — Separate the public site from authenticated portals

Status: Accepted.

## Context

The corporate website is public and optimized for content delivery, search, accessibility, and lead conversion. The SenseL customer portal will process tenant-specific security events, reports, evidence, assets, service status, and support requests. These systems have materially different confidentiality, authentication, authorization, audit, availability, and deployment requirements.

## Decision

The public corporate portal and authenticated customer portal will be separate applications and security boundaries. The public site may link to the customer portal but will not contain authenticated customer routes, tenant data access, or SenseL service credentials.

The partner portal may later be implemented as a separate application or as a rigorously separated role domain within the authenticated portal, but it will not be added to the public application.

## Consequences

The public site can remain mostly static, fast, and low risk. The customer portal can adopt stronger identity, audit, tenant isolation, and operational controls without increasing the public site's complexity. Shared brand tokens may be packaged later, but shared UI code must not create shared data or secret boundaries.

The trade-off is additional deployment and repository management. This is accepted because the reduction in accidental data exposure and independent release control is more valuable.
