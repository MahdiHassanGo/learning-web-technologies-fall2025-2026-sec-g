<?php
session_start();

if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == ""){
        echo "Username or password cannot be empty";
    }else if(strlen($username) < 3){
        echo "Username must be at least 3 characters";
    }else{
        if($username == $password){
            $_SESSION['status'] = true;
            $_SESSION['username'] = $username;
            header('location: home.php');
        }else{
            echo "Invalid username/password";
        }
    }

}else{
    header('location: login.html');
}
?>
