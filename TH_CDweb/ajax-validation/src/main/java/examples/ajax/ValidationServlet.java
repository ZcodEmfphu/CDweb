package examples.ajax;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.*;

@WebServlet("/validate")
public class ValidationServlet extends HttpServlet {

	private ServletContext context;
	private HashMap<String, String> accounts = new HashMap<String, String>();

	// Initialize the "accounts" hashmap. For the sake of this exercise,
	// two accounts are created with names "greg" and "duke" during
	// initialization of the Servlet.

	public void init(ServletConfig config) throws ServletException {
		this.context = config.getServletContext();
		accounts.put("greg", "account data");
		accounts.put("duke", "account data");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		// Extract the data of the input form field whose name is "id"
		String targetId = request.getParameter("id");
		// Send back either "<valid>true</valid>" or "<valid>false</valid>"
		// XML message depending on the validity of the data that was entered.
		// Note that the content type is "text/xml".
		
		if ((targetId != null) && !accounts.containsKey(targetId.trim())) {
			response.setContentType("text/xml");
			response.setHeader("Cache-Control", "no-cache");
			response.getWriter().write("<valid>true</valid>");
		} else {
			response.setContentType("text/xml");
			response.setHeader("Cache-Control", "no-cache");
			response.getWriter().write("<valid>false</valid>");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		String targetId = request.getParameter("id");
		if ((targetId != null) && !accounts.containsKey(targetId.trim())) {
			accounts.put(targetId.trim(), "account data");
			request.setAttribute("targetId", targetId);
			context.getRequestDispatcher("/success.jsp").forward(request, response);
		} else {
			context.getRequestDispatcher("/error.jsp").forward(request, response);
		}
	}

}
