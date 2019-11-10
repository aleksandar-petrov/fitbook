package softuni.fitbook.domain.entities;

public enum WeightChangeRate {

    NONE(0.000),
    SLOW(0.250),
    MODERATE(0.500),
    RAPID(1.000);

    private Double rateInKg;

    WeightChangeRate(Double rateInKg) {
        this.rateInKg = rateInKg;
    }

    public Double getRateInKg() {
        return rateInKg;
    }
}
