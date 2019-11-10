package softuni.fitbook.domain.entities;

public enum ActivityLevel {
    LITTLE(1.200),
    LIGHT(1.375),
    MODERATE(1.550),
    HEAVY(1.725),
    VERY_HEAVY(1.900);

    private Double activityLevelIndex;

    ActivityLevel(Double activityLevelIndex) {
        this.activityLevelIndex = activityLevelIndex;
    }

    public Double getActivityLevelIndex() {
        return activityLevelIndex;
    }
}
