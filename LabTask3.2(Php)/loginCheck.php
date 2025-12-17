<?php
session_start();

if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == ""){
        echo "Username or password cannot be empty" <br>;
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


<!-- task2 -->
 <?php
if(isset($_POST['submit'])){

   
    $email = $_POST['email'];
    


    if($email == "" ){
        echo "All fields are required";
    }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Invalid email format";
    }else{
        echo "Registration successful";
     
    }

}else{
    header('location: registration.html');
}
?>
<!-- Task3 -->

