<?php
// Set the recipient email address for membership applications
$to_email = "anmeldung@aifaev.de";

// Check if the form was submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $memberType = filter_var(trim($_POST["member-type"]), FILTER_SANITIZE_STRING);
    $firstName = filter_var(trim($_POST["first-name"]), FILTER_SANITIZE_STRING);
    $lastName = filter_var(trim($_POST["last-name"]), FILTER_SANITIZE_STRING);
    $numFamilyMembers = filter_var(trim($_POST["num-family-members"]), FILTER_SANITIZE_NUMBER_INT);
    $volunteerAvailability = isset($_POST["volunteer-availability"]) ? "Yes" : "No";

    // Basic validation
    if (empty($memberType) || empty($firstName) || empty($lastName)) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Please fill in all required membership fields."]);
        exit;
    }

    // Prepare the email content
    $email_subject = "AIFA e.V. New Membership Application: " . $firstName . " " . $lastName;
    $email_body = "New Membership Application Received:\n\n";
    $email_body .= "Membership Type: " . $memberType . "\n";
    $email_body .= "First Name: " . $firstName . "\n";
    $email_body .= "Last Name: " . $lastName . "\n";
    if ($memberType === "family") {
        $email_body .= "Number of Family Members: " . $numFamilyMembers . "\n";
    }
    $email_body .= "Available to Volunteer: " . $volunteerAvailability . "\n\n";
    $email_body .= "Please log in to Firebase to view full details and manage this application.";

    // Set email headers
    // Note: The 'From' address should ideally be a valid email address on your domain
    // to prevent emails from being marked as spam. Using a generic 'noreply' address
    // is often a good practice here, and including Reply-To for the applicant's email
    $headers = "From: noreply@aifaev.de\r\n"; // Use a valid email on your domain
    // If you had an email field in the membership form, you could use it here:
    // $headers .= "Reply-To: " . $applicantEmail . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send the email
    if (mail($to_email, $email_subject, $email_body, $headers)) {
        http_response_code(200); // OK
        echo json_encode(["success" => true, "message" => "Membership application sent successfully."]);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["success" => false, "message" => "Oops! Something went wrong sending the membership application email."]);
    }

} else {
    // If accessed directly without POST request
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
}
?>
