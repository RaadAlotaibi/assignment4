<?php

$servername = "localhost";
$username = "ralotaibi";
$password = "";
$database = "mybooks_db";
$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    echo "Failed to connect to database!";
    die("Connection failed: ");
}
?>