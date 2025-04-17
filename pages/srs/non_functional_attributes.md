# Non-Functional Attributes

## Security

User authentication must be handled through Firebase Authentication to ensure secure access.

All API requests must be encrypted using HTTPS (TLS 1.2+) to prevent data interception.

User data storage must comply with GDPR and other relevant data privacy regulations.

## Portability

The application must be cross-platform, supporting Android and PC, with a potential future iOS version.

The backend should be containerized (Docker support) for easy deployment on cloud or on-premise servers.

## Reliability

The system should provide 99% uptime with redundancy for backend services.

The application should function without internet for local quizzes, requiring a sync mechanism when online.

## Reusability

The quiz generation module should be designed as a reusable API service, allowing integration into other  
platforms.

NLP-based quiz creation components should be modular, enabling easy adaptation for different languages in  future.

## Application Compatibility

The mobile app should be compatible with Android 8.0+ and Windows 10+.

The backend should support modern web browsers for potential web-based quiz access.

## Data Integrity

Quiz results and progress tracking must be stored safely to prevent data loss or corruption.

The application should implement regular data backups for user profiles and quiz history.

## Scalability Capacity

The system should handle at least 500 concurrent users without significant performance degradation.

The backend should be designed to scale horizontally by deploying additional instances when needed.
