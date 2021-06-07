<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Erin Villasenor Website</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="https://kit.fontawesome.com/726049509b.js" defer crossorigin="anonymous"></script>
</head>

<body class="light-theme">
    <div class="topnav">
        <a class="active" href="index.html"><i class="fas fa-home"></i>Home</a>
        <a href="html/projects.html"><i class="fas fa-archive"></i>Projects</a>
        <a href="html/contact.html"><i class="fas fa-phone"></i>Contact</a>
        <a href="html/about.html"><i class="fas fa-user"></i>About</a>
        <a href="html/guestbook.html"><i class="fas fa-book"></i>Guestbook</a>
    </div>
    <div class="toggle-box">
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
        </label>
    </div>

    <h1>List</h1>
    <p id="msg">Current tasks:</p>
    <ul>
        <li class="list">Add visual styles</li>
        <li class="list"> Add light and dark themes</li>
        <li>Enable switching the theme</li>
    </ul>

    <script src="app.js"></script>
    <noscript>You need to enable JavaScript to view the full site.</noscript>
</body>

</html>