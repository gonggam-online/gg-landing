# Gonggam Mobile Landing - Vercel + Resend + Gmail 수신

이 프로젝트는 Vercel에 배포하면 상담 신청 폼이 `/api/contact`로 전송되고,
Resend API를 통해 `gonggamcomms@gmail.com` 으로 상담 정보를 전달합니다.

## 꼭 해야 하는 것 1개

Vercel > Project > Settings > Environment Variables 에 아래 변수만 추가하세요.

- `RESEND_API_KEY` = Resend에서 만든 API Key

이 프로젝트에는 이미 아래 값이 기본 반영되어 있습니다.

- `CONTACT_TO_EMAIL = gonggamcomms@gmail.com`
- `RESEND_FROM_EMAIL = 공감모바일 <contact@mail.gonggammobile.com>`
- `RESEND_REPLY_TO = gonggamcomms@gmail.com`

원하면 Vercel 환경변수로 다시 덮어쓸 수도 있습니다.

## 권장 환경변수 전체

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=gonggamcomms@gmail.com
RESEND_FROM_EMAIL=공감모바일 <contact@mail.gonggammobile.com>
RESEND_REPLY_TO=gonggamcomms@gmail.com
```

## 중요한 조건

- `RESEND_FROM_EMAIL` 은 Resend에서 인증된 도메인 주소여야 합니다.
- 현재 기본값은 `contact@mail.gonggammobile.com` 으로 맞춰져 있습니다.
- `CONTACT_TO_EMAIL` 은 Gmail 주소로 받아도 됩니다.

## 배포 후 테스트

1. GitHub 저장소에 전체 프로젝트 업로드
2. Vercel에 저장소 연결
3. Vercel 환경변수에 `RESEND_API_KEY` 추가
4. Redeploy
5. 랜딩페이지에서 이름 / 연락처 입력 후 상담문의하기 클릭
6. `gonggamcomms@gmail.com` 받은편지함 확인

## 주의

- `RESEND_API_KEY` 는 GitHub 코드에 넣지 마세요.
- API Key는 Vercel 환경변수에만 넣어야 합니다.
