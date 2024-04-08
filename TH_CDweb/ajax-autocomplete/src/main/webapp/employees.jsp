<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
</head>
<body>
	<h1>Search Results</h1>
	<hr />

	<c:choose>
		<c:when test="${requestScope.employees == null}">
			<p>
				<font size="+2" color="red">Unable to locate any employees.</font>
			</p>
		</c:when>
		<c:otherwise>
			<c:forEach var="employee" begin="0" items="${requestScope.employees}">
				<p>
					<a href="autocomplete?action=lookup&id=${employee.id}">${employee.firstName}
						${employee.lastName}</a>
				</p>
			</c:forEach>
		</c:otherwise>
	</c:choose>
	<br />
	<p>
		<a href="index.jsp">Go back to the application home</a>.
	</p>
</body>
</html>

