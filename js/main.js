

const malumot = [
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough" },
    company: { name: "Romaguera-Crona" },
    website: "hildegard.org",
  },
  {
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    address: { street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh" },
    company: { name: "Deckow-Crist" },
    website: "anastasia.net",
  },
  {
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    address: { street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven" },
    company: { name: "Romaguera-Jacobson" },
    website: "ramiro.info",
  },
  {
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    address: { street: "Hoeger Mall", suite: "Apt. 692", city: "South Elvis" },
    company: { name: "Robel-Corkery" },
    website: "kale.biz",
  },
  {
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    address: { street: "Skiles Walks", suite: "Suite 351", city: "Roscoeview" },
    company: { name: "Keebler LLC" },
    website: "demarco.info",
  },
  {
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    address: { street: "Norberto Crossing", suite: "Apt. 950", city: "South Christy" },
    company: { name: "Considine-Lockman" },
    website: "ola.org",
  },
  {
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    address: { street: "Rex Trail", suite: "Suite 280", city: "Howemouth" },
    company: { name: "Johns Group" },
    website: "elvis.io",
  },
  {
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    address: { street: "Ellsworth Summit", suite: "Suite 729", city: "Aliyaview" },
    company: { name: "Abernathy Group" },
    website: "jacynthe.com",
  },
  {
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    address: { street: "Dayna Park", suite: "Suite 449", city: "Bartholomebury" },
    company: { name: "Yost and Sons" },
    website: "conrad.com",
  },
  {
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    address: { street: "Kattie Turnpike", suite: "Suite 198", city: "Lebsackbury" },
    company: { name: "Hoeger LLC" },
    website: "ambrose.net",
  }
];

const elList = document.querySelector(".js-list");


for (let i = 0; i < malumot.length; i++) {
  const user = malumot[i];
  const elItem = document.createElement("li");
  elList.appendChild(elItem);
  const elImg = document.createElement("img");
  const elText = document.createElement("p");
  elItem.appendChild(elText);
  elItem.appendChild(elImg);
const name = document.createElement("p"); 
elItem.appendChild(name);
name.textContent = "Name: " + user.name;

const email = document.createElement("p");
email.textContent = "Email: " + user.email;
elItem.appendChild(email);

const address = document.createElement("p");
address.textContent = "Address: " + user.address.street  + user.address.suite  + user.address.city;
elItem.appendChild(address);

const company = document.createElement("p");
company.textContent = "Company: " + user.company.name;
elItem.appendChild(company);

const website = document.createElement("p");
website.textContent = "Website: " + user.website;
elItem.appendChild(website);


}
