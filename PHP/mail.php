<?php
 header("Access-Control-Allow-Origin:localhost/Projet/JS/main.js");
 header("Access-Control-Allow-Origin: ../JS/main.js");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';
 
$mail = new PHPMailer(true);

$email = $_POST['email'];
$name = $_POST['name'];
$object = "Vide";
$message = $_POST['message'];

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'myportfoliogbt@gmail.com';                     // SMTP username
    $mail->Password   = 'Thomasfull1';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('Ne-pas-repondre@GBT.com', 'Test');
    $mail->addAddress('myportfoliogbt@gmail.com', 'Joe User');     // Add a recipient
   // $mail->addReplyTo('info@example.com', 'Information');
   // $mail->addCC('cc@example.com');
  //  $mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $name.' vous a contacter';
    $mail->Body    = $message.'  '.$email;
    $mail->AltBody = 'Merci';
    echo 'totot';
    $mail->send();
    echo 'Message has been sentt';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
    
?>