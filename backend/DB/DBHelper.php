<?php

require_once 'DBInfo.php';

class DBHelper extends DBInfo {

    private $connection;

    public function __construct() {
        $this->connection =
            mysqli_connect($this->host, $this->user, $this->password, $this->database)
            or die('DataBase error: not successful connection |' . mysqli_error($this->connection));
    }

    public function queryExec($query, $isSelectQuery) {
        $result = mysqli_query($this->connection, $query);

//        switch ($typeResult) {
//            case "getCollection":
//                return mysqli_fetch_all($result, MYSQLI_ASSOC);
//                break;
//        }

        if($isSelectQuery) {
            return mysqli_fetch_all($result, MYSQLI_ASSOC);
        }
    }


    private function closeConnection() {
        mysqli_close($this->connection);
    }
}