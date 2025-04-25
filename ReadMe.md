# Midterm DevOps Project

## 📌 Project Description

This project demonstrates the setup of a complete DevOps workflow for a React-based web application. It includes infrastructure automation, CI/CD pipelines, simulated deployments, monitoring, and rollback strategies.

## 🛠️ Tools & Technologies Used

- **Ansible** – for infrastructure as code (IaC)
- **GitHub Actions** – for CI/CD pipeline
- **Heroku** (simulated) – as deployment target
- **Node.js, npm, React** – for the web application
- **PM2** – for process management
- **curl** – for monitoring and health checks
- **Bash** – for scripting (e.g., rollback, health check)

## ⚙️ CI/CD & IaC Explanation

- **Infrastructure as Code (IaC)**: Using Ansible playbooks to install packages, clone the repo, install dependencies, and simulate blue-green deployments to `/opt/blue` and `/opt/green`.
- **Continuous Deployment**:
    - The pipeline deploys to either `blue` or `green`.
    - A `current` symlink points to the active environment.
    - A rollback script can switch back to the last known good version.
- **Health Check**:
    - A bash script (`health_check`) pings the app and logs the result to a file.



