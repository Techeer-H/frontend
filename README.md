![Forten 이미지](forten%20이미지.png)
# Forten - 간편한 학생 정보 등록 서비스

**Forten**은 학생 정보를 간편하게 등록하고 시각화하는 서비스입니다.

## What is Forten?

1. **AI 프롬프트로 상담내용 구현**
   - AI 프롬프트를 통해 양질의 컨설팅 내용 생성

2. **학생 정보 한눈에 시각화**
   - 학생 정보 등록
   - 학생 성적 등록
   - 만족도 점수에 따른 시각화된 평가

3. **세련되고 복잡하지 않은 디자인과 차트**
   - 한눈에 들어오는 UI/UX
   - 차트를 통해 종합적인 학생 성적 분석

## System Architecture

### Tech Stack
| Frontend | Backend | Devops | DB | Others |
| --- | --- | --- | --- | --- |
| ![React](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Django Rest Framework](https://img.shields.io/badge/Django_Rest_Framework-092E20?style=for-the-badge&logo=django&logoColor=white) ![Celery](https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white) ![Gunicorn](https://img.shields.io/badge/Gunicorn-366B9E?style=for-the-badge&logo=gunicorn&logoColor=white) | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/Nginx-269539?style=for-the-badge&logo=nginx&logoColor=white) ![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) | ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) |

## Service

- **Main 페이지**: 로그인 페이지로 이어지며, 재생 버튼이 없도록 구성
- **Onboarding 페이지**: 사용자를 안내하는 페이지
- **컨설턴트 메인 페이지**
- **컨설턴트 성적 등록 페이지**
- **컨설턴트 AI 프롬프트 페이지**
- **강사 메인 페이지**
- **강사 학생 평가 페이지**

## API

[Swagger API Documentation](http://3.37.41.244:8000/swagger/ )

## Monitoring

- **Prometheus, Grafana**

## File Directory

![File Directory](url/to/file-directory-image)

## Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git