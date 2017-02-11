package Register;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.mysql.jdbc.Statement;


@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String operation = request.getParameter("operation");
		if(operation.equals("add")){
			JSONObject obj = new JSONObject();
			int regId = Integer.parseInt(request.getParameter("rId"));
			String name = request.getParameter("name");
			String mail = request.getParameter("emailId");
			String phNo = request.getParameter("phNo");
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/register","root","root");
				Statement stmt = con.createStatement();
				String query = "insert into reg(rId,name,emailId,phNo) values("+regId+",'"+name+"','"+mail+"','"+phNo+"')";
				stmt.execute(query);
				obj.put("status", 1);
			} catch (Exception e) {
				// TODO: handle exception
			}
			
			
		}
		
	}

}
