<?php

interface IAPI {
    public function authorization($Account);  // AccessStatus

    /*
     *
     * Example request: http://photoportfolio/backend/apiManager.php
     *  ?typeRequest=addPost
     *  &id=3&title=test
     *  &description=testDesc
     *  &idCategory=2
     *  &imgURL=testURL
     * */
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

 // http://photoportfolio/backend/apiManager.php?typeRequest=getPost&id=2
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
    public $title; // string
    public $category; // string
    public $urlImg; // string
    public $description; // string
}

?>
