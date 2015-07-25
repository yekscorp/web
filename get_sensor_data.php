
<?php
$DateStart = "";
$DateEnd = "";
if((isset($_GET['DateStart'])))
{
    $DateStart = ($_GET['DateStart']);
	$DateEnd = ($_GET['DateEnd']);
	//$DateStart = print_r($myVar,true)strtotime($DateStart_str);
	//$DateEnd = strtotime($DateEnd_str);
}

header('Content-Type: application/json');
$con=mysqli_connect("localhost", "EEN3270_Student", "green2013", "EEN3270_F13");
// Check connection
if (mysqli_connect_errno($con))
{
    echo "Failed to connect to DataBase: " . mysqli_connect_error();
}else
{
    //$data_points = array();
	$query = "SELECT * FROM CH_Sensor1";
	if ($DateStart != "")
	{
	$query = "SELECT * FROM CH_Sensor1 WHERE DATE >= \"{$DateStart}\" AND DATE <=\"{$DateEnd}\"";
 	}
	//echo $query;
    $result = mysqli_query($con, $query);
	//echo $result;
	$data_points = array();
    while($row = mysqli_fetch_array($result))
    {
       //echo $row['DATE'];
	   $point = array("DATE" => $row['DATE'] , "VALUE" => $row['VALUE'],"UNIT" => $row['UNIT'],"SENSOR" => $row['SENSOR'],"BOARD" => $row['BOARD'], "ID" => $row['ID'], "LEAKCOUNT" => $row['LEAKCOUNT']);
        array_push($data_points, $point);
    }
    //echo json_encode($data_points, JSON_NUMERIC_CHECK);
	echo json_encode($data_points, JSON_NUMERIC_CHECK);
}
mysqli_close($con);
?>