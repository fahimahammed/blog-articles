const blogsData = [
    {
        id: "1",
        catagory: "Stories",
        title: "Agency is a business you hire to outsource",
        image: "images/blog-1.png",
        date: "5 Nov, 2021"
    },
    {
        id: "2",
        catagory: "Design",
        title: "Outsource your digital marketing efforts",
        image: "images/blog-2.png",
        date: "29 Oct, 2021"
    },
    {
        id: "3",
        catagory: "Marketing",
        title: "Your business with a variety of digital",
        image: "images/blog-3.png",
        date: "21 Oct, 2021"
    },
    {
        id: "4",
        catagory: "Design",
        title: "Analytics to track and report on results",
        image: "images/blog-4.png",
        date: "17 Nov, 2021"
    },
    {
        id: "5",
        catagory: "Branding",
        title: "The most well known performance",
        image: "images/blog-5.png",
        date: "12 Oct, 2021"
    },
    {
        id: "6",
        catagory: "Stories",
        title: "Marketing channels native advertising",
        image: "images/blog-6.png",
        date: "9 Oct, 2021"
    }
]

// responsive navber 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

    

const displayBlog = () =>{
    const blogContainer = document.getElementById("blogs");
    
    blogsData.map( data => {
        
        const div = document.createElement("div");
        div.classList.add("blog-card");
        div.innerHTML = `
        <img src= ${data.image} alt="ok"/>
        <big>${data.catagory}</big>
        <h4>${data.title}</h4>
        <p>${data.date}</p>
        `;
        blogContainer.appendChild(div);
    });
}