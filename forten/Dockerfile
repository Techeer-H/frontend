# 베이스 이미지 설정
FROM node:16-alpine

# 작업 디렉토리 설정
WORKDIR /forten

# 의존성 설치
RUN yarn 

# 소스 코드 복사
COPY . .

# 빌드
RUN yarn build



# Production stage
FROM nginx:alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# Nginx에 빌드된 애플리케이션 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 서버 실행
CMD ["nginx", "-g", "daemon off;"]
