<?php
    require_once('../controllers/sessionCheck.php');


    $users = [
        ['id'=>1, 'username'=>'alamin', 'password'=>'123', 'email'=>'alamin@aiub.edu'],
        ['id'=>2, 'username'=>'xyz', 'password'=>'12223', 'email'=>'xyz@aiub.edu'],
        ['id'=>3, 'username'=>'abc', 'password'=>'12', 'email'=>'abc@aiub.edu'],
        ['id'=>4, 'username'=>'pqr', 'password'=>'ad2', 'email'=>'pqr@aiub.edu'],
        ['id'=>5, 'username'=>'asd', 'password'=>'34', 'email'=>'asd@aiub.edu'],
        ['id'=>5, 'username'=>'asd', 'password'=>'34', 'email'=>'asd@aiub.edu']
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
</head>
<body>
        <h2>User List</h2>
        <a href="home.php">Back</a> |
        <a href="../controllers/logout.php"> logout</a>
        <br><br>

        <table border=1>
            <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
            </tr>

            <?php
                foreach($users as $u){
            ?>
                <tr>
                    <td><?php echo $u['id']; ?></td>
                    <td><?php echo $u['username']; ?></td>
                    <td><?=$u['email']?></td>
                    <td>
                        <a href="edit.php?id=<?=$u['id']?>"> EDIT </a> |
                        <a href="delete.php"> DELETE </a> |
                        <a href="details.php"> DETAILS </a> 
                    </td>
                </tr>

            <?php
                }
            ?>
           
        </table>

</body>
</html>