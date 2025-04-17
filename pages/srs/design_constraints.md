# Design Constraints

## Technology Stack Limitations

The mobile application must be developed using Kotlin Multiplatform (KMP) to ensure cross-platform compatibility (Android & PC, with potential iOS support).

The backend must be built using FastAPI (Python) to facilitate efficient RESTful API communication.
PyTorch is required for voice recognition, restricting alternative ML frameworks.

## Hardware & Software Restrictions

The application must be optimized for devices with at least 2GB RAM and Android 8.0+.

Server infrastructure must support scalability while maintaining cost efficiency.

Local storage should be limited to 50MB per user to prevent excessive data usage.

## Resource Constraints

The use of LLMs must be minimized to reduce server costs and improve response times. NLP-based quiz generation is preferred for lower-cost processing.

Firebase services will be used for authentication and notifications, requiring adherence to Google’s platform policies.

Bandwidth limitations must be considered, ensuring efficient data transmission for low-connectivity environments.

## Security & Compliance

User authentication must use Firebase Authentication, ensuring secure login and data protection.

All stored user data must comply with GDPR and other relevant data privacy regulations.

The app must enforce HTTPS encryption for all API communications.

## Reliability & Performance Constraints

The app must function without requiring an always-on internet connection, except for quiz fetching and cloud-based voice recognition.

The server should handle at least 500 quiz requests per minute without degrading performance.

The system should ensure at least 99% uptime, requiring robust cloud infrastructure.

## Third-Party Service Dependencies

Dependency on Firebase means the app must be adaptable to any changes in Google’s policies or pricing.

Any external APIs used for text processing (e.g., OpenAI for LLM-based quizzes) must be considered for cost and availability constraints.
