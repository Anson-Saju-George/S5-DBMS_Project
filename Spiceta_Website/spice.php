<?php
$servername = "localhost"; // or your server IP
$username = "root"; // your MySQL username
$password = "1965"; // your MySQL password
$dbname = "spice.sql"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
