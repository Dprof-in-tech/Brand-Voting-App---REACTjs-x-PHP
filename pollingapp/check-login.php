<?php
session_start();

// get-username.php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];

    // Check if the username is not empty
    if (!empty($username)) {
        // Prepare the SQL statement
        $sql = "SELECT login_check, login_time FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if the user exists in the database
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $loginCheck = $row['login_check'];
            $loginTime = strtotime($row['login_time']);

            // Check if login_check is 1 and time difference is more than one hour (3600 seconds)
            if ($loginCheck == 1 && (time() - $loginTime) > 300) {
                echo json_encode(['status' => 'logged-out', 'message' => 'User logged out']);
            } else {
                echo json_encode(['status' => 'success', 'message' => 'User logged in']);
            }
        } else {
            echo $username;
            echo json_encode(['status' => 'failure', 'message' => 'User not found']);
        }

        // Close the database connection
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(['status' => 'failure', 'message' => 'Username is empty']);
    }
} else {
    echo json_encode(['status' => 'failure', 'message' => 'Invalid request method']);
}
?>
