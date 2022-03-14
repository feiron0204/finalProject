<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>THE C SHOP 더 C 샵</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- jquery -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- 아이콘 -->
<script src="https://kit.fontawesome.com/6004efe7d6.js" crossorigin="anonymous"></script>

<link rel="stylesheet" href="../css/nav.css" />
<link rel="stylesheet" href="../css/main.css" />
<link rel="stylesheet" href="../css/footer.css" />

</head>
	
<body>
	
	<nav class="fixed-top">
		<jsp:include page="/WEB-INF/component/nav/nav.jsp"/>
	</nav>
	<div class='main' style="margin-top:57px">
		<jsp:include page="/WEB-INF/component/main/main.jsp"/>
	</div>
	<div class='footer'>
		<jsp:include page="/WEB-INF/component/footer/footer.jsp"/>
	</div>

	<script type="text/javascript" src="../js/nav.js"></script>
	<script type="text/javascript" src="../js/footer.js"></script>
</body>
</html>