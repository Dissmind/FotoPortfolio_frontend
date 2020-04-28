<?php
    require_once 'IAPI.php';
    require_once 'DB/DBConnector.php';

    class API implements IAPI {

        public function authorization($Account) {
            $result = new AccessStatus();

            return $result;
        }

        public function addPost($Post) {
            $result = new Status();

            return $result;
        }

        public function deletePost($Id) {
            $result = new Status();

            return $result;
        }

        public function updatePost($Post) {
            $result = new Status();

            return $result;
        }

        public function getCategoryAll() {
            $result = array(/*Category*/);

            return $result;
        }

        public function getPost($CategoryId) {
            $result = new Post();

            return $result;
        }
    }

?>