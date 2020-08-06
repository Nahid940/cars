<?php
/**
 * Created by PhpStorm.
 * User: nahid
 * Date: 8/3/20
 * Time: 12:49 PM
 */

namespace App;


class Cars
{

    public function getAllCars($page)
    {
        $data=Model::get()->cars($page);
        $cars=[];
        foreach ($data as $d)
        {
            $cars[]=[
                'id'=>$d['id'],
                'manufacturer'=>$d['manufacturer'],
                'model'=>$d['model'],
                'year'=>$d['year'],
                'producing_country'=>$d['producing_country']
            ];
        }
        return JsonFormatter::toJson(
            [
                'cars'=>$cars,
                'total'=>Model::get()->getTotalRecords("")
            ]
        );
    }

    public function searchCar($key)
    {
        return JsonFormatter::toJson(Model::get()->search($key));
    }

    public function getAllSearchResults($manufacturer,$page)
    {

        $data=Model::get()->getCarSearchResult($manufacturer,$page);
        $cars=[];
        foreach ($data as $d)
        {
            $cars[]=[
                'id'=>$d['id'],
                'manufacturer'=>$d['manufacturer'],
                'model'=>$d['model'],
                'year'=>$d['year'],
                'producing_country'=>$d['producing_country']
            ];
        }
        return JsonFormatter::toJson(
            [
                'cars'=>$cars,
                'total'=>Model::get()->getTotalRecords("where manufacturer = '{$manufacturer}'")
            ]
        );
    }

    public function insert($manf,$model,$year,$country)
    {
        Model::get()->addFromCSV($manf,$model,$year,$country);
    }

    public function updateCarInfo($manf,$model,$year,$country,$id)
    {
        return Model::get()->update($manf,$model,$year,$country,$id);
    }

    public function deleteCar($id)
    {
        return Model::get()->delete($id);
    }
}