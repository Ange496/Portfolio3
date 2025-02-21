<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "votreemail@example.com"; 
    $subject = "Nouveau message de votre portfolio";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite.";
    }
}
?>
