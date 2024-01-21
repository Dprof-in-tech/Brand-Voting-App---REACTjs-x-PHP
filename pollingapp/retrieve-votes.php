<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once "db.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Prepare the SQL statement
    $sql = "SELECT * FROM votes";
    
    // Execute the SQL query
    $result = $conn->query($sql);

    // Check if any rows were returned
    if ($result->num_rows > 0) {
        // Fetch all rows as an associative array
        $votes = $result->fetch_all(MYSQLI_ASSOC);

        // Output the votes as JSON
        echo json_encode(['status' => 'success', 'votes' => $votes]);
    } else {
        // No votes found
        echo json_encode(['status' => 'success', 'votes' => []]);
    }

    // Close the connection
    $conn->close();
} else {
    // Invalid request method
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
