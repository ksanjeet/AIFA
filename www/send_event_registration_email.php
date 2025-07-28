<?php
// Set the recipient email address for event registrations
$to_email = "anmeldung@aifaev.de"; // You might want a specific email for events

// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $eventName = filter_var(trim($_POST["event-select"]), FILTER_SANITIZE_STRING);
    $firstName = filter_var(trim($_POST["reg-first-name"]), FILTER_SANITIZE_STRING);
    $lastName = filter_var(trim($_POST["reg-last-name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["reg-email"]), FILTER_SANITIZE_EMAIL);
    $numAttendees = filter_var(trim($_POST["num-attendees"]), FILTER_SANITIZE_NUMBER_INT);
    $dietaryNotes = filter_var(trim($_POST["dietary-notes"]), FILTER_SANITIZE_STRING);

    // Basic validation
    if (empty($eventName) || empty($firstName) || empty($lastName) || empty($email) || empty($numAttendees) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Please fill in all required event registration fields and provide a valid email address."]);
        exit;
    }

    // Prepare the email content
    $email_subject = "AIFA e.V. New Event Registration for: " . $eventName;
    $email_body = "New Event Registration Received:\n\n";
    $email_body .= "Event: " . $eventName . "\n";
    $email_body .= "Name: " . $firstName . " " . $lastName . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Number of Attendees: " . $numAttendees . "\n";
    $email_body .= "Dietary/Special Notes: " . ($dietaryNotes ?: "None") . "\n\n";
    $email_body .= "Please log in to Firebase to view full details and manage this registration.";

    // Set email headers
    $headers = "From: noreply@aifaev.de\r\n"; // Use a valid email on your domain
    $headers .= "Reply-To: " . $email . "\r\n"; // Allow direct reply to the registrant
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send the email
    if (mail($to_email, $email_subject, $email_body, $headers)) {
        http_response_code(200); // OK
        echo json_encode(["success" => true, "message" => "Event registration email sent successfully."]);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["success" => false, "message" => "Oops! Something went wrong sending the event registration email."]);
    }

} else {
    // If accessed directly without POST request
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
}
?>
