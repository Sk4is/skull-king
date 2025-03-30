<?php
header('Content-Type: application/json');

$servername = "sql211.infinityfree.com";
$username = "if0_38631548"; // Tu usuario real de InfinityFree
$password = "x6vWdBlaag"; // Tu contraseña real
$dbname = "if0_38631548_skullking"; // Tu base de datos real

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

$sql = "SELECT * FROM jugador"; // Ajusta esto según tu tabla
$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
