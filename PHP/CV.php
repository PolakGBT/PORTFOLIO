<?php
$file = "../Image/CV3.png";
header('Content-Type: application/octet-stream');
header('Content-Transfer-Encoding: Binary');
header('Content-disposition: attachment; filename="' . basename($file) . '"');
readfile($file);
?>