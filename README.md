<div align="center">
  <img src="https://github.com/Techeer-H/frontend/assets/74411978/9c586935-97ac-4ff5-a9b5-14b68553a4d9" alt="For-TEN_3forten">
  

<br>
<h3>
 간편한 학생 정보 등록 서비스
</h3>
</div>

## **Contents**

- [What is Forten?](#what-is-forten)
- [System Architecture](#system-architecture)
- [Tech Stack](#techstack)
- [Service Introduction](#service-introduction)
- [Database](#database)
- [API](#api)
- [Monitoring](#monitoring)
- [Installation](#installation)
- [Members](#members)


## **What is Forten?**
**Forten은 학생 정보를 간편하게 등록하고 시각화하는 서비스입니다.**
 1. **AI 프롬프트로 상담내용 구현**
   - AI 프롬프트를 통해 양질의 컨설팅 내용 생성
   (사진 첨부)

2. **학생 정보 한눈에 시각화**
   - 학생 정보 등록
   - 학생 성적 등록
   - 만족도 점수에 따른 시각화된 평가
   (사진 첨부)

3. **세련되고 복잡하지 않은 디자인과 차트**
   - 한눈에 들어오는 UI/UX
   - 차트를 통해 종합적인 학생 성적 분석
   (사진 첨부)
## **System Architecture**
<img width="952" alt="Untitled" src="https://github.com/Techeer-H/frontend/assets/74411978/091067f9-4e7d-44a9-8ecd-4a5f2a32f7a4">


## **TechStack**
| Frontend | Backend | Devops | DB | Others |
| --- | --- | --- | --- | --- |
| ![React](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Django Rest Framework](https://img.shields.io/badge/Django_Rest_Framework-092E20?style=for-the-badge&logo=django&logoColor=white) ![Celery](https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white) ![Gunicorn](https://img.shields.io/badge/Gunicorn-366B9E?style=for-the-badge&logo=gunicorn&logoColor=white) | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/Nginx-269539?style=for-the-badge&logo=nginx&logoColor=white) ![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) | ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) |

## **Service Introduction**

- **시작 페이지**: 온보딩 페이지로 이어지며 포텐의 시작을 알리는 페이지입니다
- **Onboarding 페이지**: 서비스를 소개하고 사용자에게 이용법을 안내하는 페이지입니다
- **로그인 페이지**: 컨설턴트, 강사는 로그인하여 다른 UI의 메인으로 이동하는 페이지입니다
- **컨설턴트 메인 페이지**: 컨설턴트로 로그인 후 첫 화면이자 학생 목록을 조회하고 학생별 개인정보와 성적, 그리고 학생평가 확인 페이지로 이동할 수 있는 페이지입니다
- **컨설턴트 성적 등록 페이지**: 학생의 성적을 분기별로 등록하는 페이지입니다
- **컨설턴트 AI 프롬프트 페이지**: 해당 학생에 대한 여러 강사들이 작성한 학생의 수업태도 및 평가를 학부모님과 쉽게 상담할 수 있게 AI가 요약해준 프롬프트를 확인하는 페이지입니다
- **강사 메인 페이지**: 강사로 로그인 후 첫 화면이자 학생 목록을 조회하고 학생에 대한 평가를 작성하러 이동할 수 있는 페이지입니다
- **강사 학생 평가 페이지**: 강사가 학생의 수업태도 및 평가를 등록, 수정, 그리고 삭제할 수 있는 페이지입니다
## **Database**
<img width="855" alt="image" src="https://github.com/Techeer-H/frontend/assets/74411978/2dc82946-9425-4fda-a7de-30ea9c4147da">


## **API**

[Swagger API Documentation](http://3.37.41.244:8000/swagger/ )


## **Monitoring**

- **Prometheus, Grafana**
  
![grafana prometheus](https://github.com/Techeer-H/frontend/assets/154998592/c2c52003-1324-4eb5-907b-e7d293f0497e)





## **Installation**

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git

   

## **Members**
<table width="950px">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>Picture</th>
        <td width="100" align="center">
            <a href="https://github.com/philjin97">
                <img src="![philjin](https://github.com/Techeer-H/frontend/assets/74411978/c8dd6efa-5666-4270-8ed0-7781bc010dd9)
" width="60" height="60">
            </a>
        </td>
         <td width="100" align="center">
            <a href="https://github.com/penloo">
                <img src="![jaemin](https://github.com/Techeer-H/frontend/assets/74411978/1010dfa7-7901-41da-b867-1c080b076c46)
" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/JunYoung02">
                <img src="![jun](https://github.com/Techeer-H/frontend/assets/74411978/ec8dcfb6-d833-4cff-b4e8-c67fd2e94724)
" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/GirlsLikeMeY">
                <img src="![hh](https://github.com/Techeer-H/frontend/assets/74411978/d980c186-d744-4441-9dcd-85d3c97f93cd)
" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/yeomj051">
                <img src="![IMG_1054 JPG](https://github.com/Techeer-H/frontend/assets/74411978/af3230c3-db06-4799-a101-5641591d34dc)
" width="60" height="60">
            </a>
        </td>
         <td width="100" align="center">
            <a href="https://github.com/DanielKim7305">
                <img src="![jun](https://github.com/Techeer-H/frontend/assets/74411978/b8484017-14a9-4a39-a7c4-57b617921d69)
" width="60" height="60">
            </a>
        </td>
    </tr>
    <tr>
        <th>Name</th>
        <td width="100" align="center">상필진</td>
        <td width="100" align="center">하재민</td>
        <td width="100" align="center">조준영</td>
        <td width="100" align="center">이현진</td>
        <td width="100" align="center">여민지</td>
        <td width="100" align="center">김준범</td>
    </tr>
    <tr>
        <th>Position</th>
        <td width="150" align="center">
            Leader<br>
            Backend<br>
            Devops<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            Devops<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/philjin97">
                <img src="http://img.shields.io/badge/philjin97-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/penloo">
                <img src="http://img.shields.io/badge/penloo-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/JunYoung02">  
                <img src="http://img.shields.io/badge/JunYoung02-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/GirlsLikeMeY">
                <img src="http://img.shields.io/badge/GirlsLikeMeY-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/yeomj051">
                <img src="http://img.shields.io/badge/yeomj051-green?style=social&logo=github"/>
            </a>
        </td>
         <td width="100" align="center">
            <a href="https://github.com/DanielKim7305">
                <img src="http://img.shields.io/badge/DanielKim7305-green?style=social&logo=github"/>
            </a>
        </td>
    </tr>
    </tbody>
</table>
<hr>

