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
    $mobile = $_POST['mobile'] ?? '';
    $email = $_POST['email'] ?? '';
    $experience = $_POST['experience'] ?? '';
    $qualification = $_POST['qualification'] ?? '';
    $department = $_POST['department'] ?? '';
    $industry = $_POST['industry'] ?? '';
    $current_location = $_POST['current_location'] ?? '';
    $current_ctc = $_POST['current_ctc'] ?? '';
    $app_message = $_POST['app_message'] ?? '';
    $created_at   = date("Y-m-d");
    $token = $_POST['recaptcha_token'];
    // Validation
    $errors = [];

    if (empty($name)) {
        $errors['name'] = 'Name is required';
    }

    if (empty($mobile)) {
        $errors['mobile'] = 'Mobile number is required';
    } elseif (!preg_match('/^\d{10}$/', $mobile)) {
        $errors['mobile'] = 'Mobile number must be 10 digits';
    }

    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }

    if (empty($experience)) {
        $errors['experience'] = 'Experience is required';
    }

    if (empty($qualification)) {
        $errors['qualification'] = 'Qualification is required';
    }

    if (empty($department)) {
        $errors['department'] = 'Department is required';
    }

    if (empty($industry)) {
        $errors['industry'] = 'Industry is required';
    }

    if (empty($current_location)) {
        $errors['current_location'] = 'Current location is required';
    }

    if (empty($current_ctc)) {
        $errors['current_ctc'] = 'Current CTC is required';
    } elseif (!is_numeric($current_ctc)) {
        $errors['current_ctc'] = 'Current CTC must be a number';
    } else if ($current_ctc > 500000) {
        $errors['current_ctc'] = 'Current CTC cannot exceed 500,000';
    }

    if (!empty($errors)) {
        $response['errors'] = $errors;
        echo json_encode($response);
        exit;
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

    $file_name_ext = '';
	if(isset($_FILES['resume']) && !empty($_FILES['resume']['name'])){
        $allowed_ext = ["doc", "docx", "pdf"];

        $file_extension = pathinfo($_FILES["resume"]["name"], PATHINFO_EXTENSION);
        if (!in_array($file_extension, $allowed_ext)) {
            sendResponse(0, 'Please select word or pdf file only.');
        }
        
        // email file read
        //Get uploaded file data using $_FILES array
        $tmp_name    = $_FILES['resume']['tmp_name']; // get the temporary file name of the file on the server
        $f_name      = $_FILES['resume']['name'];  // get the name of the file
        $size        = $_FILES['resume']['size'];  // get size of the file for size validation
        $type        = $_FILES['resume']['type'];  // get type of the file
        $error       = $_FILES['resume']['error']; // get the error (if any)

        //read from the uploaded file & base64_encode content
        $handle = fopen($tmp_name, "r");  // set the file handle only for reading the file
        $content = fread($handle, $size); // reading the file
        fclose($handle);                  // close upon completion
        // email file read
        
        $file_name = pathinfo($_FILES["resume"]["name"], PATHINFO_FILENAME);
        // $file_name = basename($_FILES['resume']['name'], );
        $file_name_ext = $file_name."-".time().".".$file_extension;

        //Define the target directory
        $targetDir = __DIR__ . '/assets/uploads/';

        // Check if the directory exists, if not, create it
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        $file_path 	=  	$targetDir.$file_name_ext;
        $move_photo 	= move_uploaded_file($_FILES['resume']['tmp_name'], $file_path);
    } else {
        sendResponse(0, 'Resume is required.');
    }

    $stmt = $conn->prepare("INSERT INTO `apply_now` (`name`, `mobile`, `email`, `experience`, `qualification`, `department`, `industry`, `current_location`, `current_ctc`, `app_message`, `file`, `created_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("ssssssssssss", $name, $mobile, $email, $experience, $qualification, $department, $industry, $current_location, $current_ctc, $app_message, $file_name_ext, $created_at);


    // Execute statement
    if ($stmt->execute()) {
        $subject = "Thank you for applying";
        $message = " Hi ".$name.", <br><br>
    
            We will review your application and let you know if you are eligible.<br>
            <br><br>
            Team AGENCY09
        ";

        sendMail($email, $subject, $message, 1);
        // start Admin email
        // $admin_email = "abdul.agency09@gmail.com";
        $subject2 = "New job application";
        $message2 = "Hello Team ,<br><br>

            You have received a new job application via the website. Below are the details.<br>
            
            <br><br>
            
            Name : " . ucwords($name) . "<br>
            Email : " . $email . "<br>
            Mobile : " . $mobile . "<br>
            Experience : " . $experience . "<br>
            Qualification : " . $qualification . "<br>
            Department : " . $department . "<br>
            Industry : " . $industry . "<br>
            Current Location : " . $current_location . "<br>
            Current CTC : " . $current_ctc . "<br>
            
            <br><br>

            Do get in touch with the applicant.<br>
            
            Thank you,<br>
            Team AGENCY09
        ";
        sendMail($admin_email, $subject2, $message2, 1, '', $file_name_ext);
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
$stmt = $conn->prepare("INSERT INTO `get_in_touch` (`name`, `mobile`, `email`, `message`) VALUES (?, ?, ?, ?)");

// Bind parameters
$stmt->bind_param("ssss", $name, $mobile, $email, $message);

// Execute statement
if ($stmt->execute()) {
    sendResponse(1, "Form submitted successfully");
} else {
    sendResponse(0, "Failed to submit form");
}

// Close connections
$stmt->close();
$conn->close(); -->