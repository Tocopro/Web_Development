
Health Date HTML code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HealthCare Data</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css"/>
</head>
<body>
    <div class="container">
        <div class="nav-wrapper">
            <div class="left-side">
                <div class="nav-link-wrapper active-nav-link">
                    <a href="index.html">Home</a>
                </div>
                <div class="nav-link-wrapper active-nav-link">
                    <a href="About%20Me.html">AboutMe</a>
                </div>
            </div>

        <div class="right-side">
            <div class="brand">
                <div>HEALTH CARE DATA</div>
            </div>
        </div>
            <div class="content-wrapper">
                <div class="portfolio-items-wrapper">

                    <div class="portfolio-item-wrapper">
                        <div class="portfolio-img-background" style="background-image:url(online-marketing-hIgeoQjS_iE-unsplash.jpg)">

                            <div class="img-text-wrapper">
                                <div class="logo-wrapper">
                                    <img src="C:\Users\NEAK\Downloads">

                                </div>
                                <div class="subtitle">
                                    Healthcare Image
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</body>
<script>
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
    let portfolioItem;
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            console.log(portfolioItem.childNodes[1].classList);
            portfolioItem.childNodes[1].classList.add('img-darken');
        })
        portfolioItem.addEventListener('mouseout', () => {

            console.log(portfolioItem.childNodes[1].classList);
            portfolioItem.childNodes[1].classList.remove('img-darken');
        })
    })
</script>
</html>


About Me HTML code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HealthCare Data</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css"/>
</head>
<body>
<div class="container">
    <div class="nav-wrapper">
        <div class="left-side">
            <div class="nav-link-wrapper">
                <a href="index.html">Home</a>
            </div>
            <div class="nav-link-wrapper">
                <a href="About%20Me.html">AboutMe</a>
            </div>
        </div>

        <div class="right-side">
            <div class="brand">
                <div>HEALTH CARE DATA</div>
            </div>
        </div>
        </div>
        <div class="content-wrapper">
            <div class="two-column-wrapper">
                <div class="profile-image-wrapper">

                </div>
                <div class="profile-content-wrapper">
                    <h1>
                        Nicholas Wachira Profile
                    </h1>
                    <p>
                        Designed this website as a portfolio for my HTML and CSS skills
                    </p>

                </div>
            </div>
        </div>
</div>
</body>
</html>


CSS StyleSheet

/* master styles */
body {
    font-family: "Lato", sans-serif;
    margin: 0px;
}
.container {
    display: grid;
    grid-template-columns: 1fr;
}
/* nav styles*/
.nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 40px;
}
.left-side {
    display: flex;
}
.nav-wrapper > .left-side > div {
    margin-right: 20px;
    font-size: 0.8em;
    text-transform: uppercase;
}
.nav-link-wrapper {
    height: 24px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
}
.nav-link-wrapper a {
    color: #a9a9a9;
    text-decoration: none;
    transition: color 0.5s;
}
.nav-link-wrapper:hover {
    border-bottom: 1px solid black;
}
.nav-link-wrapper a:hover {
    color: black;
}
.active-nav-link {
    border-bottom:  1px solid black;
}
.active-nav-link a {
    color: black; !important;
}
/* portfolio styles*/
.portfolio-items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.portfolio-items-wrapper {
    position: relative;
}
.portfolio-img-background {
    height: 350px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.img-text-wrapper {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
}
.logo-wrapper img{
    width: 50%;
    margin-bottom: 20px;
}
/* Needs to be more specific with selector*/
.img-text-wrapper .subtitle {
    transition:  1s;
    font-weight: 600;
    color: transparent;

}
.img-text-wrapper:hover .subtitle {
    font-weight: 600;
    color: lightseagreen;
}
.img-darken {
    transition: 1s;
    filter: brightness(10%);
}
/* About page*/
.two-column-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.profile-image-wrapper img{
    width: 100%;
}
.profile-content-wrapper {
    padding: 30px;
}
.profile-content-wrapper h1 {
    color: lightseagreen;
}
