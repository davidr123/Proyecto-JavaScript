<?php
$data = $_REQUEST['enviodatos'];
$datos = json_encode($data);
$file = 'ejemplo.json';
echo $datos;

if (isset($datos)) {
    $fp = fopen($file, 'w');
    fwrite($fp, utf8_decode($datos));
    fclose($fp);
    //chmod($file, 0777);
    echo 'Se ha guardado correctamente en el Json!';
}
else {
    echo 'No hay datos que guardar!';
}
?>