
<?php
header('Content-Type: application/json');
$con=mysqli_connect("localhost", "EEN3270_Student", "green2013", "EEN3270_F13");
// Check connection
if (mysqli_connect_errno($con))
{
    echo "Failed to connect to DataBase: " . mysqli_connect_error();
}else
{
    $data_points = array();
    $result = mysqli_query($con, "SELECT * FROM CH_Sensor1");
    while($row = mysqli_fetch_array($result))
    {
        $point = array("x" => $row['DATE'] , "y" => $row['VALUE']);
        array_push($data_points, $point);
    }
    echo json_encode($data_points, JSON_NUMERIC_CHECK);
}
mysqli_close($con);
?>