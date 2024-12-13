package plant_care_app.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Plants {
	@Id
	int Plant_id;
	String Plant_Name;
	int Plant_Age;
	String Requirement;

	public Plants() {
		super();
	}

	public Plants(int plant_id, String plant_Name, int plant_Age, String requirement) {
		super();
		Plant_id = plant_id;
		Plant_Name = plant_Name;
		Plant_Age = plant_Age;
		Requirement = requirement;
	}

	@Override
	public String toString() {
		return "Plants [Plant_id=" + Plant_id + ", Plant_Name=" + Plant_Name + ", Plant_Age=" + Plant_Age
				+ ", Requirement=" + Requirement + "]";
	}

	public int getPlant_id() {
		return Plant_id;
	}

	public void setPlant_id(int plant_id) {
		Plant_id = plant_id;
	}

	public String getPlant_Name() {
		return Plant_Name;
	}

	public void setPlant_Name(String plant_Name) {
		Plant_Name = plant_Name;
	}

	public int getPlant_Age() {
		return Plant_Age;
	}

	public void setPlant_Age(int plant_Age) {
		Plant_Age = plant_Age;
	}

	public String getRequirement() {
		return Requirement;
	}

	public void setRequirement(String requirement) {
		Requirement = requirement;
	}
	

}
