# Two-Tier Web Application Deployment on AWS

This project demonstrates the **end-to-end deployment of a two-tier web application** on **AWS EC2** using **Docker containers** and **automated CI/CD pipelines with GitHub Actions**.

The goal of this project is to showcase **real-world DevOps practices**, including containerization, automated deployments, and cloud-based infrastructure management.

---

## 📌 Project Overview

The application follows a **two-tier architecture**:
- **Frontend tier** responsible for serving the user interface
- **Backend tier** responsible for handling API requests

Both tiers are containerized using Docker and deployed on a single AWS EC2 instance.  
Deployments are fully automated using GitHub Actions.

This project is designed as a **portfolio and internship-level DevOps project**, focusing on simplicity, automation, and production-like workflows.

---

## 🚀 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Docker
- Nginx

### Backend
- Node.js
- Express.js
- Docker

### DevOps & Cloud
- AWS EC2 (Ubuntu)
- Docker
- GitHub Actions (CI/CD)
- Git & GitHub
- Linux (SSH, container management)

---

## 🏗️ Architecture (Two-Tier Design)

```text
User Browser
     |
     v
Frontend Container (Nginx - Port 80)
     |
     v
Backend Container (Node.js - Port 4000)
     |
     v
AWS EC2 Instance (Ubuntu)
