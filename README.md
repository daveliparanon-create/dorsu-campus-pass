# DOrSU Digital Campus Pass

A React Native mobile application developed for the DOrSU ITMSD 1 Laboratory Exercise 03.

The DOrSU Digital Campus Pass provides a digital student identification and campus access interface for students.

## Features

- Student digital ID card
- Student profile information
- Student profile photo
- Active and suspended campus access status
- Suspend and reactivate campus access
- Gate scan counter
- Scan button for recording campus gate scans
- Reset scan counter
- Responsive React Native interface
- TypeScript-based project structure

## Technologies Used

- React Native
- Expo SDK 57
- React 19
- TypeScript
- Expo Go
- VS Code

## Student Information

- **Name:** Dave Harry L. Liparanon
- **Program:** BSIT
- **Year Level:** 3rd Year
- **Section:** F
- **Campus:** DOrSU

## Project Structure

```text
dorsu-campus-pass/
├── assets/
│   ├── dave-profile.jpg
│   ├── icon.png
│   ├── splash-icon.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ScanCounter.tsx
│   │   ├── StatusBadge.tsx
│   │   └── StudentCard.tsx
│   └── types/
│       └── student.ts
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md