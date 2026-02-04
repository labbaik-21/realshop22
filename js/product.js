

const id = new URLSearchParams(window.location.search).get("id");

fetch("data/products.json")
  .then(res => res.json())
  .then(products => {

    const p = products.find(x => x.id === id);

    // Title & price
    document.getElementById("title").innerText = p.name;
    document.getElementById("price").innerText = "৳" + p.price;
    document.getElementById("oldPrice").innerText = "৳" + p.oldPrice;

    // Main image
    document.getElementById("featured").src = p.images[0];

    // Thumbnails
    const thumbs = document.getElementById("thumbs");
    p.images.forEach(img => {
      const t = document.createElement("img");
      t.src = img;
      t.className = "thumbnail";
      t.onclick = () => document.getElementById("featured").src = img;
      thumbs.appendChild(t);
    });

    // Short + Long description
    document.getElementById("shortDesc").innerText = p.shortDesc;
    document.getElementById("longDesc").innerText = p.description;

    // Features
    const ul = document.getElementById("features");
    p.features.forEach(f => {
      const li = document.createElement("li");
      li.innerHTML = "<span>✓</span> " + f;
      ul.appendChild(li);
    });

  });



// function loadNavbar() {
//     fetch('navbar.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Navbar file found hoini!");
//             }
//             return response.text();
//         })
//         .then(data => {
//             // ১. এখানে নেভবারটি পেজে বসানো হচ্ছে
//             document.getElementById('navbar-placeholder').innerHTML = data;

//             // ২. নেভবার আসার ঠিক পরেই আপনার দেওয়া কোডটুকু এখানে কাজ করবে
//             const searchBtn = document.querySelector(".search-button");
//             const searchBar = document.querySelector(".search-bar");
//             const inputBox = document.getElementById("input-box");

//             // বাটনগুলো আসলেও খুঁজে পাওয়া গেছে কি না তা চেক করা ভালো
//             if (searchBtn && searchBar) {
//                 searchBtn.addEventListener("click", () => {
//                     searchBar.classList.toggle("active");

//                     if (searchBar.classList.contains("active")) {
//                         if (inputBox) inputBox.focus();
//                     } else {
//                         if (inputBox) inputBox.value = "";
//                     }
//                 });
//             }
//         })
//         .catch(error => console.error('Error loading navbar:', error));
// }

// // পেজ লোড হওয়ার সাথে সাথে ফাংশনটি কল হবে
// window.onload = loadNavbar;











// fetch("navbar.html")
// .then(res => res.text())
// .then(data => {

//   document.getElementById("navbar-container").innerHTML = data;

//   // AFTER navbar loaded — attach JS

//   const searchBtn = document.querySelector(".search-button");
//   const searchBar = document.querySelector(".search-bar");

//   if(searchBtn && searchBar){

//     searchBtn.addEventListener("click", () => {
//       searchBar.classList.toggle("active");
//     });

//     // auto close when click outside
//     document.addEventListener("click", e=>{
//       if(!searchBar.contains(e.target) && !searchBtn.contains(e.target)){
//         searchBar.classList.remove("active");
//       }
//     });

//   } else {
//     console.log("navbar elements not found");
//   }

// });
