
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "") {
        alert("Введите ваше имя");
        return;
    }

    if (phone === "") {
        alert("Введите номер телефона");
        return;
    }

if (name.length < 2) {
    alert("Имя должно содержать минимум 2 символа");
    return;
}

const namePattern = /^[А-Яа-яЁёA-Za-z\s-]+$/;

if (!namePattern.test(name)) {
    alert("Имя может содержать только буквы");
    return;
}

const phonePattern = /^\+?[0-9\s()-]+$/;
const phoneDigits = phone.replace(/\D/g, "");

if (!phonePattern.test(phone) || phoneDigits.length !== 11) {
    alert("Введите корректный номер телефона из 11 цифр");
    return;
}


const email = document.getElementById("email").value.trim();
const brand = document.getElementById("brand").value;
const problem = document.getElementById("problem").value;
const date = document.getElementById("date").value;
const agreement = document.querySelector('[name="agreement"]').checked;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email !== "" && !emailPattern.test(email)) {
    alert("Введите корректную электронную почту");
    return;
}

if (brand === "") {
    alert("Выберите производителя ноутбука");
    return;
}

if (problem === "") {
    alert("Выберите неисправность");
    return;
}

if (date === "") {
    alert("Выберите дату обращения");
    return;
}

const today = new Date().toLocaleDateString("en-CA");

if (date < today) {
    alert("Дата обращения не может быть в прошлом");
    return;
}

if (!agreement) {
    alert("Необходимо согласие на обработку персональных данных");
    return;
}


const model = document.getElementById("model").value.trim();
const description = document.getElementById("description").value.trim();
const urgency = document.querySelector('input[name="urgency"]:checked').value;

const brandText = document.getElementById("brand").selectedOptions[0].text;
const problemText = document.getElementById("problem").selectedOptions[0].text;

const result = document.getElementById("result");

result.textContent = "";

const heading = document.createElement("h2");
heading.textContent = "Заявка принята";
result.appendChild(heading);

const data = [
    ["Имя", name],
    ["Телефон", phone],
    ["Электронная почта", email || "Не указана"],
    ["Производитель", brandText],
    ["Модель", model || "Не указана"],
    ["Неисправность", problemText],
    ["Описание", description || "Не указано"],
    ["Дата обращения", date],
    ["Срочность", urgency === "urgent" ? "Срочный ремонт" : "Обычный ремонт"]
];

data.forEach(function(item) {
    const p = document.createElement("p");
    p.textContent = item[0] + ": " + item[1];
    result.appendChild(p);
});

form.reset();



    });
