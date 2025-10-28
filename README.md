# ⚛️ React Implementation: Multi-Framework Ticket Web App

This is the **React implementation** of the HNG Stage 2 Ticket Management Web Application. It adheres to all requirements, including the strict **1440px max-width layout**, the custom **wavy hero background**, **CRUD functionality**, and **state management via Local Storage** for session and data persistence.

---

## 1. Frameworks and Libraries Used

This project was bootstrapped using **Vite** and relies on the following key dependencies:

| Category | Dependency | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | `react` | 19.1.1 | The primary UI library. |
| **Routing** | `react-router-dom` | 7.9.4 | Handles client-side navigation and protected routes. |
| **Styling** | `tailwindcss / @tailwindcss/vite` | 4.1.16 | Utility-first CSS framework for rapid, responsive styling. |
| **Notifications** | `react-toastify` | 11.0.5 | Provides user feedback via toast/snackbar notifications for success and errors. |
| **Icons** | `react-icons` | 5.5.0 | Used for consistent UI icons (e.g., Logout, Edit, Delete). |
| **Build Tool** | `vite` | 7.1.7 | Fast development environment and build tool. |
| **Language** | `typescript` | ~5.9.3 | Used for type-safe code. |

---

## 2. Setup and Execution Steps

To run the React version of the application:

### Prerequisites
* **Node.js** (v18+) and **npm** installed.

### Installation
1. Navigate into the React project directory:
    ```bash
    cd /path/to/your/repo/react-implementation
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Execution
1. Start the development server:
    ```bash
    npm run dev
    ```
2. The application will be available at the address shown in your console (usually `http://localhost:5173/`).

---

## 3. Instructions for Switching Between Versions

This README covers the **React** implementation.

To switch to the other frameworks, navigate to their respective root directories in your repository structure:

* **Vue.js Version:** `cd ../vue-implementation`
* **Twig Version (Templating):** `cd ../twig-implementation`

***Note:*** *Each directory contains its own `README.md` with specific setup instructions.*

---

## 4. Explanation of UI Components and State Structure

### UI Components Overview
The application uses a modular, component-based structure:

| Component | Description | Role |
| :--- | :--- | :--- |
| `App.tsx` | Main entry point; defines the routing structure (`react-router-dom`). | Routing & Layout |
| `LandingPage.tsx` | Handles the Hero section, wave SVG, and CTAs. | Public View |
| `AuthLayout.tsx` | Parent for Login/Signup forms; handles authentication state. | Auth Flow |
| `Dashboard.tsx` | Displays ticket summary statistics (Total, Open, Resolved) and navigation. | Protected View |
| `TicketManager.tsx` | The main CRUD view. Manages the list display (Read) and includes modals/forms for Create/Update. | Protected View |
| `TicketCard.tsx` | Displays individual ticket details, status tag, and Delete/Edit controls. | Data Display |
| `ProtectedRoute.tsx` | A wrapper component to check for the `ticketapp_session` token before rendering child routes. | Security |

### State Structure
State is managed using two primary methods as required by the task:

1.  **Session/Global State (Local Storage):**
    * `users`: An array of users objects (JSON string) saved directly to Local Storage, simulating the persistent backend database for authentication.
    * `session`: Used to store the authentication token (string). Its presence determines user authorization.
    * `tickets`: An array of ticket objects (JSON string) saved directly to Local Storage, simulating the persistent backend database for CRUD operations.
2.  **Local Component State (React Hooks):**
    * `useState` is used for managing form inputs (title, description, etc.) and for tracking the application's current loading and error status.

---

## 5. Notes on Accessibility and Known Issues

### Accessibility Compliance
* **Semantic HTML:** Used structural elements (`<main>`, `<nav>`, `<form>`, `<button>`) throughout.
* **Color Contrast:** Status tags follow the required color tones (Green/Amber/Gray) and ensure sufficient contrast with text for readability.
* **Keyboard Navigation:** All interactive elements (`<button>`, `<a>`, form fields) are tabbable, and visible focus states are preserved.
* **ARIA/Validation:** Form fields rely on `aria-live` regions (via `react-toastify`) for dynamic feedback.

### Known Issues / Implementation Notes
* **Mock Backend:** Data persistence and authentication logic rely entirely on `localStorage`, as required by the task for simulation. True error handling for network failures is mocked where applicable.
* **Routing:** The application uses in-memory routing (`BrowserRouter` equivalent) and relies on manual redirection logic within the `ProtectedRoute` component.

---

## 6. Example Test User Credentials

Use the following credentials to test the Login and Signup forms.

| Action | Username/Email | Password |
| :--- | :--- | :--- |
| **Login** | `testuser@hng.com` | `password123` |
| **Signup** | *Any unique new email* | *A strong password (8+ chars)* |

Upon successful Login, a mock token will be set in `localStorage` under the key `session`.