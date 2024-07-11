---
sidebar_position: 1
---

# 사용자 관리

## 사용자 생성

CREATE USER '사용자명'@'접근위치' IDENTIFIED BY '비밀번호';

접근위치의 종류
1. localhost -> 로컬 호스트
2. % -> 외부 환경
3. ip 주소 -> 해당 ip 주소

## 사용자 삭제

DROP USER '사용자명';

## 사용자 권한 관리

GRANT 접근권한 PRIVILEGES ON 데이터베이스명.테이블명 TO '사용자명'@'접근위치';

접근권한의 종류
1. 모든 권한 -> ALL
2. 특정 권한 -> SELECT, INSERT, UPDATE, DELETE

모든 데이터베이스,테이블을 선택하고 싶을 때는 * 이용

ex) GRANT SELECT ON PRIVILEGES ON \*.* TO '사용자명'@'접근위치';
