<?php
include 'config.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Assuming you're expecting JSON data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

//echo "<pre>";print_r($input);exit;
// Validate JSON data
if ($input === null) {
    sendResponse(0, "Invalid JSON data");
}

// Accessing the form data
$name = isset($input['name']) ? trim($input['name']) : '';
$mobile = isset($input['mobile']) ? trim($input['mobile']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$service = isset($input['service']) ? trim($input['service']) : '';
$message = isset($input['message']) ? trim($input['message']) : ''; // Optional, as per your form
$token = isset($input['recaptcha_token']) ? trim($input['recaptcha_token']) : '';

$required_fields = [
    'name' => 'Name',
    'mobile' => 'Mobile',
    'email' => 'Email',
    'service' => 'service',
];

foreach ($required_fields as $key => $value) {
    if ($$key === '') {
        sendResponse(0, "$value is required");
    }
}

if ($mobile != '' && !preg_match('/^\d{10}$/', $mobile)) {
    sendResponse(0, 'Invalid mobile mobile');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(0, 'Invalid email');
}

if ($token) {
    //validate google recaptcha
    $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
    $recaptcha_secret = "6LelbAYqAAAAAN7MsKdOKCI-NrNybhfFR5v-I4wt";
    $recaptcha_response = $token;
    
    // Make and decode POST request:
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
    
    
    // print_r($recaptcha);
    // Take action based on the score returned:
    if ($recaptcha->success != true || $recaptcha->success != 1) {
        sendResponse(0, "Invalid captcha.");
    }

} else {
    sendResponse(0, 'Captcha is missing.');
}

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO `get_in_touch` (`name`, `mobile`, `email`, `service`, `message`) VALUES (?, ?, ?, ?, ?)");

// Bind parameters
$stmt->bind_param("sssss", $name, $mobile, $email, $service, $message);

// Execute statement
if ($stmt->execute()) {
    //Admin  Template
    $admin_subject = "New Enquiry : Contact Us";
    $admin_message = "Hello Team, <br><br>
                    
                    You have received new enquiry. Below are the details: <br>

                    Name : {$name} <br>
                    Mobile : {$mobile} <br>
                    Email : {$email} <br>
                    Service : {$service} <br>
                    Message : {$message} <br>

                    ";

    sendMail($admin_email, $admin_subject, $admin_message,1);

    //Customer Template
    $customer_subject = "Enquiry received";
    $customer_message = 
    "Hi ".ucfirst($name).",  <br><br>

    We have recieved your enquiry.  <br><br>

    Your details have been recorded and forwarded to the team.<br><br><br>


    Regards, <br>
    TEAM09
    ";

    sendMail($email, $customer_subject, $customer_message,1);
    sendResponse(1, "Form submitted successfully");
} else {
    sendResponse(0, "Failed to submit form");
}

// Close connections
$stmt->close();
$conn->close();
?>