<?php
$type=isset($_GET['type'])?$_GET['type']:'';
$allowed=['pragya','sedan','bus','backgrounds'];
if(!in_array($type,$allowed)){echo json_encode([]);exit;}
$dir="../uploads/".$type."/";
$images=array();
if(is_dir($dir)){
    $files=scandir($dir);
    foreach($files as $f){
        if(in_array(strtolower(pathinfo($f,PATHINFO_EXTENSION)),['jpg','jpeg','png','gif'])){
            $images[]="uploads/$type/$f";
        }
    }
}
echo json_encode($images);
?>