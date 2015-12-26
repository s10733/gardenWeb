<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of connection
 *
 * @author Łukasz
 */

class connection{

    protected $db;
    private $db_name = "";
    private $user_name = "";
    private $user_pass = "";
    private $host = "";
    public  $conn = NULL;
    public function Connection(){
        try{
            $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name.";charset=utf8", $this->user_name, $this->user_pass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e){
                echo 'ERROR: ' . $e->getMessage();
                }    
            $this->db = $this->conn;
    }
    
    public function getConnection(){
        return $this->db;
    }
    public function closeConnection(){
        return $this->conn = null;
    }
}

?>
