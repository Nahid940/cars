<?php
/**
 * Created by PhpStorm.
 * User: nahid
 * Date: 8/3/20
 * Time: 1:12 PM
 */

namespace App;

include'config.php';

class Model
{
    /**
     * @var MySQLi Object
     */
    private $_dbcon;

    protected $limit=5;

    /**
     * Constructor
     */
    public function __construct(){
        $this->_dbcon = new \MySQLi(env('DB_HOST', 'localhost'), env('DB_USER', 'dbuser'), env('DB_PASSWORD', 'password'), env('DB_NAME', 'dbname'));

        if ($this->_dbcon->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    }

    /**
     * Static method get the Model Object
     * @return \App\Model
     */
    public static function get() {
        return new Model();
    }

    /**
     * Query : Execute the base query
     * @param String $sql
     * @return mixed
     */
    private function query($sql){
        return $this->_dbcon->query($sql);
    }

    /**
     * fetch : get the first result
     * @param mixed $result
     * @return Array
     */
    private function fetch($result){
        $data = $result->fetch_assoc();
        $result->free_result();
        $this->_dbcon->close();
        return $data;
    }
    /**
     * fetchAll : get the full result of query
     * @param type $result
     * @return type
     */
    private function fetchAll($result){
        $data = $result->fetch_all(MYSQLI_ASSOC);
        $result->free_result();
        $this->_dbcon->close();
        return $data;
    }

    public function getOffset($page)
    {
        if($page>1)
        {
            return $offset=($this->limit*$page)-$this->limit;
        }else
        {
            return $offset=0;
        }
    }

    public function cars($page)
    {
        $offset=$this->getOffset($page);
        $sql="select * from cars limit $this->limit offset $offset";
        $query=$this->query($sql);
        return $this->fetchAll($query);
    }

    public function getTotalRecords($param)
    {
        $limit=5;
        $sql="select count(id) as total from cars $param";
        $query=$this->query($sql);
        $total=$this->fetch($query);
        if($total['total']<$limit)
        {
            return 0;
        }
        return (ceil($total['total']/$limit));
    }



    public function search($key)
    {
        $search_key = "%".$key."%";
        $sql="select DISTINCT manufacturer from cars where manufacturer like '".$search_key."'";
        $query=$this->query($sql);
        return $this->fetchAll($query);
    }


    public function getCarSearchResult($manufacturer,$page)
    {
        $offset=$this->getOffset($page);
        $sql="select * from cars where manufacturer = '{$manufacturer}' limit $this->limit offset $offset";
        $query=$this->query($sql);
        return $this->fetchAll($query);
    }

    public function addFromCSV($manf,$model,$year,$country)
    {
        $manf = mysqli_real_escape_string($this->_dbcon, $manf);
        $model = mysqli_real_escape_string($this->_dbcon, $model);
        $year = mysqli_real_escape_string($this->_dbcon, $year);
        $country = mysqli_real_escape_string($this->_dbcon, $country);

        $sql="INSERT INTO cars (manufacturer, model, year,producing_country)
        VALUES ('$manf','$model','$year','$country')";
        $this->query($sql);
    }

    public function delete($id)
    {
        $sql="delete from cars where id=$id";
        if($this->query($sql)==true)
        {
            return true;
        }
        return false;
    }

    public function update($manf,$model,$year,$country,$id)
    {
        $manf = mysqli_real_escape_string($this->_dbcon, $manf);
        $model = mysqli_real_escape_string($this->_dbcon, $model);
        $year = mysqli_real_escape_string($this->_dbcon, $year);
        $country = mysqli_real_escape_string($this->_dbcon, $country);
        $id = mysqli_real_escape_string($this->_dbcon, $id);
        $sql="update cars set manufacturer='$manf', model='$model', year='$year',producing_country='$country' where id='$id'";
         if($this->query($sql)==true)
         {
             return true;
         }
        return $this->_dbcon->error;
    }


}