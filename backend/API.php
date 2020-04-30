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
            //$query = "INSERT INTO 'post' ('id', 'title', 'description', 'idCategory', 'imgURL') VALUES (NULL, 'test_title', 'test_description', 3, 'img_url')";

//            $query = "INSERT INTO `post` (`id`, `title`, `description`, `idCategory`, `imgURL`) VALUES (NULL, `$post->title`, `$post->description`, `$post->category`, `$post->urlImg`)";
            $query = "INSERT INTO `post` (`id`, `title`, `description`, `idCategory`, `imgURL`) 
                        VALUES (NULL, 
                        '" . $post->title . "' , 
                        '" . $post->description . "', 
                        '" . $post->category . "', 
                        '" . $post->urlImg . "')";
//            $query = "INSERT INTO `post` (`id`, `title`, `description`, `idCategory`, `imgURL`) VALUES (NULL, 'test' , 'testDesc', '2', 'testURL')";
            
            $DB->queryExec($query, false);

            return $query;
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

            $DB = new DBHelper();
            $query = "SELECT * FROM post";

            $result = $DB->queryExec($query,true);

            return $result;
        }

        public function getPost($categoryId) {
            $result = new Post();

            $DB = new DBHelper();

            $query = "SELECT * FROM post WHERE id =" . $categoryId;

            $data = $DB->queryExec($query, true);

            $result->id = $categoryId;
            $result->title = $data[0][1];
            $result->category = $data[0][2];
            $result->description = $data[0][3];
            $result->urlImg = $data[0][4];

            return $result;
        }
    }

?>