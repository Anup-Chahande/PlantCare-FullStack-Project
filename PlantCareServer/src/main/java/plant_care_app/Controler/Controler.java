package plant_care_app.Controler;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import plant_care_app.Entity.Plants;
import plant_care_app.Service.Services;


@RestController
public class Controler {

	@Autowired
	Services s;

	@GetMapping("/plants")
	public List<Plants> getallPlantscontroler() {

		return s.getallPlantssserviece();

	}

	@GetMapping("/plants/{pid}")
	public ArrayList<Plants> getplantbyid(@PathVariable int pid) {
		return s.getplantbyid(pid);

	};

	@PostMapping("/plants")

	public void Addplants(@RequestBody Plants plantdata) {

		s.Addplants(plantdata);

	}
	
	@PutMapping("/plants")
	public void Updateplants(@RequestBody Plants plantupdatedata) {
		
		
		s.Updateplants(plantupdatedata);
	}
	
	@DeleteMapping("/plants/{id}")
	public void deleteplants(@PathVariable int id) {
		
		s.deleteplants(id);
		
		
	
		
	}
	
	

}
