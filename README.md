# Nyansapo AI Assessment Application

## Project Overview

This project is a full-stack application developed for Nyansapo AI as part of their technical assessment process. The application allows users to create educational assessments and view them in a list, with a focus on a polished mobile UI that integrates with a backend API.

![Assessment List Screen](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-06%20at%202.20.16%20PM%20%281%29-6Fr319rDIU5IISu5OYVcBFZbAl6Wn5.jpeg)

## Table of Contents

- [Features](#features)
- [Technical Architecture](#technical-architecture)
- [Screenshots](#screenshots)
- [Installation and Setup](#installation-and-setup)

## Features

### Implemented Features

1. **Create Assessment Screen**
   - Form with fields for Title, Strand, Sub Strand, Students, Rounds
   - Toggle options for "All Day" and "Alert"
   - Save functionality that submits data to the backend

2. **Assessment List Screen**
   - Search bar with filter functionality
   - Dynamic list of assessment cards showing:
     - Title/Name
     - Strand
     - Sub Strand
     - Completion percentage
     - Date
     - Performance metrics with visual indicators
   - Floating action button to add new assessments

3. **Navigation**
   - Seamless navigation between screens
   - Bottom tab navigation for main app sections

4. **State Management**
   - Centralized state management for assessment data
   - Real-time updates when new assessments are created

5. **Backend Integration**
   - Full integration with REST API endpoints
   - Data persistence across sessions

## Technical Architecture

### Frontend (React Native)

- **UI Framework**: React Native
- **Navigation**: React Navigation
- **State Management**: Redux with RTK Query for data fetching
- **Styling**: Custom components matching Figma design
- **API Integration**: Redux for HTTP requests

### Backend

- **Server**: Node.js with Express
- **Database**: MongoDB
- **Deployment**: Render.com (https://take-away-assessmentbackend.onrender.com)
- **API**: RESTful endpoints for assessment management

## Screenshots

### Assessment List Screen
![Assessment List Screen](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-06%20at%202.20.16%20PM%20%281%29-6Fr319rDIU5IISu5OYVcBFZbAl6Wn5.jpeg)

### Empty Assessment State
![Empty Assessment State](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-06%20at%202.20.17%20PM-gJDnPMADUiq3EmzdgSsmnCl4hDNySi.jpeg)

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment
- MongoDB (for local development)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/VictorNzyoka/TakeAwayAssessment.git
   cd TakeAwayAssessment


2. Start a development server
  To start the development server, run the following command:
   ```bash
   npx expo start

   If you are using expo go scan the QR code in the terminal