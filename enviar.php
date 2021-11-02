<?php

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellido'];
$email = $_POST['email'];
$edad =$_POST['edad'];
$mensaje =$_POST['mensaje'];


$header = 'From: ' . $mail . "\r\n";
$header .= "x-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
$mensaje = "Su e-mail es" . $email . "\r\n";
$mensaje = "Su edad es" . $edad .  "\r\n";
$mensaje = "Mensaje " . $_POST['mensaje'] ."\r\n";
$mensaje = "Enviado el: " .date('d/m/y', time());

$para = 'argentina_02@hotmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto ulf8_decode($mensaje), $header);

header("Location:index.html");


?>