<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <form method="post" action="../controllers/signupCheck.php" enctype="application/x-www-form-urlencoded">
        <fieldset>
            <legend>Sing up</legend>
            <table>
                <tr>
                    <td>Username</td>
                    <td><input type="text" name="username" value=""></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" value=""></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" value=""></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" name="submit" value="Submit">
                        <a href='login.php'>login</a>
                    </td>
                </tr>
            </table>
        </fieldset>
    </form>
</body>
</html>