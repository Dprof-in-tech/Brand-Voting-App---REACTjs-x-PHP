<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        if (password_verify($password, $row['password'])) {
            $loginsql = "UPDATE users SET login_check = 1, login_time = CURRENT_TIMESTAMP WHERE username = ?";
            $loginstmt = $conn->prepare($loginsql);
            $loginstmt->bind_param('s', $username);
            
            if ($loginstmt->execute()){
                echo json_encode(['status' => 'success']);
            }
        } else {
            echo json_encode([
                'status' => 'failure',
                'debug_info' => [
                    'hashed_password' => $row['password'],
                    'provided_password' => $password,
                ]
            ]);
        }
    } else {
        echo json_encode(['status' => 'username_not_found']);
    }

    $stmt->close();
    $conn->close();
}
?>
