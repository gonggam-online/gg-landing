# 공감모바일 랜딩페이지

GitHub 업로드용 Vite + React + Tailwind 프로젝트입니다.

## 로컬 실행
```bash
npm install
npm run dev
```

## 빌드
```bash
npm run build
```

## 상담문의 이메일 전송
Vercel 환경변수 또는 `.env`에 아래 값을 넣어주세요.

- `RESEND_API_KEY`
- `RESEND_FROM`
- `RESEND_TO`

서버리스 함수는 `api/contact.js` 입니다.
