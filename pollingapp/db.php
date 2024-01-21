<?php

// Database configuration
$servername = "localhost";  
$username = "root";
$password = ""; 
$database = "pollingapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Uncomment the following line if you want to display a success message
// echo "Connected successfully";

// It's a good practice to close the database connection when done
// $conn->close();

?>
