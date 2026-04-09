import React, { useEffect, useMemo, useRef, useState } from "react";

export default function GonggamMobileLandingPage() {
  const heroVariant = "B";
  const officialStoreImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_1-RMtgNRnu9HDVDbXgIIGbAWfsA45UP1.jpg";
  const consultationImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_2-Rq7RDUUXyqwO1RAg1zvaeHuepVhAfE.jpg";
  const onlineConsultationImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_optimized_3-uLafN9BPsWaDf4OOJwpiwSYNBEZHwj.png";

  const trustCards = [
    {
      title: "요금과 단말기 가격의 정확한 안내",
      desc: "복잡한 지원 조건을 쉽게 설명하고, 실제 개통 가능한 기준으로만 상담합니다.",
      icon: "₩",
    },
    {
      title: "성지 가격이지만 더 믿을 수 있는 상담",
      desc: "저렴하게 사고 싶은 고객이 찾는 이유를 과장 없이 실제 조건으로 보여드립니다.",
      icon: "★",
      featured: true,
    },
    {
      title: "전산 기반 약속 상담과 신속한 개통",
      desc: "상담 내용과 실제 진행이 다르지 않도록 정확하고 빠르게 도와드립니다.",
      icon: "⌁",
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

  const compareLeft = [
    "고가요금제 장기 유지 유도",
    "불필요한 부가서비스 유지",
    "카드 결합 유도",
    "장기 할부 중심 권유",
  ];

  const compareRight = [
    "고객 맞춤 요금제 선택",
    "불필요한 부가서비스 유지 X",
    "카드 결합 의무 X",
    "합리적 조건 중심 특가 상담",
  ];

  const bundleBenefits = [
    "빠른 설치 일정 상담",
    "결합 가능 여부 기준 맞춤 안내",
    "휴대폰과 함께 한 번에 비교 가능",
  ];

  const quickProofs = [
    { label: "공식 인증 온라인샵", value: "LG U+" },
    { label: "직영 매장 운영", value: "서울 10개+" },
    { label: "재방문율 1위", value: "5년 연속" },
  ];

  const heroABadges = [
    "오늘 상담 많은 온라인 채널",
    "특가 문의 집중 구간",
    "실제 개통 기준 안내",
  ];

  const heroBBadges = [
    "비교 끝낸 고객 문의 집중",
    "성지 가격 문의 다수",
    "상담 후 바로 개통 가능",
  ];

  const differences = [
    {
      no: "1",
      title: "본사 기준 신뢰 상담",
      desc: `LG유플러스 공식 인증 온라인샵으로\n정확하고 검증된 내용만으로 상담`,
    },
    {
      no: "2",
      title: "1:1 맞춤 상담, 그대로 진행",
      desc: `고객 상황에 최적화된 상담을 진행하며\n상담 내용과 동일한 조건으로 개통`,
    },
    {
      no: "3",
      title: "온·오프라인 매장 연계 상담",
      desc: `온라인 개통 이후에도 오프라인 매장을 통한\n신뢰감 있는 사후관리와 약속 확인 가능`,
    },
  ];

  const stores = [
    { name: "수유점", address: "서울 강북구 도봉로 332 홍승빌딩 1층", phone: "070-8285-0303" },
    { name: "성북점", address: "서울 성북구 보문로 204 1층", phone: "070-4065-0303" },
    { name: "종로점", address: "서울 종로구 종로 236 1층", phone: "070-4833-0303" },
    { name: "미아점", address: "서울 성북구 도봉로 23 학동빌딩 1층", phone: "070-4001-1742" },
    { name: "경복궁점", address: "서울 종로구 자하문로 3 1층", phone: "070-4384-7999" },
    { name: "숙대점", address: "서울 용산구 한강대로 289 1층", phone: "070-4644-0303" },
    { name: "길음롯데캐슬점", address: "서울 성북구 길음동 542-1 롯데캐슬상가 130호", phone: "070-7585-1887" },
    { name: "길음8단지점", address: "서울 성북구 길음로 33 상가 A동 9호", phone: "070-7585-1455" },
    { name: "동묘점", address: "서울 종로구 지봉로 37-1 1층", phone: "070-8285-1742" },
    { name: "전농점", address: "서울 동대문구 전농로 151 1층", phone: "070-7543-3580" },
  ];

  const liveNotifications = [
    "이** 고객님 휴대폰 상담 접수 완료",
    "박** 고객님 번호이동 문의 접수 완료",
    "강** 고객님 아이폰 특가 문의 확인중",
    "하* 고객님 인터넷+TV 결합 문의 접수",
    "김** 고객님 갤럭시 상담 문의 접수",
    "남궁* 고객님 요금제 변경 상담 확인중",
    "정** 고객님 기기변경 문의 접수 완료",
    "신** 고객님 재고 문의 확인중",
    "정** 고객님 인터넷+TV 동시상담 문의 접수",
    "탁** 고객님 휴대폰 특가 문의 접수 완료",
  ];

  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const reviewScrollRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitResult, setSubmitResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        body: JSON.stringify({
          ...formData,
          to: "gonggamcomms@gmail.com",
        }),
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
        data = {
          error: "서버가 JSON이 아닌 응답을 반환했습니다.",
        };
      }

      if (!response.ok) {
        throw new Error(data?.error || "전송에 실패했습니다.");
      }

      setSubmitResult({
        success: true,
        message: "상담 신청 내용이 이메일로 전송되었습니다.",
      });
      setFormData({ name: "", phone: "", product: "", message: "" });
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "상담 신청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {
          heading: "4. 개인정보 제3자 제공",
          body:
            "회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 이용자의 동의가 있거나 법령에 특별한 규정이 있는 경우에는 예외로 합니다.",
        },
        {
          heading: "5. 이용자 권리 및 행사 방법",
          body:
            "이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지 등을 요청할 수 있으며, 회사는 관련 법령에 따라 지체 없이 필요한 조치를 취합니다.",
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
          heading: "3. 이용자의 의무",
          body:
            "이용자는 서비스를 이용함에 있어 허위 정보를 입력하거나 타인의 정보를 도용해서는 안 되며, 관계 법령 및 본 약관을 준수해야 합니다.",
        },
        {
          heading: "4. 회사의 면책",
          body:
            "회사는 천재지변, 시스템 장애, 통신망 장애 등 불가항력적 사유로 인한 서비스 제공의 지연 또는 불가에 대하여 책임을 지지 않습니다. 또한 상담 내용은 고객 상황과 시점에 따라 달라질 수 있습니다.",
        },
        {
          heading: "5. 약관의 변경",
          body:
            "회사는 필요한 경우 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 사이트 내 공지 또는 안내를 통해 고지합니다.",
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
            "실제 개통 또는 가입 계약은 별도의 상담 및 확인 절차를 통해 진행되며, 계약 체결 전 고객은 주요 조건, 요금제, 단말기 금액, 부가서비스, 결합 여부 등을 충분히 안내받을 수 있습니다.",
        },
        {
          heading: "4. 청약철회 및 환불",
          body:
            "청약철회, 취소, 변경, 환불 등에 관한 사항은 관련 법령 및 개별 계약 조건에 따르며, 단말기 개봉 여부, 개통 여부, 서비스 이용 상태 등에 따라 달라질 수 있습니다.",
        },
        {
          heading: "5. 고객 문의",
          body:
            "서비스 이용 중 문의사항이 있는 경우 사이트에 표시된 연락처 또는 상담 채널을 통해 문의할 수 있으며, 회사는 가능한 범위에서 신속하게 안내합니다.",
        },
      ],
    },
  };

  const scrollReviews = (direction) => {
    if (!reviewScrollRef.current) return;
    reviewScrollRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  const reviewCountText = useMemo(() => `${reviewCards.length}+ 실제 후기`, [reviewCards.length]);

  useEffect(() => {
    let isMounted = true;
    let cycleTimer;
    let revealTimer;

    const scheduleNext = () => {
      const nextDelay = Math.floor(Math.random() * 47001) + 3000;

      cycleTimer = window.setTimeout(() => {
        if (!isMounted) return;

        setShowNotification(false);

        revealTimer = window.setTimeout(() => {
          if (!isMounted) return;

          setNotificationIndex((prev) => (prev + 1) % liveNotifications.length);
          setShowNotification(true);
          scheduleNext();
        }, 350);
      }, nextDelay);
    };

    scheduleNext();

    return () => {
      isMounted = false;
      if (cycleTimer) window.clearTimeout(cycleTimer);
      if (revealTimer) window.clearTimeout(revealTimer);
    };
  }, [liveNotifications.length]);

  return (
    <div className="min-h-screen bg-[#fffafc] pb-24 text-sm leading-relaxed text-neutral-900 sm:text-[15px]">
      <div className="w-full bg-black px-4 py-2 text-center text-[12px] font-black text-white sm:text-sm">
        <span className="animate-pulse text-red-400">●</span>
        <span className="ml-2">실시간 상담 접수중</span>
        <span className="ml-2 text-white/70">| 지금 문의하면 가장 좋은 조건 안내</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-pink-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div>
            <p className="text-xl font-black tracking-tight">
              <span className="text-pink-600">공감</span>모바일
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">Official Online Shop</p>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="https://pf.kakao.com/_WcxeAn/chat" target="_blank" rel="noreferrer" className="rounded-full bg-yellow-300 px-5 py-2.5 text-sm font-black text-black shadow-sm">
              카카오톡 빠른상담
            </a>
            <a href="tel:010-8080-1887" className="rounded-full bg-[#111111] px-5 py-2.5 text-sm font-black text-white shadow-sm">
              친절한 전화상담
            </a>
          </div>
        </div>
      </header>

      <section className="border-b border-pink-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg font-black text-white">✓</div>
                <div>
                  <p className="text-sm font-black text-neutral-900">LG유플러스 공식인증 온라인샵</p>
                  <p className="mt-1 text-xs text-neutral-500">공식 인증 기반의 신뢰 상담</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black text-amber-700 ring-1 ring-amber-200">10+</div>
                <div>
                  <p className="text-sm font-black text-neutral-900">서울 지역 10개 직영매장 운영</p>
                  <p className="mt-1 text-xs text-neutral-600">오프라인 운영 경험이 만든 안정감</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 text-lg font-black text-white shadow-sm">★</div>
                <div>
                  <p className="text-sm font-black text-neutral-900">5년 연속 고객 재방문율 1위</p>
                  <p className="mt-1 text-xs text-neutral-600">다시 찾는 고객이 증명한 만족도</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,77,141,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,211,64,0.18),_transparent_26%),white]">
        {heroVariant === "A" ? (
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-pink-600">
                A안 · 공식인증 + 성지가격 강조형
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.05em] text-neutral-900 md:text-6xl">
                지금 가장
                <br />
                <span className="text-pink-600">저렴하게 살 수 있는</span>
                <br />
                휴대폰 상담 채널
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-xl md:leading-9">
                공감모바일은 유플러스 공식 인증 온라인샵으로 서울 10개 직영매장을 기반으로,
                <span className="font-black text-neutral-900"> 성지 가격의 매력</span>과
                <span className="font-black text-neutral-900"> 믿을 수 있는 상담</span>을 함께 제공합니다.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroABadges.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-pink-100 bg-white px-4 py-4 text-sm font-black text-neutral-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 rounded-[2rem] border border-pink-100 bg-white p-5 shadow-sm sm:grid-cols-3 md:max-w-2xl">
                {quickProofs.map((proof) => (
                  <div key={proof.label} className="text-center">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">{proof.label}</p>
                    <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-neutral-900">{proof.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://pf.kakao.com/_WcxeAn/chat" target="_blank" rel="noreferrer" className="rounded-full bg-yellow-300 px-7 py-4 text-center text-base font-black text-black shadow-lg shadow-yellow-200/60">
                  카카오톡 빠른상담
                </a>
                <a href="tel:010-8080-1887" className="rounded-full bg-[#111111] px-7 py-4 text-center text-base font-black text-white shadow-lg">
                  친절한 전화상담
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-pink-100 bg-white p-6 shadow-[0_25px_70px_rgba(255,93,162,0.14)] md:p-8">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-[#111111] to-[#4a4a4a] p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-200">공감모바일의 약속</p>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em]">
                  성지 가격으로,
                  <br />
                  설명은 더 정확하게
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  공감모바일은 단순히 싸다고만 말하지 않습니다. 실제 개통 가능한 조건만 기준으로,
                  고객이 헷갈리지 않게 명확하게 상담합니다.
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {trustCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-[1.5rem] p-5 shadow-sm ring-1 ${card.featured ? "bg-pink-600 text-white ring-pink-600" : "bg-[#fff7fb] text-neutral-900 ring-pink-100"}`}
                  >
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-lg font-black ${card.featured ? "bg-white/15 text-white" : "bg-white text-pink-600"}`}>
                      {card.icon}
                    </div>
                    <p className="text-base font-black leading-6">{card.title}</p>
                    <p className={`mt-3 text-sm leading-6 ${card.featured ? "text-white/85" : "text-neutral-600"}`}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16 lg:py-20">
            <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:rounded-[2.5rem]">
              <img src={consultationImage} alt="공감모바일 메인 상담 이미지" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35" />
              <div className="relative grid min-h-[540px] gap-8 px-5 py-7 sm:min-h-[580px] sm:px-6 sm:py-8 md:px-10 md:py-10 lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-yellow-300 backdrop-blur">
                      재고/정책 실시간 공유 가능
                    </div>
                    <p className="mt-5 inline-flex rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg">
                      오늘 상담 마감 전 빠른 확인
                    </p>
                    <h1 className="mt-6 text-[2.2rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
                      비교 끝낸 고객이
                      <br />
                      마지막으로 찾는 곳,
                      <br />
                      <span className="text-yellow-300">공감모바일</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl md:leading-9">
                      <span className="font-black text-white">성지 가격</span>만 찾다가 불안했던 고객도,
                      <span className="font-black text-white"> 공식 인증</span>과
                      <span className="font-black text-white"> 직영 매장 운영</span>을 보고 안심하고 상담받는 채널입니다.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
                    {heroBBadges.map((item) => (
                      <div key={item} className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-4 text-sm font-black text-white backdrop-blur">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full rounded-[1.75rem] border border-white/15 bg-white/95 p-5 text-neutral-900 shadow-2xl backdrop-blur sm:max-w-md lg:max-w-none lg:justify-self-end">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-pink-600">빠른 상담 시작</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight">
                    지금 상담하면
                    <br />
                    가장 유리한 조건부터 확인
                  </h2>
                  <div className="mt-5 space-y-3">
                    {quickProofs.map((proof) => (
                      <div key={proof.label} className="flex items-center justify-between rounded-[1rem] bg-[#fff7fb] px-4 py-3 ring-1 ring-pink-100">
                        <span className="text-sm font-black text-neutral-500">{proof.label}</span>
                        <span className="text-lg font-black text-neutral-900">{proof.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3">
                    <a href="https://pf.kakao.com/_WcxeAn/chat" target="_blank" rel="noreferrer" className="block rounded-full bg-yellow-300 px-5 py-4 text-center text-base font-black text-black shadow-md">
                      카카오톡 빠른상담
                    </a>
                    <a href="tel:010-8080-1887" className="block rounded-full bg-[#111111] px-5 py-4 text-center text-base font-black text-white shadow-md">
                      친절한 전화상담
                    </a>
                  </div>
                  <p className="mt-4 text-center text-xs font-black text-neutral-500">상담 후 조건 비교 → 개통 여부 결정 가능</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-[#ff1493] via-[#ff2f95] to-[#ff4a93] px-6 py-8 text-white shadow-[0_22px_60px_rgba(255,20,147,0.25)] md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-white/90">Special Price Point</p>
              <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.05em] sm:text-4xl md:text-5xl xl:text-6xl">
                저렴한 휴대폰 구매,
                <br />
                공감모바일 상담부터.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-2xl md:leading-10">
                고객들이 공감모바일을 찾는 이유는 단순합니다. 휴대폰 가격이 저렴하면서도,
                상담 내용이 정확하고 실제 진행 과정까지 믿을 수 있기 때문입니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/45 bg-white px-5 py-5 text-neutral-900 shadow-lg">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pink-600 text-xl font-black text-white">₩</div>
                <div>
                  <p className="text-xl font-black">특가 문의 고객 집중</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">다른 곳과 비교를 끝낸 고객 문의가 꾸준히 몰리고 있습니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/20 bg-[#ff5ba2] px-5 py-5 text-white shadow-lg">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-black text-pink-600">✓</div>
                <div>
                  <p className="text-xl font-black">믿을 수 있는 상담</p>
                  <p className="mt-2 text-sm leading-6 text-white/90">저렴한 조건만이 아니라 실제 개통 과정까지 정확하게 안내합니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/15 bg-white/12 px-5 py-5 text-white shadow-lg backdrop-blur-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xl font-black text-white">★</div>
                <div>
                  <p className="text-xl font-black">성지 가격 + 신뢰 상담의 만족감</p>
                  <p className="mt-2 text-sm leading-6 text-white/90">저렴한 가격과 믿을 수 있는 상담을 동시에 원할 때 가장 적합한 채널입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-600">Real Reviews</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            믿고 개통하신
            <br />
            고객의 리얼 리뷰
          </h2>
          <p className="mt-4 text-neutral-500">{reviewCountText} · 실제 후기 바로 확인</p>
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-[1.5rem] border border-pink-100 bg-[#fff7fb] p-5 text-center shadow-sm">
          <p className="text-sm leading-7 text-neutral-700 md:text-base">
            과장된 문구 홍보가 아닌, <span className="font-black text-pink-600">실제 고객 리뷰</span>로 신뢰를 증명합니다.
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-center justify-end gap-3">
            <button type="button" onClick={() => scrollReviews("left")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-black text-neutral-700 shadow-sm transition hover:border-pink-200 hover:text-pink-600" aria-label="이전 리뷰 보기">
              ←
            </button>
            <button type="button" onClick={() => scrollReviews("right")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-black text-neutral-700 shadow-sm transition hover:border-pink-200 hover:text-pink-600" aria-label="다음 리뷰 보기">
              →
            </button>
          </div>

          <div ref={reviewScrollRef} className="overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            <div className="flex min-w-max gap-6 pr-4">
              {reviewCards.map((card, idx) => (
                <button key={card.author + idx} type="button" onClick={() => setSelectedReview(card)} className="w-[280px] sm:w-[320px] flex-none overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-400">실제 고객 리뷰 {idx + 1}</p>
                      <p className="mt-2 inline-flex rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-black text-pink-600 ring-1 ring-pink-100">{card.category}</p>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-black text-neutral-500">클릭 확대</span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-black text-pink-600">{card.author[0]}</div>
                    <div>
                      <p className="text-sm font-black text-neutral-900">{card.author}</p>
                      <p className="mt-1 text-xs text-neutral-500">실제 방문 후기</p>
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-5 text-sm leading-7 text-neutral-700">{card.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-black text-neutral-600">{tag}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedReview(null)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-400">실제 고객 리뷰</p>
                <p className="mt-2 inline-flex rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-black text-pink-600 ring-1 ring-pink-100">{selectedReview.category}</p>
              </div>
              <button type="button" onClick={() => setSelectedReview(null)} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-black text-neutral-700">닫기</button>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-xl font-black text-pink-600">{selectedReview.author[0]}</div>
                <div>
                  <p className="text-lg font-black text-neutral-900">{selectedReview.author}</p>
                  <p className="mt-1 text-sm text-neutral-500">실제 방문 후기</p>
                </div>
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-[#fff7fb] p-5">
                <p className="text-sm font-black text-pink-600">리뷰 핵심</p>
                <p className="mt-2 text-base leading-7 text-neutral-700">{selectedReview.summary}</p>
              </div>
              <p className="mt-6 text-base leading-8 text-neutral-800">{selectedReview.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedReview.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-black text-neutral-600">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#fff7fb] py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-600">Compare</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">타 업체와의 비교</h2>
            <p className="mt-4 text-neutral-500">실제 진행 조건은 고객 상황과 시점에 따라 달라질 수 있으며, 상담 시 정확히 안내드립니다.</p>
          </div>

          <div className="relative mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-2xl font-black">일반 판매점</p>
              <div className="mt-6 space-y-4">
                {compareLeft.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-neutral-200 bg-neutral-50 px-4 py-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm font-black text-red-500">✕</span>
                    <p className="text-sm font-semibold leading-7 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-lg font-black text-white shadow-lg">VS</div>

            <div className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-sm">
              <p className="text-2xl font-black text-pink-600">공감모바일 특가상담</p>
              <div className="mt-6 space-y-4">
                {compareRight.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-pink-100 bg-[#fff7fb] px-4 py-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-600 text-sm font-black text-white">✓</span>
                    <p className="text-sm font-semibold leading-7 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="max-w-4xl px-2 py-2 md:px-0">
              <h2 className="text-3xl font-black leading-[1.08] tracking-[-0.06em] text-neutral-900 sm:text-4xl md:text-[3.2rem] lg:text-[3.6rem]">
                인터넷+TV 동시상담
                <br />
                <span className="text-[#ff1493]">60만원 현금 지급</span>
              </h2>

              <div className="mt-8 text-3xl font-black leading-[1.1] tracking-[-0.06em] text-[#10c44c] sm:text-4xl md:mt-10 md:text-[3.1rem] lg:text-[3.6rem]">
                결합 상담으로
                <br />
                요금할인 추가!!
              </div>

              <div className="mt-8 space-y-3 text-lg font-medium leading-[1.8] text-neutral-600 sm:text-xl md:mt-10 md:text-[1.7rem] md:leading-[1.75] lg:text-[2rem]">
                <p>가계 통신비 전체 절감 컨설팅</p>
                <p>개통 즉시 현금 지급과 요금 할인 추가</p>
              </div>
            </div>

            <div className="mt-2 space-y-5 lg:w-full lg:max-w-[760px] lg:justify-self-end lg:pt-6">
              {bundleBenefits.map((item) => (
                <div key={item} className="w-full rounded-[1.5rem] border border-[#dddddd] bg-white px-5 py-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:px-6 sm:py-7 md:min-h-[116px] md:px-10 md:py-9">
                  <p className="text-xl font-black tracking-[-0.05em] text-neutral-900 sm:text-2xl md:text-[2rem] lg:text-[2.25rem]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-600">Differentiation</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            <span className="text-pink-600">공감모바일</span>만의
            <br />
            <span className="text-pink-600">차별점</span> 3가지
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {differences.map((item, idx) => (
            <div key={item.no} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-xl font-black text-white">{item.no}</div>
                  <h3 className="mt-6 text-2xl font-black leading-tight md:text-4xl">{item.title}</h3>
                  <p className="mt-5 whitespace-pre-line text-base leading-8 text-neutral-600 md:text-lg">{item.desc}</p>
                </div>
                <div className="relative min-h-[280px] bg-neutral-100 lg:min-h-[360px]">
                  {idx === 0 && <img src={officialStoreImage} alt="LG유플러스 공식 인증 온라인샵 안내" className="h-full w-full object-cover" />}
                  {idx === 1 && <img src={consultationImage} alt="1:1 맞춤 상담 안내" className="h-full w-full object-cover" />}
                  {idx === 2 && <img src={onlineConsultationImage} alt="온오프라인 매장 맞춤 상담 안내" className="h-full w-full object-cover" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-sm md:p-10">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">Why Choose Gonggam</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              고객이 <span className="text-pink-600">온라인</span>에서
              <br />
              <span className="text-pink-600">공감</span>을 찾는 이유
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#fff7fb] p-6 ring-1 ring-pink-100">
              <p className="text-lg font-black text-neutral-900">01</p>
              <p className="mt-3 text-lg font-black leading-7">특가 상담이 가장 활발한 곳</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#fff7fb] p-6 ring-1 ring-pink-100">
              <p className="text-lg font-black text-neutral-900">02</p>
              <p className="mt-3 text-lg font-black leading-7">실질적인 혜택만 제공</p>
            </div>
            <div className="rounded-[1.5rem] bg-[#fff7fb] p-6 ring-1 ring-pink-100">
              <p className="text-lg font-black text-neutral-900">03</p>
              <p className="mt-3 text-lg font-black leading-7">성지가격 + 더 높은 신뢰</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 text-white" id="contact">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                친절한 상담
                <br />
                정확한 안내
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                휴대폰, 인터넷, IPTV까지 한 번에 문의하실 수 있습니다. 공감모바일이 고객 상황에 맞는 가장 합리적인 정보와 서비스를 기준으로 순서대로 안내해드립니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:010-8080-1887" className="rounded-full bg-pink-600 px-7 py-4 text-center text-sm font-black text-white">친절한 전화 상담</a>
                <a href="https://pf.kakao.com/_WcxeAn/chat" target="_blank" rel="noreferrer" className="rounded-full bg-yellow-300 px-7 py-4 text-center text-sm font-black text-black">카카오톡 빠른상담</a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-neutral-900 shadow-2xl md:p-8">
              <h3 className="text-2xl font-black">상담 신청</h3>
              <p className="mt-2 text-sm text-neutral-500">아래 내용을 남겨주시면, 현재 가장 좋은 혜택을 빨리 받아 보실 수 있습니다.</p>
              <form className="mt-6 space-y-4" onSubmit={handleFormSubmit}>
                <input className="w-full rounded-2xl border border-neutral-300 px-4 py-4" placeholder="이름" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input className="w-full rounded-2xl border border-neutral-300 px-4 py-4" placeholder="연락처" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                <input className="w-full rounded-2xl border border-neutral-300 px-4 py-4" placeholder="원하는 모델 / 인터넷 / IPTV" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} />
                <textarea className="min-h-[130px] w-full rounded-2xl border border-neutral-300 px-4 py-4" placeholder="현재 통신사, 번호이동/기기변경 여부, 인터넷/IPTV, 결합 문의 등 통신과 관련된 모든 사항을 문의하시면, 고객님의 입장에서 친절하게 상담해 드립니다." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                {submitResult && (
                  <div className={`rounded-2xl px-4 py-3 text-sm font-medium ${submitResult.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{submitResult.message}</div>
                )}
                <button type="submit" className="w-full rounded-2xl bg-neutral-900 px-6 py-4 text-sm font-black text-white disabled:opacity-50" disabled={isSubmitting}>
                  {isSubmitting ? "전송 중..." : "상담 문의하기"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1f1f] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-2xl font-black"><span className="text-pink-500">공감</span>모바일</div>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/10 md:border-b-0 md:border-r md:border-white/10">
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] border-b border-white/10 text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">법인명</div><div className="px-4 py-4 text-white/80 sm:px-5">주식회사 공감커뮤니케이션즈</div></div>
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] border-b border-white/10 text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">대표</div><div className="px-4 py-4 text-white/80 sm:px-5">하광희</div></div>
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">법인등록번호</div><div className="px-4 py-4 text-white/80 break-all sm:px-5">110111-7896595</div></div>
              </div>
              <div>
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] border-b border-white/10 text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">대표 번호</div><div className="px-4 py-4 text-white/80 sm:px-5">010-8080-1887</div></div>
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] border-b border-white/10 text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">사업자번호</div><div className="px-4 py-4 text-white/80 sm:px-5">199-86-02199</div></div>
                <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] text-sm"><div className="bg-white/5 px-4 py-4 font-black text-white/90 sm:px-5">주소</div><div className="px-4 py-4 text-white/80 break-words sm:px-5">서울특별시 강북구 도봉로 328 가든타워 1604호</div></div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-3">
            {stores.map((store) => (
              <div key={store.name} className="space-y-1">
                <p className="font-black text-white/90">▶ {store.name}</p>
                <p className="pl-4">{store.address}</p>
                <p className="pl-4">{store.phone}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-xs font-black text-white/70">
            <button type="button" onClick={() => setSelectedPolicy(policyContents.privacy)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">개인정보처리방침</button>
            <button type="button" onClick={() => setSelectedPolicy(policyContents.terms)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">이용약관</button>
            <button type="button" onClick={() => setSelectedPolicy(policyContents.commerce)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">통신판매 관련 안내</button>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6 text-xs leading-6 text-white/50">
            <p>※ 본 페이지의 혜택 및 조건은 시점과 고객 상황에 따라 달라질 수 있으며, 상담 시 정확히 안내드립니다.</p>
            <p>©2026 공감모바일. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedPolicy(null)}>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
              <div>
                <p className="text-2xl font-black text-neutral-900">{selectedPolicy.title}</p>
              </div>
              <button type="button" onClick={() => setSelectedPolicy(null)} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-black text-neutral-700">닫기</button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              <div className="space-y-5">
                {selectedPolicy.sections.map((section) => (
                  <div key={section.heading} className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-lg font-black text-neutral-900">{section.heading}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`fixed bottom-24 left-3 right-3 z-50 max-w-[320px] rounded-[1.25rem] border border-pink-100 bg-white/95 px-4 py-3 shadow-[0_16px_35px_rgba(0,0,0,0.12)] backdrop-blur transition-all duration-300 sm:left-4 sm:right-auto ${showNotification ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-black text-pink-600">●</div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-pink-600">실시간 접수 알림</p>
            <p className="mt-1 text-sm font-black leading-6 text-neutral-900">{liveNotifications[notificationIndex]}</p>
            <p className="mt-1 text-xs text-neutral-500">지금 문의하면 빠르게 상담 가능합니다</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-100 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a href="tel:010-8080-1887" className="flex-1 rounded-full bg-[#111111] px-4 py-3 text-center text-sm font-black text-white shadow-lg sm:text-base">전화상담</a>
          <a href="https://pf.kakao.com/_WcxeAn/chat" target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-yellow-300 px-4 py-3 text-center text-sm font-black text-black shadow-lg sm:text-base">카카오 상담</a>
        </div>
      </div>
    </div>
  );
}
