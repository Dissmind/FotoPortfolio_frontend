<?php

require_once 'API.php';

$typeRequest = $_GET['typeRequest'];

$API = new API();

switch ($typeRequest) {
    case 'authorization':

        $account = new Account();

//        $account->login = $_GET['login'];
//        $account->password = $_GET['password']; TODO: post request

        $API->authorization($account);
        break;

    case 'addPost':
        $post = new Post();

        $post->id       = $_GET['id'];
        $post->category = $_GET['category'];
        $post->desc     = $_GET['desc'];
        $post->urlImg   = $_GET['category'];

        $API->addPost($post);
        break;

    case 'deletePost':
        $id = $_GET['id'];

        $API->deletePost($id);
        break;

    case 'updatePost':
        $post = new Post();

        $post->id       = $_GET['id'];
        $post->category = $_GET['category'];
        $post->desc     = $_GET['desc'];
        $post->urlImg   = $_GET['category'];

        $API->updatePost($post);
        break;

    case 'getCategoryAll':
        $API->getCategoryAll();
        break;

    case 'getPost':
        $id = $_GET['id'];

        $API->getPost();
        break;
}

?>