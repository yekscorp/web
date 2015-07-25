<?php
include("db_conn.php");
if((isset($_GET['Value'])))
{
    $Timestamp = TIME()*1000;
    echo $Timestamp;
    $TEMP1 = ($_GET['Value']);
    echo $TEMP1;
    $REVS = ($_GET['Revs']);
    echo $REVS;
    $LEAK = ($_GET['LeakCount']);
    echo $LEAK;
    $UNIT = htmlspecialchars($_GET["Unit"]);
    echo $UNIT;
    $SENSOR = htmlspecialchars($_GET["Sensor"]);
    echo $SENSOR;
    $BOARD = htmlspecialchars($_GET["BoardID"]);
    echo $BOARD;
    $Add = mysql_query("INSERT INTO CH_Sensor1 (VALUE,REVS,LEAKCOUNT,DATE,UNIT,SENSOR,BOARD) VALUES ($TEMP1, $REVS, $LEAK, $Timestamp, '$UNIT','$SENSOR','$BOARD')");
    mysql_query($Add) or die(mysql_error());
}
?>