function createCard(cat) {
    const card = document.createElement('div');
    card.className = 'cat-card';


    card.innerHTML = `
        
        <div class="cat-info">
            <h2 class="cat-name">
                ${cat.name}
                ${cat.favourite ? '<3' : ''}
            </h2>
            <img src="${cat.img_link}" alt="${cat.name}" class="cat-image">
            <p class="cat-age">Возраст: ${cat.age} ${getAgeWord(cat.age)}</p>
            <p class="cat-rate">Рейтинг: ${cat.rate}/10</p>
            <p class="cat-description">${cat.description}</p>
        </div>
    `;

    return card;
}


function getAgeWord(age) {
    if (age === 1) return 'год';
    if (age >= 2 && age <= 4) return 'года'; //я не знаю сколько коты живут, но знаю что еще есть там 21 ГОД, 42 ГОДА и т.д.
    return 'лет';
}


function displayAllCats() {
    const container = document.getElementById('cats-container');
    
    container.innerHTML = '';
    
    cats.forEach(cat => {
        const catCard = createCard(cat);
        container.appendChild(catCard);
    });
}

document.addEventListener('DOMContentLoaded', displayAllCats);