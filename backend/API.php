<?php
    require_once 'IAPI.php';
    require_once 'DB/DBHelper.php';

    class API implements IAPI {

        public function authorization($Account) {
            $result = new AccessStatus();

            return $result;
        }

        public function addPost($post) {
            $result = new Status();

            $DB = new DBHelper();

            // TODO:
            $query = 'INSERT INTO TODO SET id = ' . $post->id . ', category = ' . $post->category;

            if ($DB->queryExec($query, true)) {

            }

            return $result;
        }

        public function deletePost($id) {
            $result = new Status();



            $DB = new DBHelper();
            $query = "DELETE FROM post WHERE id = '$id'";

            $DB->queryExec($query, false);

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