<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form class="form" action="" id="form" novalidate>
            <h1>Registration Form</h1>

            <div class="form-control">
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" aria-describedby="usernameError" />
                <span id="usernameError" class="error" aria-live="polite"></span>
            </div>

            <div class="form-control">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" aria-describedby="emailError" />
                <span id="emailError" class="error" aria-live="polite"></span>
            </div>

            <div class="form-control">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" aria-describedby="passwordError" />
                <span id="passwordError" class="error" aria-live="polite"></span>
                <div id="password-strength"></div>
            </div>

            <div class="form-control">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" aria-describedby="cPasswordError" />
                <span id="cPasswordError" class="error" aria-live="polite"></span>
            </div>

            <input type="submit" id="btn" value="Submit" />
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
