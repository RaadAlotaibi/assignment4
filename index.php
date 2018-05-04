  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Assignment 3 RAAD ALOTAIBI</title>
    <link rel="stylesheet" href="style.css">
  </head>
  
  
  <body>
  
    <ul id='navbar'>
      <li><a href="#">Books</a></li>
      <li><a href="#">Music</a></li>
      <li><a href="#">Contact us!</a></li>
    </ul>
    
    <?php
       require_once('./connect.php');
       require ('./getBooks.php');
    ?>
    
    <div id="sort-wrap">
      <div>Sort By</div>
      <select id="sort-books">
        <option value="reviews">Reviews</option>
        <option value="rating">Rating</option>
      </select>
    </div>
    <ul id="books-list">
	  <?php getBooks() ?>
    </ul>
    <script src="script.js"></script>
    
  </body>
