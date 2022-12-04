console.log('Hemlo');

const cardHolder = document.querySelector('.latest-news__cards')
// console.log(cardHolder);


async function main() {
    let data = await fetch('https://raw.githubusercontent.com/iamkcube/Skills-plus-plus-Zairza/main/Task_2/assets/data.json')
    let cards = await data.json()
    // console.log(cards);

    for (const card of cards.cards) {
        let date = new Date(card.date).toDateString()
        cardHolder.innerHTML += `
            <div class="latest-news-card">
                <img
                    loading="lazy"
                    src="${card.imageURL}"
                    alt="Card Image"
                    class="card-image"
                />
                <h2 class="card-title">${card.title}</h2>
                <div class="card-details">
                    <p class="card-date">${date}</p>
                    <hr />
                    <p class="card-comments">Comments (${card.comments})</p>
                </div>
            </div>
        `
    }
    
}

main()