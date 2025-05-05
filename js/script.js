const steps = [
  {
    title: "Сеанс 1: Ти не один, я завжди з тобою",
    content:
      "Обійми з доставкою просто в серце! <br><br> <img class='second-cats' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjAxNmwzcHFlZWtiYWR0MnEyMTNrYThleW1wN3BpODlidjlyZjQzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uWANBaCInyRadBfUtX/giphy.gif' alt=''> <br>Для когось ти Артем Олесандрович, <br>а для мене - Лисеня ",
  },
  {
    title: "Сеанс 2: Перевірка настрою",
    content: `
    <p class="step-two-title">Як ти зараз себе почуваєш?</p>
    <button class="mood-btn" onclick="showMood('good')">😊 Ок</button>
    <button class="mood-btn" onclick="showMood('meh')">😐 Таке</button>
    <button class="mood-btn" onclick="showMood('bad')">😢 Не дуже</button>
    <div id="moodResult" style="margin-top: 20px;"></div>
  `,
  },

  {
    title: "Cанс 3: Вітаміни",
    content: `
    <div class="flip-card" onclick="flipCard(this)">
      <div class="flip-card-inner">
        <div class="flip-card-front">
      🧾 те, що сістер прописала <br>
           (натисни на рецепт)
        </div>
        <div class="flip-card-back">
          Вітамін О — <br> Обіймашка <br><br>
          Вітамін Щ — <br> Ще одна обіймашка <br><br>
          Вітамін Б —  <br> Багато-багато обіймашок <br><br>
         
        </div>
  
        
      </div>
          
    </div>
      <p>Приймати кожен день</p>
  `,
  },
  {
    title: "Заключення",
    content:
      'Ти успішно пройшов терапію від сістер<br><br>Заборонено: не вірити в себе і їсти тверде<br> <br> <img  class="last-cat" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXpvN2p2NHE0YWI2ZHd0bmlrZHp3YXB2bTU2YTE5cmd4MjZ5eGd4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XJWvfTX9h2M6BqGHMj/giphy.gif"  style="width:300px; border-radius:10px; margin: 0 auto"><br>Ти сильний. <br> Ти - людина і маєш право на слабкості',
  },
];

let stepIndex = 0;

function nextStep() {
  if (stepIndex < steps.length) {
    document.getElementById("title").innerText = steps[stepIndex].title;
    document.getElementById("content").innerHTML = steps[stepIndex].content;

    if (stepIndex === 0) {
      document.getElementById("nextBtn").innerText = "Далі";
    }

    stepIndex++;

    if (stepIndex === steps.length) {
      document.getElementById("nextBtn").innerText = "Обійнято";
    }
  } else {
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("nextBtn").innerText = "Кінець курсу";
  }
}

function showMood(mood) {
  const moodResult = document.getElementById("moodResult");
  if (mood === "good") {
    moodResult.innerHTML =
      "Урааа! Ти найкращий і найсильший <br><img class='cat-gif' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjR0ZzlkMWV3eWJlZmo0NTFzYzJva3o4Z2htaWFzY2xiOTNreWpxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5Dg0E3yOryWE8/giphy.gif' style='width:100%; border-radius:10px;'>";
  } else if (mood === "meh") {
    moodResult.innerHTML =
      "Ти не маєш бути залізним. Я тебе підтримаю 24/7 в будь-якій ситуації<br><img class='cat-gif' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenYwY2J3cmtjamljczdkbmpmbmJ3YnFkcnk3MjBjYXI4MXpueDN0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dvBgr7pA6FTJOMOALY/giphy.gif' style='width:100%; border-radius:10px;'>";
  } else {
    moodResult.innerHTML =
      "Просто роби крок за кроком тут і зараз. Я вірю в тебе більше, ніж ти віриш в себе сам!<br><img  class='cat-gif' src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXRsZTBjdG5rY3kwZXljc214Z3gxMTEycWJ6bTQ3N3B1aWxibXNsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ijPxO1FYKhdC/giphy.gif' style='width:100%; border-radius:10px;'>";
  }
}

function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}

function createPaw(event) {
  const paw = document.createElement("div");
  paw.className = "paw-print";
  paw.style.left = `${event.clientX - 15}px`;
  paw.style.top = `${event.clientY - 15}px`;
  document.body.appendChild(paw);
  setTimeout(() => paw.remove(), 1000);
}
document.addEventListener("click", createPaw);
