---
sidebar_position: 1
---

# Message Converters

메시지를 특정 MIME 타입의 데이터로 변환해주는 변환기라 생각하면 된다.

## 어디서 동작하는 것인가?

## 서버로 요청하는 상황

>@RequestBody

서버로 데이터가 들어오면 MIME 타입에 따라 그에 맞는 Message Converter가 동작하여 데이터를 처리한다.

보통 객체로 변환하는 용도로 사용된다.

## 서버가 응답하는 상황

>@ResponseBody

데이터를 응답해줄 때도 동작할 수 있다. 주로 객체를 변환할 때 사용된다.
