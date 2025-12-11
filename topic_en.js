document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { imgA: "./img/topic/topic_en_1-1.svg", imgB: "./img/topic/topic_en_1-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_2-1.svg", imgB: "./img/topic/topic_en_2-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_3-1.svg", imgB: "./img/topic/topic_en_3-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_4-1.svg", imgB: "./img/topic/topic_en_4-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_5-1.svg", imgB: "./img/topic/topic_en_5-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_6-1.svg", imgB: "./img/topic/topic_en_6-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_7-1.svg", imgB: "./img/topic/topic_en_7-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
        { imgA: "./img/topic/topic_en_8-1.svg", imgB: "./img/topic/topic_en_8-2.svg", scoreA: 2, scoreB: 1, textPC: "./img/topic/topic_text_en_1.png", textMB: "./img/mb/topic/topic_text_en_1.svg" },
    ];

    let currentIndex = 0;
    let score = 0;

    const leftCard = document.querySelector(".card-left");
    const rightCard = document.querySelector(".card-right");
    const textPC = document.querySelector(".topic-text img");
    const textMB = document.querySelector(".topic-text-img");

    let currentMapping = {}; // 記住本題左右是誰

    function updateQuestion() {
        if (currentIndex < questions.length) {
            const q = questions[currentIndex];

            // 隨機交换
            const random = Math.random() < 0.5;

            if (random) {
                currentMapping.left = { img: q.imgA, score: q.scoreA };
                currentMapping.right = { img: q.imgB, score: q.scoreB };
            } else {
                currentMapping.left = { img: q.imgB, score: q.scoreB };
                currentMapping.right = { img: q.imgA, score: q.scoreA };
            }

            leftCard.src = currentMapping.left.img;
            rightCard.src = currentMapping.right.img;
            textPC.src = q.textPC;
            textMB.src = q.textMB;
        }
    }

    leftCard.addEventListener("click", function() {
        score += currentMapping.left.score;
        nextQuestion();
    });

    rightCard.addEventListener("click", function() {
        score += currentMapping.right.score;
        nextQuestion();
    });

    function nextQuestion() {
        currentIndex++;
        if (currentIndex >= questions.length) {
            if (score >= 12) {
                window.location.href = "result_J_en.html";
            } else {
                window.location.href = "result_P_en.html";
            }
        } else {
            updateQuestion();
        }
    }

    updateQuestion();
});
