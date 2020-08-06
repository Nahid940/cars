<?php
include_once '../vendor/autoload.php';
$cars=new \App\Cars();
header("Access-Control-Allow-Origin: *");
if(isset($_GET['cars']))
{
    echo $cars->getAllCars($_GET['page']);
}


if(isset($_GET['search']) && isset($_GET['key']) && $_GET['key']!='')
{
    $result=$cars->searchCar($_GET['key']);
    echo $result;
}

if(isset($_GET['search']) && isset($_GET['manufacturer']) && $_GET['manufacturer']!='')
{
    $result=$cars->getAllSearchResults($_GET['manufacturer'],$_GET['page']);
    echo $result;
}

if(isset($_GET['file']))
{
    $fileName = $_FILES["csv"]["tmp_name"];

    if ($_FILES["csv"]["size"] > 0) {

        $file = fopen($fileName, "r");

        while (($column = fgetcsv($file, 10000, ",")) !== FALSE) {

            $manufacturer = "";
            $model="";
            $year="";
            $country="";
            if (isset($column[0])) {
                $manufacturer = $column[0]==''?'-': $column[0];
            }
            if (isset($column[1])) {
                $model = $column[1]==''?'-': $column[2];
            }
            if (isset($column[2])) {
                $year = $column[2]==''?'-': $column[2];
            }
            if (isset($column[3])) {
                $country = $column[3]==''?'-': $column[3];
            }
            $cars->insert($manufacturer,$model,$year,$country);
        }
    }
}

if(isset($_GET['delete']) && $_GET['id']!='')
{
    if($cars->deleteCar($_GET['id']))
    {
        echo $cars->getAllCars($_GET['page']);
    }
}

if(isset($_GET['update']))
{
    $manufacturer = $_POST['manufacturer'];
    $model=htmlspecialchars($_POST['model']);
    $year=htmlspecialchars($_POST['year']);
    $country=htmlspecialchars($_POST['producing_country']);
    $id=htmlspecialchars($_GET['id']);
    if($cars->updateCarInfo($manufacturer,$model,$year,$country,$id) ==true)
    {
        echo $cars->getAllCars($_GET['page']);
    }
}