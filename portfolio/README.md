# 권준형 포트폴리오

Next.js로 제작한 포트폴리오입니다.

배포 주소: https://kwonjh0406.github.io/

## 로컬 개발

Node.js 24와 `package.json`에 지정된 pnpm 버전을 사용합니다.
아래 명령은 `portfolio` 디렉터리에서 실행합니다.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## 빌드 및 배포

```bash
pnpm lint
pnpm build
```

`next.config.ts`의 `output: "export"` 설정으로 `out/`에 정적 HTML, CSS, JavaScript를 생성합니다.
GitHub Pages에는 Next.js 서버가 없으므로 이미지는 `unoptimized: true`로 원본 정적 파일을 제공합니다.
로컬에서 배포 결과를 확인하려면 `out/`을 정적 웹 서버로 제공하세요. `next start`는 정적 내보내기에 사용할 수 없습니다.

저장소의 **Settings → Pages → Build and deployment → Source**는 **GitHub Actions**로 설정합니다.
`main` 브랜치에 푸시하면 저장소 루트의 `.github/workflows/deploy-pages.yml`이 다음 과정을 자동 실행합니다.

1. 고정된 의존성 설치, ESLint 검사, 정적 빌드
2. `actions/upload-pages-artifact`로 `portfolio/out` 업로드
3. `actions/deploy-pages`로 GitHub Pages 배포

Actions 탭에서 **Deploy portfolio to GitHub Pages → Run workflow**로 수동 배포할 수도 있습니다.
배포 인증은 GitHub가 제공하는 `GITHUB_TOKEN`과 OIDC를 사용하며 별도 개인 토큰을 저장할 필요가 없습니다.

## 공식 문서

- [GitHub Pages 사용자 지정 워크플로](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Next.js 정적 내보내기](https://nextjs.org/docs/app/guides/static-exports)
