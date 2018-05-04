<?php 
function getBooks()
{
    $qry_stmt = "SELECT title, thumbnail, publishedDate, author, ratingsCount, averageRating FROM books;";
    $rspns = $GLOBALS['conn']->query($qry_stmt);
    if ($rspns && $rspns->num_rows > 0) {
        while ($row = $rspns->fetch_array()) {
            echo '<li> <p class = "titles" >' . $row["title"] . '</p>' . 
                    '<img class = "imgs" src="' . $row["thumbnail"] . '" width="125" height="150">' . 
                    '<p class = "authors" >' . $row["author"] . '</p>'. 
                    '<p class = "dates" >' . $row["publishedDate"] . '</p>' . 
                    '<p class = "reviews" >' . $row["ratingsCount"] . '</p>' .   
                    '<p class = "rates" >' . $row["averageRating"] . '</p>' . '</li>';
        }
    } else {
        echo '<h2>book table is empty!</h2>';
    }
}
?>