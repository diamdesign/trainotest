<?php 

require("../php/db.php");

// Set CORS headers to allow requests from localhost
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON input
    $input = file_get_contents('php://input');
    $formData = json_decode($input, true);

    // Extract form data
    $title = $formData['title'] ?? null;
    $type = $formData['type'] ?? null;
    $description = $formData['description'] ?? null;
    $truefalse = $formData['truefalse'] ?? null;

    // Prepare the SQL statement
    $sql = "INSERT INTO testar (title, description, user, truefalse) VALUES (:title, :description, :user, :truefalse)";
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':user', $type);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':truefalse', $truefalse, PDO::PARAM_BOOL);

    // Execute the statement
    if ($stmt->execute()) {
        // Send a success response
        echo json_encode(['status' => 'success']);
    } else {
        // Send an error response
        echo json_encode(['status' => 'error', 'message' => 'Failed to insert data']);
    }
} else {
    // Send an error response if the request method is not POST
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

?>