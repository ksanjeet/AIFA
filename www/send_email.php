<?php
// Set the recipient email address
$to_email = "info@aifaev.de";

// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = trim($_POST["message"]); // Message content might contain HTML, so no FILTER_SANITIZE_STRING

    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid input - send an error response
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Please fill in all required fields and provide a valid email address."]);
        exit;
    }

    // Prepare the email content
    $email_subject = "AIFA e.V. Contact Form: " . $subject;
    $email_body = "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n\n";
    $email_body .= "Message:\n" . $message;

    // Set email headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send the email
    if (mail($to_email, $email_subject, $email_body, $headers)) {
        // Email sent successfully
        http_response_code(200); // OK
        echo json_encode(["success" => true, "message" => "Thank you for your message! We will get back to you soon."]);
    } else {
        // Email sending failed
        http_response_code(500); // Internal Server Error
        echo json_encode(["success" => false, "message" => "Oops! Something went wrong and we couldn't send your message."]);
    }

} else {
    // If accessed directly without POST request
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
}
?>
