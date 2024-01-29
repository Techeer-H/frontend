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

| Frontend        | Backend                 | Devops                  | DB     | Others    |
| --------------- | ----------------------- | ----------------------- | ------ | --------- |
| React           | Django                  | Docker                  | MySQL  | Swagger   |
| CSS             | Rest Framework          | Nginx                   | Redis  | Notion    |
| Tailwind CSS    | Celery                  | Amazon EC2              |        | Slack     |
| Typescript      | Gunicorn                | Prometheus              |        | Postman   |
|                 |                         | Grafana                 |        |           |

## Service

- **Main 페이지**: 로그인 페이지로 이어지며, 재생 버튼이 없도록 구성
- **Onboarding 페이지**: 사용자를 안내하는 페이지
- **컨설턴트 메인 페이지**
- **컨설턴트 성적 등록 페이지**
- **컨설턴트 AI 프롬프트 페이지**
- **강사 메인 페이지**
- **강사 학생 평가 페이지**

## API

![Swagger API](url/to/swagger-image)

## Monitoring

- **Prometheus, Grafana**

## File Directory

![File Directory](url/to/file-directory-image)

## Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
