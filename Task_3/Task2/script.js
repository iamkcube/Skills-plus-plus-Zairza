console.clear();
console.log("Hemlo");

const cards = document.querySelector(".cards");
const url = `https://randomuser.me/api/?results=20`;

const fetchBtn = document.querySelector(".fetch-users");

fetchBtn.addEventListener("click", () => {
	fetchData();
});

async function fetchData() {
	try {
		cards.innerHTML = `Loading...`;
		let data = await fetch(url);
		let users = await data.json();
		cards.innerHTML = ``;
		let sortedUsers = users.results;
		sortedUsers.sort((user1, user2) =>
			user1.name.first.localeCompare(user2.name.first)
		);

		for (const user of sortedUsers) {
			let userAddress = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;

			cards.innerHTML += cardTemplate(
				Object.values(user.name).join(" "),
				user.email,
				userAddress,
				capitalise(user.gender),
				user.dob.date.slice(0, 10),
				user.phone,
				user.picture.large
			);
		}
		fetchBtn.disabled = true;
	} catch (error) {
		console.log(error);
		cards.innerHTML = `Can't get user data. Please try again.`
	}
}

function capitalise(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function cardTemplate(name, email, address, gender, dob, tel, imgURL) {
	return `
		<div class="card">
		<span class="img-box"><img src="${imgURL}" alt=""></span>
		<h2 class="card-title">${name}</h2>
		<div class="card-content">
			<span class="card-email">
				<p class="title">Email:</p>
				<a href="mailto: ${email}" target="_blank" class="content">${email}</a>
			</span>
			<span class="card-address">
				<p class="title">Address:</p>
				<p class="content">
					${address}
				</p>
			</span>
			<span class="card-gender">
				<p class="title">Gender:</p>
				<p class="content">${gender}</p>
			</span>
			<span class="card-dob">
				<p class="title">DOB:</p>
				<p class="content">${dob}</p>
			</span>
			<span class="card-tel">
				<p class="title">Tel:</p>
				<a
					href="tel:${tel}" target="_blank" 
					class="card-phone"
					>${tel}</a
				>
			</span>
		</div>
	</div>
	`;
}
