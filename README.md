# 🤖 Chatbot Application

A modern, high-performance chatbot application built primarily with **TypeScript** and powered by the **Bun** JavaScript runtime. This project is structured for scalability and speed, providing a robust foundation for developing conversational interfaces, automated assistants, or custom message handlers.

## ✨ Features

* **High Performance:** Leverages the **Bun** runtime for fast dependency management, build times, and execution speed.
* **Strong Typing:** Built with **TypeScript** to ensure code reliability, maintainability, and developer efficiency.
* **Modular Architecture:** Structured with a `packages` folder, suggesting a focus on separating application logic into modular components for a clean codebase.
* **Code Quality Enforcement:** Integrates **Husky**, **lint-staged**, and **Prettier** to automatically enforce code style and run checks before committing, ensuring a consistent code quality standard.
* **Modern Tooling:** Ready-to-use configuration for `tsconfig.json` and other modern development standards.

## 🛠️ Technology Stack

| Technology | Description |
| :--- | :--- |
| **Runtime** | [Bun](https://bun.sh/) (Used for running and package management) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Code Formatting** | [Prettier](https://prettier.io/) |
| **Pre-commit Hooks**| [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged) |
| **Configuration** | TSConfig, lint-stagedrc, prettierrc |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You must have the **Bun** JavaScript runtime installed on your system. Bun serves as both the runtime environment and the package manager for this project.

* **[Install Bun](https://bun.sh/docs/installation)**

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/shaimoooon/chatbot.git](https://github.com/shaimoooon/chatbot.git)
    cd chatbot
    ```

2.  Install the project dependencies using the Bun package manager:
    ```bash
    bun install
    ```

### Running the Chatbot

You can start the chatbot application by executing the main entry file (`index.ts`) directly with Bun:

```bash
bun run index.ts
