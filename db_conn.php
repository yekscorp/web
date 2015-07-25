<?php
{
    $mystring = "Testing ability to connect to MYSQL and a specific DB using php";
    echo($mystring);
    mysql_connect("localhost", "EEN3270_Student", "green2013") or die(mysql_error());
    echo "<br />Connected to Mysql .....  ";
    mysql_select_db ("EEN3270_F13") or die(mysql_error());
    echo "And also connected to Nate's Temp Tablee, hosted on the Cape Green Energy server in sunny Centerville, Cape Cod";
}
?>