<?php

  /**
   * Newsletter subscription handler.
   * Uses native PHP mail() to avoid external dependencies.
   */

  $receiving_email_address = 'mekhabeh978@gmail.com';

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
  }

  $email = trim($_POST['email'] ?? '');
  if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Please enter a valid email address.');
  }

  $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';

  $subject = 'New newsletter subscription';
  $message = "New newsletter subscription:\n"
           . "Email: {$email}\n"
           . "Subscribe checkbox: {$subscribe}\n";

  $headers = "From: Newsletter <no-reply@costahospitality.com>\r\n";
  $headers .= "Reply-To: {$email}\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($receiving_email_address, $subject, $message, $headers)) {
    echo 'OK';
  } else {
    http_response_code(500);
    echo 'Unable to send email at the moment. Please try again later.';
  }
?>
