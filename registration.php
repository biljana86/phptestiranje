<?php 
@session_start();


	if(isset($_POST['btnSubmit']))
	{
                $name=$_POST['tbname'];
		$surname=$_POST['tblastname'];
		$passwd=md5($_POST['tbpasswd']);
		$email=$_POST['tbemail'];
		$date=date("Y-m-d H:i:s");
                require('database.php');
                $db = new Database();
                $db->connect();
                $db->insert('user',array('',"$name","$surname","$email","$passwd","$date"));
                header('Location: index.php');
         }
        else{
             header('Location: index.php'); 
            }

?>