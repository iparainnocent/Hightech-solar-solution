# Hightech Solar Solution - Client Application

## Table of Contents

1.  [Introduction](#1-introduction)
2.  [Features](#2-features)
3.  [Live Demo](#3-live-demo)
4.  [Technologies Used](#4-technologies-used)
5.  [Installation & Setup (Local Development)](#5-installation--setup-local-development)
    * [Prerequisites](#prerequisites)
    * [Backend Setup (Important!)](#backend-setup-important)
    * [Frontend Setup](#frontend-setup)
6.  [Project Structure](#6-project-structure)
7.  [Admin Access](#7-admin-access)
8.  [Deployment](#8-deployment)
9.  [Responsive Design](#9-responsive-design)
10. [Future Enhancements](#10-future-enhancements)
11. [Contributing](#11-contributing)
12. [License](#12-license)
13. [Contact](#13-contact)

---

## 1. Introduction

Welcome to the client-side application for **Hightech Solar Solution**, a modern, responsive web platform designed to showcase solar products, services, and facilitate client interactions. This application serves as the public face for Hightech Solar Solution, providing information, a way to contact the team, and an administrative dashboard for managing content.

Built with React.js, this application emphasizes a dynamic user experience, clean design, and a robust state management system using Redux Toolkit for efficient data handling.

## 2. Features

* **Home Page:** Engaging introduction to Hightech Solar Solution, highlighting key services and a call to action. Includes a captivating parallax background effect.
* **Portfolio Page:** Dedicated section to display past projects or case studies (placeholder content currently).
* **Products Display:** Dynamically fetches and displays a list of solar products with detailed views for each product.
* **Services Page:** Comprehensive overview of the various solar services offered.
* **Contact Page:** A user-friendly form for inquiries, integrated with backend services for message submission. Includes company contact details.
* **User Authentication:** Secure login and registration system.
* **Protected Admin Dashboard:** A dedicated area for administrators, accessible only after successful login, to manage the site.
    * **Owner Profile:** Displays details about the owner, Darrow Nzau.
    * **Admin Messages:** View messages submitted via the contact form.
* **Booking Page:** Placeholder for future booking functionalities.
* **Responsive Design:** Optimized for seamless viewing and interaction across various devices (desktops, tablets, mobile phones).

## 3. Live Demo

You can view the live deployed version of the application here:
[Link to Live Demo] (e.g., `https://hightech-solar-solution.netlify.app/`)

## 4. Technologies Used

* **Frontend Framework:** React.js (v18.x)
* **Routing:** React Router DOM (v6.x)
* **State Management:** Redux Toolkit (with React Redux bindings)
* **UI Animations:** AOS (Animate On Scroll)
* **Styling:** Pure CSS (modular, component-scoped where appropriate)
* **API Communication:** Axios
* **Icons:** React Icons
* **Package Manager:** npm

## 5. Installation & Setup (Local Development)

To get a copy of this project up and running on your local machine for development and testing purposes, follow these steps.

### Prerequisites

* Node.js (v18.x or v20.x LTS recommended, as v22.x can sometimes have very new compatibility nuances)
* npm (comes with Node.js)
* Git

### Backend Setup (IMPORTANT!)

This frontend application relies on a backend API for functionalities like user authentication, contact form submissions, and potentially product/service data. **You must have the corresponding backend running first.**

* **Base URL:** The frontend is configured to communicate with a backend at `http://127.0.0.1:5000/api`.
* Ensure your backend server is running and accessible at this address. If your backend is on a different port or domain, you will need to update the `baseURL` in `src/services/api.js`.

### Frontend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[Your GitHub Username]/hightech-solar-solution-client.git
    ```
    (Replace `[Your GitHub Username]` with your actual GitHub username)

2.  **Navigate into the project directory:**
    ```bash
    cd hightech-solar-solution-client
    ```

3.  **Install dependencies:**
    This command will download and install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the application in your browser (usually at `http://localhost:3000`). The page will automatically reload if you make changes.

## 6. Project Structure