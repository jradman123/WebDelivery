package services;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Manager;
import beans.Restaurant;
import beans.User;
import dao.ManagerDAO;
import enums.Role;



@Path("/managers")
public class ManagerService {

	
	@Context
	ServletContext ctx;
	
	
	public ManagerService() {
		
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("managerDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("managerDAO", new ManagerDAO(contextPath));
		}
	}
	
	@POST
	@Path("/registration")
	@Produces(MediaType.TEXT_HTML)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registration(Manager newManager) {
		System.out.println("Manager object Ive recieved is : " + newManager);
		ManagerDAO.loadManagers("");
		ManagerDAO managers = (ManagerDAO) ctx.getAttribute("managerDAO");
		if(managers == null) {
			String contextPath = ctx.getRealPath("");
			managers = new ManagerDAO(contextPath);
			ctx.setAttribute("managerDAO", managers);
		}
		if (managers.getManagerByUsername(newManager.getUsername()) != null) {
			return Response.status(Response.Status.BAD_REQUEST)
					.entity("We already have manager with the same username. Please try another one").build();
		}
		managers.addNewManager(newManager);
		
		return Response.status(Response.Status.ACCEPTED).entity("http://localhost:8080/VebProjekat/addNewRest.html").build(); 																						// accepted
	}
	
	
	@PUT
	@Path("/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Manager updateProduct(Restaurant newRest, @PathParam("username") String username) {
		ManagerDAO dao = (ManagerDAO) ctx.getAttribute("managerDAO");
		Manager manager = dao.getManagerByUsername(username);
		dao.updateManagersRest(manager, newRest);
		return manager;
	}
	
	
	@GET
	@Path("/getRestaurantFromLoggedManager")
	@Produces(MediaType.APPLICATION_JSON)
	public Restaurant getRestaurant(@Context HttpServletRequest request){
		User user = (User) request.getSession().getAttribute("loggedInUser");
		Role role = user.getRole();
		System.out.println(user.getRole());
		if(user == null || !role.equals(Role.MANAGER)) {
			return null;
		}
		
		String username = user.getUsername();	
		return ManagerDAO.getRestaurantForManager(username);
		
	}
	
	
	@GET
	@Path("/getAllAvailableManagers")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Manager> getAllAvailableManagers(@Context HttpServletRequest request){
		ManagerDAO.loadManagers("");
		List<Manager> availableManager = new ArrayList<Manager>();
		for(Manager m : ManagerDAO.findAll()) {
			if(m.getRestaurant() == null) {
				availableManager.add(m);
			}
		}
		return availableManager;
		
	}
	
}
