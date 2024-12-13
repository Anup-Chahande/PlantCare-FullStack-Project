package plant_care_app.Dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import plant_care_app.Entity.Plants;


@Repository

public class Dao {
	@Autowired
	SessionFactory sf;

	public List<Plants> getallPlantsdao() {

		Session ss = sf.openSession();
		Criteria c = ss.createCriteria(Plants.class);
		List<Plants> ls = c.list();

		return ls;

	}

	public void Addplants(Plants plantdata) {

		Session ss = sf.openSession();
		ss.save(plantdata);
		Transaction t = ss.beginTransaction();
		t.commit();

	}

	public ArrayList<Plants> getplantbyid(int pid) {

		Session ss = sf.openSession();
		ArrayList<Plants> plant = new ArrayList();
		Criteria c = ss.createCriteria(Plants.class);
		List<Plants> ls = c.list();
		for (Plants plants : ls) {
			if (plants.getPlant_id() == pid) {
				plant.add(plants);

			}
		}

		return plant;
	}

	public void Updateplants(Plants plantupdatedata) {

		Session ss = sf.openSession();
		ss.update(plantupdatedata);
		Transaction t = ss.beginTransaction();
		t.commit();
	}

	public void deleteplants(int id) {

		Session ss = sf.openSession();
		Criteria c = ss.createCriteria(Plants.class);
		List<Plants> ls = c.list();
		for (Plants plants : ls) {

			if (plants.getPlant_id() == id) {
				Plants p = new Plants(id,plants.getPlant_Name(),plants.getPlant_Age(),plants.getRequirement());
				p= (Plants) ss.merge(p);
				
					ss.delete(p);
					Transaction t = ss.beginTransaction();
					t.commit();

			}

		}
        

	}
}
