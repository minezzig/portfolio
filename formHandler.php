<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$comment = $_POST['comment'];

$email_from = 'info@gregminezzi.com';

$email_subject= 'New Form Submission';

$email_body= "User Name: $name.\n".
"User E-mail: $visitor_email.\n".
"User Comment: $comment .\n".

$to = 'gregminezzi@gmail.com';

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");
?>