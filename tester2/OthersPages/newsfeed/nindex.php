<!DOCTYPE html>
<html>
<head>
    <title>News Feed</title>
</head>
<body>
    <?php
        // Database Connection
        $servername = "localhost";
        $username = "root"; // replace with your database username
        $password = ""; // replace with your database password
        $dbname = "phpnewsfeed";

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // SQL Query
            $stmt = $conn->prepare("SELECT * FROM news");
            $stmt->execute();

            // set the resulting array to associative
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

            // Displaying News
            foreach ($stmt->fetchAll() as $news) {
                echo "<div class='news-item'>";
                echo "<h2>" . $news['title'] . "</h2>";
                echo "<img src='" . $news['img'] . "' alt='news image'>";
                echo "<p>" . $news['description'] . "</p>";
                echo "<a href='" . $news['url_link'] . "'>Read more</a>";
                echo "<p>Published on: " . $news['published_date'] . "</p>";
                echo "</div>";
            }
        } catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        $conn = null; // Close connection
    ?>
</body>
</html>
