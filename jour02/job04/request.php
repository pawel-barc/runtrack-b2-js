<?php

$host = 'localhost';
$dbname = 'lp_official';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}

function insert_my_student(string $email, string $fullname, string $gender, int $grade_id, DateTime $birthdate): bool {
    global $pdo;

    $sql = "INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (:email, :fullname, :gender, :grade_id, :birthdate)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':fullname', $fullname);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':grade_id', $grade_id);
    $stmt->bindParam(':birthdate', $birthdate->format('Y-m-d'));

    if ($stmt->execute()) {
        echo 'Student registered successfully';
        return true;
    } else {
        echo 'Error registering student';
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['student-mail'];
    $fullname = $_POST['student-fullname'];
    $gender = $_POST['student-gender'];
    $grade_id = (int)$_POST['student-grade'];
    $birthdate = new DateTime($_POST['student-birthday']);
  
    insert_my_student($email, $fullname, $gender, $grade_id, $birthdate);
}
?>
