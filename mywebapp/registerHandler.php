<?php
    echo '<br />Submitted Data<hr />';
    var_dump($_POST);


    echo ('<br />');
    $postedData = $_POST['data'];
    $email = $postedData['email'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $postcode = $_POST["postcode"];
    $telephone = $_POST["telephone"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirmpassword"];


    $data = $_POST['data'];
    $serializedData = serialize($data);

    // write
    $handle = fopen(__DIR__ . '/data.txt', 'w');
    fwrite($handle, $serializedData);
    fclose($handle);

    // get the file content
    $string = file_get_contents(__DIR__ . '/data.txt');
    $data = unserialize($string); // unserialize it
    $output = '';
    foreach ($data as $key => $value) {
        $field = ucwords($key); // make first letter of each word uppercase
        $output .= "$field: $value" . '<br>';
    }
    echo $output;

?>