function project(num,Title, Description, Technology, Features, Status, GithubLink, ViewLink) {
    const projectContainer = document.querySelector(".mini-project");

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");

    projectSection.innerHTML = `
        <h4 class="project-title">${num} ${Title}</h4>
            <p class="project-description">"${Description}."</p>
            <div class="list-techno inside-heading">
                <h4 class="mini-inside-heading">Technology Used:</h4>
                <ul>
                    ${Technology.map(techno=>`<li>${techno}</li>`).join("")}
                </ul>
            </div>
            <div class="feature-techno inside-heading">
                <h4 class="mini-inside-heading">Features Implemented:</h4>
                <ul>
                    ${Features.map(featu=>`<li>${featu}</li>`).join("")}
                </ul>
            </div>
            <div class="status inside-heading">
                <h4 class="mini-inside-heading">Project Status</h4>
                <p>${Status}.</p>
            </div>
            <div class="mini-project-link  inside-heading">
                <h4 class="mini-inside-heading">Links:</h4>
                <div class="link">
                    <a href="${GithubLink}">GitHub</a>
                    <a href="${ViewLink}">view The site</a>
                </div>
                <hr class="projectHr">
            </div>  `;
            projectContainer.appendChild(projectSection);
}

function mainProject(logo_img,project_name,description,technology,features,status,GithubLink,ViewLink) {
    const main_project_container=document.querySelector(".main-project");
    const mainprojectSection = document.createElement("div");
    mainprojectSection.classList.add("main-project-section");

    mainprojectSection.innerHTML=`
        <h4 class="project-title"><img src="${logo_img}" alt="">${project_name}</h4>
                <p class="project-description">"${description}"</p>

                <div class="list-techno inside-heading">
                    <h4>Technology Used:</h4>
                    <ul>
                         ${technology.map(mainTechno=>`<li>${mainTechno}</li>`).join("")}
                    </ul>
                </div>
                <div class="feature-techno inside-heading">
                    <h4>Features Implemented:</h4>
                    <ul>
                    ${features.map(mainFeatu=>`<li>${mainFeatu}</li>`).join("")}
                    </ul>
                </div>
                <div class="status inside-heading">
                    <h4>Project Status:</h4>
                    <p>"${status}"</p>
                </div>
                <div class="main-project-link  inside-heading">
                    <h4>Links:</h4>
                    <div class="link">
                        <a href="${GithubLink}">GitHub</a>
                        <a href="${ViewLink}">view The site</a>
                    </div>
                </div>
                <hr>`;
                main_project_container.appendChild(mainprojectSection);

}
mainProject(
    "image/locaLogo.png",
    "LocaXchange (Local Marketplace Website)",
    "LocaXchange is a local marketplace website built to allow users to buy and sell products within their community. The platform supports product listings, secure transactions, messaging, and ratings.",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["User Registration and Login","Product Listing and Editing","Messaging between Buyers and Sellers","Review and Rating System","Secure Payment Integration"],
    "Currently working on adding payment gateway integration and admin features.",
    "https://github.com/GovindG9066/Tic-tac-toc",
    "https://codepen.io/Govind-Gadekar/full/OPLreBo"
);
mainProject(
    "image/Raintro.png",
    "Raintro (Weather Forecast Web App)",
    "Raintro is a responsive weather web application that provides real-time weather updates, dynamic city suggestions, and forecast data using OpenWeather and GeoDB APIs. It features a clean UI with animated weather cards and an intuitive user experience.",
    ["HTML", "Tailwind CSS", "JavaScript", "GeoDB API", "OpenWeather API", "GitHub (for code)", "Vercel (Deployment)"],
    ["Real-time Weather Updates", "Search with City Suggestions", "Responsive UI Design", "Location-based Weather Data", "Clean Weather Card Animation"],
    "Planned to add a temperature unit switcher (°C/°F), weather-based background effects, and support for hourly forecasts.",
    "https://github.com/GovindG9066/Raintro",
    "https://raintro.vercel.app/"
);


project(
    "1.",
    "Tic-tac-toe (Simple Game):",
    "This is the simple game of the tic tac toe were i try my best to do this game best",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["Allow two players to connect online and play in real-time using WebSockets.","Implement an AI player with varying difficulty levels (easy, medium, hard) using algorithms like Minimax.","Add a countdown timer for each turn to increase the challenge.","Provide options to change the game's visual themes (e.g., light mode, dark mode, colorful themes).","Add sound effects for moves, wins, and draws, as well as animations for marking the cells."],
    "The Tic-Tac-Toe game is functional with basic gameplay for two local players. Features like AI opponent, online multiplayer, and enhanced UI/UX are still under development and planned for future updates.",
    "https://github.com/GovindG9066/Tic-tac-toc",
    "https://codepen.io/Govind-Gadekar/full/OPLreBo"
);
project(
    "2.",
    "Amazon Clone (E-commerce Platform):",
    "A clone of Amazon’s e-commerce platform with product browsing, user authentication, and cart functionality",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["Product Search and Filtering","User Authentication","Add to Cart","Checkout Process"],
    "Working on the Clone of Amazon to add some features and the searching and filter the product",
    "https://github.com/GovindG9066/Amazon_clone",
    "https://creative-pastelito-3ffe32.netlify.app/"
);
project(
    "3.",
    "Spotify Clone (Music Striming):",
    "A clone of the Spotify e-commerce platform with the playing the music on thee browser,user authentication, and the play and pused functionality",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["Music playlist","play & pused functionality","volume butten"],
    "Working on the Clone of the Spotify to add some features like increase the size of the database which was i add using the JS,also i want to add the cards(album) and add the songs in the every card",
    "https://github.com/GovindG9066/Spotify-Clone",
    "https://gg-spotifyclone.netlify.app/"
);
project(
    "4.",
    "Netflix Clone (Striming Platform):",
    "A clone of the Netflix which is the strimming platform using this i was only done the structure,buttons,effect and video concepts and the same netflix view and the responsive design",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["Allows users to search for movies and TV shows by name.","Displays a grid of popular, trending, and recommended movies or TV shows","Real-time suggestions and search results.","Filter content based on genres such as Action, Comedy, Drama, etc."],
    "The Netflix Clone project is a work in progress. Core features like the home page, search functionality, and genre filtering are completed, while features such as movie/show details, watchlist functionality, and user authentication are still under development",
    "https://github.com/GovindG9066/Netflix_Clone",
    "https://gg-net-flix-clone.netlify.app/"
)
project(
    "5.",
    "Zomato Clone (food-Delevary-platform):",
    "A restaurant discovery and food ordering platform with features like restaurant listings, search functionality, and detailed menu pages. Currently working on food ordering, cart functionality, and user authentication.",
    ["HTML","CSS","JavaScript","Github(for Storing the code)","Vercel (Deployment)"],
    ["Secure login/signup for personalized recommendations and order history.","Add-to-cart functionality with secure checkout and payment integration.","Save restaurants to a 'Favorites' list for quick access.","Dashboard for restaurant owners to manage menu, orders, and reviews."],
    "The Zomato Clone project is under development, with features like restaurant listings, search functionality, and basic restaurant details completed. Advanced functionalities such as food ordering, user authentication, and live tracking are still in progress",
    "https://github.com/GovindG9066/Zomato_Clone",
    "https://gg-zomato.netlify.app/"
)
