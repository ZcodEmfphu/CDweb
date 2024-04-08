package examples.ajax;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/validate")
public class ValidationServlet extends HttpServlet {

    private HashMap<String, String> accounts = new HashMap<>();

    @Override
    public void init() throws ServletException {
        accounts.put("greg", "account data");
        accounts.put("duke", "account data");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String targetId = request.getParameter("id");
        CompletableFuture<Boolean> isValidUserFuture = CompletableFuture.supplyAsync(() -> isValidUser(targetId));
        isValidUserFuture.thenAccept(isValid -> {
            try {
                response.setContentType("text/xml");
                response.setHeader("Cache-Control", "no-cache");
                PrintWriter writer = response.getWriter();
                writer.write("<valid>" + isValid + "</valid>");
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String targetId = request.getParameter("id");
        CompletableFuture<Boolean> isValidUserFuture = CompletableFuture.supplyAsync(() -> isValidUser(targetId));
        isValidUserFuture.thenAccept(isValid -> {
            try {
                if (isValid) {
                    accounts.put(targetId, "account data");
                    request.setAttribute("targetId", targetId);
                    request.getRequestDispatcher("/success.jsp").forward(request, response);
                } else {
                    request.getRequestDispatcher("/error.jsp").forward(request, response);
                }
            } catch (ServletException | IOException e) {
                e.printStackTrace();
            }
        });
    }

    private boolean isValidUser(String targetId) {
        return targetId != null && !accounts.containsKey(targetId.trim());
    }
}
