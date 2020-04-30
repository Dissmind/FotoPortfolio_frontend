<?php

require_once 'API.php';

$typeRequest = $_GET['typeRequest'];

$API = new API();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

switch ($typeRequest) {
    case 'authorization':

        $account = new Account();

//        $account->login = $_GET['login'];
//        $account->password = $_GET['password']; TODO: post request

        $API->authorization($account);
        break;

    case 'addPost':
        $post = new Post();

        $post->title           = $_GET['title'];
        $post->category        = $_GET['idCategory'];
        $post->description     = $_GET['description'];
        $post->urlImg          = $_GET['imgURL'];

        echo $post->id . '<br />';
        echo $post->title . '<br />';
        echo $post->category . '<br />';
        echo $post->description . '<br />';
        echo $post->urlImg . '<br />';


        echo $API->addPost($post);
        break;

    case 'deletePost':
        $id = $_GET['id'];

        $API->deletePost($id);

        break;

    case 'updatePost':
        $post = new Post();

//        $post->id       = $_GET['id'];
//        $post->category = $_GET['category'];
//        $post->desc     = $_GET['desc'];
//        $post->urlImg   = $_GET['category'];

        $API->updatePost($post);
        break;

    case 'getCategoryAll':
        $data = $API->getCategoryAll();



        break;

    case 'getPost':
        $id = $_GET['id'];

        $data = $API->getPost($id);

        echo json_encode($data);

        break;
}

?>