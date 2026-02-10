# My-Chat — Opis serwisu

Ten dokument opisuje koncepcję, model danych i kontrakty serwisu My-Chat. Służy jako źródło prawdy przy rozwijaniu backendu, widgetu i przyszłych aplikacji (panel web, aplikacja mobilna).

---

## 1. Przegląd serwisu

**My-Chat** to serwis SaaS oferujący **chat widget** do osadzenia na stronach internetowych. Klient (firma) zakłada konto na my-chat.com, tworzy jedno lub wiele **czatów** (ChatSpace) — każdy odpowiada jednemu widgetowi na jednej stronie. Odwiedzający stronę widzą bąbelek czatu; wiadomości trafiają do **agentów** przypisanych do danej przestrzeni czatu. Agenci obsługują **wątki** (rozmowy); wątek może być nieprzypisany lub przejęty przez konkretnego agenta.

**Najprostszy flow:** użytkownik zakłada konto, tworzy jeden czat, otwiera zakładkę z wątkami i obsługuje je. Później można dodać aplikację mobilną — ten sam backend i te same wątki; wielu agentów z tej samej firmy może być zalogowanych i widzieć te same wątki oraz informację, czy dany wątek jest już przejęty.

---

## 2. Role użytkowników

| Rola | Opis |
|------|------|
| **Organization (klient)** | Firma korzystająca z My-Chat. Ma wiele ChatSpace’ów i agentów. |
| **Agent** | Pracownik firmy obsługujący czaty. Należy do jednej organizacji. Może być admin (zarządza czatami/agentami) lub zwykły agent. Loguje się i łączy z wybraną przestrzenią czatu; widzi wątki, może przejmować nieprzypisane i odpowiadać. |
| **Visitor** | Anonimowy (lub z opcjonalnym imieniem/emailem) użytkownik strony z widgetem. Rozpoczyna rozmowę; wątek może być nieprzypisany aż agent go przejmie. |

---

## 3. Kluczowe pojęcia

- **ChatSpace** — jedna „przestrzeń czatu”, jeden widget. Jeden klient może mieć wiele ChatSpace’ów (np. sklep, blog). Każdy ma unikalny `widgetKey` do osadzenia skryptu. Ma listę `allowedDomains` (walidacja Origin przy połączeniu WebSocket).
- **Thread (wątek)** — jedna rozmowa: visitor + opcjonalnie przypisany agent. Statusy: `unassigned`, `active`, `closed`, `expired`. Wątek ma `lastActivityAt`; po okresie nieaktywności można go oznaczyć jako `expired`.
- **Visitor** — powiązany z jednym ChatSpace. Identyfikowany przez `sessionToken` (np. w localStorage). Może mieć wiele wątków w czasie (nowa rozmowa = nowy wątek).
- **Agent assignment** — wątek nieprzypisany (`assignedAgentId = null`) jest widoczny dla wszystkich agentów w tym ChatSpace; pierwszy, kto „kliknie” i przejmie wątek, staje się `assignedAgentId`. Dwa zalogowane konta agentów z tej samej firmy widzą te same wątki i status „używany / nieużywany”.

---

## 4. Model danych (skrót)

- **Organization** — id, name, email, passwordHash, createdAt.
- **ChatSpace** — id, organizationId, name, widgetKey (unique), allowedDomains (String[]), settings (JSON), createdAt.
- **Agent** — id, organizationId, email, passwordHash, displayName, role (admin/agent), isOnline, lastSeenAt, createdAt.
- **Visitor** — id, chatSpaceId, sessionToken (unique), email?, displayName?, metadata (JSON), createdAt.
- **Thread** — id, chatSpaceId, visitorId, assignedAgentId?, status (unassigned|active|closed|expired), lastActivityAt, createdAt, updatedAt.
- **Message** — id, threadId, senderType (visitor|agent|system), senderId, content, createdAt.

Relacje: Organization 1—N ChatSpace, 1—N Agent; ChatSpace 1—N Thread, 1—N Visitor; Thread N—1 Visitor, N—1 Agent (nullable), 1—N Message.

---

## 5. API (skrót kontraktu)

### REST (prefix np. `/api/v1`)

- **Auth:** `POST /auth/register` (organizacja + pierwszy admin agent), `POST /auth/login` (agent, zwraca JWT).
- **Chat Spaces:** `POST /chat-spaces`, `GET /chat-spaces`, `GET /chat-spaces/:id`.
- **Threads:** `GET /chat-spaces/:id/threads` (filtr status), `PATCH /threads/:id/claim`, `PATCH /threads/:id/close`.
- **Messages:** `GET /threads/:id/messages` (stronicowanie).

### WebSocket

- **Widget** (`/ws/widget`): connect z widgetKey + sessionToken (walidacja Origin po allowedDomains). Eventy: `visitor:send_message`, odbiór `agent:message`, `agents:status`.
- **Agent** (`/ws/agent`): connect z JWT + chatSpaceId, heartbeat, `agent:join_space`, `agent:send_message`, odbiór `thread:new`, `thread:updated`, `visitor:message`.

---

## 6. Osadzanie widgetu

Na stronie klienta:

```html
<script src="https://my-chat.com/widget.js" data-widget-key="<widgetKey z panelu / API"></script>
```

Widget ładuje się, odczytuje `data-widget-key`, łączy z backendem (WebSocket), izoluje style (Shadow DOM). Minimalna wersja: bąbelek, okienko, lista wiadomości, pole wpisu, zamknięcie.

---

## 7. Roadmap

- **Teraz:** Backend (NestJS), widget (Preact), baza (PostgreSQL), Redis, podstawowy seed i możliwość testu flow visitor ↔ agent.
- **Później:** Panel web (Angular w `frontend/`) do zarządzania organizacją, ChatSpace’ami, agentami i wątkami.
- **Później:** Aplikacja mobilna — ten sam backend, logowanie agenta, wybór ChatSpace, lista wątków, przejmowanie i odpowiadanie (te same endpointy REST i WebSocket).

---

*Ostatnia aktualizacja: zgodnie z planem Chat Widget Service (structures.md w root).*
