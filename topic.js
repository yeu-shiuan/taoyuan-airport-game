document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { left: "./img/topic/topic_1-1.svg", right: "./img/topic/topic_1-2.svg", textPC: "./img/topic/topic_text_1.png", textMB: "./img/mb/topic/topic_text_1.svg" },
        { left: "./img/topic/topic_2-1.svg", right: "./img/topic/topic_2-2.svg", textPC: "./img/topic/topic_text_2.png", textMB: "./img/mb/topic/topic_text_2.svg" },
        { left: "./img/topic/topic_3-1.svg", right: "./img/topic/topic_3-2.svg", textPC: "./img/topic/topic_text_3.png", textMB: "./img/mb/topic/topic_text_3.svg" },
        { left: "./img/topic/topic_4-1.svg", right: "./img/topic/topic_4-2.svg", textPC: "./img/topic/topic_text_4.png", textMB: "./img/mb/topic/topic_text_4.svg" },
        { left: "./img/topic/topic_5-1.svg", right: "./img/topic/topic_5-2.svg", textPC: "./img/topic/topic_text_5.png", textMB: "./img/mb/topic/topic_text_5.svg" },
        { left: "./img/topic/topic_6-1.svg", right: "./img/topic/topic_6-2.svg", textPC: "./img/topic/topic_text_6.png", textMB: "./img/mb/topic/topic_text_6.svg" },
        { left: "./img/topic/topic_7-1.svg", right: "./img/topic/topic_7-2.svg", textPC: "./img/topic/topic_text_7.png", textMB: "./img/mb/topic/topic_text_7.svg" },
        { left: "./img/topic/topic_8-1.svg", right: "./img/topic/topic_8-2.svg", textPC: "./img/topic/topic_text_8.png", textMB: "./img/mb/topic/topic_text_8.svg" },
        { left: "./img/topic/topic_9-1.svg", right: "./img/topic/topic_9-2.svg", textPC: "./img/topic/topic_text_9.png", textMB: "./img/mb/topic/topic_text_9.svg" },
    ];

    const preloadImages = [];
    questions.forEach(q => {
        [q.left, q.right, q.textPC, q.textMB].forEach(src => {
            const img = new Image();
            img.src = src;
            preloadImages.push(img);
        });
    });

    let currentIndex = 0;
    let score = 0;

    const leftCard = document.querySelector(".card-left");
    const rightCard = document.querySelector(".card-right");
    const textPC = document.querySelector(".topic-text img");
    const textMB = document.querySelector(".topic-text-img");

    function updateQuestion() {
        if (currentIndex < questions.length) {
            const q = questions[currentIndex];
            leftCard.src = q.left;
            rightCard.src = q.right;
            textPC.src = q.textPC;
            textMB.src = q.textMB;
        }
    }

    // 點擊左卡片 -> 加 2 分
    leftCard.addEventListener("click", function() {
        score += 2;
        nextQuestion();
    });

    // 點擊右卡片 -> 加 1 分
    rightCard.addEventListener("click", function() {
        score += 1;
        nextQuestion();
    });

    function nextQuestion() {
        currentIndex++;
        if (currentIndex >= questions.length) {
            if (score >= 14) {
                window.location.href = "result_J.html";
            } else {
                window.location.href = "result_P.html";
            }
        } else {
            updateQuestion();
        }
    }

    updateQuestion();
});
