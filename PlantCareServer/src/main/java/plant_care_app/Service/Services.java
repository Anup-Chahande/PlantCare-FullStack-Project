package plant_care_app.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plant_care_app.Dao.Dao;
import plant_care_app.Entity.Plants;


@Service
public class Services {

	@Autowired
	Dao d;

	public List<Plants> getallPlantssserviece() {

		return d.getallPlantsdao();
	}

	public void Addplants(Plants plantdata) {
		d.Addplants(plantdata);
	}

	public ArrayList<Plants> getplantbyid(int pid) {
		return d.getplantbyid(pid);
	}

	public void Updateplants(Plants plantupdatedata) {

		d.Updateplants(plantupdatedata);
	}

	public void deleteplants(int id) {

		d.deleteplants(id);
		
		
	}

}
