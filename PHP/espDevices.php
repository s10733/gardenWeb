<?php
include_once './connection.php';
class espDevices {
    private $connDB;
    public $dataDB = array();
    public function __construct(connection $con) {
        $this->condb = $con->getConnection();
    }
    
    function get_devices($from){
        $stmt = $this->condb->query("SELECT * FROM ".$from);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($result as $row){
           array_push($this->dataDB, $row);
           
       }
       echo json_encode($this->dataDB);
    }
    function menu($conn){
        
        switch($_POST['menu']){
           
            case 0:   
                $device = new espDevices($conn);
                $device->get_devices("espDevices");
                break;
        }
    }
  
}
$conn = new connection();
$menu = new espDevices($conn);
$menu->menu($conn);
$conn->closeConnection();

