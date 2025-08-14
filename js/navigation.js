document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    nav.innerHTML = `
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JGCSWP4YM2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JGCSWP4YM2');
</script>
        




    <style>
h1 {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    color: #ffffffff; /* Dark blue base color */
    text-align: center;
    padding: 20px;
    /* Base font size relative to viewport width */
    font-size: clamp(2rem, 5vw, 4rem); /* Min: 2rem, Max: 4rem, Scales with 5vw */
    text-shadow: 2px 2px 4px #000000ff; /* Gray accent shadow */
}

/* Media Queries for Specific Breakpoints */
@media (max-width: 768px) {
    h1 {
        font-size: clamp(1.5rem, 4vw, 3rem); /* Adjust for tablets */
        text-shadow: 1px 1px 3px #7f7f7f; /* Adjusted gray accent for smaller screens */
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: clamp(1rem, 3vw, 2rem); /* Adjust for mobile */
        text-shadow: 1px 1px 2px #7f7f7f; /* Adjusted gray accent for smaller screens */
    }

    ul {
        border: 2px solid #7f7f7f; /* Border design for ul: thicker, gray to match text-shadow */
        border-radius: 8px; /* Rounded corners for a modern look */
        padding: 10px; /* Padding to prevent content from touching borders */
    }


    ul.show li {
        border-radius: 5px; /* More pronounced rounded corners */
        border-bottom: 3px solid #017ca1ff; /* Separator line under all li elements, including last */
        margin: 8px 0; /* Increased vertical spacing for better separation */
        padding: 8px; /* Slightly more padding for a bolder look */
        transition: border-color 0.3s ease; /* Smooth transition for hover effect */
    }

}
</style>



        <img src="assets/Icon__Logo.png" alt="WMHS Contractors Logo" onclick="window.location.href='index.html'" style="cursor: pointer;">
        <h1>Western Mass Home Services</h1>
        <div class="hamburger">☰</div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});