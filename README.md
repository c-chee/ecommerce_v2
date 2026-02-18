# E-Commerce Project (WabiSabi.jp)

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup](#setup)  
- [Usage](#usage)  
- [Deployment](#deployment) 

---

## Overview

This project is a **React-based e-commerce site built with Next.js**. It currently supports:

- Rendering a product catalog
- Displaying categories and product details
- Filtering products by category
- Sorting products by name or price
- Responsive layout across devices

The project uses **Tailwind CSS** for styling and a **Railway-hosted database** for storing products and contact form submissions.

---

## Features

- **Next.js & React**: Modern frontend framework for fast rendering and SEO-friendly pages.
- **Responsive Design**: Works on mobile, tablet, and desktop screens using Tailwind CSS.
- **Product Filtering & Sorting**: Users can filter products by category and sort by name (A–Z / Z–A) or price (low to high / high to low).
- **Database Integration**: Products and contact form data are stored in a **Railway-hosted database**.
- **Backend API Routes**: Handles product fetching and contact form submissions.
- **Reusable Components**: Cards, tiles, buttons, forms, navigation bar, footer, and product carousel.

---

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: Railway-hosted MySQL
- **Deployment**: Hosted on Vercel
- **Version Control**: Git & GitHub

---

## Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```
### 2. Install Dependencies
```bash
cd server
npm install
```
### 3. Configure Environment Variables
Create a .env.local file with your Railway database credentials:
```bash
.env.local
```
### 4. Run Development Server
```bash
npm run dev
```
### 5. Open the Application
Visit localhost in your browser:
http://localhost:3000

---

## Usage

- Browse the product catalog by product carousel, product page, or by category.
- Sort products alphabetically (A–Z / Z–A) or by price (low → high / high → low).
- Responsive layout adjusts to mobile, tablet, and desktop screens.
- Contact form submissions are stored in the Railway database.
- Filtering and sorting are handled client-side for fast interaction.

---

## Deployment
[Link](https://ecommerce-v2-eight.vercel.app/)