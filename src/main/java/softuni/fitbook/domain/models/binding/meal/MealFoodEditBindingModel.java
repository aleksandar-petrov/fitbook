package softuni.fitbook.domain.models.binding.meal;

public class MealFoodEditBindingModel {

    private String id;
    private Integer serving;

    public MealFoodEditBindingModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getServing() {
        return serving;
    }

    public void setServing(Integer serving) {
        this.serving = serving;
    }
}
