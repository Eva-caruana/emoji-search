# Emoji Search (React)

## Table of Contents
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Architecture](#architecture)
- [Contact](#contact)

---

## About The Project

Emoji Search is a web application that lets users search for emojis by keyword and copy them to the clipboard in one click.

The main goal is to provide a fast and simple emoji lookup experience, without leaving the browser.

### Main features
- Search emojis by keyword
- Display matching results in real time
- Copy any emoji to clipboard with a single click
- Fully responsive design

---

## Built With

- React
- Vite
- CSS (with CSS variables)

---

## Getting Started

### Prerequisites
- Node.js
- yarn

### Installation

```bash
git clone https://github.com/Eva-caruana/emoji-search.git
cd emoji-search
yarn install
```

### Run the project

```bash
yarn dev
```

---

## Usage

Users can:

- Type a keyword in the search bar to filter emojis
- See matching results update in real time
- Click on any emoji line to copy it to the clipboard

---

## Features

### Search
- Filters emojis from a local JSON dataset by keyword
- Displays up to 30 results at a time

### Copy to Clipboard
- One click on a result copies the emoji
- Visual feedback confirms the copy action

### Responsive Design
- Adapted layout for desktop, tablet and mobile

---

## Architecture

The app is built with reusable React components.

### Structure

- **Components** — `Header`, `Search`, `Line`, `Footer`
- **Data** — local `emoji-search.json` dataset

### Component responsibilities

| Component | Role |
|-----------|------|
| `Search` | Manages search state, filters emojis, renders results |
| `Line` | Displays one emoji result, handles clipboard copy |
| `Header` | App title |
| `Footer` | Author credit |

---

## Contact

GitHub: Eva Caruana — https://github.com/Eva-caruana
