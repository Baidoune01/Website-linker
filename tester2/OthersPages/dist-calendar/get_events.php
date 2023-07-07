<?php
    header('Content-Type: application/json');
    
    // Database Connection
    $servername = "localhost";
    $username = "root"; // replace with your database username
    $password = ""; // replace with your database password
    $dbname = "phpnewsfeed";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // SQL Query
        $stmt = $conn->prepare("SELECT * FROM events");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

        // Prepare the data
        $data = array();
        foreach ($stmt->fetchAll() as $event) {
            $year = date("Y", strtotime($event['event_date']));
            $month = date("n", strtotime($event['event_date']));
            $day = date("j", strtotime($event['event_date']));

            if (!isset($data[$year])) {
                $data[$year] = array();
            }
            if (!isset($data[$year][$month])) {
                $data[$year][$month] = array();
            }
            if (!isset($data[$year][$month][$day])) {
                $data[$year][$month][$day] = array();
            }

            $data[$year][$month][$day][] = array(
                "startTime" => $event['start_time'],
                "endTime" => $event['end_time'],
                "text" => $event['title']
            );
        }

        echo json_encode($data);

    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null; // Close connection
?>
