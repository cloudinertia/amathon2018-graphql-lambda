# amathon2018-graphql-lambda

---

### About

다수의 Lambda 로 동작하는 GraphQL 기반의 마이크로서비스 아키텍쳐 API FrameWork 만들기

---

### Stack

- AWS
  - CloudFormation
  - Lambda
  - API Gateway
- Serverless
  - serverless-http
  - serverless-offline
- GraphQL
  - Apollo-Express-Server
- ETC
  - mustache
  - express

---

Before start

> this project is depend on Serverless framework

---

### Prerequisites

- Node.js 8.10^
- aws cli
- serverless

---

### Installation

- `git clone https://github.com/cloudinertia/amathon2018-graphql-lambda`
- `cd example && npm install`
- check your AWS Credention if you have AWS Profile change [serverless.yaml]() of profile

---

### How to Use

- define schema at './schemas'(BookSchema and DogSchema are examples)
- then `yarn off:frame` for localhost testing 
- what framework.js do
    - inject handler from schema and move to bundler folder
    - autogen serverless.yml from schemas you defined
- you can deploy through `yarn deploy:{STAGING_STATUS}`
    - STAGING\_STATUS: dev,staging,prod
---

### Current Structure

![Imgur](https://i.imgur.com/p5sUOLr.png)

---

Todo Structure

---

made by [오영택](https://github.com/cloudinertia) [홍진호](https://github.com/jinhokong)
