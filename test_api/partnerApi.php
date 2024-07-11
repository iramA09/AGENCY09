<?php
include 'config.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //echo "<pre>";print_r($_POST);exit;
    $response = [];

    // Get form data
    $name = $_POST['name'] ?? '';
    $number = $_POST['number'] ?? '';
    $email = $_POST['email'] ?? '';
    $companyName = $_POST['companyName'] ?? '';
    $country = $_POST['country'] ?? '';
    $service = $_POST['service'] ?? '';
    $message = $_POST['message'] ?? '';
    $created_at   = date("Y-m-d");
    $token = $_POST['recaptcha_token'];
    // Validation
    $errors = [];

    if (empty($name)) {
        $errors['name'] = 'Name is required';
    }

    if (empty($number)) {
        $errors['number'] = 'number number is required';
    } elseif (!preg_match('/^\d{10}$/', $number)) {
        $errors['number'] = 'number number must be 10 digits';
    }

    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }

    if (empty($companyName)) {
        $errors['companyName'] = 'Company Name is required';
    }

    if (empty($country)) {
        $errors['country'] = 'Country is required';
    }

    if (empty($service)) {
        $errors['service'] = 'Service is required';
    }

    if (!empty($errors)) {
        sendResponse(0, $errors);
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

    $stmt = $conn->prepare("INSERT INTO `partner_with_us` (`name`, `number`, `email`, `company_name`, `country`, `service`, `message`, `created_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("ssssssss", $name, $number, $email, $companyName, $country, $service, $message, $created_at);


    // Execute statement
    if ($stmt->execute()) {
        $subject = "AGENCY09 | Thank You for Your Interest!";
        $e_message = " Dear ".$name.",<br><br>
    
            Thank you for filling out our partnership form. We appreciate your interest and <br>
            look forward to exploring opportunities together.<br><br>
            Team AGENCY09
        ";

        sendMail($email, $subject, $e_message, 1);
        // start Admin email
        // $admin_email = "abdul.agency09@gmail.com";
        $subject2 = "New Partnership Form Submission | A09 Website";
        $message2 = "Hello Team ,<br><br>

            We have received a new partnership form submission. Please find the details below:
            
            <br><br>
            
            Name : " . ucwords($name) . "<br>
            Email : " . $email . "<br>
            number : " . $number . "<br>
            Company Name : " . $companyName . "<br>
            Service : " . $service . "<br>
            Message : " . $message . "<br>
            
            <br><br>

            Please review the information and follow up as necessary.<br>
            
            Thanks & Regards<br>
            Team AGENCY09
        ";
        sendMail($admin_email, $subject2, $message2, 1);
        //echo json_encode($response);
        sendResponse(1, "Form submitted successfully");
    } else {
        sendResponse(0, "Failed to submit form");
    }
} else {
    sendResponse(0, "Invalid request method");
}
?>


<!-- // Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO `get_in_touch` (`name`, `number`, `email`, `message`) VALUES (?, ?, ?, ?)");

// Bind parameters
$stmt->bind_param("ssss", $name, $number, $email, $message);

// Execute statement
if ($stmt->execute()) {
    sendResponse(1, "Form submitted successfully");
} else {
    sendResponse(0, "Failed to submit form");
}

// Close connections
$stmt->close();
$conn->close(); -->