# Teamify Backend Project

## Overview

Teamify Backend Project is a robust and efficient employee management system designed to streamline company operations. This project effectively manages company data, employee information, and project details to create a comprehensive solution for companies to manage their employees, projects, and company data effectively.

## Key Features

### User Roles

- **Admin:**
  - Exclusive privileges to add new employees and create companies within the system.
  
- **Manager:**
  - Specific access rights to add and manage projects efficiently.

### Data Management

- **Company Data:**
  - Comprehensive platform to manage and organize company-related information.
  
- **Employee Data:**
  - Securely stored and easily accessible for efficient management.
  
- **Project Data:**
  - Managers can add, update, and oversee project details for seamless project management.

### Security Measures

- **Encryption:**
  - Bcrypt encryption implemented to secure user passwords.
  
- **Authentication and Authorization:**
  - JSON Web Tokens (JWT) used for secure authentication and authorization, allowing controlled access based on user roles.

## Technology Stack

- **Node.js and Express.js:**
  - Leveraging the speed and versatility of Node.js for server-side development.
  - Utilizing Express.js for a robust framework for building scalable web applications.

- **TypeScript:**
  - Enhancing code quality with static typing and improved maintainability.

- **PostgreSQL:**
  - Powerful and open-source relational database system employed to store and manage data efficiently.

- **Sequelize:**
  - As the ORM of choice, Sequelize facilitates seamless interaction with the PostgreSQL database, providing a clean and organized data management layer.

## Installation

1. Clone the repository: `git clone https://github.com/sanjay2024/teamify-backend.git`
2. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the application at `http://localhost:3000` in your preferred web browser.

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
