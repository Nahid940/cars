<?php
/**
 * Created by PhpStorm.
 * User: nahid
 * Date: 8/3/20
 * Time: 1:18 PM
 */

namespace App;


class JsonFormatter
{


    public static function toJson($data)
    {
        return json_encode($data);
    }
}