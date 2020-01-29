<?php


use \Firebase\JWT\JWT;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;



require 'vendor/autoload.php';
$app = new \Slim\App;

$app->get('/hello','toto');
$app->get('/products', 'getAllProducts');
$app->get('/produit/{id}', 'getProduit');
$app->get('/searchResults/{nom}', 'getSearchResult');

$app->post('/inscription', 'inscription');
$app->post('/login', 'login');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


function toto($request,$response,$args){

    return $response->write("toto");
}


function getSearchResult($request, $response,$args){
    $idArticle = $args['nom'];
    $json_str = array();
    if( $id = mysqli_connect("localhost","root","") ) {
        if( $id_db = mysqli_select_db($id,"projetmet") ) {
        $requet = 'SELECT * FROM users WHERE nom LIKE "%' . $idArticle. '%"';
            if($result = mysqli_query($id,$requet)) {
                while($ligne = mysqli_fetch_array($result)) {
                    array_push($json_str,array(
                        "id" => $ligne["idUser"],
                        "nom" => $ligne["nom"],
                        "prenom"=>$ligne["prenom"],
                        "prix" => $ligne["prix"],
                    ));
                }
            } else {
                echo "Erreur de requête de base de données.";
            } 
        } else {
            die("Echec de connexion à la base.");
        }
           mysqli_close($id);
        } else {
            die("Echec de connexion au serveur de base de données.");
        }
        $json = json_encode($json_str);
    return $response->write($json);
}


function getProduit($request, $response,$args){
    $idArticle = $args['id'];
    $json_str = array();
    if( $id = mysqli_connect("localhost","root","") ) {
        if( $id_db = mysqli_select_db($id,"projetmet") ) {
        $requet = 'SELECT * FROM users WHERE idUser LIKE "' . $idArticle. '"' ;
            if($result = mysqli_query($id,$requet)) {
                while($ligne = mysqli_fetch_array($result)) {
                    array_push($json_str,array(
                        "id" => $ligne["idUser"],
                        "photo"=>$ligne['nomPhoto'],
                        "nom" => $ligne["nom"],
                        "prenom"=>$ligne["prenom"],
                        "prix" => $ligne["prix"],
                    ));
                }
            } else {
                echo "Erreur de requête de base de données.";
            } 
        } else {
            die("Echec de connexion à la base.");
        }
           mysqli_close($id);
        } else {
            die("Echec de connexion au serveur de base de données.");
        }
        $json = json_encode($json_str);
    return $response->write($json);
}


function getAllProducts($request, $response,$args){
    $json_str = array();
    if( $id = mysqli_connect("localhost","root","") ) {
        if( $id_db = mysqli_select_db($id,"projetmet") ) {
        $requet = "SELECT * FROM users";

            if($result = mysqli_query($id,$requet)) {
                while($ligne = mysqli_fetch_array($result)) {
                    array_push($json_str,array(
                        "id" => $ligne["idUser"],
                        "photo"=>$ligne['nomPhoto'],
                        "nom" => $ligne["nom"],
                        "prenom"=>$ligne["prenom"],
                        "prix" => $ligne["prix"],
                    ));
                }
            } else {
                echo "Erreur de requête de base de données.";
            } 
        } else {
            die("Echec de connexion à la base.");
        }
           mysqli_close($id);
        } else {
            die("Echec de connexion au serveur de base de données.");
        }
        $json = json_encode($json_str);
    return $response->write($json);
}



function inscription(Request $request, Response $response, array $args)  
{

    $body = $request->getParsedBody(); // Parse le body

    $link = mysqli_connect("localhost", "root", "", "projetmet");
    $sql="INSERT INTO users(nom, prenom, adresse,mail,tel,prix,pseudo,mdp) VALUES ('" . $body['nom'] . "','" . $body['prenom'] . "', '" . $body['adresse'] . "', '" . $body['telephone'] . "','" . $body['email'] . "', 20,'" . $body['login'] . "','" . $body['mdp'] . "')";    //$sql = "INSERT INTO users(nom, prenom, adresse,mail,tel,prix,pseudo,mdp) VALUES ('Paul','Peter', 'adresse', 'peterparker@mail.com','07799879','20','Pseudo','123')"; 
    if (mysqli_query($link, $sql)) {
        echo "Records inserted successfully.";
    } else {
       echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    }
              
}

const SECRET = "makey1234567";
$token = new \Slim\Middleware\JwtAuthentication([
    "path" => "/api/secure",
    "secure" => false,
    "passthrough" => ["/login"],
    "secret" => SECRET,
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]);


$app->add($token);

function login($request, $response, $args) {

    $body = $request->getParsedBody();
    $userid = $body['login'] ;
    $email = $body['mdp'];
 
        if( $id = mysqli_connect("localhost","root","") ) {
            if( $id_db = mysqli_select_db($id,"projetmet") ) {
                
                $requet = 'SELECT pseudo,mdp FROM users WHERE pseudo LIKE "' . $userid . '"';
                if($result = mysqli_query($id,$requet)) {
               $ligne = mysqli_fetch_array($result);
                if ($ligne['mdp'] == $body['mdp']){
                    $issuedAt = time();
                    $expirationTime = $issuedAt + 60; // jwt valid for 60 seconds from the issued time
                    $payload = array(
                        'userid' => $userid,
                        'iat' => $issuedAt,
                        'exp' => $expirationTime
                    );
                    $token_jwt = JWT::encode($payload,SECRET, "HS256");
                    $data = array('name' => 'Emma', 'age' => 48,'token' => $token_jwt);
                }
                $response = $response->withHeader("Authorization", "Bearer {$token_jwt}")->withHeader("Content-Type", "application/json");

                $data = array('name' => 'Emma', 'age' => 48,'token' => $token_jwt);
                return $response->withHeader("Content-Type", "application/json")->withJson($data);
                } else {
                echo "Erreur de requête de base de données.";
            } 
        } else {
            die("Echec de connexion à la base.");
        }
           mysqli_close($id);
        } else {
            die("Echec de connexion au serveur de base de données.");
        }

   
    }
    
//return $response->withHeader("Content-Type", "application/json")->withJson($data);}





$app->run();

?>