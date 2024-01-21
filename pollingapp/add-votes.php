<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once "db.php";
// Assuming you're using POST method to send data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $brand = $_POST['brand'];
    $username = $_POST['username'];

    // Check if the user has already voted for this brand
    $selectSql = "SELECT * FROM votes WHERE voter = ?";
    $selectStmt = $conn->prepare($selectSql);
    $selectStmt->bind_param('s', $username);
    $selectStmt->execute();
    $selectResult = $selectStmt->get_result();

    if ($selectResult->num_rows > 0) {
        // User has already voted for this brand, update the vote quantity
        echo json_encode(['status' => 'failure', 'message' => 'User already voted.']);
    } else {
        // User has not voted for this brand yet, insert a new vote
        $insertSql = "INSERT INTO votes (voter, brand, vote_quantity) VALUES (?, ?, 1)";
        $insertStmt = $conn->prepare($insertSql);
        $insertStmt->bind_param('ss', $username, $brand);

        if ($insertStmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Vote added successfully']);
        } else {
            echo json_encode(['status' => 'failure', 'message' => 'Failed to add vote']);
        }

        $insertStmt->close();
    }

    $selectStmt->close();
    $conn->close();
}
?>
