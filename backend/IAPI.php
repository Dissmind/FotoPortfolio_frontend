<?php

interface IAPI {
    public function authorization($Account);  // AccessStatus
    public function addPost($Post); // Status


    /*
     * Delete photo-post by id | Method GET
     *
     * $typeRequest - must be deletePost
     * $id - post id for deleting
     *
     * Answer: null
     *
     * Example request: http://photoportfolio/backend/apiManager.php?typeRequest=deletePost&id=2
     * */
    public function deletePost($Id); // Status
    public function updatePost($Post); // Status
    public function getCategoryAll(); // Category
    public function getPost($CategoryId); // Post
}



class Account {
    public $login; // string
    public $password; // string
}


class AccessStatus {
    public $access; // boolean
}


class Status {
    public $status;
}


class Category {
    public $id; // number
    public $categoryName; // string
}


class Post {
    public $id; // number
    public $category; // string
    public $urlImg; // string
    public $desc; // string
}

?>
