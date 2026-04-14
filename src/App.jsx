import React, { useEffect, useMemo, useRef, useState } from "react";

export default function GonggamMobileLandingPage() {
  const officialStoreImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_1-RMtgNRnu9HDVDbXgIIGbAWfsA45UP1.jpg";
  const consultationImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_2-Rq7RDUUXyqwO1RAg1zvaeHuepVhAfE.jpg";
  const onlineConsultationImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_3-uLafN9BPsWaDf4OOJwpiwSYNBEZHwj.png";

  const trustPoints = [
    {
      title: "LG유플러스 공식인증 온라인샵",
      desc: "공식 인증 기반의 신뢰 상담",
      icon: "✓",
      cardClass: "border-neutral-200 bg-white",
      iconClass: "bg-black text-white",
    },
    {
      title: "10개 오프라인 직영매장",
      desc: "오프라인 운영 경험이 만든 안정감",
      icon: "10+",
      cardClass: "border-amber-300 bg-[#fffaf0]",
      iconClass: "bg-white text-amber-700 ring-1 ring-amber-300",
    },
    {
      title: "5년 연속 고객 재방문율 1위",
      desc: "다시 찾는 고객이 증명한 만족도",
      icon: "★",
      cardClass: "border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50",
      iconClass: "bg-pink-600 text-white shadow-sm",
    },
  ];

  const liveNotificationDate = new Date()
    .toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(/\.$/, "");

  const liveNotificationSurnames = [
    "김**",
    "이**",
    "박**",
    "최**",
    "정**",
    "강**",
    "조**",
    "윤**",
    "장**",
    "임**",
    "한**",
    "오**",
    "서**",
    "신**",
    "권**",
    "황**",
    "안**",
    "송**",
    "전**",
    "홍**",
    "유**",
    "고**",
    "문**",
    "양**",
    "손**",
    "배**",
    "백**",
    "허**",
    "남**",
    "심**",
    "노**",
    "하**",
    "곽**",
    "성**",
    "차**",
    "주**",
    "우**",
    "구**",
    "민**",
    "진**",
    "지**",
    "엄**",
    "채**",
    "원**",
    "천**",
    "방**",
    "공**",
    "현**",
    "함**",
    "변**",
  ];

  const liveNotificationServices = [
    "기기변경",
    "휴대폰 특가",
    "번호이동",
    "중고번호이동",
    "요금제변경",
    "갤럭시S26",
    "아이폰17",
    "애플워치",
    "갤럭시워치",
    "아이패드",
    "부가서비스",
    "유심교체",
    "요금납부",
    "요금납부방법변경",
    "제휴카드할인",
    "선택약정연장",
    "매장위치",
    "버디4",
    "갤럭시A17",
    "효도폰",
    "키즈폰",
    "폴더폰",
    "폴드7",
    "플립7",
    "S26울트라",
    "아이폰15특가",
    "대명유라이프",
    "분실신고",
    "인터넷결합",
    "알뜰폰",
    "IPTV",
    "IoT우리집지킴이",
    "IoT팻케어",
    "인터넷재약정",
  ];

  const liveNotificationStatuses = [
    "상담 신청 완료",
    "문의 접수 완료",
    "상담 예약 완료",
    "상담 요청 접수 완료",
    "상세 문의 접수 완료",
    "상담 가능 여부 확인중",
    "전문 상담사 배정 완료",
    "순차 상담 대기중",
    "상담 내용 확인중",
    "빠른 회신 예정",
  ];

  const liveNotificationMessages = Array.from({ length: 100 }, (_, index) => {
    const surname = liveNotificationSurnames[index % liveNotificationSurnames.length];
    const service = liveNotificationServices[(index * 7) % liveNotificationServices.length];
    const status = liveNotificationStatuses[(index * 3) % liveNotificationStatuses.length];
    return `${liveNotificationDate} ${surname} 고객님 ${service} ${status}`;
  });

  const liveNotificationIntervals = [3, 5, 2, 7, 5, 4, 5, 8, 5, 2, 5];

  const benefitCards = [
    {
      title: "할인 문의 고객 집중",
      desc: "다른 곳과 비교를 끝낸 고객 문의가 꾸준히 몰림",
      icon: "₩",
      cardClass:
        "bg-white border-white/70 text-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
      iconClass: "bg-pink-600 text-white",
      titleClass: "text-neutral-900",
      descClass: "text-neutral-600",
    },
    {
      title: "믿을 수 있는 상담",
      desc: "조건만이 아니라 실제 개통까지 정확한 안내",
      icon: "✓",
      cardClass:
        "bg-[#ff7b8f] border-white/15 text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
      iconClass: "bg-white text-[#ff5b74]",
      titleClass: "text-white",
      descClass: "text-white/90",
    },
    {
      title: "성지 가격 + 신뢰 상담의 만족감",
      desc: "최근 온라인 휴대폰 구매는 모두 공감모바일",
      icon: "★",
      cardClass:
        "bg-[#c84b8f] border-white/15 text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
      iconClass: "bg-[#a93472] text-white",
      titleClass: "text-white",
      descClass: "text-white/90",
    },
  ];

  const compareLeft = [
    "고가 요금제 유지 중심 안내",
    "복잡한 조건 설명 부족",
    "부가서비스 유지 부담",
    "상담과 실제 진행 차이 발생",
  ];

  const compareRight = [
    "고객 상황에 맞는 요금제 선택",
    "헷갈리지 않게 핵심만 설명",
    "불필요한 유지조건 최소화",
    "상담 내용 기준으로 정확히 진행",
  ];

  const bundleBenefits = [
    "인터넷+TV 동시상담",
    "결합 가능 여부 확인",
    "설치 일정까지 빠르게 안내",
  ];

  const differences = [
    {
      no: "1",
      title: "본사 기준 신뢰 상담",
      desc: "LG유플러스 공식 인증 온라인샵\n정확하고 검증된 내용으로 상담",
      image: officialStoreImage,
      alt: "공식 인증 온라인샵 안내",
    },
    {
      no: "2",
      title: "상담 내용, 그대로 진행",
      desc: "고객 상황에 최적화된 상담 진행\n상담 내용과 동일 조건으로 개통",
      image: consultationImage,
      alt: "1대1 맞춤 상담 안내",
    },
    {
      no: "3",
      title: "온·오프라인 매장 연계",
      desc: "온라인 개통, 오프라인 매장 연계\n신뢰있는 사후 관리/약속 확인",
      image: onlineConsultationImage,
      alt: "온라인 오프라인 연계 상담 안내",
    },
  ];

  const reviewCards = [
    {
      category: "인터넷 상담",
      author: "gkzls789",
      summary:
        "매장이 넓고 분위기가 좋았고 직원들도 친절해서 부모님 폰도 여기서 바꾸고 싶다는 후기입니다.",
      excerpt:
        "매장이 굉장히 넓고 좋은 분위기였고 직원들도 너무 친절해서 다음에 부모님폰도 꼭 사러 오려고요.",
      tags: ["친절해요", "+1"],
    },
    {
      category: "모바일 상담",
      author: "양현준37",
      summary:
        "설명이 명확하고 모르는 부분도 하나하나 잘 알려줘서 신뢰가 갔다는 후기입니다.",
      excerpt:
        "직원분들이 정말 친절하고 설명이 명확해서 기분 좋게 개통했습니다. 모르는 부분도 하나하나 잘 알려주셔서 신뢰가 가네요.",
      tags: ["친절해요", "+4"],
    },
    {
      category: "모바일 상담",
      author: "kdh1004",
      summary:
        "기다리는 동안의 배려와 상담의 친절함 때문에 만족스러웠다는 장문의 후기입니다.",
      excerpt:
        "예약 후 방문했을 때 사람이 많았는데 기다리는 동안 음료도 주고 TV도 틀어주셔서 지루하지 않았고, 무엇보다 다들 엄청 친절하셨습니다.",
      tags: ["친절해요", "설명이 자세해요", "시설이 깔끔해요"],
    },
    {
      category: "모바일 상담",
      author: "sol****",
      summary:
        "고객을 먼저 생각해주는 배려심이 느껴져 휴대폰을 잘 바꿨다고 느꼈다는 후기입니다.",
      excerpt:
        "상담도 너무 잘해주시고 근무하시는 직원분들도 너무 친절하셔서 휴대폰을 잘 바꾼 것 같습니다. 고객을 먼저 생각해주는 배려심에 감동이에요.",
      tags: ["친절해요", "서비스가 좋아요", "가격이 합리적이에요"],
    },
    {
      category: "모바일 상담",
      author: "vn****",
      summary: "짧지만 친절한 상담에 감사함이 분명하게 느껴지는 후기입니다.",
      excerpt: "친절하게 상담 해주셔서 감사합니다.",
      tags: ["친절해요"],
    },
    {
      category: "결합할인/요금제변경/요금수납",
      author: "꿈꾸는 소년95",
      summary:
        "궁금한 부분에 대한 답변이 쉽고 자세해서 다른 업무도 여기서 하고 싶어졌다는 후기입니다.",
      excerpt:
        "직원 모두 친절하게 대해주시고 궁금한 부분에 대한 답변도 너무 쉽고 자세히 해주셨어요. 다른 업무들도 여기서 해야겠어요.",
      tags: ["친절해요", "설명이 자세해요", "가격 안내가 명확해요"],
    },
    {
      category: "인터넷 상담",
      author: "dud****",
      summary: "많이 물어봐도 세심하게 설명해줘서 믿음이 갔다는 후기입니다.",
      excerpt:
        "방문해서 귀찮게 이것저것 많이 물어봤는데 하나하나 친절하게 상담도 해주고 제가 이해를 잘못하는 부분도 세심하게 설명해주셨어요.",
      tags: ["친절해요"],
    },
  ];

  const stores = [
    { name: "수유점", address: "서울 강북구 도봉로 332 홍승빌딩 1층", phone: "070-8285-0303" },
    { name: "성북점", address: "서울 성북구 보문로 204 1층", phone: "070-4065-0303" },
    { name: "종로점", address: "서울 종로구 종로 236 1층", phone: "070-4833-0303" },
    { name: "미아점", address: "서울 성북구 도봉로 23 학동빌딩 1층", phone: "070-4001-1742" },
    { name: "경복궁점", address: "서울 종로구 자하문로 3 1층", phone: "070-4384-7999" },
    { name: "숙대점", address: "서울 용산구 한강대로 289 1층", phone: "070-4644-0303" },
    {
      name: "길음롯데캐슬점",
      address: "서울 성북구 길음동 542-1 롯데캐슬상가 130호",
      phone: "070-7585-1887",
    },
    { name: "길음8단지점", address: "서울 성북구 길음로 33 상가 A동 9호", phone: "070-7585-1455" },
    { name: "동묘점", address: "서울 종로구 지봉로 37-1 1층", phone: "070-8285-1742" },
    { name: "전농점", address: "서울 동대문구 전농로 151 1층", phone: "070-7543-3580" },
  ];

  const policyContents = {
    privacy: {
      title: "개인정보처리방침",
      sections: [
        {
          heading: "1. 개인정보 수집 항목",
          body:
            "회사는 상담 신청, 문의 접수, 서비스 안내를 위해 이름, 연락처, 상담 내용 등의 정보를 수집할 수 있습니다. 실제 운영 시에는 수집하는 항목에 맞게 구체적으로 고지해야 합니다.",
        },
        {
          heading: "2. 개인정보 수집 및 이용 목적",
          body:
            "수집한 개인정보는 상담 요청 확인, 고객 문의 응대, 서비스 안내, 계약 진행 및 고객 관리 등의 목적으로 이용됩니다. 수집 목적 외의 용도로는 이용하지 않습니다.",
        },
        {
          heading: "3. 개인정보 보유 및 이용 기간",
          body:
            "회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만 관련 법령에 따라 일정 기간 보관이 필요한 경우에는 법령이 정한 기간 동안 보관할 수 있습니다.",
        },
      ],
    },
    terms: {
      title: "이용약관",
      sections: [
        {
          heading: "1. 목적",
          body:
            "이 약관은 회사가 제공하는 온라인 상담 및 안내 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
        },
        {
          heading: "2. 서비스 내용",
          body:
            "회사는 휴대폰, 인터넷, IPTV 및 관련 서비스에 대한 상담, 문의 접수, 안내 제공 등의 서비스를 운영할 수 있습니다. 서비스 내용은 회사 사정에 따라 변경될 수 있습니다.",
        },
        {
          heading: "3. 회사의 면책",
          body:
            "회사는 상담 내용이 고객 상황과 시점에 따라 달라질 수 있으며, 시스템 또는 통신 장애 등 불가항력 사유에 대해서는 책임을 지지 않습니다.",
        },
      ],
    },
    commerce: {
      title: "통신판매 관련 안내",
      sections: [
        {
          heading: "1. 사업자 정보",
          body:
            "회사는 관련 법령에 따라 상호, 대표자명, 사업자등록번호, 주소, 연락처 등 필요한 사업자 정보를 사이트 하단 등에 표시합니다.",
        },
        {
          heading: "2. 상품 및 서비스 안내",
          body:
            "사이트 내 표시되는 상품 정보, 요금 조건, 지원 내용, 혜택 등은 고객의 가입 유형, 시점, 정책 변경에 따라 달라질 수 있으며, 최종 내용은 상담 과정에서 확인됩니다.",
        },
        {
          heading: "3. 청약 및 계약 관련 사항",
          body:
            "실제 개통 또는 가입 계약은 별도의 상담 및 확인 절차를 통해 진행되며, 고객은 계약 체결 전 주요 조건을 충분히 안내받을 수 있습니다.",
        },
      ],
    },
  };

  const reviewScrollRef = useRef(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitResult, setSubmitResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reviewCountText = useMemo(() => `${reviewCards.length}+ 실제 후기`, [reviewCards.length]);

  useEffect(() => {
    let isMounted = true;
    let timerId;

    const runCycle = (stepIndex) => {
      const seconds = liveNotificationIntervals[stepIndex % liveNotificationIntervals.length];
      timerId = window.setTimeout(() => {
        if (!isMounted) return;
        setNotificationIndex((prev) => (prev + 1) % liveNotificationMessages.length);
        runCycle(stepIndex + 1);
      }, seconds * 1000);
    };

    runCycle(0);

    return () => {
      isMounted = false;
      if (timerId) window.clearTimeout(timerId);
    };
  }, [liveNotificationMessages.length]);

  const scrollReviews = (direction) => {
    if (!reviewScrollRef.current) return;
    reviewScrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setSubmitResult({ success: false, message: "이름과 연락처는 필수입니다." });
      return;
    }

    const mailSubject = `[공감모바일 상담신청] ${formData.name}`;
    const mailBody = [
      `이름: ${formData.name}`,
      `연락처: ${formData.phone}`,
      `원하는 모델/상품: ${formData.product || "미입력"}`,
      "",
      "문의 내용:",
      formData.message || "미입력",
      "",
      `접수 시각: ${new Date().toLocaleString("ko-KR")}`,
    ].join("\n");

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const rawText = await response.text();
      const contentType = response.headers.get("content-type") || "";

      let data = {};
      if (contentType.includes("application/json")) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = { error: "JSON 응답 파싱에 실패했습니다." };
        }
      } else {
        data = { error: "서버가 JSON이 아닌 응답을 반환했습니다." };
      }

      if (!response.ok) {
        throw new Error(data?.error || "전송에 실패했습니다.");
      }

      setSubmitResult({
        success: true,
        message: "상담 신청 내용이 이메일로 전송되었습니다.",
      });
      setFormData({ name: "", phone: "", product: "", message: "" });
    } catch {
      const mailtoUrl = `mailto:gonggamcomms@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      window.location.href = mailtoUrl;
      setSubmitResult({
        success: true,
        message: "자동 전송 연결이 없어 메일앱 작성 화면으로 연결했습니다.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffafb] pb-24 text-neutral-900">
      <div className="bg-[#111111] px-4 py-2 text-center text-[12px] font-bold text-white">
        <span className="text-pink-400">●</span>
        <span className="ml-2">실시간 상담 접수중</span>
        <span className="ml-2 text-white/75">| 예약 먼저/순서대로 회신</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-pink-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div>
            <p className="text-xl font-black tracking-[-0.03em]">
              <span className="text-pink-600">공감</span>모바일
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              Official Online Shop
            </p>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://pf.kakao.com/_WcxeAn/chat"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-yellow-300 px-5 py-2.5 text-sm font-black text-black shadow-sm"
            >
              카카오톡 빠른상담
            </a>
            <a
              href="tel:010-8080-1887"
              className="rounded-full bg-[#ff1493] px-5 py-2.5 text-sm font-black text-white shadow-sm"
            >
              친절한 전화상담
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,20,147,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,211,64,0.16),_transparent_24%),white]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:px-6 md:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-pink-600">
              모바일/인터넷 특가상담 전용
            </div>

            <h1 className="mt-5 text-[2rem] font-black leading-[1.15] tracking-[-0.05em] text-neutral-900 md:text-[3rem] md:leading-[1.12]">
              공감모바일의
              <br />
              <span className="text-pink-600">온라인 상담 신청</span>
              <br />
              전용 페이지입니다.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-600 md:text-lg md:leading-8">
              -본 채널 통한 상담 문의 시 특가 상담 회신
              <br />
              -현재 적용 가능한 정책, 재고 실시간 확인
              <br />
              -예약 순서대로 신속하게 전문 상담사 회신
              <br />
              -편안한 상담 이후, 조건 비교하고 결정
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-pink-100 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-black text-pink-600">
                  ●
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-pink-600">
                    실시간 접수 알림
                  </p>
                  <p className="mt-1 text-[13px] font-black leading-6 text-neutral-900 md:text-sm">
                    {liveNotificationMessages[notificationIndex]}
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    지금 문의하면 빠르게 순차 상담됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://pf.kakao.com/_WcxeAn/chat"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-yellow-300 px-6 py-4 text-center text-sm font-black text-black shadow-md"
              >
                카카오톡 빠른상담
              </a>
              <a
                href="tel:010-8080-1887"
                className="rounded-full bg-[#ff1493] px-6 py-4 text-center text-sm font-black text-white shadow-md"
              >
                친절한 전화상담
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[4/4.6] sm:aspect-[4/4] lg:aspect-[4/4.5]">
                <img
                  src={consultationImage}
                  alt="공감모바일 상담 이미지"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center px-6 py-7 md:px-8 md:py-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-yellow-300/40 bg-black/35 px-3 py-2 text-[11px] font-black tracking-[-0.02em] text-yellow-300 backdrop-blur-sm md:text-xs">
                      재고/정책 실시간 공유 가능
                    </span>
                    <span className="rounded-full bg-[#ff4b4b] px-3 py-2 text-[11px] font-black tracking-[-0.02em] text-white shadow-lg md:text-xs">
                      오늘 상담 마감 전 빠른 확인
                    </span>
                  </div>

                  <div className="mt-6 max-w-[88%] md:max-w-[86%]">
                    <h2 className="text-[1.95rem] font-black leading-[1.03] tracking-[-0.07em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-[3.05rem]">
                      비교 끝낸 고객이
                      <br />
                      마지막으로 찾는 곳,
                      <br />
                      <span className="text-[#ffd83d]">공감모바일</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className={`rounded-[1.7rem] border px-5 py-5 shadow-sm md:px-6 ${item.cardClass}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-black ${item.iconClass}`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[1rem] font-black leading-6 text-neutral-900 md:text-[1.08rem]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-neutral-500">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#ff1493] via-[#ff2f95] to-[#ff4a93] px-5 py-8 text-white shadow-[0_20px_60px_rgba(255,20,147,0.24)] md:px-8 md:py-10">
          <div className="grid gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/85">
                Special Price Point
              </p>
              <h2 className="mt-4 text-[2rem] font-black leading-[1.15] tracking-[-0.05em] md:text-[3rem]">
                저렴한 휴대폰 구매,
                <br />
                상담 예약 먼저.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/90 md:text-lg md:leading-8">
                고객이 공감모바일을 찾는 이유는 단순합니다.
                <br />
                저렴하면서 상담도 믿을 수 있기 때문입니다.
              </p>
            </div>

            <div className="space-y-4">
              {benefitCards.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[1.9rem] border px-5 py-5 ${item.cardClass}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-black ${item.iconClass}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-[1.35rem] font-black leading-7 ${item.titleClass}`}>
                        {item.title}
                      </p>
                      <p className={`mt-2 text-[0.96rem] leading-7 ${item.descClass}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7fb] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-pink-600">
              Compare
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black leading-tight md:text-[2.8rem]">
              26년 온라인 구매1위
              <br />
              왜 모두 공감모바일?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-[1.8rem] border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-xl font-black">일반 온라인 판매</p>
              <div className="mt-5 space-y-3">
                {compareLeft.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1rem] bg-neutral-50 px-4 py-4">
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm font-black text-red-500">
                      ✕
                    </span>
                    <p className="text-sm font-semibold leading-6 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-sm font-black text-white shadow-lg">
              VS
            </div>

            <div className="rounded-[1.8rem] border border-pink-100 bg-white p-6 shadow-sm">
              <p className="text-xl font-black text-pink-600">공감모바일 상담</p>
              <div className="mt-5 space-y-3">
                {compareRight.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1rem] bg-[#fff7fb] px-4 py-4 ring-1 ring-pink-100"
                  >
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-sm font-black text-white">
                      ✓
                    </span>
                    <p className="text-sm font-semibold leading-6 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-pink-600">
              Bundle Consultation
            </p>
            <h2 className="mt-3 text-[1.75rem] font-black leading-[1.18] tracking-[-0.04em] text-neutral-900 md:text-[2.8rem] md:leading-[1.14]">
              <span className="block">인터넷+TV 동시상담</span>
              <span className="mt-2 block text-[#ff1493]">60만원 현금 지급</span>
            </h2>
            <div className="mt-6 text-[1.95rem] font-black leading-[1.14] tracking-[-0.04em] text-[#10c44c] md:text-[3.1rem] md:leading-[1.1]">
              결합 상담으로
              <br />
              요금할인 추가
            </div>
            <div className="mt-7 space-y-2 text-[1rem] leading-7 text-neutral-600 md:text-[1.2rem] md:leading-8">
              <p>가계 통신비 전체 절감 컨설팅</p>
              <p>개통 즉시 현금지급+추가요금할인</p>
            </div>
          </div>

          <div className="grid gap-4">
            {bundleBenefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8 md:py-7"
              >
                <p className="text-[1.22rem] font-black tracking-[-0.04em] text-neutral-900 md:text-[1.6rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-pink-600">
            Differentiation
          </p>
          <h2 className="mt-3 text-[2rem] font-black leading-[0.98] tracking-[-0.06em] md:text-[3.3rem]">
            <span className="text-pink-600">공감모바일</span>만의
            <br />
            <span className="text-pink-600">차별점</span> 3가지
          </h2>
        </div>

        <div className="mt-9 space-y-5">
          {differences.map((item) => (
            <div
              key={item.no}
              className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-lg font-black text-white md:h-14 md:w-14 md:text-xl">
                    {item.no}
                  </div>
                  <h3 className="mt-5 text-[1.8rem] font-black leading-[1.18] tracking-[-0.05em] md:text-[2.35rem] md:leading-[1.14]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md whitespace-pre-line text-[1rem] leading-[1.8] text-neutral-600 md:text-[1.08rem] md:leading-[1.9]">
                    {item.desc}
                  </p>
                </div>
                <div className="min-h-[240px] bg-neutral-100 md:min-h-[300px]">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff7fb] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-pink-600">
                Real Reviews
              </p>
              <h2 className="mt-3 text-[1.8rem] font-black leading-tight md:text-[2.8rem]">
                실제 고객 후기
              </h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollReviews("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-black text-neutral-700 shadow-sm"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollReviews("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-black text-neutral-700 shadow-sm"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={reviewScrollRef}
            className="mt-8 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex min-w-max gap-4 pr-4">
              {reviewCards.map((card, idx) => (
                <button
                  key={`${card.author}-${idx}`}
                  type="button"
                  onClick={() => setSelectedReview(card)}
                  className="w-[290px] flex-none rounded-[1.8rem] border border-pink-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md md:w-[320px]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#fff7fb] px-3 py-1 text-[11px] font-black text-pink-600 ring-1 ring-pink-100">
                      {card.category}
                    </span>
                    <span className="text-[11px] font-black text-neutral-400">클릭 확대</span>
                  </div>
                  <p className="mt-4 text-sm font-black text-neutral-900">{card.author}</p>
                  <p className="mt-3 line-clamp-5 text-sm leading-7 text-neutral-700">
                    {card.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-black text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-14 text-white md:py-16" id="contact">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="text-[2.2rem] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-[3.2rem] md:leading-[0.98]">
              친절한 상담
              <br />
              정확한 안내
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
              휴대폰, 인터넷, IoT까지 한번에 문의.
              <br />
              고객 상황에 맞는 합리적인 상담.
              <br />
              순서대로 안내드립니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:010-8080-1887"
                className="rounded-full bg-[#ff1493] px-6 py-4 text-center text-sm font-black text-white"
              >
                친절한 전화상담
              </a>
              <a
                href="https://pf.kakao.com/_WcxeAn/chat"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-yellow-300 px-6 py-4 text-center text-sm font-black text-black"
              >
                카카오톡 빠른상담
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.22)] md:p-7">
            <h3 className="text-[1.5rem] font-black">상담 신청</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              필요한 정보만 남기면 상담 가능한 조건부터 순서대로 안내해드립니다.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleFormSubmit}>
              <input
                className="w-full rounded-2xl border border-neutral-200 px-4 py-4 text-sm outline-none transition focus:border-pink-300"
                placeholder="이름"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                className="w-full rounded-2xl border border-neutral-200 px-4 py-4 text-sm outline-none transition focus:border-pink-300"
                placeholder="연락처"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                className="w-full rounded-2xl border border-neutral-200 px-4 py-4 text-sm outline-none transition focus:border-pink-300"
                placeholder="원하는 모델 / 인터넷 / IPTV"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              />
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-neutral-200 px-4 py-4 text-sm outline-none transition focus:border-pink-300"
                placeholder="현재 통신사, 번호이동/기기변경 여부, 결합 문의, 인터넷/IPTV 설치 문의 등 편하게 남겨주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {submitResult && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    submitResult.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitResult.message}
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-2xl bg-neutral-950 px-6 py-4 text-sm font-black text-white disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "전송 중..." : "상담 문의하기"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="rounded-[2rem] border border-pink-100 bg-white p-5 shadow-sm md:p-8">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-pink-600">
              Store Trust
            </p>
            <h2 className="mt-3 text-[1.7rem] font-black leading-tight md:text-[2.5rem]">
              10개 오프라인 직영매장
              <br />
              신뢰 기반 온라인 판매
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-500 md:text-base">
              믿을 수 없는 사이트에서 속지 마시고,
              <br />
              공감모바일에서 믿고 구매하세요.
            </p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {stores.map((store) => (
              <div
                key={store.name}
                className="rounded-[1.2rem] bg-[#fff7fb] px-4 py-4 ring-1 ring-pink-100"
              >
                <p className="text-sm font-black text-neutral-900">{store.name}</p>
                <p className="mt-1 text-sm leading-6 text-neutral-600">{store.address}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-700">{store.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1f1f] py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-2xl font-black">
            <span className="text-pink-500">공감</span>모바일
          </div>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/10 md:border-b-0 md:border-r md:border-white/10">
                <div className="grid grid-cols-[110px_1fr] border-b border-white/10 text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">법인명</div>
                  <div className="px-4 py-4 text-white/80">주식회사 공감커뮤니케이션즈</div>
                </div>
                <div className="grid grid-cols-[110px_1fr] border-b border-white/10 text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">대표</div>
                  <div className="px-4 py-4 text-white/80">하광희</div>
                </div>
                <div className="grid grid-cols-[110px_1fr] text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">법인등록번호</div>
                  <div className="px-4 py-4 text-white/80">110111-7896595</div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-[110px_1fr] border-b border-white/10 text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">대표 번호</div>
                  <div className="px-4 py-4 text-white/80">010-8080-1887</div>
                </div>
                <div className="grid grid-cols-[110px_1fr] border-b border-white/10 text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">사업자번호</div>
                  <div className="px-4 py-4 text-white/80">199-86-02199</div>
                </div>
                <div className="grid grid-cols-[110px_1fr] text-sm">
                  <div className="bg-white/5 px-4 py-4 font-black text-white/90">주소</div>
                  <div className="px-4 py-4 text-white/80">
                    서울특별시 강북구 도봉로 328 가든타워 1604호
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-xs font-black text-white/70">
            <button
              type="button"
              onClick={() => setSelectedPolicy(policyContents.privacy)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              개인정보처리방침
            </button>
            <button
              type="button"
              onClick={() => setSelectedPolicy(policyContents.terms)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              이용약관
            </button>
            <button
              type="button"
              onClick={() => setSelectedPolicy(policyContents.commerce)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              통신판매 관련 안내
            </button>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6 text-xs leading-6 text-white/50">
            <p>
              ※ 본 페이지의 혜택 및 조건은 시점과 고객 상황에 따라 달라질 수 있으며, 상담 시 정확히 안내드립니다.
            </p>
            <p>©2026 공감모바일. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-neutral-400">
                  실제 고객 리뷰
                </p>
                <p className="mt-2 text-lg font-black text-neutral-900">{selectedReview.author}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-black text-neutral-700"
              >
                닫기
              </button>
            </div>
            <div className="px-5 py-5">
              <div className="rounded-[1.2rem] bg-[#fff7fb] p-4">
                <p className="text-sm font-black text-pink-600">리뷰 핵심</p>
                <p className="mt-2 text-sm leading-7 text-neutral-700">{selectedReview.summary}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-neutral-800">{selectedReview.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedReview.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-black text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedPolicy(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
              <p className="text-xl font-black text-neutral-900">{selectedPolicy.title}</p>
              <button
                type="button"
                onClick={() => setSelectedPolicy(null)}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-black text-neutral-700"
              >
                닫기
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              <div className="space-y-4">
                {selectedPolicy.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-[1.4rem] border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <p className="text-base font-black text-neutral-900">{section.heading}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-100 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-3">
          <a
            href="tel:010-8080-1887"
            className="flex-1 rounded-full bg-[#ff1493] px-4 py-3 text-center text-sm font-black text-white shadow-lg"
          >
            전화상담
          </a>
          <a
            href="https://pf.kakao.com/_WcxeAn/chat"
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-yellow-300 px-4 py-3 text-center text-sm font-black text-black shadow-lg"
          >
            카카오 상담
          </a>
        </div>
      </div>
    </div>
  );
}
