---
sidebar_position: 1
---

# application.properties

스프링부트 동작에 필요한 기본적인 설정을 저장해두는 파일이다.

.properties 말고도 xml, yaml(yml) 등 다양한 확장자를 지원한다.

가독성이 좋은 yaml 형태로 정리 예정

## DB 연결 설정

```
spring:
    datasource:
        driver-class-name: 드라이버 이름 입력
        url: DBMS 연결 주소
        username: DBMS 사용자명
        password: DBMS 사용자 비밀번호
```

## JPA 관련 설정

```
spring:
    jpa:
        open-in-view: true / false
        hibernate:
            ddl-auto: DBMS 반영 상태
        show-sql: JPA 에서 DBMS로 날리는 SQL문을 콘솔창에 띄워줄지 여부. true / false
```

