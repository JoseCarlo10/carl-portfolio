
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

    // Hide mobile menu if open
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}

function toggleMenu() {
    document.getElementById('navbar').classList.toggle('show');
}

// Scroll-to-top button show/hide logic
window.onscroll = function () {
    const topButton = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const projectData = {
    project1: {
        title: "DICT Archive System",
        description: "A system designed for archiving documents for the Department of Information and Communications Technology.",
        date: "February 19, 2024",
        media: ["/assets/Projects/DICT Archive System/Log in.jpg", "/assets/Projects/DICT Archive System/Archives.jpg", "/assets/Projects/DICT Archive System/Add New Project.jpg", "/assets/Projects/DICT Archive System/Delete Project.jpg", "/assets/Projects/DICT Archive System/Add Activity.jpg", "/assets/Projects/DICT Archive System/Delete Activity.jpg", "/assets/Projects/DICT Archive System/Save activity.jpg"]
    },
    project2: {
        title: "DICT Logbook System",
        description: "A system designed for recording client information for the Department of Information and Communications Technology.",
        date: "March 4, 2024",
        media: ["/assets/Projects/DICT Attendance System/Main.jpg", "/assets/Projects/DICT Attendance System/Database.jpg"]
    },
    project3: {
        title: "Water Demand Forecasting System",
        description: "A system for forecasting water demand using machine learning algorithms.",
        date: "January 13, 2024",
        media: ["/assets/Projects/Water Demand Forecasting System/User Login.jpg", "assets/Projects/Water Demand Forecasting System/User Dashboard.jpg", "assets/Projects/Water Demand Forecasting System/User Analytics.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 1.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 2.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 3.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 4.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 5.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 6.jpg", "assets/Projects/Water Demand Forecasting System/Analytics 7.jpg", "assets/Projects/Water Demand Forecasting System/Records.jpg", "assets/Projects/Water Demand Forecasting System/User About.jpg"]
    },
    project4: {
        title: "RPW Generator",
        description: "A simple random password generator that generates a random password based on the user's input.",
        date: "May 26, 2025",
        media: ["/assets/Projects/RPW Generator/RPW icon.png"]
    },
    project5: {
        title: "JC's SpriteShop Project",
        description: "A web store made in WordPress that allows users to purchase and download digital art assets. (Currently in progress)",
        date: "February 23, 2025",
        media: ["/assets/Projects/JCs SpriteShop/Homepage.png", "/assets/Projects/JCs SpriteShop/Store Page.png"]
    },
    personal1: {
        title: "Pixel Knight [Aseprite]",
        description: "A Personal project of mine made in Aseprite.",
        date: "May 19, 2025",
        media: ["/assets/Personal Projects/Sprites/Knight.gif"]
    },
    personal2: {
        title: "Birds in a Basket (Original) [Adobe PhotoShop]",
        description: "An original digital painting of birds sitting in a basket using Photoshop.",
        date: "March 4, 2023",
        media: ["/assets/Personal Projects/PhotoShop/Avila_JoseCarlo_ArtFinal.jpg"]
    },
    personal3: {
        title: "Gir from Invader Zim [Blender]",
        description: "A personal project of mine made in Blender.",
        date: "June 15, 2025",
        model: ["/assets/Personal Projects/Gir/Gir.glb"],
        type: "3d"
    },
    personal4: {
        title: "Plane Model [Blender]",
        description: "A 3D plane model animated and rendered using Blender.",
        date: "June 27, 2025",
        media: ["/assets/Personal Projects/Plane Animation/Preview 1.png", "/assets/Personal Projects/Plane Animation/Preview 2.png", "/assets/Personal Projects/Plane Animation/Plane Animation.mp4"]
    },
    personal5: {
        title: "Jack Spicer from Xiaolin Showdown [Blender]",
        description: "Jack Spicer might be a self-proclaimed evil genius, but this model is just here to chill in your render scene.",
        date: "August 22, 2025",
        model: "/assets/Personal Projects/Jack Spicer/Jack Spicer.glb",
        type: "3d"
    }
};

let currentProject = null;
let currentMediaIndex = 0;

function openProject(key) {
    currentProject = projectData[key];
    currentMediaIndex = 0;
    document.getElementById("projectPopup").style.display = "flex";

    // Title, desc, date
    document.getElementById("popupTitle").innerText = currentProject.title;
    document.getElementById("popupDescription").innerText = currentProject.description;
    document.getElementById("popupDate").innerText = currentProject.date;

    const mediaContainer = document.getElementById("popupMedia"); 
    mediaContainer.innerHTML = ""; // clear previous content

    if (currentProject.type === "3d") {
        // Show the 3D model
        mediaContainer.innerHTML = `
            <model-viewer src="${currentProject.model}" 
                          alt="${currentProject.title}"
                          camera-controls 
                          auto-rotate 
                          style="width:100%; height:500px;">
            </model-viewer>
        `;
    } else {
        // Recreate the image/video elements for updateMedia() to use
        mediaContainer.innerHTML = `
            <img id="popupImage" src="" alt="Project Image">
            <video id="popupVideo" controls style="display: none;">
                <source id="popupVideoSrc" src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="nav-buttons">
                <span onclick="prevMedia()">◀</span>
                <span onclick="nextMedia()">▶</span>
            </div>
        `;
        updateMedia();
    }
}


function closeProject() {
    document.getElementById("projectPopup").style.display = "none";
    resetVideo();
}

function updateMedia() {
    const img = document.getElementById("popupImage");
    const video = document.getElementById("popupVideo");
    const videoSrc = document.getElementById("popupVideoSrc");
    const navButtons = document.querySelector(".nav-buttons");

    const media = currentProject.media[currentMediaIndex];

    // Toggle media
    if (media.endsWith(".mp4")) {
        img.style.display = "none";
        video.style.display = "block";
        videoSrc.src = media;
        video.load();
    } else {
        video.style.display = "none";
        img.style.display = "block";
        img.src = media;
    }

    // Hide nav buttons if only 1 media item
    if (currentProject.media.length <= 1) {
        navButtons.style.display = "none";
    } else {
        navButtons.style.display = "flex"; // or "block", depending on your CSS
    }
}

function nextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % currentProject.media.length;
    updateMedia();
    resetVideo();
}

function prevMedia() {
    currentMediaIndex = (currentMediaIndex - 1 + currentProject.media.length) % currentProject.media.length;
    updateMedia();
    resetVideo();
}

function resetVideo() {
    const video = document.getElementById("popupVideo");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certModalImage");
    const closeBtn = document.querySelector(".cert-close-btn");

    if (modal && modalImg && closeBtn) {
        // When an image inside .cert-images is clicked
        document.querySelectorAll(".cert-images img").forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        // Close button
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal if background is clicked
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});