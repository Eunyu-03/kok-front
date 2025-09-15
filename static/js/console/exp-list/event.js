const searchBtn = document.querySelector(".search-btn");
const jobMenu = document.querySelector(".job");
const jobItems = document.querySelectorAll(".job-3");
const checkIcon = document.querySelector(".setting-31");
const searchSpan = document.querySelector(".search-span");

// 1️⃣ 버튼 클릭 → 메뉴 표시/숨김 토글
searchBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 외부 클릭 이벤트 막기
    jobMenu.style.display =
        jobMenu.style.display === "block" ? "none" : "block";
});

// 2️⃣ job-3 선택
jobItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();

        // 체크마크 이동
        if (checkIcon.parentNode) checkIcon.parentNode.removeChild(checkIcon);
        item.appendChild(checkIcon);

        // 선택 강조
        jobItems.forEach((j) => j.classList.remove("selected"));
        item.classList.add("selected");

        // span 업데이트
        const text = item.querySelector(".job-6").innerText;
        searchSpan.innerText = text;

        // 메뉴 숨김
        jobMenu.style.display = "none";
    });
});

// 3️⃣ 외부 클릭 시 메뉴 숨김
document.addEventListener("click", () => {
    jobMenu.style.display = "none";
});

const categoryButtons = document.querySelectorAll(".category-sub");
categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// 여러 개의 tr.body-tr에 대해 각각 적용
document.querySelectorAll("tr.body-tr").forEach((tr) => {
    const activeExp = tr.querySelector("button.appli-active-btn");
    const activeCircle = activeExp ? activeExp.querySelector(".circle") : null;
    const expStatus = tr.querySelector("span.exp-status");

    if (!activeExp || !activeCircle || !expStatus) return;

    activeExp.style.transition = "background-color 0.5s";
    activeCircle.style.transition = "transform 0.5s";
    expStatus.style.transition = "background-color 0.5s, color 0.5s";

    let isActive = false;

    // 초기 상태 설정
    activeCircle.style.transform = "translateX(0px)";
    expStatus.style.backgroundColor = "#171717";
    expStatus.style.color = "#fafafa";
    expStatus.innerText = "모집 중";

    activeExp.addEventListener("click", (e) => {
        isActive = !isActive;
        if (isActive) {
            activeExp.style.backgroundColor = "#e5e5e5";
            activeCircle.style.transform = "translateX(calc(100% - 30px))";
            expStatus.style.backgroundColor = "#f5f5f5";
            expStatus.style.color = "#171717";
            expStatus.innerText = "모집 완료";
        } else {
            activeExp.style.backgroundColor = "#171717";
            activeCircle.style.transform = "translateX(0px)";
            expStatus.style.backgroundColor = "#171717";
            expStatus.style.color = "#fafafa";
            expStatus.innerText = "모집 중";
        }
    });
});

document.querySelectorAll("tr.body-tr").forEach((tr) => {
    const hambugerBtn = tr.querySelector("button.hambuger");
    const hambugerPopWrap = hambugerBtn
        ? hambugerBtn.querySelector(".hambuger-pop-wrap")
        : null;

    if (!hambugerBtn || !hambugerPopWrap) return;

    hambugerBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        // 모든 팝업 닫기
        document
            .querySelectorAll(".hambuger-pop-wrap")
            .forEach((pop) => (pop.style.display = "none"));

        // 버튼 옆에 위치시키기
        const btnOffsetLeft = hambugerBtn.offsetLeft;
        const btnOffsetTop = hambugerBtn.offsetTop;

        hambugerPopWrap.style.right =
            btnOffsetLeft + hambugerBtn.offsetWidth + "px"; // 버튼 오른쪽 옆
        hambugerPopWrap.style.top = btnOffsetTop + "px"; // 버튼 상단 기준

        hambugerPopWrap.style.display = "block";
    });
});

// 외부 클릭 시 모든 팝업 닫기
document.addEventListener("click", (e) => {
    document.querySelectorAll(".hambuger-pop-wrap").forEach((pop) => {
        if (!pop.contains(e.target) && !pop.parentElement.contains(e.target)) {
            pop.style.display = "none";
        }
    });
});
