<?php 
$host     = "localhost";
$user     = "root";
$pass     = "root";
$db       = "lunchtime";
$dblink  = mysqli_connect($host,$user,$pass);
mysqli_select_db($db);
 
// REQUETE DE SELECTION
$result = mysqli_query("
    SELECT
      label,priceDF
    FROM
    lunchtime");
 
$json = array();
$i=0;
if(mysqli_num_rows($result))
    {while($row=mysqli_fetch_row($result)){
        $json[]=$row;
        $i++;
    }
}

echo json_encode($json);

?>