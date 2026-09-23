<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>XO Game - Game Menu</title>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/css/gameMenu.css">

    <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap"
          rel="stylesheet">
</head>

<body>

<div class="game-menu">

    <!-- CREATE ROOM -->
    <button class="game-option create-room"
            onclick="createRoom()">
        Create Room
    </button>

    <!-- JOIN ROOM -->
    <button class="game-option join-room"
            onclick="joinRoom()">
        Join Room
    </button>

    <!-- FIND MATCH -->
    <button class="game-option find-match"
            onclick="findMatch()">
        Find Match
    </button>
    
    <button class="back-button" onclick="goBack()">
        ← Back
    </button>

</div>

<script src="${pageContext.request.contextPath}/js/gameMenu.js"></script>

</body>
</html>