<?php

require_once 'DBInfo.php';

class DBConnector extends DBInfo {

    private $connection;

    public function __construct() {
        $this->connection =
            mysqli_connect($this->host, $this->user, $this->password, $this->database)
            or die('DataBase error: ' . mysqli_error($this->connection));
    }

    public function getConnection() {
        return $this->connection;
    }


}